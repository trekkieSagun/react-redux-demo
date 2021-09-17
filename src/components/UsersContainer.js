import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux/User/userAction";

function UsersContainer({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="item-container">
      {userData.loading ? (
        <p>Loading Users</p>
      ) : userData.error ? (
        <p>{userData.error}</p>
      ) : (
        <div>
          <h2>USerLists</h2>
          {userData &&
            userData.users &&
            userData.users.map((user) => <p>{user.name}</p>)}
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
