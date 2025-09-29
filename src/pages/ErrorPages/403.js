import React from 'react'
import { Card, Result } from 'antd'
import styled from 'styled-components'

const WrapperResultStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 140px); // 140px is the height of the header and footer
`

const NotFoundPage = () => {
  // page title
  document.title = '403 Error' + process.env.REACT_APP_PAGE_TITLE

  return (
    <WrapperResultStyled>
      <Card>
        <Result
          status="403"
          title="Acceso Restringido"
          subTitle="Lo sentimos, no tienes permisos para acceder a esta página. Por favor,
                          ponte en contacto con el administrador del sistema si crees que deberías
                          tener acceso."
        />
      </Card>
    </WrapperResultStyled>
  )
}

export default NotFoundPage
