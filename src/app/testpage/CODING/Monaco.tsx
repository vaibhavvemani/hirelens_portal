"use client";

import Editor, { OnChange, OnMount } from "@monaco-editor/react";

type MonacoEditorProps = {
  language: string;
  theme: "vs-dark" | "light"
  value?: string;
  defaultValue: string;
  onCodeChange: (value: string) => void
  onChange?: OnChange;
  onMount?: OnMount;
  options?: any;
};

const Monaco = ({
  language,
  theme,
  value,
  defaultValue,
  onCodeChange,
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
    padding: { top: 20, bottom: 12 },
    roundedSelection: true,
  },
}: MonacoEditorProps) => {
  return (
    
      <div className="h-full w-full overflow-hidden rounded-2xl">
        <Editor
          height="100%"
          width="100%"
          language={language}
          theme={theme}
          value={value}
          defaultValue={defaultValue}
          onChange={(value) => onCodeChange(value?? '')}
          onMount={onMount}
          options={options}
        />
      </div>
  );
};

export default Monaco;
