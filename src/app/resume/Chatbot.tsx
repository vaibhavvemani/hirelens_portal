import { Drive } from "@/types/drives"
import { Resume } from "@/types/resume"
import { TypingAnimation } from "@/components/magicui/typing-animation"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ChatbotProps{
    resume: Resume
    drive: Drive
}

const response = 
{
    "response": [
      {
        "type": "greeting",
        "message": "👋🏽 Welcome back! Here's what I found after analyzing your resume and the job description."
      },
      {
        "type": "summary",
        "message": "You're applying for a Software Engineer role. This job emphasizes skills in React, TypeScript, and system design."
      },
      {
        "type": "matchScore",
        "label": "Resume Match Score",
        "score": "72%",
        "color": "yellow"
      },
      {
        "type": "tip",
        "title": "Missing Keywords",
        "message": "Consider adding the following keywords to your resume: 'TypeScript', 'Microservices', 'API integration'."
      },
      {
        "type": "tip",
        "title": "Project Alignment",
        "message": "Highlight projects where you used React + REST APIs. This aligns with the job’s core requirements."
      },
      {
        "type": "tip",
        "title": "Soft Skills",
        "message": "Mention leadership or collaboration experiences. This role mentions teamwork as a key aspect."
      },
      {
        "type": "closing",
        "message": "Let me know if you'd like tailored bullet points to add to your resume! 💡"
      }
    ]
  }
  



const Chatbot = ({resume, drive}: ChatbotProps) => {
  return (
    <div className="flex flex-col h-full justify-between">
        <TypingAnimation className="text-xs font-medium" delay={2000}>👋🏽  Welcome! I'm here to assist you with your resume!!</TypingAnimation>
        <div className="flex gap-2 items-center max-h-[35px] justify-between">
        <Textarea placeholder="Enter a prompt.." className="resize-none overflow-y-scroll hide-scroller min-h-[35px] max-h-[35px] py-1 px-2"/>
        <Button className="h-full text-base">Send <Send /></Button>
        </div>
    </div>
  )
}

export default Chatbot