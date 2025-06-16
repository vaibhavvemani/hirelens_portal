import { Drive } from "@/types/drives";


interface DescriptionProps {
    drive: Drive
}


const Description = ({drive}: DescriptionProps) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-bold">Drive description</h1>
        <p className="text-sm font-semibold text-muted-foreground">
          {drive.jobdesc}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-bold">Job description</h1>
        <ul className="list-disc pl-5">
          {drive.completeJobDesc.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Description;
