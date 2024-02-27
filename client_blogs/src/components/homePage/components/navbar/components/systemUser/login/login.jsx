import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import axios from "axios";

import style from "./login.module.scss";

import ModalSuccess from "../../../../../../modals/modals";

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const postInfo = (data) => {
  console.log(data.username);
  console.log(data.password);

  axios({
    method: "post",
    url: "http://127.0.0.1:8000/login",
    data: {
      username: data.username,
      passowrd: data.password,
    },
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

function Login() {
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    setStatus(true);
    setTimeout(() => {
      navigate("/");
      setStatus(false);
    }, 2000);
  };
  return (
    <div className={clsx(style.loginPage, "d-flex-c")}>
      <ModalSuccess status={status} />
      <div className={clsx(style.containerLogin, "d-flex-c")}>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={
            (data) => {
              postInfo(data);
            }
            // handleSubmit
          }
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
export default Login;
