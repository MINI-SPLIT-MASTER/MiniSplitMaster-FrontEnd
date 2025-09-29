import React from 'react'
import { useUserPermission } from '../common/hooks/useUserPermission'

const findPerm = (permList, perm) => permList.find(userPerm => userPerm === perm)

export const hasPermission = (permission, userPermissions) => userPermissions.includes(permission)

export const hasAnyPermissions = (permissions, userPermissions) =>
  permissions?.some(permission => hasPermission(permission, userPermissions)) || false

export const hasAllPermissions = (permissions, userPermissions) => {
  return permissions?.every(permission => hasPermission(permission, userPermissions)) || false
}

export function hasPermissions(userPermissions, requiredPermissions) {
  return requiredPermissions.reduce((acc, perm) => acc && !!findPerm(userPermissions, perm), true)
}

export function hasOneOfPermissions(userPermissions, givenPermissions) {
  return givenPermissions.some(perm => !!findPerm(userPermissions, perm))
}

export const requirePermissionsFunction = ({
  callback,
  requiredPermissions,
  permissionCodes,
  oneOfPermissions,
}) => {
  if (!permissionCodes) {
    return null
  }

  if (requiredPermissions && hasPermissions(permissionCodes, requiredPermissions)) {
    return callback()
  }

  if (oneOfPermissions && hasOneOfPermissions(permissionCodes, oneOfPermissions)) {
    return callback()
  }

  return null
}

const RequirePermissions = ({ children, requiredPermissions, oneOfPermissions }) => {
  const { permissionCodes } = useUserPermission()

  if (!permissionCodes) {
    return null
  }

  if (requiredPermissions && hasPermissions(permissionCodes, requiredPermissions)) {
    return <>{children}</>
  }

  if (oneOfPermissions && hasOneOfPermissions(permissionCodes, oneOfPermissions)) {
    return <>{children}</>
  }

  return null
}

RequirePermissions.displayName = 'RequirePermissions'
export default RequirePermissions
