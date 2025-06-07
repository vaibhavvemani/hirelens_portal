import YourResumes from "./YourResumes";

const page = () => {
  return (
    <div className="w-full flex justify-center mt-4">
      <div className="flex flex-col flex-1 gap-5 max-w-[1300px] px-4 pb-3">
        <div className="flex flex-col">
          <h1 className="text-2xl font-extrabold">Resume Portal</h1>
          <p className="font-medium text-sm text-muted-foreground">
            Manage your resumes and optimize them with AI assistance
          </p>
        </div>
        <YourResumes />
      </div>
    </div>
  );
};

export default page;
