import { Alert } from "../components/ui/alert";
import axios from "axios";
import { config } from "../common/config";
// import { api } from "../config";

axios.defaults.baseURL = config.apiUrl;
// Header CSRF Token fijo para todas las peticiones
axios.defaults.headers.common["X-CSRFTOKEN"] = "POq5FIzT1mANEaKIlSBl1PPMpDpD0bB9NkzxYgXY9W3y4d3yI4cZfthb4M2wS44z";

// content type
// const authUser = localStorage.getItem("authUser")
// const token = JSON.parse(authUser) ? JSON.parse(authUser).data.access_token : null;

// if (token)
//   axios.defaults.headers.common["Authorization"] = "Bearer " + token;

// Configurar interceptor de respuesta para mostrar notificaciones de error para códigos diferentes a 200
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // Si hay un error en la solicitud, mostrar notificación de error para códigos diferentes a 200
    if (error.response && error.response.status !== 200 && error.response.status !== 401) {
      let desc = error.response.data && error.response.data.message;
      if (typeof desc !== 'string') {
        desc = JSON.stringify(desc || error.message || error);
      }
      Alert({
        message: 'Error',
        description: desc
      });
    }
    return Promise.reject(error);
  }
);

// intercepting to capture errors
axios.interceptors.response.use(
  function (response) {
    return response.data ? response.data : response;
  },

  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    const errorObject = {
      status: error.response ? error.response.status : 500,
    };
    switch (error.status) {
      case 500:
       errorObject.message = "Internal Server Error";
        break;
      case 401:
        errorObject.message = "Invalid credentials";
        break;
      case 404:
        errorObject.message = "Sorry! the data you are looking for could not be found";
        break;
      default:
        errorObject.message = error.message || error;
    }
    return Promise.reject(errorObject);
  }
);

/**
 * Sets the default authorization
 * @param {*} token
 */
// const setAuthorization = (token) => {
//   axios.defaults.headers.common["Authorization"] = token;
// };

// Interceptor para agregar token de autorización a todas las solicitudes
/* axios.interceptors.request.use(config => {
  const userData = localStorage.getItem('authUser');
  const token = JSON.parse(userData) ? JSON.parse(userData)?.data?.access_token : null;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
}); */

class APIClient {
  /**
   * Fetches data from given url
   */

   getMe = (url, config) => {
    return axios.get(url, config);
  };
  get = (url, params) => {
    console.log("GET URL:", url);
    console.log("GET PARAMS:", params);
    console.log("base de axios:", axios.defaults.baseURL);
    let response;

    let paramKeys = [];

    if (params) {
      Object.keys(params).forEach((key) => {
        if (params[key] === '' || params[key] === null || params[key] === undefined) {
          return;
        }
        paramKeys.push(`${key}=${params[key]}`);
      });

      const queryString = paramKeys && paramKeys.length ? paramKeys.join('&') : "";
      response = axios.get(`${url}?${queryString}`, params);
    } else {
      response = axios.get(`${url}`, params);
    }

    return response;
  };

  /**
   * post given data to url
   */
  create = (url, data) => {
    return axios.post(url, data);
  };
  /**
   * Updates data with patch
   */
  update = (url, data) => {
    return axios.patch(url, data);
  };

  /**
   * Updates data with put
   */
  put = (url, data) => {
    return axios.put(url, data);
  };

  /**
   * Delete
   */
  delete = (url, config) => {
    return axios.delete(url, { ...config });
  };
}
const getLoggedinUser = () => {
  const user = localStorage.getItem("authUser");
  if (!user) {
    return null;
  } else {
    return JSON.parse(user);
  }
};

export { APIClient, getLoggedinUser };
