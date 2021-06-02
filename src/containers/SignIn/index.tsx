import { Form, Input, Button} from 'antd';
import {StyledFormSignIn} from './styled';

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

const tailLayout = {
  wrapperCol: { offset: 9, span: 6 },
};

function SignIn() {
  return(
    <StyledFormSignIn>
      <Form
        {...layout}
        name="signIn"
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
  );
}

export default SignIn