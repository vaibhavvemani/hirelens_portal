import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { mail } from "@/types/mail";
import { MessageSquareDot } from "lucide-react";
import Image from "next/image";

interface DisplayMailProps {
  mail: mail | null;
}

const DisplayMail = ({ mail }: DisplayMailProps) => {
  if (mail === null)
    return (
      <div className="w-full h-full flex flex-col items-center justify-center">
        <p className="text-2xl text-muted-foreground font-semibold">
          Select an email!
        </p>
      </div>
    );
  return (
    <div className="flex flex-col py-2 mx-4">
        <p className="text-2xl font-bold">{mail.subject}</p>
      <div className="flex justify-between mt-2 items-center">
        <div className="flex gap-3 items-center">
          <Image
            src={
              mail.from.image && mail.from.image.trim() !== ""
                ? mail.from.image
                : "/default.png"
            }
            width={40}
            height={40}
            className="rounded-full"
            alt={mail.from.name}
          />
          <p className="font-semibold text-xl">{mail.from.name}</p>
          <Badge className="py-0.5">{mail.from.role}</Badge>
        </div>
        <Badge className="py-0 h-fit text-base bg-accent text-accent-foreground">
          {mail.date.toDateString()}
        </Badge>
      </div>
      <Separator className="mt-3" />
      <p className="text-base font-medium mt-2">{mail.message}</p>
      {mail.attachments ? (
        <div className="flex flex-col gap-2">
          <Separator className="mt-3" />
          <h2 className="text-lg font-bold">Attachments</h2>
          <div className="flex gap-2">
            {mail.attachments?.map((attachment, index) => (
              <Dialog key={index}>
                <DialogTrigger>
                  <Card
                    key={index}
                    className="p-2 rounded-md gap-1 cursor-pointer hover:bg-accent ease-in-out duration-350"
                  >
                    <CardTitle className="text-left">
                      {attachment.name}
                    </CardTitle>
                    <CardDescription>{attachment.desc}</CardDescription>
                  </Card>
                </DialogTrigger>
                <DialogContent>
                  <DialogTitle>{attachment.name}</DialogTitle>
                  <DialogDescription>{attachment.desc}</DialogDescription>
                  <iframe
                    src={`https://docs.google.com/gview?url=${attachment.fileUrl}&embedded=true`}
                    style={{ width: "100%", height: "600px" }}
                    frameBorder="0"
                  ></iframe>
                </DialogContent>
              </Dialog>
            ))}
          </div>
          <Button className="mt-5 w-fit self-end p-0 bg-blue-700 text-blue-50 hover:bg-blue-500 ease-in-out duration-450"><MessageSquareDot />Mark as unread</Button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
export default DisplayMail;
