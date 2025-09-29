// import { useQuery } from '@tanstack/react-query'
import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import { createSelector } from 'reselect'
// import { getLoggedinUser } from '../helpers/api_helper'
// import {
//   getAuthMe,
//   getTicketConfiguration,
//   postFakeRefreshToken,
//   updateContact,
// } from '../helpers/backend_helper'
// import { loginSuccess } from '../slices/auth/login/reducer'
/* 
export const useUpdateUser = () => {
  const { user } = useStoredUser()
  const loggedUser = getLoggedinUser()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const updateUser = async () => {
    try {
      const userData = await getAuthMe()
      dispatch(
        loginSuccess({
          ...user,
          ...userData.data,
          has_forgot_password: Boolean(userData?.data?.has_forgot_password),
        }),
      )
    } catch (error) {
      const refreshToken = loggedUser?.data?.refresh_token
      if (error.status === 401 && refreshToken) {
        try {
          const tokenRes = await postFakeRefreshToken({
            refresh_token: refreshToken,
          })
          const userData = await getAuthMe(tokenRes?.data?.access_token)
          dispatch(
            loginSuccess({
              ...userData.data,
              ...tokenRes,
              has_forgot_password: Boolean(userData?.data?.has_forgot_password),
            }),
          )
          localStorage.setItem('authUser', JSON.stringify(tokenRes))
          navigate(0)
        } catch (error) {
          if (error.status !== 200) {
            localStorage.removeItem('authUser')
            navigate(0)
          }
        }
      }
    }
  }

  return { updateUser }
} */

export const AuthProvider = ({ children }) => {
/*   const { updateUser } = useUpdateUser()
  const { user } = useStoredUser()
  const loggedUser = getLoggedinUser()
  const navigate = useNavigate()

  useEffect(() => {
    if (!loggedUser?.data?.access_token || user?.id) return
    void updateUser()
  }, [])

  useEffect(() => {
    if (!user?.has_forgot_password) return
    navigate('/user-profile')
  }, [user?.has_forgot_password]) */

  return <React.Fragment>{children}</React.Fragment>
}
/* 
const useStoredUser = () => {
  const ticketConfigurationQuery = useQuery({
    queryKey: ['ticket-configuration'],
    queryFn: () => getTicketConfiguration(),
  })

  const ticketConfiguration = ticketConfigurationQuery?.data?.data

  const userDataFromRedux = createSelector(
    state => state.Login,
    state => state.user,
  )

  const loadingLoginFromRedux = createSelector(
    state => state.Login,
    state => state.loading,
  )

  const user = useSelector(userDataFromRedux)
  const loading = useSelector(loadingLoginFromRedux)

  const isProductCompanyDetailSlug = user?.edges?.company?.detail_slug === 'producto'
  const isServiceCompanyDetailSlug = user?.edges?.company?.detail_slug === 'servicio'
  const isAsesor = user?.edges?.role?.slug === 'asesor'

  return {
    user,
    isLogged: Boolean(user?.id),
    token: user?.data?.access_token,
    loading,
    isAsesor,
    isProductCompanyDetailSlug,
    isServiceCompanyDetailSlug,
    ticketConfiguration,
  }
}

export const useToggleUserStatus = () => {
  const { user } = useStoredUser()
  const isActive = user?.status === 'Activo'
  const { updateUser } = useUpdateUser()

  const handleToggle = async () => {
    try {
      await updateContact({
        id: user?.id,
        status: isActive ? 'Inactivo' : 'Activo',
      })
      void updateUser()
    } catch (error) {
      console.error('Error updating user status:', error)
    }
  }

  return { handleToggle, isActive }
} */

// export { AuthProvider, useStoredUser }
