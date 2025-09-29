import React, { useEffect, useState } from 'react'
import { Card, Form, Input, Button, Checkbox, Row, Col, Alert } from 'antd';
import usecustomStyles from '../../Common/customStyles';
import ParticleAuth from '../../Common/ParticleAuth';
import { useFormik } from 'formik';
import styled from 'styled-components';

// actions
import { loginUser, resetLoginFlag } from "../../slices/thunk";
import { useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import withRouter from '../../Common/withRouter';
import { Link } from 'react-router-dom';
import { loginProcess } from '../../slices/auth/login/reducer';

const customStyles = usecustomStyles();

const StyleWrapper = styled.div`
    background-color: ${({ theme }) => theme.token.authbgcolor};
`

const Signin = (props) => {

    // page title
    document.title = "Sign In" + process.env.REACT_APP_PAGE_TITLE;

    const dispatch = useDispatch();

    const selectAccountAndLogin = createSelector(
        (state) => state.Account,
        (state) => state.Login,
        (account, login) => ({
            user: account.user,
            error: login.error,
            loading: login.loading,
            errorMsg: login.errorMsg,
        })
    );

    const { user, error, loading, errorMsg } = useSelector(selectAccountAndLogin);

    const [isLoading, setLoading] = useState(loading)

    const [userLogin, setUserLogin] = useState([]);

    useEffect(() => {
        if (user && user) {

            const updatedUserData = process.env.REACT_APP_DEFAULTAUTH === "firebase" ? user.multiFactor.user.email : user.email;
            const updatedUserPassword = process.env.REACT_APP_DEFAULTAUTH === "firebase" ? "" : user.password;

            setUserLogin({
                email: updatedUserData,
                password: updatedUserPassword
            });
        }
    }, [user]);

    // Validation

    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            email: userLogin.email || '',
            password: userLogin.password || '',
        },

        validationSchema: Yup.object({
            email: Yup.string().required("Por favor ingresa tu email"),
            password: Yup.string().required("Por favor ingresa tu contraseña"),
        }),

        onSubmit: (values) => {
            try {
            dispatch(loginProcess())
            dispatch(loginUser(values, props.router.navigate));
            setLoading(true)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
    });

    useEffect(() => {
        if (errorMsg) {
            setTimeout(() => {
                dispatch(resetLoginFlag());
            }, 3000);
        }
    }, [dispatch, errorMsg]);

    return (
        <React.Fragment>
            <StyleWrapper className="auth-page-wrapper">
                <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
                    <Col xs={24} lg={14} >
                        <Card>
                            <Row gutter={[16, 24]}>
                                <ParticleAuth />
                                <Col xs={24} lg={12} >
                                    <div style={{ border: "0px" }}>

                                        <div className="text-center" style={{ margin: "20px" }}>
                                            <h5 style={{ fontSize: "20px", color: customStyles.colorPrimary }}>Bienvenido</h5>
                                            <p>Registrate para continuar a Blitz</p>
                                        </div>

                                        <div style={{ marginTop: "30px", padding: "40px" }} >
                                            {error && error ? (<Alert type="error" message={error} ></Alert>) : null}
                                            <Form onSubmit={(e) => {
                                                e.preventDefault();
                                                validation.handleSubmit();
                                                return false;
                                            }}>

                                                <div>
                                                    <label style={{ display: 'block', marginBottom: '4px' }}>Usuario</label>
                                                    <Input
                                                        name="email"
                                                        style={{ margin: "10px 0px", boxShadow: 'none', outline: 'none' }}
                                                        type="email"
                                                        value={validation.values.email || ""}
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        onInvalid={validation.touched.email && validation.errors.email ? validation.touched.email : undefined}
                                                        status={validation.touched.email && validation.errors.email ? "error" : true} />
                                                    {validation.touched.email && validation.errors.email &&
                                                        <p style={{ color: customStyles.colorDanger }}>{validation.errors.email}</p>}
                                                </div>

                                                <div>
                                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                        <label style={{ display: 'block', marginBottom: '4px' }}>Contraseña</label>
                                                        <Link to="/forgot-password" style={{ fontSize: '11px' }}>Olvide Contraseña</Link>
                                                    </div>
                                                    <Input.Password
                                                        name="password"
                                                        value={validation.values.password || ""}
                                                        onChange={validation.handleChange}
                                                        style={{ boxShadow: 'none', outline: 'none' }}
                                                        onBlur={validation.handleBlur}
                                                        onInvalid={validation.touched.password && validation.errors.password ? validation.touched.password : undefined}
                                                        status={validation.touched.password && validation.errors.password ? "error" : true}
                                                    />
                                                    {validation.touched.password && validation.errors.password &&
                                                        <p style={{ color: customStyles.colorDanger }}>{validation.errors.password}</p>}
                                                </div>

                                                <div style={{ height: 20 }} />
                                                {/* <Form.Item>
                                                    <Form.Item name="remember" valuePropName="checked" noStyle>
                                                        <Checkbox style={{ marginTop: '10px' }}>Recordarme</Checkbox>
                                                    </Form.Item>
                                                </Form.Item> */}

                                                <div>
                                                    <Button htmlType="submit" type='primary'
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            validation.handleSubmit();
                                                            return false;
                                                        }}
                                                        style={{ width: "100%" }} loading={isLoading}>
                                                        {" "}  Iniciar Sesión
                                                    </Button>
                                                </div>
                                            </Form>

                                            {/* <div style={{ marginTop: "50px" }} className="text-center">
                                                <p>No tiene una cuenta?  <Link to="/register" style={{ marginRight: "5px", textDecoration: "underline", color: customStyles.colorSecondary, fontWeight: "bold" }}>Registrarse</Link></p>
                                            </div> */}

                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </StyleWrapper>

        </React.Fragment>
    )
}

export default withRouter(Signin)