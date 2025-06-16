import { Drive } from "@/types/drives";
import { Timeline } from "@/components/ui/timeline";

interface RoundsProps {
  drive: Drive;
}

const Rounds = ({ drive }: RoundsProps) => {
  const studentID = "1NH22AI001 "; // This can be made dynamic later

  const formatDate = (date: Date) =>
    new Date(date).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

  const data = drive.rounds
    .filter((round) => round.eligibleStudents?.includes(studentID))
    .map((round) => ({
      title: round.roundName,
      content: (
        <div>
          <p className="text-sm text-neutral-700 dark:text-neutral-300">
            You were eligible for this round.
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Scheduled on {formatDate(round.date)}
          </p>
        </div>
      ),
    }));

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-xl font-bold">Rounds</h1>
      <div className="mt-4">
        <Timeline data={data} />
      </div>
    </div>
  );
};

export default Rounds;
