import React, { useEffect, useState } from 'react'
import { hasAllPermissions, hasAnyPermissions } from './RequirePermissions'
import UnauthorizedPage from '../pages/ErrorPages/403'
import { useUserPermission } from '../common/hooks/useUserPermission'
import { Spin } from 'antd'

const matchAll = match => match === 'all'

const SectionRoute = ({ permissions, matchPermission = 'all', children }) => {
  const { permissionCodes, loading } = useUserPermission()

  const [showContent, setShowContent] = useState(false)

  // Todo eliminar el useEffect e implementar un loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  // Todo eliminar showContent state e implement loading
  // Prevents race condition
  if (loading || !showContent) {
    return (
      <Spin
        style={{
          width: '100%',
          height: 'calc(100vh - 140px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
    )
  }

  const hasSectionPermissions = () => {
    if (!permissions) {
      return true
    }

    if (matchAll(matchPermission)) {
      return hasAllPermissions(permissions, permissionCodes)
    }

    return hasAnyPermissions(permissions, permissionCodes)
  }

  return hasSectionPermissions() ? children : <UnauthorizedPage />
}

SectionRoute.displayName = 'Route'
export default SectionRoute
