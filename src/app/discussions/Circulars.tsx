import { BellRing } from "lucide-react";
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
            className="px-4 py-2 gap-2 min-w-[350px] w-fit"
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
                <p className="whitespace-nowrap">{Circular.teacher.name}</p>
              </div>
              <Badge className="h-fit">{Circular.teacher.role}</Badge>
            </CardDescription>
            <CardContent className="p-0 flex flex-col gap-2">
              <p className="text-sm font-medium text-accent-foreground bg-muted w-fit px-3 py-1 rounded-md">
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
