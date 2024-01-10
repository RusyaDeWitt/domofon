import {Button, Form, Input, message} from 'antd'
import { useNavigate } from "react-router-dom";
import './styles.css'

export default function LoginPage () {

    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish = () => {
        if(form.getFieldsValue().username === 'username' && form.getFieldsValue().password === 'password') {
            navigate('/users')
        }else{
            message.error("Wrong username or password!")
        }
    }

    return (
        <div className="login__body">
            <Form form={form} onFinish={onFinish}>
                <Form.Item rules={[{required: true, message: 'Enter the username!' }]} label='Username' name="username">
                    <Input />
                </Form.Item>
                <Form.Item rules={[{required: true, message: 'Enter the password!' }]} label='Password' name="password">
                    <Input.Password />
                </Form.Item>
                <Form.Item>
                    <Button style={{width: '100%'}} type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
        </div>
    )
}
