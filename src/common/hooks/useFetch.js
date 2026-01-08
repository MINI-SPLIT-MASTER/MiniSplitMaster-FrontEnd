import { useEffect, useState } from 'react'

import { getLoggedinUser } from '../../helpers/api_helper'
import { useNavigate } from 'react-router-dom'

export const useFetch = ({
  fetch,
  variables,
  transformData,
  initialValues,
  isGet = true,
  onSuccess,
}) => {
  const [data, setData] = useState(initialValues ?? [])
  const [loading, setLoading] = useState(isGet)
  const [error, setError] = useState(null)
  const user = getLoggedinUser()
  const navigate = useNavigate()

  const fetchData = refetchVars => {
    return new Promise(async (resolve, reject) => {
      setLoading(true)
      try {
        const response = await fetch(refetchVars ?? variables)
        setData(transformData?.(response) ?? response)
        onSuccess?.(response)
        resolve(response) // Resuelve la promesa si todo va bien
      } catch (error) {
        setError(error)
        const refreshToken = user?.data?.refresh_token
        if (error.status === 401 && refreshToken) {
          try {
            try {
              const response = await fetchData(refetchVars ?? variables)
              resolve(response) // Resuelve la promesa si todo va bien
            } catch (error) {
              console.log(error)
              navigate('/')
            }
          } catch (error) {
            console.log(error)
            navigate('/')
          }
        }
        reject(error) // Rechaza la promesa en caso de error
      } finally {
        setLoading(false)
      }
    })
  }

  useEffect(() => {
    if (isGet) {
      const fetch = async () => {
        await fetchData()
      }
      fetch()
    }
  }, [isGet])

  return { data, loading, error, setData, refetch: fetchData }
}
