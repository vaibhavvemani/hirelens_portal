type questionLevel = "level 1" | "level 2" | "level 3";
type OptionKey = "a" | "b" | "c" | "d";

interface Question {
  uid: number;
  tag: questionLevel;
  category: string;
  statement: string;
  options: {
    a: string;
    b: string;
    c: string;
    d: string;
  };
  correct_option: {
    value: OptionKey;
  };
}

interface Test {
  name: string
  description: string;
  cover_image: string;
  time: number; // in minutes
  [key: string]: Question | string | number;
}

export interface AssessmentSystem {
  tests: {
    [uid: number]: Test;
  };
}
const SampleAssessment: AssessmentSystem = {
  tests: {
    1001: {
      name: "Web_Fundamentals_1",
      description: "HTML/CSS Basics Test",
      cover_image: "/default.png",
      time: 25,
      question_1: {
        uid: 3001,
        tag: "level 1",
        category: "Web Development",
        statement: "What does HTML stand for?",
        options: {
          a: "Hyper Text Markup Language",
          b: "Home Tool Markup Language",
          c: "Hyperlinks and Text Markup Language",
          d: "High-level Text Machine Language",
        },
        correct_option: { value: "a" },
      },
      question_2: {
        uid: 3002,
        tag: "level 1",
        category: "Web Development",
        statement: "Which CSS property changes the text color?",
        options: {
          a: "text-color",
          b: "font-color",
          c: "color",
          d: "text-style",
        },
        correct_option: { value: "c" },
      },
      question_3: {
        uid: 3003,
        tag: "level 1",
        category: "Web Development",
        statement: "Which HTML tag is used for the largest heading?",
        options: { a: "<h6>", b: "<heading>", c: "<h1>", d: "<head>" },
        correct_option: { value: "c" },
      },
      question_4: {
        uid: 3004,
        tag: "level 2",
        category: "Web Development",
        statement: "What does CSS stand for?",
        options: {
          a: "Computer Style Sheets",
          b: "Creative Style Sheets",
          c: "Cascading Style Sheets",
          d: "Colorful Style Sheets",
        },
        correct_option: { value: "c" },
      },
      question_5: {
        uid: 3005,
        tag: "level 1",
        category: "Web Development",
        statement: "Which attribute is used to link a CSS file to HTML?",
        options: { a: "src", b: "link", c: "href", d: "style" },
        correct_option: { value: "c" },
      },
      question_6: {
        uid: 3006,
        tag: "level 2",
        category: "Web Development",
        statement: "Which HTML element is used for JavaScript code?",
        options: { a: "<javascript>", b: "<script>", c: "<js>", d: "<code>" },
        correct_option: { value: "b" },
      },
      question_7: {
        uid: 3007,
        tag: "level 1",
        category: "Web Development",
        statement: "Which character is used to indicate an end tag?",
        options: { a: "<", b: ">", c: "/", d: "\\" },
        correct_option: { value: "c" },
      },
      question_8: {
        uid: 3008,
        tag: "level 2",
        category: "Web Development",
        statement: "Which CSS property controls text size?",
        options: {
          a: "text-style",
          b: "font-size",
          c: "text-size",
          d: "font-style",
        },
        correct_option: { value: "b" },
      },
      question_9: {
        uid: 3009,
        tag: "level 1",
        category: "Web Development",
        statement: "How do you insert a comment in HTML?",
        options: {
          a: "// This is a comment",
          b: "<!-- This is a comment -->",
          c: "' This is a comment",
          d: "/* This is a comment */",
        },
        correct_option: { value: "b" },
      },
      question_10: {
        uid: 3010,
        tag: "level 2",
        category: "Web Development",
        statement:
          "Which HTML attribute specifies an alternate text for an image?",
        options: { a: "src", b: "alt", c: "title", d: "href" },
        correct_option: { value: "b" },
      },
    },

    1002: {
      name:"JavaScript_Essentials",
      description: "JavaScript Programming Test",
      cover_image: "/default.png",
      time: 30,
      question_1: {
        uid: 3011,
        tag: "level 1",
        category: "JavaScript",
        statement:
          "Which operator is used for strict equality comparison in JavaScript?",
        options: { a: "==", b: "===", c: "=", d: "!=" },
        correct_option: { value: "b" },
      },
      question_2: {
        uid: 3012,
        tag: "level 1",
        category: "JavaScript",
        statement: "How do you declare a variable in JavaScript?",
        options: { a: "variable x", b: "v x", c: "let x", d: "x = variable" },
        correct_option: { value: "c" },
      },
      question_3: {
        uid: 3013,
        tag: "level 2",
        category: "JavaScript",
        statement: "What will typeof null return in JavaScript?",
        options: { a: "null", b: "undefined", c: "object", d: "number" },
        correct_option: { value: "c" },
      },
      question_4: {
        uid: 3014,
        tag: "level 1",
        category: "JavaScript",
        statement:
          "Which method adds one or more elements to the end of an array?",
        options: { a: "push()", b: "pop()", c: "shift()", d: "unshift()" },
        correct_option: { value: "a" },
      },
      question_5: {
        uid: 3015,
        tag: "level 2",
        category: "JavaScript",
        statement: "What is the output of: console.log(1 + '1')?",
        options: { a: "2", b: "11", c: "NaN", d: "undefined" },
        correct_option: { value: "b" },
      },
      question_6: {
        uid: 3016,
        tag: "level 2",
        category: "JavaScript",
        statement: "Which keyword is used to declare a constant in JavaScript?",
        options: { a: "let", b: "var", c: "const", d: "constant" },
        correct_option: { value: "c" },
      },
      question_7: {
        uid: 3017,
        tag: "level 1",
        category: "JavaScript",
        statement: "What does DOM stand for in JavaScript?",
        options: {
          a: "Data Object Model",
          b: "Document Object Model",
          c: "Digital Object Management",
          d: "Display Object Method",
        },
        correct_option: { value: "b" },
      },
      question_8: {
        uid: 3018,
        tag: "level 2",
        category: "JavaScript",
        statement: "Which function is used to parse a string to an integer?",
        options: {
          a: "parseInt()",
          b: "stringToInt()",
          c: "toInteger()",
          d: "int()",
        },
        correct_option: { value: "a" },
      },
      question_9: {
        uid: 3019,
        tag: "level 1",
        category: "JavaScript",
        statement: "How do you write an IF statement in JavaScript?",
        options: {
          a: "if x == 5 then",
          b: "if (x = 5)",
          c: "if x = 5",
          d: "if (x == 5)",
        },
        correct_option: { value: "d" },
      },
      question_10: {
        uid: 3020,
        tag: "level 2",
        category: "JavaScript",
        statement:
          "What is the correct way to create a function in JavaScript?",
        options: {
          a: "function = myFunction() {}",
          b: "function myFunction() {}",
          c: "create myFunction() {}",
          d: "new function myFunction() {}",
        },
        correct_option: { value: "b" },
      },
    },

    1003: {
      name: "Python_Programming",
      description: "Python Language Test",
      cover_image: "/default.png",
      time: 35,
      question_1: {
        uid: 3021,
        tag: "level 1",
        category: "Python",
        statement: "Which keyword is used to define a function in Python?",
        options: { a: "def", b: "function", c: "func", d: "define" },
        correct_option: { value: "a" },
      },
      question_2: {
        uid: 3022,
        tag: "level 1",
        category: "Python",
        statement: "How do you create a comment in Python?",
        options: {
          a: "// comment",
          b: "/* comment */",
          c: "# comment",
          d: "-- comment",
        },
        correct_option: { value: "c" },
      },
      question_3: {
        uid: 3023,
        tag: "level 2",
        category: "Python",
        statement: "Which collection is ordered and changeable in Python?",
        options: { a: "Tuple", b: "Set", c: "Dictionary", d: "List" },
        correct_option: { value: "d" },
      },
      question_4: {
        uid: 3024,
        tag: "level 1",
        category: "Python",
        statement: "What is the output of: print(3 * 'hi')?",
        options: { a: "hihihi", b: "3hi", c: "Error", d: "hi hi hi" },
        correct_option: { value: "a" },
      },
      question_5: {
        uid: 3025,
        tag: "level 2",
        category: "Python",
        statement: "Which method removes all items from a dictionary?",
        options: { a: "remove()", b: "delete()", c: "clear()", d: "purge()" },
        correct_option: { value: "c" },
      },
      question_6: {
        uid: 3026,
        tag: "level 1",
        category: "Python",
        statement: "How do you start a for loop in Python?",
        options: {
          a: "for x in y:",
          b: "for (x in y)",
          c: "for x = y",
          d: "for each x in y",
        },
        correct_option: { value: "a" },
      },
      question_7: {
        uid: 3027,
        tag: "level 2",
        category: "Python",
        statement: "What is the correct file extension for Python files?",
        options: { a: ".pt", b: ".pyth", c: ".py", d: ".python" },
        correct_option: { value: "c" },
      },
      question_8: {
        uid: 3028,
        tag: "level 1",
        category: "Python",
        statement: "Which operator is used for exponentiation in Python?",
        options: { a: "^", b: "**", c: "*^", d: "^^" },
        correct_option: { value: "b" },
      },
      question_9: {
        uid: 3029,
        tag: "level 2",
        category: "Python",
        statement: "What does PEP stand for in Python?",
        options: {
          a: "Python Enhancement Proposal",
          b: "Python Execution Process",
          c: "Programming Enhancement Protocol",
          d: "Python Error Prevention",
        },
        correct_option: { value: "a" },
      },
      question_10: {
        uid: 3030,
        tag: "level 2",
        category: "Python",
        statement: "Which function returns the length of a list?",
        options: { a: "count()", b: "size()", c: "len()", d: "length()" },
        correct_option: { value: "c" },
      },
    },

    1004: {
      name: "React_Framework",
      description: "React.js Fundamentals Test",
      cover_image: "/default.png",
      time: 35,
      question_1: {
        uid: 3031,
        tag: "level 1",
        category: "React",
        statement: "What is React?",
        options: {
          a: "A programming language",
          b: "A JavaScript library for building user interfaces",
          c: "A database management system",
          d: "A server-side framework",
        },
        correct_option: { value: "b" },
      },
      question_2: {
        uid: 3032,
        tag: "level 1",
        category: "React",
        statement: "Which command creates a new React app?",
        options: {
          a: "npm create-react-app",
          b: "npm new react-app",
          c: "npx create-react-app",
          d: "npx new-react-app",
        },
        correct_option: { value: "c" },
      },
      question_3: {
        uid: 3033,
        tag: "level 2",
        category: "React",
        statement: "What is JSX?",
        options: {
          a: "A syntax extension for JavaScript",
          b: "A templating language",
          c: "A state management library",
          d: "A CSS preprocessor",
        },
        correct_option: { value: "a" },
      },
      question_4: {
        uid: 3034,
        tag: "level 1",
        category: "React",
        statement: "How do you pass data to a child component?",
        options: {
          a: "Using state",
          b: "Using props",
          c: "Using refs",
          d: "Using context",
        },
        correct_option: { value: "b" },
      },
      question_5: {
        uid: 3035,
        tag: "level 2",
        category: "React",
        statement: "Which hook replaces componentDidMount?",
        options: {
          a: "useEffect",
          b: "useState",
          c: "useMemo",
          d: "useContext",
        },
        correct_option: { value: "a" },
      },
      question_6: {
        uid: 3036,
        tag: "level 2",
        category: "React",
        statement: "What is the virtual DOM?",
        options: {
          a: "A lightweight copy of the real DOM",
          b: "A shadow version of components",
          c: "A backup of the DOM tree",
          d: "A testing environment for components",
        },
        correct_option: { value: "a" },
      },
      question_7: {
        uid: 3037,
        tag: "level 1",
        category: "React",
        statement: "How do you update state in a functional component?",
        options: {
          a: "this.setState()",
          b: "useState() hook",
          c: "setState()",
          d: "updateState()",
        },
        correct_option: { value: "b" },
      },
      question_8: {
        uid: 3038,
        tag: "level 2",
        category: "React",
        statement: "Which method is used to render React elements to the DOM?",
        options: {
          a: "ReactDOM.render()",
          b: "React.render()",
          c: "DOM.render()",
          d: "render()",
        },
        correct_option: { value: "a" },
      },
      question_9: {
        uid: 3039,
        tag: "level 1",
        category: "React",
        statement: "What is the correct syntax for a functional component?",
        options: {
          a: "function MyComponent() { return <div />; }",
          b: "class MyComponent extends React.Component { render() { return <div />; } }",
          c: "const MyComponent = () => <div />",
          d: "Both a and c",
        },
        correct_option: { value: "d" },
      },
      question_10: {
        uid: 3040,
        tag: "level 2",
        category: "React",
        statement: "Which tool helps inspect React components?",
        options: {
          a: "React Developer Tools",
          b: "Redux DevTools",
          c: "Chrome Inspector",
          d: "React Inspector",
        },
        correct_option: { value: "a" },
      },
    },

    1005: {
      name: "NodeJS Backend",
      description: "Node.js Backend Development Test",
      cover_image: "/default.png",
      time: 40,
      question_1: {
        uid: 3041,
        tag: "level 1",
        category: "Node.js",
        statement: "What is Node.js?",
        options: {
          a: "A frontend JavaScript framework",
          b: "A JavaScript runtime built on Chrome's V8 engine",
          c: "A package manager for JavaScript",
          d: "A database management system",
        },
        correct_option: { value: "b" },
      },
      question_2: {
        uid: 3042,
        tag: "level 1",
        category: "Node.js",
        statement: "Which module is used for file system operations?",
        options: { a: "http", b: "fs", c: "path", d: "os" },
        correct_option: { value: "b" },
      },
      question_3: {
        uid: 3043,
        tag: "level 2",
        category: "Node.js",
        statement: "What does npm stand for?",
        options: {
          a: "Node Package Manager",
          b: "Node Project Manager",
          c: "New Package Modules",
          d: "Node Program Manager",
        },
        correct_option: { value: "a" },
      },
      question_4: {
        uid: 3044,
        tag: "level 1",
        category: "Node.js",
        statement: "How do you import a module in Node.js?",
        options: {
          a: "import module",
          b: "require()",
          c: "include module",
          d: "using module",
        },
        correct_option: { value: "b" },
      },
      question_5: {
        uid: 3045,
        tag: "level 2",
        category: "Node.js",
        statement: "Which method creates a new Express application?",
        options: {
          a: "express()",
          b: "new Express()",
          c: "createExpress()",
          d: "Express.new()",
        },
        correct_option: { value: "a" },
      },
      question_6: {
        uid: 3046,
        tag: "level 2",
        category: "Node.js",
        statement: "What is the purpose of package.json?",
        options: {
          a: "To store project metadata and dependencies",
          b: "To configure the Node.js runtime",
          c: "To define database schemas",
          d: "To store application secrets",
        },
        correct_option: { value: "a" },
      },
      question_7: {
        uid: 3047,
        tag: "level 1",
        category: "Node.js",
        statement:
          "Which global object is available in Node.js but not in browsers?",
        options: { a: "window", b: "document", c: "process", d: "console" },
        correct_option: { value: "c" },
      },
      question_8: {
        uid: 3048,
        tag: "level 2",
        category: "Node.js",
        statement: "What is middleware in Express?",
        options: {
          a: "Functions that have access to request and response objects",
          b: "Database connection handlers",
          c: "Template rendering engines",
          d: "Error handling functions",
        },
        correct_option: { value: "a" },
      },
      question_9: {
        uid: 3049,
        tag: "level 1",
        category: "Node.js",
        statement:
          "Which HTTP method is typically used for creating resources?",
        options: { a: "GET", b: "POST", c: "PUT", d: "DELETE" },
        correct_option: { value: "b" },
      },
      question_10: {
        uid: 3050,
        tag: "level 2",
        category: "Node.js",
        statement: "What does REST stand for?",
        options: {
          a: "Representational State Transfer",
          b: "Remote Execution State Transfer",
          c: "Resource Endpoint State Transfer",
          d: "Representational Endpoint State Transfer",
        },
        correct_option: { value: "a" },
      },
    },

    1006: {
      name: "Database Concepts",
      description: "Database Fundamentals Test",
      cover_image: "/default.png",
      time: 45,
      question_1: {
        uid: 3051,
        tag: "level 1",
        category: "Databases",
        statement: "What is SQL?",
        options: {
          a: "A programming language",
          b: "A structured query language",
          c: "A NoSQL database",
          d: "A server-side framework",
        },
        correct_option: { value: "b" },
      },
      question_2: {
        uid: 3052,
        tag: "level 1",
        category: "Databases",
        statement: "Which SQL command retrieves data from a table?",
        options: { a: "GET", b: "SELECT", c: "RETRIEVE", d: "FIND" },
        correct_option: { value: "b" },
      },
      question_3: {
        uid: 3053,
        tag: "level 2",
        category: "Databases",
        statement: "What is a primary key?",
        options: {
          a: "A field that uniquely identifies each record",
          b: "The first field in a table",
          c: "An encrypted password field",
          d: "A foreign key reference",
        },
        correct_option: { value: "a" },
      },
      question_4: {
        uid: 3054,
        tag: "level 1",
        category: "Databases",
        statement: "Which database is document-oriented?",
        options: { a: "MySQL", b: "PostgreSQL", c: "MongoDB", d: "SQLite" },
        correct_option: { value: "c" },
      },
      question_5: {
        uid: 3055,
        tag: "level 2",
        category: "Databases",
        statement: "What does ACID stand for in database transactions?",
        options: {
          a: "Atomicity, Consistency, Isolation, Durability",
          b: "Accuracy, Consistency, Integrity, Durability",
          c: "Atomicity, Completeness, Integrity, Durability",
          d: "Accuracy, Completeness, Isolation, Durability",
        },
        correct_option: { value: "a" },
      },
      question_6: {
        uid: 3056,
        tag: "level 2",
        category: "Databases",
        statement: "Which SQL clause filters records?",
        options: { a: "FILTER BY", b: "WHERE", c: "HAVING", d: "GROUP BY" },
        correct_option: { value: "b" },
      },
      question_7: {
        uid: 3057,
        tag: "level 1",
        category: "Databases",
        statement: "What is a foreign key?",
        options: {
          a: "A field that references the primary key of another table",
          b: "An encrypted primary key",
          c: "A key that cannot be duplicated",
          d: "The main key of a table",
        },
        correct_option: { value: "a" },
      },
      question_8: {
        uid: 3058,
        tag: "level 2",
        category: "Databases",
        statement: "Which NoSQL database uses key-value pairs?",
        options: { a: "MongoDB", b: "Redis", c: "Cassandra", d: "CouchDB" },
        correct_option: { value: "b" },
      },
      question_9: {
        uid: 3059,
        tag: "level 1",
        category: "Databases",
        statement: "Which SQL command adds new records?",
        options: { a: "ADD", b: "CREATE", c: "INSERT", d: "UPDATE" },
        correct_option: { value: "c" },
      },
      question_10: {
        uid: 3060,
        tag: "level 2",
        category: "Databases",
        statement: "What is normalization?",
        options: {
          a: "The process of organizing data to reduce redundancy",
          b: "Converting data to a standard format",
          c: "Encrypting database fields",
          d: "Backing up database tables",
        },
        correct_option: { value: "a" },
      },
    },

    1007: {
      name: "Git_Version_Control",
      description: "Git and Version Control Test",
      cover_image: "/default.png",
      time: 30,
      question_1: {
        uid: 3061,
        tag: "level 1",
        category: "Version Control",
        statement: "What is Git?",
        options: {
          a: "A programming language",
          b: "A distributed version control system",
          c: "A cloud storage service",
          d: "A database management system",
        },
        correct_option: { value: "b" },
      },
      question_2: {
        uid: 3062,
        tag: "level 1",
        category: "Version Control",
        statement: "What command initializes a new Git repository?",
        options: {
          a: "git start",
          b: "git init",
          c: "git new",
          d: "git create",
        },
        correct_option: { value: "b" },
      },
      question_3: {
        uid: 3063,
        tag: "level 1",
        category: "Version Control",
        statement: "How do you stage files for commit in Git?",
        options: {
          a: "git stage",
          b: "git add",
          c: "git commit",
          d: "git update",
        },
        correct_option: { value: "b" },
      },
      question_4: {
        uid: 3064,
        tag: "level 2",
        category: "Version Control",
        statement: "What does 'git clone' do?",
        options: {
          a: "Creates a new branch",
          b: "Copies a remote repository to local",
          c: "Deletes a repository",
          d: "Merges two branches",
        },
        correct_option: { value: "b" },
      },
      question_5: {
        uid: 3065,
        tag: "level 2",
        category: "Version Control",
        statement:
          "How do you create and switch to a new branch in one command?",
        options: {
          a: "git branch -new",
          b: "git checkout -b",
          c: "git switch -c",
          d: "git create-branch",
        },
        correct_option: { value: "b" },
      },
      question_6: {
        uid: 3066,
        tag: "level 2",
        category: "Version Control",
        statement: "What command shows the commit history?",
        options: {
          a: "git history",
          b: "git log",
          c: "git commits",
          d: "git show-history",
        },
        correct_option: { value: "b" },
      },
      question_7: {
        uid: 3067,
        tag: "level 2",
        category: "Version Control",
        statement: "How do you discard changes in a file before staging?",
        options: {
          a: "git undo",
          b: "git reset",
          c: "git checkout --",
          d: "git clean",
        },
        correct_option: { value: "c" },
      },
      question_8: {
        uid: 3068,
        tag: "level 1",
        category: "Version Control",
        statement: "What does 'git rebase' do?",
        options: {
          a: "Deletes a branch",
          b: "Moves or combines a sequence of commits to a new base",
          c: "Creates a backup",
          d: "Reverts all changes",
        },
        correct_option: { value: "b" },
      },
      question_9: {
        uid: 3069,
        tag: "level 2",
        category: "Version Control",
        statement: "How do you squash multiple commits into one?",
        options: {
          a: "git merge --squash",
          b: "git rebase -i",
          c: "git commit --amend",
          d: "git squash",
        },
        correct_option: { value: "b" },
      },
      question_10: {
        uid: 3070,
        tag: "level 2",
        category: "Version Control",
        statement: "What command shows changes between commits?",
        options: {
          a: "git changes",
          b: "git diff",
          c: "git compare",
          d: "git status",
        },
        correct_option: { value: "b" },
      },
    },

    1008: {
      name: "Algorithms_Data_Structures",
      description: "Algorithms and Data Structures Test",
      cover_image: "/default.png",
      time: 50,
      question_1: {
        uid: 3071,
        tag: "level 1",
        category: "Algorithms",
        statement: "What is the time complexity of binary search?",
        options: {
          a: "O(n)",
          b: "O(n log n)",
          c: "O(log n)",
          d: "O(1)"
        },
        correct_option: { value: "c" }
      },
      question_2: {
        uid: 3072,
        tag: "level 1",
        category: "Data Structures",
        statement: "Which data structure uses FIFO (First-In-First-Out) principle?",
        options: {
          a: "Stack",
          b: "Queue",
          c: "Tree",
          d: "Graph"
        },
        correct_option: { value: "b" }
      },
      question_3: {
        uid: 3073,
        tag: "level 1",
        category: "Algorithms",
        statement: "What is the worst-case time complexity of bubble sort?",
        options: {
          a: "O(n)",
          b: "O(n log n)",
          c: "O(n²)",
          d: "O(log n)"
        },
        correct_option: { value: "c" }
      },
      question_4: {
        uid: 3074,
        tag: "level 2",
        category: "Data Structures",
        statement: "Which data structure is typically used for implementing recursion?",
        options: {
          a: "Queue",
          b: "Stack",
          c: "Linked List",
          d: "Tree"
        },
        correct_option: { value: "b" }
      },
      question_5: {
        uid: 3075,
        tag: "level 2",
        category: "Algorithms",
        statement: "What algorithm uses divide-and-conquer strategy?",
        options: {
          a: "Bubble sort",
          b: "Merge sort",
          c: "Insertion sort",
          d: "Selection sort"
        },
        correct_option: { value: "b" }
      },
      question_6: {
        uid: 3076,
        tag: "level 2",
        category: "Data Structures",
        statement: "What is the main advantage of a hash table?",
        options: {
          a: "Constant time complexity for search operations",
          b: "Guaranteed ordered elements",
          c: "Efficient for range queries",
          d: "Simple implementation"
        },
        correct_option: { value: "a" }
      },
      question_7: {
        uid: 3077,
        tag: "level 3",
        category: "Algorithms",
        statement: "Which algorithm finds the shortest path in an unweighted graph?",
        options: {
          a: "Dijkstra's",
          b: "Bellman-Ford",
          c: "Breadth-First Search",
          d: "Depth-First Search"
        },
        correct_option: { value: "c" }
      },
      question_8: {
        uid: 3078,
        tag: "level 3",
        category: "Data Structures",
        statement: "What is the time complexity of inserting into a binary heap?",
        options: {
          a: "O(1)",
          b: "O(log n)",
          c: "O(n)",
          d: "O(n log n)"
        },
        correct_option: { value: "b" }
      },
      question_9: {
        uid: 3079,
        tag: "level 3",
        category: "Algorithms",
        statement: "Which sorting algorithm has the best average-case time complexity?",
        options: {
          a: "Quick sort",
          b: "Merge sort",
          c: "Heap sort",
          d: "Insertion sort"
        },
        correct_option: { value: "a" }
      },
      question_10: {
        uid: 3080,
        tag: "level 3",
        category: "Data Structures",
        statement: "What is the space complexity of a recursive algorithm that has depth n?",
        options: {
          a: "O(1)",
          b: "O(log n)",
          c: "O(n)",
          d: "O(n²)"
        },
        correct_option: { value: "c" }
      }
    },

    1009: {
      name: "Computer_Networking",
      description: "Computer Networking Fundamentals Test",
      cover_image: "/default.png",
      time: 40,
      question_1: {
        uid: 3081,
        tag: "level 1",
        category: "Networking",
        statement: "What does IP stand for?",
        options: {
          a: "Internet Protocol",
          b: "Internal Process",
          c: "Interconnected Protocol",
          d: "International Protocol"
        },
        correct_option: { value: "a" },
      },
      question_2: {
        uid: 3082,
        tag: "level 1",
        category: "Networking",
        statement: "Which port does HTTP typically use?",
        options: { a: "21", b: "25", c: "80", d: "443" },
        correct_option: { value: "c" },
      },
      question_3: {
        uid: 3083,
        tag: "level 2",
        category: "Networking",
        statement: "What is the purpose of a subnet mask?",
        options: {
          a: "To encrypt network traffic",
          b: "To divide an IP address into network and host portions",
          c: "To mask private IP addresses",
          d: "To filter malicious packets"
        },
        correct_option: { value: "b" },
      },
      question_4: {
        uid: 3084,
        tag: "level 1",
        category: "Networking",
        statement: "Which device operates at the Network Layer (Layer 3)?",
        options: { a: "Hub", b: "Switch", c: "Router", d: "Repeater" },
        correct_option: { value: "c" },
      },
      question_5: {
        uid: 3085,
        tag: "level 2",
        category: "Networking",
        statement: "What does DNS stand for?",
        options: {
          a: "Domain Name System",
          b: "Data Network Service",
          c: "Digital Naming Service",
          d: "Dynamic Network Solution"
        },
        correct_option: { value: "a" },
      },
      question_6: {
        uid: 3086,
        tag: "level 2",
        category: "Networking",
        statement: "Which protocol is used for secure web browsing?",
        options: { a: "HTTP", b: "FTP", c: "HTTPS", d: "SMTP" },
        correct_option: { value: "c" },
      },
      question_7: {
        uid: 3087,
        tag: "level 1",
        category: "Networking",
        statement: "What is the IPv4 loopback address?",
        options: { a: "192.168.1.1", b: "10.0.0.1", c: "127.0.0.1", d: "172.16.0.1" },
        correct_option: { value: "c" },
      },
      question_8: {
        uid: 3088,
        tag: "level 2",
        category: "Networking",
        statement: "Which protocol is used for sending email?",
        options: { a: "IMAP", b: "POP3", c: "SMTP", d: "FTP" },
        correct_option: { value: "c" },
      },
      question_9: {
        uid: 3089,
        tag: "level 2",
        category: "Networking",
        statement: "What is the main purpose of NAT?",
        options: {
          a: "To encrypt network traffic",
          b: "To allow multiple devices to share a single public IP",
          c: "To block unauthorized access",
          d: "To increase network speed"
        },
        correct_option: { value: "b" },
      },
      question_10: {
        uid: 3090,
        tag: "level 2",
        category: "Networking",
        statement: "Which wireless encryption standard is most secure?",
        options: { a: "WEP", b: "WPA", c: "WPA2", d: "WPA3" },
        correct_option: { value: "d" },
      },
    },

    1010: {
      name: "Cybersecurity_Basics",
      description: "Cybersecurity Fundamentals Test",
      cover_image: "/default.png",
      time: 35,
      question_1: {
        uid: 3091,
        tag: "level 1",
        category: "Security",
        statement: "What is phishing?",
        options: {
          a: "A network scanning technique",
          b: "A fraudulent attempt to obtain sensitive information",
          c: "A type of malware",
          d: "A password cracking method"
        },
        correct_option: { value: "b" },
      },
      question_2: {
        uid: 3092,
        tag: "level 1",
        category: "Security",
        statement: "What is the purpose of a firewall?",
        options: {
          a: "To prevent unauthorized access to a network",
          b: "To increase internet speed",
          c: "To encrypt all network traffic",
          d: "To block spam emails"
        },
        correct_option: { value: "a" },
      },
      question_3: {
        uid: 3093,
        tag: "level 2",
        category: "Security",
        statement: "What is two-factor authentication?",
        options: {
          a: "Using two different passwords",
          b: "Verifying identity using two different methods",
          c: "Having two user accounts",
          d: "Using two different security questions"
        },
        correct_option: { value: "b" },
      },
      question_4: {
        uid: 3094,
        tag: "level 1",
        category: "Security",
        statement: "Which is an example of malware?",
        options: { a: "Firewall", b: "VPN", c: "Virus", d: "HTTPS" },
        correct_option: { value: "c" },
      },
      question_5: {
        uid: 3095,
        tag: "level 2",
        category: "Security",
        statement: "What does VPN stand for?",
        options: {
          a: "Virtual Private Network",
          b: "Verified Private Network",
          c: "Virtual Protected Network",
          d: "Verified Protected Network"
        },
        correct_option: { value: "a" },
      },
      question_6: {
        uid: 3096,
        tag: "level 2",
        category: "Security",
        statement: "What is the purpose of encryption?",
        options: {
          a: "To make data unreadable without a key",
          b: "To compress data for storage",
          c: "To authenticate users",
          d: "To filter network traffic"
        },
        correct_option: { value: "a" },
      },
      question_7: {
        uid: 3097,
        tag: "level 1",
        category: "Security",
        statement: "What should you do if you receive a suspicious email?",
        options: {
          a: "Open any attachments to check",
          b: "Reply to verify the sender",
          c: "Click on links to see where they lead",
          d: "Don't open it and report it"
        },
        correct_option: { value: "d" },
      },
      question_8: {
        uid: 3098,
        tag: "level 2",
        category: "Security",
        statement: "What is a zero-day vulnerability?",
        options: {
          a: "A bug with no known fix",
          b: "A security flaw that's been patched",
          c: "A type of phishing attack",
          d: "An expired security certificate"
        },
        correct_option: { value: "a" },
      },
      question_9: {
        uid: 3099,
        tag: "level 2",
        category: "Security",
        statement: "Which is NOT a strong password practice?",
        options: {
          a: "Using a mix of letters, numbers, and symbols",
          b: "Using the same password for multiple accounts",
          c: "Changing passwords regularly",
          d: "Using a password manager"
        },
        correct_option: { value: "b" },
      },
      question_10: {
        uid: 3100,
        tag: "level 2",
        category: "Security",
        statement: "What is social engineering?",
        options: {
          a: "Building social media platforms",
          b: "Manipulating people to gain access to systems",
          c: "A type of network architecture",
          d: "Programming social media algorithms"
        },
        correct_option: { value: "b" },
      },
    },
  },
};

export default SampleAssessment;
