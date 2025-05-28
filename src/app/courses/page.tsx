import CourseCards from "./CourseCards";
import AssigmentReminders from "./AssigmentReminders";

const page = () => {
  return (
    <div className="w-full flex justify-center mt-4 overflow-hidden">
      <div className="flex flex-col flex-1 gap-5 max-w-[1300px] px-4 pb-3 overflow-hidden">
        <div className="flex flex-col">
          <h1 className="text-2xl font-extrabold">Course Material</h1>
          <p className="font-medium text-sm text-muted-foreground">
            Find all your semesters course material here.
          </p>
        </div>
        <AssigmentReminders />
        <CourseCards />
      </div>
    </div>
  );
};

export default page;
