import { Separator } from "@/components/ui/separator";
import { Filter } from "@/types/mail";
import sampleMails from "./sampleMails";
import MailCard from "./MailCard";
import { Category } from "@/types/mail";
import { currentMailStore } from "./currentMailStore";

interface FilteredMailProps {
  filter: Filter;
}

function renderEmails(filter: Filter) {
  const studentID = 1001;
  return (
<div className="flex flex-col overflow-y-scroll hide-scroller gap-1 mt-2">
  {sampleMails ? (
    sampleMails
      .filter((mail) =>
        mail.to.some((receiver) => receiver.studentID === studentID)
      )
      .filter((mail) => {
        const receiver = mail.to.find((r) => r.studentID === studentID);
        if (!receiver) return false;

        // Direct filters (Inbox, Starred, Archived)
        if (filter === "Inbox") return true;
        if (filter === "Starred") return receiver.starred;
        if (filter === "Archived") return receiver.archived;

        // Category filters (mapped from filter string to category)
        const filterToCategoryMap: Record<string, Category> = {
          "Dept. of HRD": "HRD",
          "Professors": "Professor",
          "Announcements": "Announcements",
        };

        const category = filterToCategoryMap[filter];
        if (category) return mail.category === category;

        return true; // fallback if no specific filter applies
      })
      .sort((a, b) => b.date.getTime() - a.date.getTime()) // Sort by date descending
      .map((mail, index) => <MailCard key={index} mail={mail} />)
  ) : (
    <div>
      <p>no mail here</p>
    </div>
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
