import { Navigate } from 'react-router-dom'
import { PERMISSIONS_SECTIONS as permissions } from '../common/hooks/useUserPermission'
import { HomePage } from '../pages/home'
import { ContactPage } from '../pages/contact'
import { InstallNowPage } from '../pages/install-now'
import { PrivacyPolicyPage } from '../pages/legal/privacyPolicy'
import { TermsConditionsPage } from '../pages/legal/termsConditions'
import { RefundPolicyPage } from '../pages/legal/refundPolicy'
// import { Forgetpassword } from '../pages/Authentication/forgetpassword'
// import { Signin } from '../pages/Authentication/login'
// import { Logout } from '../pages/Authentication/logout'
// import { Register } from '../pages/Authentication/register'

const authProtectedRoutes = [
  {
    path: '/',
    exact: true,
    component: <Navigate to="/" />,
    permissions: [permissions.home],
  },
  //HOME path
  { path: '/', component: (<span>Home</span>), permissions: [permissions.home] },
  { path: '/', component: <Navigate to="/" />, permissions: [permissions.home] },
]

const publicRoutes = [
  // Authentication
  // { path: '/login', component: <Signin /> },
  // { path: '/logout', component: <Logout /> },
  // { path: '/register', component: <Register /> },
  // { path: '/forgot-password', component: <Forgetpassword /> },
  { path: '/login', component: (<span>Login</span>) },
  { path: '/logout', component: (<span>Logout</span>) },
  { path: '/register', component: (<span>Register</span>) },
  { path: '/forgot-password', component: (<span>Forgot Password</span>) },
  { path: '/', component: <HomePage /> },
  { path: '/install-now', component: (<InstallNowPage />) },
  { path: '/contact', component: <ContactPage /> },
  { path: '/orders', component: (<span>Orders</span>) },
  { path: '/privacy-policy', component: (<PrivacyPolicyPage />) },
  { path: '/terms-and-conditions', component: (<TermsConditionsPage />) },
  { path: '/refund-policy', component: (<RefundPolicyPage />) },

]

export { authProtectedRoutes, publicRoutes }
