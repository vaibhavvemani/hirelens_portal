import { Badge } from "@/components/ui/badge";
import { mail } from "@/types/mail";
import { Archive, Star } from "lucide-react";
import Image from "next/image";
import { currentMailStore } from "./currentMailStore";

interface MailCardProps {
  mail: mail;
}

function trimMessage(message: string) {
  return message.length > 25 ? message.substring(0, 70) + "..." : message;
}

const MailCard = ({ mail }: MailCardProps) => {
  const studentID = 1001;
  const setSelectedMail = currentMailStore((state) => state.setSelectedMail);
  return (
    <div
      className={`flex flex-col px-3 py-2 hover:bg-accent hover:cursor-pointer ease-in-out transition-all duration-300 ${
        mail.to.find((r) => r.studentID === studentID)?.read
          ? "border-l-blue-600 border-l-2"
          : ""
      }`}
      onClick={() => setSelectedMail(mail)}
    >
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <Image
            src={
              mail.from.image && mail.from.image.trim() !== ""
                ? mail.from.image
                : "/default.png"
            }
            width={30}
            height={30}
            className="rounded-full"
            alt={mail.from.name}
          />
          <h1 className="font-semibold text-base">{mail.from.name}</h1>
        </div>
        <div className="flex gap-2 items-center">
          <Star
            size={15}
            className={`hover:stroke-blue-500 ease-in-out transition-all duration-300 ${
              mail.to.find((r) => r.studentID === studentID)?.starred
                ? "fill-blue-400 stroke-blue-700"
                : ""
            }`}
          />

          <Archive
            size={15}
            className={`hover:stroke-amber-500 ease-in-out transition-all duration-300 ${
              mail.to.find((r) => r.studentID === studentID)?.archived
                ? "fill-amber-400 stroke-amber-700"
                : ""
            }`}
            />
        </div>
      </div>
      <div className="flex flex-col ml-10">
        <h1 className="font-medium text-sm">{mail.subject}</h1>
        <p className="text-xs text-muted-foreground">
          {trimMessage(mail.message)}
        </p>
        <div className="flex justify-between">
          <Badge className="mt-2 text-xs py-0">{mail.category}</Badge>
          <Badge className="mt-2 text-xs py-0 bg-accent text-accent-foreground">
            {mail.date.toDateString()}
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default MailCard;
