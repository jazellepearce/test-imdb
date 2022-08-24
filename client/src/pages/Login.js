import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import Nav from './Nav'
import "../index.css";
import { useNavigate } from 'react-router-dom';

import {

  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
  Upload,
} from 'antd';
const { RangePicker } = DatePicker;
const { TextArea } = Input;

const App = () => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([])
  const [componentDisabled, setComponentDisabled] = useState(false);
  const onFinish = (values) => {
    navigate('/')
    console.log(values);
  };
  const onFormLayoutChange = ({ disabled }) => {
   /* setComponentDisabled(disabled);
  };*/}
  const navigate = useNavigate()

  return (
    <>
<Nav></Nav>
      <Form
      form={form}
      onFinish={onFinish}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        onValuesChange={onFormLayoutChange}
        disabled={componentDisabled}
      >



        <Form.Item label="Username"name="username">
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input.Password />
        </Form.Item>



        <Form.Item label="Login">
          <Button htmlType="submit">Login</Button>
        </Form.Item>
      </Form>
      <Button type='link' onClick={() => {
        navigate('/createaccount')
      }}>Don't have an account register here</Button>
    </>
  );
};

export default App;