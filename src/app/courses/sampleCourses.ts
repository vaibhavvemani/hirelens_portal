import { Course } from "@/types/courses";

// Sample data for 6 AI/ML courses
export const SampleCourses: Course[] = [
    {
        id: 1,
        name: "Introduction to Machine Learning",
        faculty: "Dr. Smith",
        modules: [
            {
                name: "Module 1: Fundamentals",
                Files: [
                    {
                        id: 1,
                        name: "Lecture 1 Slides",
                        description: "Introduction to ML concepts",
                        dateUploaded: new Date("2025-01-10"),
                        file: "module notes",
                        fileURL: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                    },
                    {
                        id: 2,
                        name: "Assignment 1",
                        description: "Basic ML problems",
                        dateUploaded: new Date("2025-01-15"),
                        file: "assignment",
                        fileURL:  "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                    }
                ],
                lastUpdated: new Date("2025-01-15"),
                progress: 100
            },
            {
                name: "Module 2: Supervised Learning",
                Files: [
                    {
                        id: 3,
                        name: "Lecture 2 Notes",
                        description: "Linear regression and classification",
                        dateUploaded: new Date("2025-01-20"),
                        file: "module notes",
                        fileURL: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                    },
                    {
                        id: 4,
                        name: "Lab 1",
                        description: "Implementing linear regression",
                        dateUploaded: new Date("2025-01-25"),
                        file: "Lab programs",
                        fileURL: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                    }
                ],
                lastUpdated: new Date("2025-01-25"),
                progress: 100
            },
            {
                name: "Module 3: Neural Networks",
                Files: [
                    {
                        id: 5,
                        name: "Lecture 3 Slides",
                        description: "Introduction to neural networks",
                        dateUploaded: new Date("2025-02-01"),
                        file: "module notes",
                        fileURL: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                    }
                ],
                lastUpdated: new Date("2025-02-01"),
                progress: 30
            },
            {
                name: "Module 4: Unsupervised Learning",
                Files: [],
                lastUpdated: new Date("2025-02-10"),
                progress: 0
            },
            {
                name: "Module 5: Final Project",
                Files: [
                    {
                        id: 6,
                        name: "Project Guidelines",
                        description: "Final project requirements",
                        dateUploaded: new Date("2025-02-15"),
                        file: "other",
                        fileURL: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                    }
                ],
                lastUpdated: new Date("2025-02-15"),
                progress: 0
            }
        ]
    },
    {
        id: 2,
        name: "Advanced Deep Learning",
        faculty: "Prof. Johnson",
        modules: [
            {
                name: "Module 1: CNN Architectures",
                Files: [
                    {
                        id: 7,
                        name: "CNN Lecture",
                        description: "Advanced CNN architectures",
                        dateUploaded: new Date("2025-01-05"),
                        file: "module notes",
                        fileURL: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                    }
                ],
                lastUpdated: new Date("2025-01-05"),
                progress: 100
            },
            {
                name: "Module 2: RNNs and LSTMs",
                Files: [
                    {
                        id: 8,
                        name: "RNN Lecture",
                        description: "Sequence modeling with RNNs",
                        dateUploaded: new Date("2025-01-12"),
                        file: "module notes",
                        fileURL: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                    }
                ],
                lastUpdated: new Date("2025-01-12"),
                progress: 80
            },
            {
                name: "Module 3: Transformers",
                Files: [
                    {
                        id: 9,
                        name: "Transformer Lab",
                        description: "Implementing attention mechanisms",
                        dateUploaded: new Date("2025-01-19"),
                        file: "Lab programs",
                        fileURL: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                    }
                ],
                lastUpdated: new Date("2025-01-19"),
                progress: 0
            },
            {
                name: "Module 4: GANs",
                Files: [],
                lastUpdated: new Date("2025-01-26"),
                progress: 0
            },
            {
                name: "Module 5: Reinforcement Learning",
                Files: [],
                lastUpdated: new Date("2025-02-02"),
                progress: 0
            }
        ]
    },
    {
        id: 3,
        name: "Natural Language Processing",
        faculty: "Dr. Lee",
        modules: [
            {
                name: "Module 1: Text Processing",
                Files: [
                    {
                        id: 10,
                        name: "NLP Basics",
                        description: "Tokenization and text cleaning",
                        dateUploaded: new Date("2025-02-01"),
                        file: "module notes",
                        fileURL: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                    }
                ],
                lastUpdated: new Date("2025-02-01"),
                progress: 100
            },
            {
                name: "Module 2: Word Embeddings",
                Files: [
                    {
                        id: 11,
                        name: "Word2Vec Lab",
                        description: "Implementing word embeddings",
                        dateUploaded: new Date("2025-02-08"),
                        file: "Lab programs",
                        fileURL: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                    }
                ],
                lastUpdated: new Date("2025-02-08"),
                progress: 100
            },
            {
                name: "Module 3: Sequence Models",
                Files: [],
                lastUpdated: new Date("2025-02-15"),
                progress: 20
            },
            {
                name: "Module 4: Transformer Models",
                Files: [],
                lastUpdated: new Date("2025-02-22"),
                progress: 0
            },
            {
                name: "Module 5: NLP Applications",
                Files: [],
                lastUpdated: new Date("2025-03-01"),
                progress: 0
            }
        ]
    },
    {
        id: 4,
        name: "Computer Vision",
        faculty: "Prof. Chen",
        modules: [
            {
                name: "Module 1: Image Processing",
                Files: [
                    {
                        id: 12,
                        name: "CV Basics",
                        description: "Image processing techniques",
                        dateUploaded: new Date("2025-03-01"),
                        file: "module notes",
                        fileURL: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                    }
                ],
                lastUpdated: new Date("2025-03-01"),
                progress: 100
            },
            {
                name: "Module 2: Feature Detection",
                Files: [
                    {
                        id: 13,
                        name: "Feature Lab",
                        description: "SIFT and SURF implementation",
                        dateUploaded: new Date("2025-03-08"),
                        file: "Lab programs",
                        fileURL: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                    }
                ],
                lastUpdated: new Date("2025-03-08"),
                progress: 100
            },
            {
                name: "Module 3: Object Detection",
                Files: [],
                lastUpdated: new Date("2025-03-15"),
                progress: 25
            },
            {
                name: "Module 4: Image Segmentation",
                Files: [],
                lastUpdated: new Date("2025-03-22"),
                progress: 0
            },
            {
                name: "Module 5: Video Analysis",
                Files: [],
                lastUpdated: new Date("2025-03-29"),
                progress: 0
            }
        ]
    },
    {
        id: 5,
        name: "Reinforcement Learning",
        faculty: "Dr. Williams",
        modules: [
            {
                name: "Module 1: RL Fundamentals",
                Files: [
                    {
                        id: 14,
                        name: "RL Introduction",
                        description: "Markov Decision Processes",
                        dateUploaded: new Date("2025-04-01"),
                        file: "module notes",
                        fileURL: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                    }
                ],
                lastUpdated: new Date("2025-04-01"),
                progress: 100
            },
            {
                name: "Module 2: Dynamic Programming",
                Files: [
                    {
                        id: 15,
                        name: "DP Assignment",
                        description: "Value iteration problems",
                        dateUploaded: new Date("2025-04-08"),
                        file: "assignment",
                        fileURL: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                    }
                ],
                lastUpdated: new Date("2025-04-08"),
                progress: 75
            },
            {
                name: "Module 3: Monte Carlo Methods",
                Files: [],
                lastUpdated: new Date("2025-04-15"),
                progress: 0
            },
            {
                name: "Module 4: Temporal Difference Learning",
                Files: [],
                lastUpdated: new Date("2025-04-22"),
                progress: 0
            },
            {
                name: "Module 5: Deep RL",
                Files: [],
                lastUpdated: new Date("2025-04-29"),
                progress: 0
            }
        ]
    },
    {
        id: 6,
        name: "AI Ethics and Society",
        faculty: "Dr. Garcia",
        modules: [
            {
                name: "Module 1: Ethical Frameworks",
                Files: [
                    {
                        id: 16,
                        name: "Ethics Reading",
                        description: "Introduction to AI ethics",
                        dateUploaded: new Date("2025-05-01"),
                        file: "module notes",
                        fileURL: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                    }
                ],
                lastUpdated: new Date("2025-05-01"),
                progress: 100
            },
            {
                name: "Module 2: Bias in AI",
                Files: [
                    {
                        id: 17,
                        name: "Case Studies",
                        description: "Examples of bias in ML systems",
                        dateUploaded: new Date("2025-05-08"),
                        file: "module notes",
                        fileURL: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                    }
                ],
                lastUpdated: new Date("2025-05-08"),
                progress: 100
            },
            {
                name: "Module 3: Privacy Concerns",
                Files: [],
                lastUpdated: new Date("2025-05-15"),
                progress: 100
            },
            {
                name: "Module 4: Regulation",
                Files: [],
                lastUpdated: new Date("2025-05-22"),
                progress: 100
            },
            {
                name: "Module 5: Future of AI",
                Files: [],
                lastUpdated: new Date("2025-05-29"),
                progress: 0
            }
        ]
    }
];