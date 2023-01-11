import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Form, Input, Toast } from "antd-mobile";
import Logo from "../assets/images/Icon.png";
import { getRequest } from "../utils/request";
import { useDispatch } from "react-redux";
import { login } from "../redux/user";

function Login() {
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  const navigate = useHistory();
  const onFinish = (values) => {
    setLoading(true);
    getRequest("users")
      .then(({ data }) => {
        setLoading(false);
        const result = data.find(
          (res) =>
            res.username === values.username && res.email === values.email
        );
        if (result) {
          dispatch(login({ ...result, auth: true }));
          localStorage.setItem(
            "user",
            JSON.stringify({ ...result, auth: true })
          );
          Toast.show({
            icon: "success",
            content: `Hi ${result.name || "Success"}`,
          });
          navigate.push("/home");
        } else {
          Toast.show({
            icon: "fail",
            content: "username or email error",
          });
          localStorage.removeItem("user");
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  return (
    <div className="login">
      <div className="login_header">
        <h1>Kirish</h1>
      </div>
      <div className="login_logo">
        <img src={Logo} alt="..." />
      </div>
      <Form layout="horizontal" onFinish={onFinish} className="login_form">
        <Form.Item name="username">
          <Input placeholder="Login" clearable />
        </Form.Item>
        <Form.Item name="email">
          <Input placeholder="email" clearable type="email" />
        </Form.Item>
        <div className="form_btn">
          <Button
            block
            color="primary"
            size="middle"
            htmlType="submit"
            type="submit"
            loading={loading}
          >
            Login
          </Button>
        </div>
      </Form>

      <div className="sign_in">
        <Link to="/sign-in">Royhatdan o`tish</Link>
      </div>
    </div>
  );
}

export default Login;
