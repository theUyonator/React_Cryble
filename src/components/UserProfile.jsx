import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../auth/UserContext';
import CrybleApi from '../api/api';
import { Form, Input, Button, Alert, Typography, Card, Row, Col, Space } from 'antd';

const { Title } = Typography;

/** User profile.
 *
 * Displays profile form and handles changes to local form state.
 * Submitting the form calls the API to save, and triggers user reloading
 * throughout the site.
 *
 * Confirmation of a successful save is a simple <Alert>.
 *
 * Routed as /profile
 */

function UserProfile({ logout }) {
    const history = useHistory();
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [formData, setFormData] = useState({
      firstName: currentUser.firstName,
      lastName: currentUser.lastName,
      email: currentUser.email,
      password: "",
    });
    const [formErrors, setFormErrors] = useState([]);
    const [saveConfirmed, setSaveConfirmed] = useState(false);
  
    console.debug(
        "UserProfile",
        "currentUser=", currentUser,
        "formData=", formData,
        "formErrors=", formErrors,
        "saveConfirmed=", saveConfirmed,
    );
  
    /** on form submit:
     * - attempt save to backend & report any errors
     * - if successful
     *   - clear previous error messages and password
     *   - show save-confirmed message
     *   - set current user info throughout the site
     */
  
    async function handleSubmit(evt) {
    //   evt.preventDefault();
  
      let profileData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
      };
  
      let username = currentUser.username;
      let updatedUser;
  
      try {
        updatedUser = await CrybleApi.saveProfile(username, profileData);
      } catch (errors) {
        debugger;
        setFormErrors(errors);
        return;
      }
  
      setFormData(f => ({ ...f, password: "" }));
      setFormErrors([]);
      setSaveConfirmed(true);
  
      // trigger reloading of user information throughout the site
      setCurrentUser(updatedUser);
    }

    async function handleDelete(evt){
        // evt.preventDefault()
        let username = currentUser.username;

        try {
            await CrybleApi.deleteProfile(username);
          } catch (errors) {
            debugger;
            setFormErrors(errors);
            return;
          }
        logout();
        history.push("/");
    }
  
    /** Handle form data changing */
    function handleChange(evt) {
      const { name, value } = evt.target;
      setFormData(f => ({
        ...f,
        [name]: value,
      }));
      setFormErrors([]);
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
                    <Title level={5} span={5}> {currentUser.username}'s Cryble Account</Title>
                    <Form
                    {...formItemLayout}
                    name="signup"
                    onFinish={handleSubmit}
                    scrollToFirstError
                    >
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
                        <Form.Item
                            label="Enter correct password"
                        >
                            <Input.Password 
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </Form.Item>
                        <Form.Item>
                                {formErrors.length ? 
                                    formErrors.map( formError => <Alert type="error" message={formError} />)
                                    : null
                                }
                                {saveConfirmed
                                    ?
                                    <Alert type="success" message="Updated successfully."/>
                                    : null
                                }
                        </Form.Item>
                        <Form.Item {...tailFormItemLayout}>
                            <Space>
                                <Button type="primary" htmlType="submit" onSubmit={handleSubmit}>
                                    Edit profile
                                </Button>
                                <Button type="danger"  onClick={handleDelete}>
                                    Delete profile
                                </Button>
                            </Space>
                        </Form.Item>
                    </Form>
                </Card>
            </Col>
        </Row>
   
    );
  }
  
  export default UserProfile;
  
