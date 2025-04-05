import React, { lazy, Suspense } from "react";
import { useAuth } from "@shared/AuthProvider";
import { useAuthStore } from "../../shared/authStore";
const RemoteUser = lazy(() => import("remoteUser/User"));

const App = () => {
  const { user, loading, logOut } = useAuth();
  console.log(user);

  const handleLogout = async () => {
    await logOut();
  };
  const userFromRoot = useAuthStore((state) => state.user);
  console.log(userFromRoot);
  return (
    <div>
      {loading && (
        <p className="text-center mt-10 text-lg font-medium text-green-500 animate-pulse">
          Loading...
        </p>
      )}
      <h2 className="text-xl text-center text-purple-500 font-semibold">
        This is Host App.
      </h2>
      <div
        style={{ marginTop: "50px" }}
        className="flex items-center justify-center"
      >
        <Suspense fallback={<p>Loading user info...</p>}>
          <RemoteUser user={user} />
        </Suspense>
      </div>

      <div className="text-center">
        <button
          onClick={handleLogout}
          className="bg-red-500 px-5 text-white py-2 rounded-lg mt-5 cursor-pointer hover:bg-red-600 font-medium"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default App;
