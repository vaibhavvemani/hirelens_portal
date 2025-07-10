

const Profile = () => {
    return (
      <div className="w-full flex justify-center mt-4">
        <div className="flex flex-col flex-1 gap-5 max-w-[1300px] px-4 pb-3">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h1 className="text-2xl font-extrabold">Profile</h1>
              <p className="font-medium text-muted-foreground">
                View and manage your personal profile information.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Profile;