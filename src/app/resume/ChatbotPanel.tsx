import { Resume } from "@/types/resume";
import { Drive } from "@/types/drives";

interface ChatbotPanelProps {
    resume: Resume;
    drive: Drive;
  }
  
  const ChatbotPanel = ({ resume, drive }: ChatbotPanelProps) => {
    return (
      <div className="space-y-2 text-sm">
        <p>👋 Hi! I’m here to help you improve your resume.</p>
        <p>Based on the job description, I suggest:</p>
        <ul className="list-disc pl-4">
          <li>Add more keywords from the job description.</li>
          <li>Quantify your achievements.</li>
          <li>Emphasize technical skills relevant to the role.</li>
        </ul>
        {/* Add chat UI here if needed */}
      </div>
    );
  };
  
  export default ChatbotPanel;
  