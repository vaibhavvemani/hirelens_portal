"use client";

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import FilteredMail from "./FilteredMail";
import { Filter } from "@/types/mail";
import DisplayMail from "./DisplayMail";
import { currentMailStore } from "./currentMailStore";

const page = () => {
  const [selectedView, setSelectedView] = useState<Filter>("Inbox");
  const selectedMail = currentMailStore((state) => state.selectedMail);

  return (
    <div className="w-full flex justify-center mt-4">
      <div className="flex flex-col flex-1 gap-3 max-w-[1300px] px-4 pb-3 h-[95vh]">
        <div className="flex flex-col">
          <h1 className="text-2xl font-extrabold">Mail</h1>
          <p className="font-medium text-sm text-muted-foreground">
            Check Your Email Portal for all official communication
          </p>
        </div>
        {/* main container */}
        <div className="flex border-2 h-full rounded-md overflow-hidden">
        <Sidebar onSelect={setSelectedView} />
          <div className="flex-2 border-r">
          <FilteredMail filter={selectedView} />
          </div>
          <div className="flex-4">
            <DisplayMail mail={selectedMail}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
