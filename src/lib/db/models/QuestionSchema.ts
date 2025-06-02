import mongoose from "mongoose";
const { Schema, model } = mongoose; 
import { IQuestion, QuestionDocument } from "@/lib/db/types/QuestionTypes";


const questionSchema = new Schema<IQuestion>({
    question: {
        type: String,
        required: true,
    },
    questionType: {
        type: String,
        enum: ["mcq", "coding", "true_false", "fill_in_the_blank"],
        required: true,
    },
    topic: { // Profit and Loss, Time and Work, etc
        type: String,
        required: true,
    },
    category: { // Quantitative Aptitude, Logical Reasoning, etc
        type: String,
        required: true,
    },
    difficulty: { 
        type: String,
        enum: ["easy", "medium", "hard"],
        required: true,
    },
    marks: {
        type: Number,
        required: true,
    },

    // For MCQ questions
    mcqData: {
        optionType: {
            type: String,
            enum: ["multiple", "single"],
            required: function(this: IQuestion) { return this.questionType === "mcq"; },
        },
        options: [{
            id: String,
            text: String,
            isCorrect: Boolean,
        }],
        validate: {
            validator: function(this: IQuestion) {
                return this.questionType != "mcq" || (this.mcqData?.options && this.mcqData?.options.length >= 2);
            },
            message: "MCQ questions must have at least 2 options."
        }
    },

    // For Coding questions
    codingData: {
        language: {
            type: String,
            enum: ["python", "javascript", "java", "c"],
            required: function(this: IQuestion) { return this.questionType === "coding"; },
        },
        starterCode: String,
        solution: String,
        testCases: [{
            input: String,
            expectedOutput: String,
            isHidden: {
                type: Boolean,
                default: false,
            }
        }],
        timeLimit: {
            type: Number,
            default: 30,
        },
        memoryLimit: {
            type: Number,
            default: 128,
        }
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    createdBy: String,
    tags: [String],
    isActive: {
        type: Boolean,
        default: true,
    }
}, { collection: "questions"});

// Middleware to update updatedAt field before saving the document
questionSchema.pre("save", function(this: QuestionDocument, next) {
    this.updatedAt = new Date();
    next();
})

questionSchema.virtual("correctAnswer").get(function(this: QuestionDocument): string[] | null {
    if(this.questionType === "mcq" && this.mcqData?.options) {
        return this.mcqData?.options.filter(option => option.isCorrect).map(option => option.id);
    }
    return null;
})

export default model("Question", questionSchema);