
import { data } from 'react-router-dom'
import { APIClient } from './api_helper'

import * as url from './url_helper'

const api = new APIClient()
// Gets the logged in user data from local session

// Gets the logged in user data from local session
export const getLoggedInUser = () => {
  const user = sessionStorage.getItem('user')
  if (user) return JSON.parse(user)

  return null
}

// is user is logged in
export const isUserAuthenticated = () => {
  return getLoggedInUser() !== null
}

// Obtener MiniSplits
export const getMiniSplits = data => api.get(url.GET_MINI_SPLITS, null)
// Crear un nuevo MiniSplit
export const createMiniSplit = data => api.create(url.CREATE_MINI_SPLIT, null)
// Obtener un MiniSplit por ID
export const getMiniSplitById = ({ id }) => api.get(url.GET_MINI_SPLIT_BY_ID.replace(':id', id), null)
// Actualizar un MiniSplit por ID
export const updateMiniSplit = ({ id, ...data }) => api.update(url.UPDATE_MINI_SPLIT.replace(':id', id), data)
// Actualizar parcialmente un MiniSplit por ID
export const patchMiniSplit = ({ id, ...data }) => api.patch(url.PATCH_MINI_SPLIT.replace(':id', id), data)
// Eliminar un MiniSplit por ID
export const deleteMiniSplit = ({ id }) => api.delete(url.DELETE_MINI_SPLIT.replace(':id', id), null)
