import { MessageCircle } from "lucide-react";
import { sampleDiscussion, assignments } from "./sampleDiscussions";
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const Discussions = () => {
    function cardStyle(role: string): string{
        if(role === "teacher"){
            return "bg-purple-200 border-purple-600"
        }
        else{
            return "bg-blue-200 border-blue-600"
        }
    }
    function badgeStyle(role: string): string{
        if(role === "teacher"){
            return "bg-purple-600 text-purple-100"
        }
        else{
            return "bg-blue-600 text-blue-100"
        }
    }

  return (
    <div className="flex flex-col">
      <div className="flex gap-2 items-center">
        <MessageCircle size={20} strokeWidth={2.5} />
        <h3 className="text-xl font-medium">Discussions</h3>
      </div>
      <div className="flex flex-col border rounded-2xl p-4 py-0 mt-2 mb-5">
        {Object.entries(assignments).map(([key, value], index) => (
          <Accordion key={key} type="single" collapsible className="w-full">
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger>{value}</AccordionTrigger>
              <AccordionContent>
                {sampleDiscussion
                  .filter(
                    (discussion) => discussion.assignmentID === Number(key)
                  )
                  .map((discussion) => (
                    <div
                      key={discussion.assignmentID}
                      className="p-2 border-b text-sm flex flex-col gap-2"
                    >
                      {discussion.threads.map((text) => (
                        <Card
                          key={text.message}
                          className={`w-full flex flex-col px-4 py-3 gap-3 ${cardStyle(text.role)}`}
                        >
                          <CardHeader className="flex justify-between p-0 items-center">
                            <div className="flex items-center gap-3">
                              <Image
                                src={"/default.png"} // use drive.logo here
                                alt={text.name}
                                width={35}
                                height={35}
                                className="object-contain rounded-full"
                              />
                              <p className="text-base">{text.name}</p>
                              <p className={`text-xs font-medium bg-accent px-2 py-1 rounded-md ${badgeStyle(text.role)}`}>
                                {text.timestamp.toLocaleDateString("en-US", {
                                  year: "numeric",
                                  month: "long",
                                  day: "2-digit",
                                })}
                              </p>
                            </div>
                            <Badge className={`${badgeStyle(text.role)}`}>{text.role}</Badge>
                          </CardHeader>
                          <CardContent className="p-0">
                            <p>{text.message}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default Discussions;
