import { BellRing } from "lucide-react";
import { Importance } from "@/types/discussions";
import { sampleCirculars } from "./SampleCirculars";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const Circulars = () => {
    const getBorderColor = (importance: Importance) => {
        switch (importance) {
          case "high":
            return "border-red-500 bg-red-50";
          case "medium":
            return "border-yellow-500 bg-yellow-50";
          case "low":
            return "border-green-500 bg-green-50";
          case "none":
          default:
            return "border-gray-300 bg-gray-50";
        }
      };

      const getHeaderColor = (importance: Importance) => {
        switch (importance) {
          case "high":
            return "text-red-700";
          case "medium":
            return "text-yellow-700";
          case "low":
            return "text-green-700";
          case "none":
          default:
            return "text-gray-700";
        }
      };
    
      const getBadgeColor = (importance: Importance) => {
        switch (importance) {
          case "high":
            return "bg-red-200 text-red-800";
          case "medium":
            return "bg-yellow-100 text-yellow-800";
          case "low":
            return "bg-green-100 text-green-800";
          case "none":
          default:
            return "bg-gray-100 text-gray-800";
        }
      };
    
      return (
        <div className="flex flex-col gap-4 overflow-hidden">
        <div className="flex gap-2 items-center">
          <BellRing size={20} strokeWidth={2.5} className="translate-y-0.5" />
          <h3 className="text-xl font-medium">Circulars</h3>
        </div>
        <div className="flex gap-4 overflow-x-auto hide-scroller">
          {sampleCirculars.map((Circular) => (
            <Card
              key={Circular.id}
              className={`px-4 py-2 gap-2 min-w-[350px] w-fit ${getBorderColor(Circular.importance)}`}
            >
              <CardTitle className="whitespace-nowrap text-ellipsis py-1">
                {Circular.title}
              </CardTitle>
              <CardDescription className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Image
                    className="rounded-full"
                    src={"/default.png"}
                    alt={`Avatar of ${Circular.teacher.name}`}
                    width={30}
                    height={30}
                  />
                  <p className={`whitespace-nowrap font-bold ${getHeaderColor(Circular.importance)}`}>{Circular.teacher.name}</p>
                </div>
                <Badge className={`h-fit ${getBadgeColor(Circular.importance)}`}>{Circular.teacher.role}</Badge>
              </CardDescription>
              <CardContent className="p-0 flex flex-col gap-2">
                <p className={`text-sm font-medium text-accent-foreground w-fit px-3 py-1 rounded-md  ${getBadgeColor(Circular.importance)}`}>
                  {new Date(Circular.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "2-digit",
                  })}
                </p>
                <p className="text-base">{Circular.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  };
  
  export default Circulars;
