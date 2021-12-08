import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Alert, Typography, Card, Row, Col } from 'antd';
import FormItem from 'antd/lib/form/FormItem';

const { Title } = Typography;

/** Login form.
 *
 * Shows form and manages update to state on changes.
 * On submission:
 * - calls login function prop
 * - redirects to / route
 *
 * Routed as /login
 */

function LoginForm({ login }) {
    const history = useHistory();
    const [formData, setFormData] = useState({
      username: "",
      password: "",
    });
    const [formErrors, setFormErrors] = useState([]);
  
    console.debug(
        "LoginForm",
        "login=", typeof login,
        "formData=", formData,
        "formErrors", formErrors,
    );
  
    /** Handle form submit:
     *
     * Calls login func prop and, if successful, redirect to /
     */
  
    async function handleSubmit(evt) {
    //   evt.preventDefault();
      let result = await login(formData);
      if (result.success) {
        history.push("/");
      } else {
        setFormErrors(result.errors);
      }
    }
  
    /** Update form data field */
    function handleChange(evt) {
      const { name, value } = evt.target;
      setFormData(l => ({ ...l, [name]: value }));
    }
  
    return (

        <Row style={{marginBottom: 80}}>
            <Col span={10} offset={5}>
                <Card style={{ width: 600, height: 600}}>
                    <Title level={5} span={5}> Log In to Cryble</Title>
                    <Form
                        labelCol={{
                                    span: 8,
                                }}
                        wrapperCol={{
                                    span: 16,
                                    }}
                        initialValues={{
                                    remember: true,
                                    }}
                        onSubmit={handleSubmit}
                        onFinish={handleSubmit}
                    >
                            <Form.Item
                                label="Username">
                                <Input 
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    autoComplete="username"
                                    required
                                />

                            </Form.Item>
                            <Form.Item
                                label="Password">
                                <Input.Password
                                   type="password"
                                   name="password"
                                   className="form-control"
                                   value={formData.Password}
                                   onChange={handleChange}
                                   autoComplete="current-password"
                                   required
                                />

                            </Form.Item>
                            <Form.Item>
                                {formErrors.length ? 
                                formErrors.map( formError => <Alert type="error" message={formError} />)
                                : null
                                }
                            </Form.Item>
                            <FormItem
                                wrapperCol={{
                                                offset: 8,
                                                span: 16,
                                            }}
                            >
                                <Button type="primary" onSubmit={handleSubmit} htmlType="submit"> Submit</Button>
                            </FormItem>
                    </Form>
                </Card>
            </Col>
        </Row>

    );
  }
  
  export default LoginForm;
