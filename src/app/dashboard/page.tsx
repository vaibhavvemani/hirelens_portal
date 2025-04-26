import Details from "./components/Details";
import Header from "./components/Header";
import Stats from "./components/Stats";

const page = () => {
  return (
    <div className="w-full flex justify-center">
            <div className="flex flex-col flex-1 gap-5 max-w-[1300px] px-4">
      <Header />
      <Stats />
      <Details />
    </div>

    </div>

  );
};

export default page;
