import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DeleteUserById, GetUsers } from "../../utils/api";

const DisplayUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    GetUsers()
      .then((resp) => {
        const allData = resp.data;
        setUsers(allData.data);
      })
      .catch((err) => {
        console.error("Error", err);
      });
  }, []);

  const userDeleteHandler = (id, index) => {
    DeleteUserById(id)
      .then(() => {
        const updatedUsers = [...users];
        updatedUsers.splice(index, 1);
        setUsers(updatedUsers);
      })
      .catch((err) => {
        console.error("Error", err);
      });
  };

  return (
    <div className="container">
      <div className="my-5">
        <h2 className="mb-5">Manage Client</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.length ? (
              users.map((details, index) => (
                <tr key={details.id}>
                  <td>{details.id}</td>
                  <td>{details.first_name}</td>
                  <td>{details.email}</td>
                  <td className="actions">
                    <Link className="nav-link" to={`/add-client/${details.id}`}>
                      <i
                        className="fa fa-pencil-square-o"
                        aria-hidden="true"
                      ></i>
                    </Link>
                    <i
                      onClick={() => userDeleteHandler(details.id, index)}
                      className="fa fa-trash-o"
                      aria-hidden="true"
                    ></i>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4}>
                  <h2>No clients found</h2>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DisplayUser;
