"use client";

import React from "react";
import Editor, { OnChange, OnMount } from "@monaco-editor/react";
import { useState } from "react";

type MonacoEditorProps = {
  language?: string;
  theme?: "vs-dark" | "light" | "vs-light" | string;
  value?: string;
  defaultValue?: string;
  onChange?: OnChange;
  onMount?: OnMount;
  options?: any;
};

const Monaco = ({

  language = "javascript",
  theme = "vs-dark",
  value,
  defaultValue = "// Start coding here...",
  onChange,
  onMount,
  options = {
    fontSize: 14,
    minimap: { enabled: false },
    scrollBeyondLastLine: false,
    wordWrap: "on",
    automaticLayout: true,
    scrollbar: {
      vertical: "auto",
      horizontal: "auto",
      useShadows: false,
    },
    // Remove Monaco's default padding to fit rounded corners
    padding: { top: 12, bottom: 12 },
    roundedSelection: true,
  },
}: MonacoEditorProps) => {
  return (
    <div className="flex-1 h-full w-full overflow-hidden rounded-2xl z-10">
      <Editor
        height="100%"
        width="100%"
        defaultLanguage={language}
        theme={theme}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        onMount={onMount}
        options={options}
      />
    </div>
  );
};

export default Monaco;
