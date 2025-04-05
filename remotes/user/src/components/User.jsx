const User = ({ user }) => {
  // console.log(user);

  return (
    <div
      style={{
        width: "400px",
        height: "400px",
        border: "1px solid gray",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <h3
        className="text-2xl font-semibold text-green-500"
        style={{ textAlign: "center", textDecoration: "underline" }}
      >
        User info
      </h3>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          marginTop: "50px",
        }}
        className="flex items-center justify-center gap-5"
      >
        <img
          src={user?.photoURL}
          className=""
          alt=""
          style={{ borderRadius: "50%" }}
        />
        <div className="">
          <h3
            className="text-xl font-semibold"
            style={{ fontSize: "20px", fontWeight: "600" }}
          >
            {user?.displayName}
          </h3>
          <h3>{user?.email}</h3>
        </div>
      </div>
    </div>
  );
};

export default User;
