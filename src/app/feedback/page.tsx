

const Feedback = () => {
  return (
    <div className="w-full flex justify-center mt-4">
      <div className="flex flex-col flex-1 gap-5 max-w-[1300px] px-4 pb-3">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h1 className="text-2xl font-extrabold">Feedback</h1>
            <p className="font-medium text-muted-foreground">
              Please provide your feedback for the placement drive rounds.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;