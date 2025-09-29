import { useStoredUser } from '../../lib/authContext'

// Los valores son la concatenación de modulo y
// sección transformados a minúsculas, sin espacios y separados por un "."
// confirma los valores con la api /role-filter/section
export const PERMISSIONS_SECTIONS = {
  home: 'home',
}

/* export const useUserPermission = () => {
  const { user, loading } = useStoredUser()
  const sectionRolesData = user?.edges?.role?.edges?.sections ?? []
  const sectionRolesCodes = sectionRolesData?.map(section => section.slug)
  return {
    permissions: sectionRolesData,
    permissionCodes: sectionRolesCodes,
    isLogged: !!user,
    loading,
  }
} */
