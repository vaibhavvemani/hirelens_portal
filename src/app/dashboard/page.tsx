import Stats from "./components/Stats";
import Header from "./components/Header";

const page = () => {
  return (
    <div className="w-full flex justify-center mt-4">
      <div className="flex flex-col flex-1 gap-5 max-w-[1300px] px-4 pb-3">
        <Header />
        <Stats />
      </div>
    </div>
  );
};

export default page;
