import { Form, Input, Button, Select } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const { Option } = Select;
function SignUp() {
  return (
    <div>
      <h1>Register</h1>
      <Form
        {...layout}
        name="register"
      >
        <Form.Item
          label="First name"
          name="firstName"
          rules={[{ required: true, message: 'Please input your first name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Last name"
          name="lastName"
          rules={[{ required: true, message: 'Please input your last name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="City"
          name="city"
          rules={
            [
              {
                required: false,
                message: 'Please input your city!'
              }
            ]
          }
        >
          <Select defaultValue="">
            <Option value="hcm">HCM</Option>
            <Option value="hn">HN</Option>
            <Option value="hue">Hue</Option>
            <Option value="dn">DN</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Sign up
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
export default SignUp;