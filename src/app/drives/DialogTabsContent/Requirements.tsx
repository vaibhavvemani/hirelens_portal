import { Drive } from "@/types/drives";

interface RequirementProps{
    drive: Drive
}


const Requirements = ({drive}: RequirementProps) => {
  return (
    <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
            <h1 className="text-xl font-bold">Prerequisites:</h1>
            <p className="text-sm font-medium">
              {drive.prerequisites}
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-lg font-bold">Requirements:</h1>
            <ul>
              <ul>
                {Object.entries(drive.requirements).map(
                  ([key, value], index) => {
                    let label = "";
                    switch (key) {
                      case "tenth_grade":
                        label = "10th Grade";
                        break;
                      case "twelfth_grade":
                        label = "12th Grade";
                        break;
                      case "cgpa":
                        label = "Minimum CGPA";
                        break;
                      case "departments":
                        label = "Eligible Departments";
                        break;
                      default:
                        label = key;
                    }

                    return (
                      <li
                        key={index}
                        className="flex gap-2 items-center"
                      >
                        <p className="font-bold">{label}:</p>{" "}
                        {Array.isArray(value) ? (
                          value.join(", ")
                        ) : (
                          <p className="font-semibold text-accent-foreground">
                            {value}
                          </p>
                        )}
                      </li>
                    );
                  }
                )}
              </ul>
            </ul>
          </div>
    </div>
  )
}

export default Requirements