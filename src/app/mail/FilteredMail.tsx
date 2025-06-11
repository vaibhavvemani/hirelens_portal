import { Separator } from "@/components/ui/separator";
import { Filter } from "@/types/mail";
import sampleMails from "./sampleMails";
import MailCard from "./MailCard";
import { currentMailStore } from "./currentMailStore";

interface FilteredMailProps {
  filter: Filter;
}

function renderEmails(filter: Filter) {
  return (
    <div className="flex flex-col overflow-y-scroll hide-scroller gap-2 mt-2">
        {sampleMails ? (
            sampleMails.map((mail, index) => {
                if (filter === "Inbox") {
                    return <MailCard key={index} mail={mail} />;
                }
                return null;
            })
        ) : (
            <div><p>no mail here</p></div>
        )}
    </div>
  );
}

const FilteredMail = ({ filter }: FilteredMailProps) => {
  return (
    <div className="w-full h-full flex flex-col gap-0 py-2 overflow-hidden">
      <h1 className="text-2xl font-bold ml-3">{filter}</h1>
      <Separator className="mt-2" />
      {renderEmails(filter)}
    </div>
  );
};

export default FilteredMail;
