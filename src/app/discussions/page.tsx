import Circulars from "./Circulars";

const page = () => {
  return (
    <div className="w-full flex justify-center mt-4 overflow-hidden">
      <div className="flex flex-col flex-1 gap-5 max-w-[1300px] px-4 pb-3">
        <div className="flex flex-col">
          <h1 className="text-2xl font-extrabold">Class Discussions</h1>
          <p className="font-medium text-sm text-muted-foreground">
            Explore and Engage with Your Peers in Class Discussions
          </p>
        </div>
        <Circulars />
      </div>
    </div>
  );
};

export default page;
