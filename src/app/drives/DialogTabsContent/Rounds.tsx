"use client";

import { Drive } from "@/types/drives";
import { Timeline } from "primereact/timeline";
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import { Check, X } from "lucide-react"; // You can swap with any icon lib

interface RoundsProps {
  drive: Drive;
}

const Rounds = ({ drive }: RoundsProps) => {
  const studentID = "1NH22AI001"; // This can be dynamic later

  const formatDate = (date: Date | string) =>
    new Date(date).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

  const rounds = drive.rounds;

  const eligibleRounds = rounds
    .map((round, index) => {
      const isEligible = round.eligibleStudents?.includes(studentID);
      const nextRound = rounds[index + 1];
      const selectedForNext = nextRound?.eligibleStudents?.includes(studentID);
      return {
        roundName: round.roundName,
        date: round.date,
        selectedForNext: selectedForNext ?? null,
        isEligible,
      };
    })
    .filter((round) => round.isEligible);

  const contentTemplate = (item: { roundName: string; date: string }) => (
    <div className="p-3">
      <h3 className="font-semibold text-base text-primary">{item.roundName}</h3>
      <p className="text-sm text-neutral-700 dark:text-neutral-300 mt-1">
        You were eligible for this round.
      </p>
      <p className="text-xs text-muted-foreground mt-1">
        Scheduled on {formatDate(item.date)}
      </p>
    </div>
  );

  const marker = (item: { selectedForNext: boolean | null }) => {
    const selected = item.selectedForNext ?? true;
    const bg = selected ? "bg-green-500" : "bg-red-500";
    const Icon = selected ? Check : X;

    return (
      <span
        className={`flex items-center justify-center w-6 h-6 rounded-full text-white shadow-md ${bg}`}
      >
        <Icon size={14} />
      </span>
    );
  };

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-xl font-bold">Rounds</h1>
      <div className="mt-4">
        <Timeline
          value={eligibleRounds}
          align="alternate"
          content={contentTemplate}
          marker={marker}
          className="custom-timeline"
        />
      </div>
    </div>
  );
};

export default Rounds;
