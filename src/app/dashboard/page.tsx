import Details from "./components/Details";
import Header from "./components/Header";
import Stats from "./components/Stats";

const page = () => {
  return (
    <div className="flex flex-col flex-1 bg-red-500 gap-5">
      <Header />
      <Stats />
      <Details />
    </div>
  );
};

export default page;
