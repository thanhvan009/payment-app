import {
  Form, Input, Button, Select,
  Radio, DatePicker, Checkbox
} from 'antd';
import { StyledFormSignUp } from './styled';

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

const layoutSubmit = {
  labelCol: { span: 0 },
  wrapperCol: { span: 24 },
};

function SignUp() {
  return (
    <StyledFormSignUp>
      <h3 className="main-title">Register</h3>
      <Form
        {...layout}
        name="register"
      >
        <div className="block-info">
          <h4 className="subtitle">Your Personal Details</h4>
          <div className="info-inner">
            <Form.Item
              label="Gender"
              name="gender"
            >
              <Radio.Group>
                <Radio value="Male">Male</Radio>
                <Radio value="Female">Female</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              label="First name"
              name="firstName"
              rules={[{required: true, message: 'Please input your first name!'}]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Last name"
              name="lastName"
              rules={[{required: true, message: 'Please input your last name!'}]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Date of birth"
              name="dateOfBirth"
            >
              <DatePicker />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[{required: true, message: 'Please input your email!'}]}
            >
              <Input />
            </Form.Item>
          </div>
        </div>
        <div className="block-info">
          <h4 className="subtitle">Company Details</h4>
          <div className="info-inner">
            <Form.Item
              label="Company name"
              name="companyName"
            >
              <Input />
            </Form.Item>
          </div>
        </div>
        <div className="block-info">
          <h4 className="subtitle">Options</h4>
          <div className="info-inner">
            <Form.Item
              label="Newsletter"
              name="newsletter"
            >
              <Checkbox />
            </Form.Item>
          </div>
        </div>
        <div className="block-info">
          <h4 className="subtitle">Your password</h4>
          <div className="info-inner">
            <Form.Item
              label="Password"
              name="password"
              rules={[{required: true, message: 'Please input your password!'}]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="Confirm Password"
              name="confirm password"
              rules={[{required: true, message: 'Please input your confirm password!'}]}
            >
              <Input.Password />
            </Form.Item>
          </div>
        </div>
        <div className="submit-wrap text-center">
          <Form.Item {...layoutSubmit}>
            <Button type="primary" htmlType="submit">
              Sign up
            </Button>
          </Form.Item>
        </div>
      </Form>
    </StyledFormSignUp>
  );
}
export default SignUp;