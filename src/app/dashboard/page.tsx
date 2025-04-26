import Details from "./components/Details";
import Header from "./components/Header";
import Stats from "./components/Stats";

const page = () => {
  return (
    <div className="flex items-center justify-center min-w-full bg-gray-100">
      <div className="max-w-[950px] min-w-[900px] h-[100vh] bg-red-500 flex flex-col gap-5">
        <Header />
        <Stats />
        <Details />
      </div>
    </div>
  );
};

export default page;
