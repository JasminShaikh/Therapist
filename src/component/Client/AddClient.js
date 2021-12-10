import React, { useState, useEffect } from "react";
import { toastError, toastInformation } from "../Common/Toast";
import { useHistory, useParams } from "react-router-dom";
import { AddUser, GetUserData, UpdateUser } from "../../utils/api";

export function AddClient() {
  let { id } = useParams();

  const history = useHistory();

  const userDetails = {
    name: "",
    job: "",
  };
  const [user, setUser] = useState({ ...userDetails });

  const onInputChange = async (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const response = await GetUserData(id);
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (id) {
      getUserDetails();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      // Update User
      UpdateUser(id, user)
        .then((res) => {
          console.log("~ updated res", res);
          toastInformation("Client details updated successfully");
          history.push("/");
        })
        .catch((error) => {
          console.log(error);
          toastError("can not update User");
        });
    } else {
      // Add User
      AddUser(user)
        .then((res) => {
          toastInformation("Client successfully registered");
          history.push("/");
        })
        .catch((error) => {
          console.log(error);
          toastError("Client is not created try again");
        });
    }
  };

  const { name, job } = user;

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="add-client-form">
      <center>
        <h2>{id ? "Update" : "Add"} Client</h2>
        <div style={{ marginTop: "40px" }}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => onInputChange(e)}
              placeholder="Your name here"
              required
            />
          </label>
          <br />
          <label>
            Job:
            <input
              type="text"
              value={job}
              name="job"
              onChange={(e) => onInputChange(e)}
              placeholder="Your profession"
            />
          </label>
          <br />
          <br />
          <input className="btn btn-primary" type="submit" value="Submit" />
        </div>
      </center>
    </form>
  );
}
export default AddClient;
