import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

import "./style.less";

const Login = () => {

  const history = useHistory();
  
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    history.push("/");
  };

  return (
    <>
      <div className="login-container">
        <h1 className="title">ورود به سایت</h1>
        <Form name="normal_login" className="login-form" onFinish={onFinish}>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "نام کاربری خود را وارد کنید!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="نام کاربری"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "رمز عبور خود را وارد کنید!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="رمز عبور"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              ورود
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Login;
