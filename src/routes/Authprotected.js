// import React, { useEffect } from 'react'
// import { useDispatch } from 'react-redux';
// import { useProfile } from '../Common/Hooks/UserHooks';
// import { logoutUser } from '../slices/thunk';
// import { Navigate } from 'react-router-dom';

// const AuthProtected = (props) => {
//   const dispatch = useDispatch();
//   const { userProfile, loading, token } = useProfile();

//   useEffect(() => {
//     if (userProfile && !loading && token) {
//       // setAuthorization(token);
//     } else if (!userProfile && loading && !token) {
//       dispatch(logoutUser());
//     }
//   }, [token, userProfile, loading, dispatch]);

//   /*
//     Navigate is un-auth access protected routes via url
//     */

//   if (!userProfile && loading && !token) {
//     return (
//       <Navigate to={{ pathname: "/login"}} />
//     );
//   }

//   return <>{props.children}</>;
// }

// export default AuthProtected
