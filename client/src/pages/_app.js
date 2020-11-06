import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import '../../styles/index.css';
import { AuthProvider } from '../context/auth'

function MyApp({ Component, pageProps }) {
  return (
  <AuthProvider><Component {...pageProps} /></AuthProvider>
 

   ) ;
}

export default MyApp;
