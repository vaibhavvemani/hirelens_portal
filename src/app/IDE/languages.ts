import { ProgrammingLanguage } from "@/types/programmingLanguage";
  
  export const SUPPORTED_LANGUAGES: ProgrammingLanguage[] = [
    {
      id: 45,
      name: "Assembly (NASM 2.14.02)",
      monaco: "asm",
      extensions: [".asm", ".nasm"],
      judge0Category: "Assembly"
    },
    {
      id: 46,
      name: "Bash (5.0.0)",
      monaco: "shell",
      extensions: [".sh", ".bash"],
      judge0Category: "Shell"
    },
    {
      id: 47,
      name: "Basic (FBC 1.07.1)",
      monaco: "vb",
      extensions: [".bas"],
      judge0Category: "Basic"
    },
    {
      id: 75,
      name: "C (Clang 7.0.1)",
      monaco: "c",
      extensions: [".c"],
      judge0Category: "C"
    },
    {
      id: 54,
      name: "C++ (GCC 9.2.0)",
      monaco: "cpp",
      extensions: [".cpp", ".cc", ".cxx", ".hpp"],
      judge0Category: "C++"
    },
    {
      id: 86,
      name: "Clojure (1.10.1)",
      monaco: "clojure",
      extensions: [".clj"],
      judge0Category: "Clojure"
    },
    {
      id: 51,
      name: "C# (Mono 6.6.0.161)",
      monaco: "csharp",
      extensions: [".cs"],
      judge0Category: "C#"
    },
    {
      id: 77,
      name: "COBOL (GnuCOBOL 2.2)",
      monaco: "cobol",
      extensions: [".cob", ".cbl"],
      judge0Category: "COBOL"
    },
    {
      id: 55,
      name: "Common Lisp (SBCL 2.0.0)",
      monaco: "lisp",
      extensions: [".lisp", ".lsp", ".cl"],
      judge0Category: "Lisp"
    },
    {
      id: 56,
      name: "D (DMD 2.089.1)",
      monaco: "d",
      extensions: [".d"],
      judge0Category: "D"
    },
    {
      id: 57,
      name: "Elixir (1.9.4)",
      monaco: "elixir",
      extensions: [".ex", ".exs"],
      judge0Category: "Elixir"
    },
    {
      id: 58,
      name: "Erlang (OTP 22.2)",
      monaco: "erlang",
      extensions: [".erl", ".hrl"],
      judge0Category: "Erlang"
    },
    {
      id: 44,
      name: "Executable",
      monaco: "exe",
      extensions: [".exe"],
      judge0Category: "Executable"
    },
    {
      id: 87,
      name: "F# (.NET Core SDK 3.1.202)",
      monaco: "fsharp",
      extensions: [".fs"],
      judge0Category: "F#"
    },
    {
      id: 59,
      name: "Fortran (GFortran 9.2.0)",
      monaco: "fortran",
      extensions: [".f90", ".f95", ".f03"],
      judge0Category: "Fortran"
    },
    {
      id: 60,
      name: "Go (1.13.5)",
      monaco: "go",
      extensions: [".go"],
      judge0Category: "Go"
    },
    {
      id: 88,
      name: "Groovy (3.0.3)",
      monaco: "groovy",
      extensions: [".groovy", ".gy"],
      judge0Category: "Groovy"
    },
    {
      id: 61,
      name: "Haskell (GHC 8.8.1)",
      monaco: "haskell",
      extensions: [".hs"],
      judge0Category: "Haskell"
    },
    {
      id: 62,
      name: "Java (OpenJDK 13.0.1)",
      monaco: "java",
      extensions: [".java"],
      judge0Category: "Java"
    },
    {
      id: 63,
      name: "JavaScript (Node.js 12.14.0)",
      monaco: "javascript",
      extensions: [".js"],
      judge0Category: "JavaScript"
    },
    {
      id: 78,
      name: "Kotlin (1.3.70)",
      monaco: "kotlin",
      extensions: [".kt", ".kts"],
      judge0Category: "Kotlin"
    },
    {
      id: 64,
      name: "Lua (5.3.5)",
      monaco: "lua",
      extensions: [".lua"],
      judge0Category: "Lua"
    },
    {
      id: 89,
      name: "Objective-C (Clang 7.0.1)",
      monaco: "objective-c",
      extensions: [".m"],
      judge0Category: "Objective-C"
    },
    {
      id: 65,
      name: "OCaml (4.09.0)",
      monaco: "ocaml",
      extensions: [".ml", ".mli"],
      judge0Category: "OCaml"
    },
    {
      id: 66,
      name: "Octave (5.1.0)",
      monaco: "octave",
      extensions: [".m"],
      judge0Category: "Octave"
    },
    {
      id: 67,
      name: "Pascal (FPC 3.0.4)",
      monaco: "pascal",
      extensions: [".pas", ".pp"],
      judge0Category: "Pascal"
    },
    {
      id: 68,
      name: "PHP (7.4.1)",
      monaco: "php",
      extensions: [".php"],
      judge0Category: "PHP"
    },
    {
      id: 43,
      name: "Plain Text",
      monaco: "plaintext",
      extensions: [".txt"],
      judge0Category: "Text"
    },
    {
      id: 69,
      name: "Prolog (GNU Prolog 1.4.5)",
      monaco: "prolog",
      extensions: [".pl", ".pro"],
      judge0Category: "Prolog"
    },
    {
      id: 71,
      name: "Python (3.8.1)",
      monaco: "python",
      extensions: [".py"],
      judge0Category: "Python"
    },
    {
      id: 80,
      name: "R (4.0.0)",
      monaco: "r",
      extensions: [".r", ".R"],
      judge0Category: "R"
    },
    {
      id: 72,
      name: "Ruby (2.7.0)",
      monaco: "ruby",
      extensions: [".rb"],
      judge0Category: "Ruby"
    },
    {
      id: 73,
      name: "Rust (1.40.0)",
      monaco: "rust",
      extensions: [".rs"],
      judge0Category: "Rust"
    },
    {
      id: 81,
      name: "Scala (2.13.2)",
      monaco: "scala",
      extensions: [".scala"],
      judge0Category: "Scala"
    },
    {
      id: 82,
      name: "SQL (SQLite 3.27.2)",
      monaco: "sql",
      extensions: [".sql"],
      judge0Category: "SQL"
    },
    {
      id: 83,
      name: "Swift (5.2.3)",
      monaco: "swift",
      extensions: [".swift"],
      judge0Category: "Swift"
    },
    {
      id: 74,
      name: "TypeScript (3.7.4)",
      monaco: "typescript",
      extensions: [".ts", ".tsx"],
      judge0Category: "TypeScript"
    },
  ];
  
  // Utility function to get language by Judge0 ID
  export const getLanguageById = (id: number): ProgrammingLanguage | undefined => {
    return SUPPORTED_LANGUAGES.find(lang => lang.id === id);
  };
  
  // Utility function to get language by Monaco identifier
  export const getLanguageByMonaco = (monacoId: string): ProgrammingLanguage | undefined => {
    return SUPPORTED_LANGUAGES.find(lang => lang.monaco === monacoId);
  };
  
  // Utility function to get language by file extension
  export const getLanguageByExtension = (extension: string): ProgrammingLanguage | undefined => {
    return SUPPORTED_LANGUAGES.find(lang => 
      lang.extensions.includes(extension.toLowerCase())
    );
  };