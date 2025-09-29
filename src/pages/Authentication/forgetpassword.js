import { Alert, Button, Card, Col, Form, Input, Row } from 'antd'
import { useFormik } from 'formik'
import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { createSelector } from 'reselect'
import ParticleAuth from '../../Common/ParticleAuth'
import { Mail } from 'lucide-react'
import * as Yup from 'yup'
import usecustomStyles from '../../Common/customStyles'
import { userForgetPassword } from '../../slices/thunk'
import styled from 'styled-components'

const customStyles = usecustomStyles()

const StyleWrapper = styled.div`
  background-color: ${({ theme }) => theme.token.authbgcolor};
`

const Forgetpassword = props => {
  // page title
  document.title = 'Olvide mi contraseña' + process.env.REACT_APP_PAGE_TITLE

  const dispatch = useDispatch()

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Por favor ingresa tu email'),
    }),
    onSubmit: async values => {
      const algo = await dispatch(userForgetPassword(values, props.history))
      console.log(algo, 'algo')
    },
  })

  const selectForgetPassword = createSelector(
    state => state.ForgetPassword,
    forgetPassword => ({
      forgetError: forgetPassword.forgetError,
      forgetSuccessMsg: forgetPassword.forgetSuccessMsg,
    }),
  )

  const { forgetError, forgetSuccessMsg } = useSelector(selectForgetPassword)

  return (
    <React.Fragment>
      <StyleWrapper className="auth-page-wrapper">
        <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
          <Col xs={24} lg={16}>
            <Card>
              <Row gutter={[16, 24]}>
                <ParticleAuth />
                <Col xs={24} lg={14}>
                  <Card style={{ border: '0px' }}>
                    <div className="text-center" style={{ margin: '20px' }}>
                      <h5 style={{ fontSize: '20px', color: customStyles.colorPrimary }}>
                        Olvide mi contraseña
                      </h5>
                      <p>Restablece tu contraseña con Blitz</p>

                      <div>
                        <Mail
                          size={50}
                          style={{ color: customStyles.colorDanger, marginTop: '20px' }}
                        />
                      </div>
                    </div>

                    <Alert
                      type="warning"
                      message="Introduce tu Email y te enviaremos las instrucciones!"
                      style={{
                        color: customStyles.colorWarning,
                        marginLeft: '40px',
                        marginRight: '40px',
                      }}
                    ></Alert>

                    <div style={{ marginTop: '0px', padding: '20px 40px' }}>
                      {/* {forgetError && forgetError ? (
                        <Alert
                          type="danger"
                          message={forgetError}
                          style={{ marginTop: '13px' }}
                        />
                      ) : null}
                      {forgetSuccessMsg ? (
                        <Alert
                          type="success"
                          message={forgetSuccessMsg}
                          style={{ margin: '13px 0px' }}
                        />
                      ) : null} */}
                      <Form
                        onSubmit={e => {
                          e.preventDefault()
                          validation.handleSubmit()
                          return false
                        }}
                      >
                        <div>
                          <label>Email</label>
                          <Input
                            name="email"
                            type="email"
                            value={validation.values.email || ''}
                            style={{ marginBottom: customStyles.marginSM }}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            onInvalid={
                              validation.touched.email && validation.errors.email
                                ? validation.touched.email
                                : undefined
                            }
                            status={
                              validation.touched.email && validation.errors.email ? 'error' : true
                            }
                          />
                          {validation.touched.email && validation.errors.email && (
                            <p style={{ color: customStyles.colorDanger }}>
                              {validation.errors.email}
                            </p>
                          )}
                        </div>

                        <div>
                          <Button
                            type="primary"
                            htmlType="submit"
                            style={{ width: '100%' }}
                            onClick={e => {
                              e.preventDefault()
                              validation.handleSubmit()
                              return false
                            }}
                          >
                            Enviar link de reinicio
                          </Button>
                        </div>
                      </Form>
                      <div style={{ marginTop: '50px' }} className="text-center">
                        <p>
                          Recuerdo mi contraseña...{' '}
                          <a
                            href="/login"
                            style={{
                              marginRight: '5px',
                              textDecoration: 'underline',
                              fontWeight: 'bold',
                            }}
                          >
                            Pulse Aquí
                          </a>
                        </p>
                      </div>
                    </div>
                  </Card>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </StyleWrapper>
    </React.Fragment>
  )
}

export default Forgetpassword
