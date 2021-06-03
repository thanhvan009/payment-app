import { Form, Input, Button} from 'antd';
import {StyledFormSignIn} from './styled';
import Layout from "../../components/Layout";
import {Link} from "react-router-dom";

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 24 },
};

const tailLayout = {
  wrapperCol: { offset: 9, span: 6 },
};

function SignIn() {
  return(
    <Layout>
      <StyledFormSignIn>
        <div className="logo">
          <Link to="/">
            <img
              className="logo"
              src="https://i.ibb.co/mNns8MQ/logo.png"
              alt="logo.png"
            />
          </Link>
        </div>
        <Form
          {...layout}
          name="signIn"
          layout="vertical"
          >
          <div className="form-info">
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>
          </div>
          <div className="form-button-group text-center">
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" block>
              Sign In
            </Button>
          </Form.Item>
          </div>
        </Form>
      </StyledFormSignIn>
    </Layout>
  );
}

export default SignIn