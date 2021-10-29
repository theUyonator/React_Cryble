import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Alert, Typography, Card, Row, Col } from 'antd';


const { Title } = Typography;

/** Signup form.
 *
 * Shows form and manages update to state on changes.
 * On submission:
 * - calls signup function prop
 *
 * Routed as /signup
 */

function SignupForm({ signup }) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState([]);

  console.debug(
      "SignupForm",
      "signup=", typeof signup,
      "formData=", formData,
      "formErrors=", formErrors,
  );

  /** Handle form submit:
   *
   * Calls login func prop and, if successful, redirect to /
   */

  async function handleSubmit(evt) {
    // evt.preventDefault();
    let result = await signup(formData);
    if (result.success) {
      history.push("/");
    } else {
      setFormErrors(result.errors);
    }
  }

  /** Update form data field */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(data => ({ ...data, [name]: value }));
  }

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  return (
    <Row style={{marginBottom: 80}}>
    <Col span={10} offset={5}>
        <Card style={{ width: 600, height: 600}}>
            <Title level={5} span={5}> Sign up to use Cryble today</Title>
            <Form
            {...formItemLayout}
            name="signup"
            onFinish={handleSubmit}
            scrollToFirstError
            >
                <Form.Item
                    label="Username"
                >
                    <Input 
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </Form.Item>

                <Form.Item
                    label="Password"
                >
                    <Input.Password 
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </Form.Item>
                <Form.Item
                    label="Firstname"
                >
                    <Input 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </Form.Item>
                <Form.Item
                    label="Lastname"
                >
                    <Input 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </Form.Item>
                <Form.Item
                    label="E-mail"
                >
                    <Input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </Form.Item>
                <Form.Item>
                        {formErrors.length ? 
                            formErrors.map( formError => <Alert type="error" message={formError} />)
                            : null
                    }
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" onSubmit={handleSubmit}>
                        Signup
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    </Col>
</Row>

  );
}

export default SignupForm;