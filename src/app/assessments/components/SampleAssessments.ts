import { Test, Topic } from "@/types/tests";
import { Question } from "@/types/question";

interface AssessmentSystem {
  tests: { [key: string]: Test };
}

const SampleAssessment: AssessmentSystem = {
  tests: {
    1001: {
      name: "Web_Fundamentals_1",
      desc: "HTML/CSS Basics Test",
      cover_image: "/default.png",
      duration: 30,
      category: ["mcq"],
      topics: [
        {
          name: "technical_mcq",
          easy: 7,
          medium: 3,
          hard: 0
        }
      ],
      questionIds: [
        {
          category: "Web Development",
          topic: "HTML",
          difficulty: "easy",
          text: "What does HTML stand for?",
          image: "",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "Hyper Text Markup Language",
            option_2: "Home Tool Markup Language",
            option_3: "Hyperlinks and Text Markup Language",
            option_4: "High-level Text Machine Language"
          },
          answer: "option_1"
        },
        {
          category: "Web Development",
          topic: "CSS",
          difficulty: "easy",
          text: "Which CSS property changes the text color?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "text-color",
            option_2: "font-color",
            option_3: "color",
            option_4: "text-style"
          },
          answer: "option_3"
        },
        {
          category: "Web Development",
          topic: "HTML",
          difficulty: "easy",
          text: "Which HTML tag is used for the largest heading?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "<h6>",
            option_2: "<heading>",
            option_3: "<h1>",
            option_4: "<head>"
          },
          answer: "option_3"
        },
        {
          category: "Web Development",
          topic: "CSS",
          difficulty: "medium",
          text: "What does CSS stand for?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "Computer Style Sheets",
            option_2: "Creative Style Sheets",
            option_3: "Cascading Style Sheets",
            option_4: "Colorful Style Sheets"
          },
          answer: "option_3"
        },
        {
          category: "Web Development",
          topic: "HTML",
          difficulty: "easy",
          text: "Which attribute is used to link a CSS file to HTML?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "src",
            option_2: "link",
            option_3: "href",
            option_4: "style"
          },
          answer: "option_3"
        },
        {
          category: "Web Development",
          topic: "HTML",
          difficulty: "medium",
          text: "Which HTML element is used for JavaScript code?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "<javascript>",
            option_2: "<script>",
            option_3: "<js>",
            option_4: "<code>"
          },
          answer: "option_2"
        },
        {
          category: "Web Development",
          topic: "HTML",
          difficulty: "easy",
          text: "Which character is used to indicate an end tag?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "<",
            option_2: ">",
            option_3: "/",
            option_4: "\\"
          },
          answer: "option_3"
        },
        {
          category: "Web Development",
          topic: "CSS",
          difficulty: "medium",
          text: "Which CSS property controls text size?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "text-style",
            option_2: "font-size",
            option_3: "text-size",
            option_4: "font-style"
          },
          answer: "option_2"
        },
        {
          category: "Web Development",
          topic: "HTML",
          difficulty: "easy",
          text: "How do you insert a comment in HTML?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "// This is a comment",
            option_2: "<!-- This is a comment -->",
            option_3: "' This is a comment",
            option_4: "/* This is a comment */"
          },
          answer: "option_2"
        },
        {
          category: "Web Development",
          topic: "HTML",
          difficulty: "medium",
          text: "Which HTML attribute specifies an alternate text for an image?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "src",
            option_2: "alt",
            option_3: "title",
            option_4: "href"
          },
          answer: "option_2"
        }
      ]
    },

    1002: {
      name: "JavaScript_Essentials",
      desc: "JavaScript Programming Test",
      duration: 30,
      category: ["tech mcq"],
      questionIds: [
        {
          category: "JavaScript",
          topic: "Operators",
          difficulty: "easy",
          text: "Which operator is used for strict equality comparison in JavaScript?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "==",
            option_2: "===",
            option_3: "=",
            option_4: "!="
          },
          answer: "option_2"
        },
        {
          category: "JavaScript",
          topic: "Variables",
          difficulty: "easy",
          text: "How do you declare a variable in JavaScript?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "variable x",
            option_2: "v x",
            option_3: "let x",
            option_4: "x = variable"
          },
          answer: "option_3"
        },
        {
          category: "JavaScript",
          topic: "Data Types",
          difficulty: "medium",
          text: "What will typeof null return in JavaScript?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "null",
            option_2: "undefined",
            option_3: "object",
            option_4: "number"
          },
          answer: "option_3"
        },
        {
          category: "JavaScript",
          topic: "Arrays",
          difficulty: "easy",
          text: "Which method adds one or more elements to the end of an array?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "push()",
            option_2: "pop()",
            option_3: "shift()",
            option_4: "unshift()"
          },
          answer: "option_1"
        },
        {
          category: "JavaScript",
          topic: "Type Coercion",
          difficulty: "medium",
          text: "What is the output of: console.log(1 + '1')?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "2",
            option_2: "11",
            option_3: "NaN",
            option_4: "undefined"
          },
          answer: "option_2"
        },
        {
          category: "JavaScript",
          topic: "Variables",
          difficulty: "medium",
          text: "Which keyword is used to declare a constant in JavaScript?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "let",
            option_2: "var",
            option_3: "const",
            option_4: "constant"
          },
          answer: "option_3"
        },
        {
          category: "JavaScript",
          topic: "DOM",
          difficulty: "easy",
          text: "What does DOM stand for in JavaScript?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "Data Object Model",
            option_2: "Document Object Model",
            option_3: "Digital Object Management",
            option_4: "Display Object Method"
          },
          answer: "option_2"
        },
        {
          category: "JavaScript",
          topic: "Type Conversion",
          difficulty: "medium",
          text: "Which function is used to parse a string to an integer?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "parseInt()",
            option_2: "stringToInt()",
            option_3: "toInteger()",
            option_4: "int()"
          },
          answer: "option_1"
        },
        {
          category: "JavaScript",
          topic: "Control Flow",
          difficulty: "easy",
          text: "How do you write an IF statement in JavaScript?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "if x == 5 then",
            option_2: "if (x = 5)",
            option_3: "if x = 5",
            option_4: "if (x == 5)"
          },
          answer: "option_4"
        },
        {
          category: "JavaScript",
          topic: "Functions",
          difficulty: "medium",
          text: "What is the correct way to create a function in JavaScript?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "function = myFunction() {}",
            option_2: "function myFunction() {}",
            option_3: "create myFunction() {}",
            option_4: "new function myFunction() {}"
          },
          answer: "option_2"
        }
      ]
    },

    1003: {
      name: "Python_Programming",
      desc: "Python Language Test",
      cover_image: "/default.png",
      duration: 35,
      category: ["mcq"],
      topics: [
        {
          name: "technical_mcq",
          easy: 5,
          medium: 5,
          hard: 0
        }
      ],
      questionIds: [
        {
          category: "Python",
          topic: "Functions",
          difficulty: "easy",
          text: "Which keyword is used to define a function in Python?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "def",
            option_2: "function",
            option_3: "func",
            option_4: "define"
          },
          answer: "option_1"
        },
        {
          category: "Python",
          topic: "Syntax",
          difficulty: "easy",
          text: "How do you create a comment in Python?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "// comment",
            option_2: "/* comment */",
            option_3: "# comment",
            option_4: "-- comment"
          },
          answer: "option_3"
        },
        {
          category: "Python",
          topic: "Data Structures",
          difficulty: "medium",
          text: "Which collection is ordered and changeable in Python?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "Tuple",
            option_2: "Set",
            option_3: "Dictionary",
            option_4: "List"
          },
          answer: "option_4"
        },
        {
          category: "Python",
          topic: "Operators",
          difficulty: "easy",
          text: "What is the output of: print(3 * 'hi')?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "hihihi",
            option_2: "3hi",
            option_3: "Error",
            option_4: "hi hi hi"
          },
          answer: "option_1"
        },
        {
          category: "Python",
          topic: "Dictionaries",
          difficulty: "medium",
          text: "Which method removes all items from a dictionary?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "remove()",
            option_2: "delete()",
            option_3: "clear()",
            option_4: "purge()"
          },
          answer: "option_3"
        },
        {
          category: "Python",
          topic: "Loops",
          difficulty: "easy",
          text: "How do you start a for loop in Python?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "for x in y:",
            option_2: "for (x in y)",
            option_3: "for x = y",
            option_4: "for each x in y"
          },
          answer: "option_1"
        },
        {
          category: "Python",
          topic: "Files & Extensions",
          difficulty: "medium",
          text: "What is the correct file extension for Python files?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: ".pt",
            option_2: ".pyth",
            option_3: ".py",
            option_4: ".python"
          },
          answer: "option_3"
        },
        {
          category: "Python",
          topic: "Operators",
          difficulty: "easy",
          text: "Which operator is used for exponentiation in Python?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "^",
            option_2: "**",
            option_3: "*^",
            option_4: "^^"
          },
          answer: "option_2"
        },
        {
          category: "Python",
          topic: "PEP & Standards",
          difficulty: "medium",
          text: "What does PEP stand for in Python?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "Python Enhancement Proposal",
            option_2: "Python Execution Process",
            option_3: "Programming Enhancement Protocol",
            option_4: "Python Error Prevention"
          },
          answer: "option_1"
        },
        {
          category: "Python",
          topic: "Built-in Functions",
          difficulty: "medium",
          text: "Which function returns the length of a list?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "count()",
            option_2: "size()",
            option_3: "len()",
            option_4: "length()"
          },
          answer: "option_3"
        }
      ]
    },
    
    1004: {
      name: "Web_Fundamentals_2",
      desc: "Second HTML/CSS Basics Test",
      cover_image: "/default.png",
      duration: 30,
      category: ["mcq"],
      topics: [
        {
          name: "technical_mcq",
          easy: 7,
          medium: 3,
          hard: 0
        }
      ],
      questionIds: [
        {
          category: "Web Development",
          topic: "HTML",
          difficulty: "easy",
          text: "Which tag is used to create a hyperlink in HTML?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "<a>",
            option_2: "<link>",
            option_3: "<href>",
            option_4: "<hyperlink>"
          },
          answer: "option_1"
        },
        {
          category: "Web Development",
          topic: "HTML",
          difficulty: "easy",
          text: "Which tag is used to insert an image in HTML?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "<img>",
            option_2: "<image>",
            option_3: "<src>",
            option_4: "<pic>"
          },
          answer: "option_1"
        },
        {
          category: "Web Development",
          topic: "HTML",
          difficulty: "easy",
          text: "Which tag creates a line break in HTML?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "<br>",
            option_2: "<lb>",
            option_3: "<break>",
            option_4: "<newline>"
          },
          answer: "option_1"
        },
        {
          category: "Web Development",
          topic: "HTML",
          difficulty: "easy",
          text: "Which attribute defines the destination of a link?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "src",
            option_2: "href",
            option_3: "link",
            option_4: "dest"
          },
          answer: "option_2"
        },
        {
          category: "Web Development",
          topic: "HTML",
          difficulty: "medium",
          text: "Which doctype declaration is correct for HTML5?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "<!DOCTYPE html>",
            option_2: "<!DOCTYPE HTML PUBLIC>",
            option_3: "<!DOCTYPE HTML5>",
            option_4: "<DOCTYPE html>"
          },
          answer: "option_1"
        },
        {
          category: "Web Development",
          topic: "CSS",
          difficulty: "medium",
          text: "Which property is used to change the background color in CSS?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "color",
            option_2: "background-color",
            option_3: "bg-color",
            option_4: "background"
          },
          answer: "option_2"
        },
        {
          category: "Web Development",
          topic: "CSS",
          difficulty: "easy",
          text: "Which CSS property is used to center text?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "text-align",
            option_2: "align-text",
            option_3: "center",
            option_4: "alignment"
          },
          answer: "option_1"
        },
        {
          category: "Web Development",
          topic: "CSS",
          difficulty: "easy",
          text: "How do you select an element with id 'main' in CSS?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "#main",
            option_2: ".main",
            option_3: "main",
            option_4: "*main"
          },
          answer: "option_1"
        },
        {
          category: "Web Development",
          topic: "CSS",
          difficulty: "medium",
          text: "What is the correct syntax to apply a class called 'menu'?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "#menu",
            option_2: ".menu",
            option_3: "menu",
            option_4: "@menu"
          },
          answer: "option_2"
        },
        {
          category: "Web Development",
          topic: "HTML",
          difficulty: "easy",
          text: "Which HTML tag is used to define a table row?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "<tr>",
            option_2: "<td>",
            option_3: "<table>",
            option_4: "<th>"
          },
          answer: "option_1"
        }
      ]
    },
    
    1005: {
      name: "NodeJS_Backend",
      desc: "Node.js Backend Development Test",
      cover_image: "/default.png",
      duration: 40,
      category: ["mcq"],
      topics: [
        {
          name: "technical_mcq",
          easy: 5,
          medium: 5,
          hard: 0
        }
      ],
      questionIds: [
        {
          category: "Node.js",
          topic: "Basics",
          difficulty: "easy",
          text: "What is Node.js?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "A frontend JavaScript framework",
            option_2: "A JavaScript runtime built on Chrome's V8 engine",
            option_3: "A package manager for JavaScript",
            option_4: "A database management system"
          },
          answer: "option_2"
        },
        {
          category: "Node.js",
          topic: "Modules",
          difficulty: "easy",
          text: "Which module is used for file system operations?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "http",
            option_2: "fs",
            option_3: "path",
            option_4: "os"
          },
          answer: "option_2"
        },
        {
          category: "Node.js",
          topic: "npm",
          difficulty: "medium",
          text: "What does npm stand for?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "Node Package Manager",
            option_2: "Node Project Manager",
            option_3: "New Package Modules",
            option_4: "Node Program Manager"
          },
          answer: "option_1"
        },
        {
          category: "Node.js",
          topic: "Modules",
          difficulty: "easy",
          text: "How do you import a module in Node.js?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "import module",
            option_2: "require()",
            option_3: "include module",
            option_4: "using module"
          },
          answer: "option_2"
        },
        {
          category: "Node.js",
          topic: "Express",
          difficulty: "medium",
          text: "Which method creates a new Express application?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "express()",
            option_2: "new Express()",
            option_3: "createExpress()",
            option_4: "Express.new()"
          },
          answer: "option_1"
        },
        {
          category: "Node.js",
          topic: "npm",
          difficulty: "medium",
          text: "What is the purpose of package.json?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "To store project metadata and dependencies",
            option_2: "To configure the Node.js runtime",
            option_3: "To define database schemas",
            option_4: "To store application secrets"
          },
          answer: "option_1"
        },
        {
          category: "Node.js",
          topic: "Global Objects",
          difficulty: "easy",
          text: "Which global object is available in Node.js but not in browsers?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "window",
            option_2: "document",
            option_3: "process",
            option_4: "console"
          },
          answer: "option_3"
        },
        {
          category: "Node.js",
          topic: "Express",
          difficulty: "medium",
          text: "What is middleware in Express?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "Functions that have access to request and response objects",
            option_2: "Database connection handlers",
            option_3: "Template rendering engines",
            option_4: "Error handling functions"
          },
          answer: "option_1"
        },
        {
          category: "Node.js",
          topic: "HTTP Methods",
          difficulty: "easy",
          text: "Which HTTP method is typically used for creating resources?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "GET",
            option_2: "POST",
            option_3: "PUT",
            option_4: "DELETE"
          },
          answer: "option_2"
        },
        {
          category: "Node.js",
          topic: "API Design",
          difficulty: "medium",
          text: "What does REST stand for?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "Representational State Transfer",
            option_2: "Remote Execution State Transfer",
            option_3: "Resource Endpoint State Transfer",
            option_4: "Representational Endpoint State Transfer"
          },
          answer: "option_1"
        }
      ]
    },
    
    1006: {
      name: "Database_Concepts",
      desc: "Database Fundamentals Test",
      cover_image: "/default.png",
      duration: 45,
      category: ["mcq"],
      topics: [
        {
          name: "technical_mcq",
          easy: 5,
          medium: 5,
          hard: 0
        }
      ],
      questionIds: [
        {
          category: "Databases",
          topic: "SQL",
          difficulty: "easy",
          text: "What is SQL?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "A programming language",
            option_2: "A structured query language",
            option_3: "A NoSQL database",
            option_4: "A server-side framework"
          },
          answer: "option_2"
        },
        {
          category: "Databases",
          topic: "SQL",
          difficulty: "easy",
          text: "Which SQL command retrieves data from a table?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "GET",
            option_2: "SELECT",
            option_3: "RETRIEVE",
            option_4: "FIND"
          },
          answer: "option_2"
        },
        {
          category: "Databases",
          topic: "SQL",
          difficulty: "medium",
          text: "What is a primary key?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "A field that uniquely identifies each record",
            option_2: "The first field in a table",
            option_3: "An encrypted password field",
            option_4: "A foreign key reference"
          },
          answer: "option_1"
        },
        {
          category: "Databases",
          topic: "NoSQL",
          difficulty: "easy",
          text: "Which database is document-oriented?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "MySQL",
            option_2: "PostgreSQL",
            option_3: "MongoDB",
            option_4: "SQLite"
          },
          answer: "option_3"
        },
        {
          category: "Databases",
          topic: "SQL",
          difficulty: "medium",
          text: "What does ACID stand for in database transactions?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "Atomicity, Consistency, Isolation, Durability",
            option_2: "Accuracy, Consistency, Integrity, Durability",
            option_3: "Atomicity, Completeness, Integrity, Durability",
            option_4: "Accuracy, Completeness, Isolation, Durability"
          },
          answer: "option_1"
        },
        {
          category: "Databases",
          topic: "SQL",
          difficulty: "medium",
          text: "Which SQL clause filters records?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "FILTER BY",
            option_2: "WHERE",
            option_3: "HAVING",
            option_4: "GROUP BY"
          },
          answer: "option_2"
        },
        {
          category: "Databases",
          topic: "SQL",
          difficulty: "easy",
          text: "What is a foreign key?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "A field that references the primary key of another table",
            option_2: "An encrypted primary key",
            option_3: "A key that cannot be duplicated",
            option_4: "The main key of a table"
          },
          answer: "option_1"
        },
        {
          category: "Databases",
          topic: "NoSQL",
          difficulty: "medium",
          text: "Which NoSQL database uses key-value pairs?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "MongoDB",
            option_2: "Redis",
            option_3: "Cassandra",
            option_4: "CouchDB"
          },
          answer: "option_2"
        },
        {
          category: "Databases",
          topic: "SQL",
          difficulty: "easy",
          text: "Which SQL command adds new records?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "ADD",
            option_2: "CREATE",
            option_3: "INSERT",
            option_4: "UPDATE"
          },
          answer: "option_3"
        },
        {
          category: "Databases",
          topic: "SQL",
          difficulty: "medium",
          text: "What is normalization?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "The process of organizing data to reduce redundancy",
            option_2: "Converting data to a standard format",
            option_3: "Encrypting database fields",
            option_4: "Backing up database tables"
          },
          answer: "option_1"
        }
      ]
    },
    
    1007: {
      name: "Git_Version_Control",
      desc: "Git and Version Control Test",
      cover_image: "/default.png",
      duration: 30,
      category: ["mcq"],
      topics: [
        {
          name: "technical_mcq",
          easy: 4,
          medium: 6,
          hard: 0
        }
      ],
      questionIds: [
        {
          category: "Version Control",
          topic: "Git",
          difficulty: "easy",
          text: "What is Git?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "A programming language",
            option_2: "A distributed version control system",
            option_3: "A cloud storage service",
            option_4: "A database management system"
          },
          answer: "option_2"
        },
        {
          category: "Version Control",
          topic: "Git",
          difficulty: "easy",
          text: "What command initializes a new Git repository?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "git start",
            option_2: "git init",
            option_3: "git new",
            option_4: "git create"
          },
          answer: "option_2"
        },
        {
          category: "Version Control",
          topic: "Git",
          difficulty: "easy",
          text: "How do you stage files for commit in Git?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "git stage",
            option_2: "git add",
            option_3: "git commit",
            option_4: "git update"
          },
          answer: "option_2"
        },
        {
          category: "Version Control",
          topic: "Git",
          difficulty: "medium",
          text: "What does 'git clone' do?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "Creates a new branch",
            option_2: "Copies a remote repository to local",
            option_3: "Deletes a repository",
            option_4: "Merges two branches"
          },
          answer: "option_2"
        },
        {
          category: "Version Control",
          topic: "Git",
          difficulty: "medium",
          text: "How do you create and switch to a new branch in one command?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "git branch -new",
            option_2: "git checkout -b",
            option_3: "git switch -c",
            option_4: "git create-branch"
          },
          answer: "option_2"
        },
        {
          category: "Version Control",
          topic: "Git",
          difficulty: "medium",
          text: "What command shows the commit history?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "git history",
            option_2: "git log",
            option_3: "git commits",
            option_4: "git show-history"
          },
          answer: "option_2"
        },
        {
          category: "Version Control",
          topic: "Git",
          difficulty: "medium",
          text: "How do you discard changes in a file before staging?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "git undo",
            option_2: "git reset",
            option_3: "git checkout --",
            option_4: "git clean"
          },
          answer: "option_3"
        },
        {
          category: "Version Control",
          topic: "Git",
          difficulty: "easy",
          text: "What does 'git rebase' do?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "Deletes a branch",
            option_2: "Moves or combines a sequence of commits to a new base",
            option_3: "Creates a backup",
            option_4: "Reverts all changes"
          },
          answer: "option_2"
        },
        {
          category: "Version Control",
          topic: "Git",
          difficulty: "medium",
          text: "How do you squash multiple commits into one?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "git merge --squash",
            option_2: "git rebase -i",
            option_3: "git commit --amend",
            option_4: "git squash"
          },
          answer: "option_2"
        },
        {
          category: "Version Control",
          topic: "Git",
          difficulty: "medium",
          text: "What command shows changes between commits?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "git changes",
            option_2: "git diff",
            option_3: "git compare",
            option_4: "git status"
          },
          answer: "option_2"
        }
      ]
    },    

    1008: {
      name: "Algorithms_Data_Structures",
      desc: "Algorithms and Data Structures Test",
      cover_image: "/default.png",
      duration: 50,
      category: ["mcq"],
      topics: [
        {
          name: "technical_mcq",
          easy: 3,
          medium: 3,
          hard: 4
        }
      ],
      questionIds: [
        {
          category: "Algorithms",
          topic: "Searching",
          difficulty: "easy",
          text: "What is the time complexity of binary search?",
          image: "",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "O(n)",
            option_2: "O(n log n)",
            option_3: "O(log n)",
            option_4: "O(1)"
          },
          answer: "option_3"
        },
        {
          category: "Data Structures",
          topic: "Basic Structures",
          difficulty: "easy",
          text: "Which data structure uses FIFO (First-In-First-Out) principle?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "Stack",
            option_2: "Queue",
            option_3: "Tree",
            option_4: "Graph"
          },
          answer: "option_2"
        },
        {
          category: "Algorithms",
          topic: "Sorting",
          difficulty: "easy",
          text: "What is the worst-case time complexity of bubble sort?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "O(n)",
            option_2: "O(n log n)",
            option_3: "O(n²)",
            option_4: "O(log n)"
          },
          answer: "option_3"
        },
        {
          category: "Data Structures",
          topic: "Memory Management",
          difficulty: "medium",
          text: "Which data structure is typically used for implementing recursion?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "Queue",
            option_2: "Stack",
            option_3: "Linked List",
            option_4: "Tree"
          },
          answer: "option_2"
        },
        {
          category: "Algorithms",
          topic: "Sorting",
          difficulty: "medium",
          text: "What algorithm uses divide-and-conquer strategy?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "Bubble sort",
            option_2: "Merge sort",
            option_3: "Insertion sort",
            option_4: "Selection sort"
          },
          answer: "option_2"
        },
        {
          category: "Data Structures",
          topic: "Hashing",
          difficulty: "medium",
          text: "What is the main advantage of a hash table?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "Constant time complexity for search operations",
            option_2: "Guaranteed ordered elements",
            option_3: "Efficient for range queries",
            option_4: "Simple implementation"
          },
          answer: "option_1"
        },
        {
          category: "Algorithms",
          topic: "Graph Theory",
          difficulty: "hard",
          text: "Which algorithm finds the shortest path in an unweighted graph?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "Dijkstra's",
            option_2: "Bellman-Ford",
            option_3: "Breadth-First Search",
            option_4: "Depth-First Search"
          },
          answer: "option_3"
        },
        {
          category: "Data Structures",
          topic: "Heaps",
          difficulty: "hard",
          text: "What is the time complexity of inserting into a binary heap?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "O(1)",
            option_2: "O(log n)",
            option_3: "O(n)",
            option_4: "O(n log n)"
          },
          answer: "option_2"
        },
        {
          category: "Algorithms",
          topic: "Sorting",
          difficulty: "hard",
          text: "Which sorting algorithm has the best average-case time complexity?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "Quick sort",
            option_2: "Merge sort",
            option_3: "Heap sort",
            option_4: "Insertion sort"
          },
          answer: "option_1"
        },
        {
          category: "Data Structures",
          topic: "Memory Management",
          difficulty: "hard",
          text: "What is the space complexity of a recursive algorithm that has depth n?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "O(1)",
            option_2: "O(log n)",
            option_3: "O(n)",
            option_4: "O(n²)"
          },
          answer: "option_3"
        }
      ]
    },
    
    1009: {
      name: "Computer_Networking",
      desc: "Computer Networking Fundamentals Test",
      cover_image: "/default.png",
      duration: 40,
      category: ["mcq"],
      topics: [
        {
          name: "technical_mcq",
          easy: 4,
          medium: 6,
          hard: 0
        }
      ],
      questionIds: [
        {
          category: "Networking",
          topic: "Protocols",
          difficulty: "easy",
          text: "What does IP stand for?",
          image: "",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "Internet Protocol",
            option_2: "Internal Process",
            option_3: "Interconnected Protocol",
            option_4: "International Protocol"
          },
          answer: "option_1"
        },
        {
          category: "Networking",
          topic: "Protocols",
          difficulty: "easy",
          text: "Which port does HTTP typically use?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "21",
            option_2: "25",
            option_3: "80",
            option_4: "443"
          },
          answer: "option_3"
        },
        {
          category: "Networking",
          topic: "IP Addressing",
          difficulty: "medium",
          text: "What is the purpose of a subnet mask?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "To encrypt network traffic",
            option_2: "To divide an IP address into network and host portions",
            option_3: "To mask private IP addresses",
            option_4: "To filter malicious packets"
          },
          answer: "option_2"
        },
        {
          category: "Networking",
          topic: "Network Devices",
          difficulty: "easy",
          text: "Which device operates at the Network Layer (Layer 3)?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "Hub",
            option_2: "Switch",
            option_3: "Router",
            option_4: "Repeater"
          },
          answer: "option_3"
        },
        {
          category: "Networking",
          topic: "Protocols",
          difficulty: "medium",
          text: "What does DNS stand for?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "Domain Name System",
            option_2: "Data Network Service",
            option_3: "Digital Naming Service",
            option_4: "Dynamic Network Solution"
          },
          answer: "option_1"
        },
        {
          category: "Networking",
          topic: "Protocols",
          difficulty: "medium",
          text: "Which protocol is used for secure web browsing?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "HTTP",
            option_2: "FTP",
            option_3: "HTTPS",
            option_4: "SMTP"
          },
          answer: "option_3"
        },
        {
          category: "Networking",
          topic: "IP Addressing",
          difficulty: "easy",
          text: "What is the IPv4 loopback address?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "192.168.1.1",
            option_2: "10.0.0.1",
            option_3: "127.0.0.1",
            option_4: "172.16.0.1"
          },
          answer: "option_3"
        },
        {
          category: "Networking",
          topic: "Protocols",
          difficulty: "medium",
          text: "Which protocol is used for sending email?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "IMAP",
            option_2: "POP3",
            option_3: "SMTP",
            option_4: "FTP"
          },
          answer: "option_3"
        },
        {
          category: "Networking",
          topic: "Network Address Translation",
          difficulty: "medium",
          text: "What is the main purpose of NAT?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "To encrypt network traffic",
            option_2: "To allow multiple devices to share a single public IP",
            option_3: "To block unauthorized access",
            option_4: "To increase network speed"
          },
          answer: "option_2"
        },
        {
          category: "Networking",
          topic: "Wireless Security",
          difficulty: "medium",
          text: "Which wireless encryption standard is most secure?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "WEP",
            option_2: "WPA",
            option_3: "WPA2",
            option_4: "WPA3"
          },
          answer: "option_4"
        }
      ]
    },
    
    1010: {
      name: "Cybersecurity_Basics",
      desc: "Cybersecurity Fundamentals Test",
      cover_image: "/default.png",
      duration: 35,
      category: ["mcq"],
      topics: [
        {
          name: "technical_mcq",
          easy: 4,
          medium: 6,
          hard: 0
        }
      ],
      questionIds: [
        {
          category: "Security",
          topic: "Threats",
          difficulty: "easy",
          text: "What is phishing?",
          image: "",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "A network scanning technique",
            option_2: "A fraudulent attempt to obtain sensitive information",
            option_3: "A type of malware",
            option_4: "A password cracking method"
          },
          answer: "option_2"
        },
        {
          category: "Security",
          topic: "Network Security",
          difficulty: "easy",
          text: "What is the purpose of a firewall?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "To prevent unauthorized access to a network",
            option_2: "To increase internet speed",
            option_3: "To encrypt all network traffic",
            option_4: "To block spam emails"
          },
          answer: "option_1"
        },
        {
          category: "Security",
          topic: "Authentication",
          difficulty: "medium",
          text: "What is two-factor authentication?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "Using two different passwords",
            option_2: "Verifying identity using two different methods",
            option_3: "Having two user accounts",
            option_4: "Using two different security questions"
          },
          answer: "option_2"
        },
        {
          category: "Security",
          topic: "Threats",
          difficulty: "easy",
          text: "Which is an example of malware?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "Firewall",
            option_2: "VPN",
            option_3: "Virus",
            option_4: "HTTPS"
          },
          answer: "option_3"
        },
        {
          category: "Security",
          topic: "Network Security",
          difficulty: "medium",
          text: "What does VPN stand for?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "Virtual Private Network",
            option_2: "Verified Private Network",
            option_3: "Virtual Protected Network",
            option_4: "Verified Protected Network"
          },
          answer: "option_1"
        },
        {
          category: "Security",
          topic: "Cryptography",
          difficulty: "medium",
          text: "What is the purpose of encryption?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "To make data unreadable without a key",
            option_2: "To compress data for storage",
            option_3: "To authenticate users",
            option_4: "To filter network traffic"
          },
          answer: "option_1"
        },
        {
          category: "Security",
          topic: "Best Practices",
          difficulty: "easy",
          text: "What should you do if you receive a suspicious email?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "Open any attachments to check",
            option_2: "Reply to verify the sender",
            option_3: "Click on links to see where they lead",
            option_4: "Don't open it and report it"
          },
          answer: "option_4"
        },
        {
          category: "Security",
          topic: "Vulnerabilities",
          difficulty: "medium",
          text: "What is a zero-day vulnerability?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "A bug with no known fix",
            option_2: "A security flaw that's been patched",
            option_3: "A type of phishing attack",
            option_4: "An expired security certificate"
          },
          answer: "option_1"
        },
        {
          category: "Security",
          topic: "Authentication",
          difficulty: "medium",
          text: "Which is NOT a strong password practice?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "Using a mix of letters, numbers, and symbols",
            option_2: "Using the same password for multiple accounts",
            option_3: "Changing passwords regularly",
            option_4: "Using a password manager"
          },
          answer: "option_2"
        },
        {
          category: "Security",
          topic: "Threats",
          difficulty: "medium",
          text: "What is social engineering?",
          questionType: "mcq",
          marks: 1,
          optionType: "single",
          options: {
            option_1: "Building social media platforms",
            option_2: "Manipulating people to gain access to systems",
            option_3: "A type of network architecture",
            option_4: "Programming social media algorithms"
          },
          answer: "option_2"
        }
      ]
    }
  },
};

export default SampleAssessment;
