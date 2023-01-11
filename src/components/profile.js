import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CameraOutline, EditFill } from "antd-mobile-icons";
import { Button } from "antd-mobile";
import { logout } from "../redux/user";
// import Avatar from "../assets/images/avatar.png";

function Profile() {
  const dispatch = useDispatch();
  const navigate = useHistory()["replace"];
  const userDate = useSelector(({ user }) => user);

  const exit = () => {
    dispatch(logout());
    navigate("/splash");
  };
  return (
    <div className="profile">
      <div className="profile_image">
        {/* <img src={Avatar} alt="" /> */}
        <label className="profile_image_reletive">
          <input type="file" hidden />
          <CameraOutline />
        </label>
      </div>
      <div className="profile_about">
        <h2>Shahsiy malumotlar</h2>
        <div className="profile_edit">
          <div className="edit_in">
            <p>Ism</p>
            <h3>{userDate.username}</h3>
          </div>
          <EditFill />
        </div>

        <div className="profile_edit">
          <div className="edit_in">
            <p>Email</p>
            <h3>{userDate.email}</h3>
          </div>
          <EditFill />
        </div>

        <div className="profile_edit">
          <div className="edit_in">
            <p>Login</p>
            <h3>{userDate.website}</h3>
          </div>
          <EditFill />
        </div>
      </div>
      <div className="profile_btn">
        <Button>Parolni o`zgartirish</Button>
        <Button onClick={exit}>Akkauntdan chiqish</Button>
      </div>
    </div>
  );
}

export default Profile;
