import CodingIDE from "./CodingIDE";

const page = () => {
  return (
    <div className="w-full flex justify-center mt-4">
      <div className="flex flex-col flex-1 gap-5 w-full max-w-[1300px] px-4 pb-3">
        <div className="flex flex-col">
          <h1 className="text-2xl font-extrabold">Coding IDE</h1>
          <p className="font-medium text-accent-foreground">
            A coding IDE that helps you write code faster and more efficiently.
          </p>
        </div>
        <CodingIDE />
      </div>
    </div>
  );
};

export default page;
