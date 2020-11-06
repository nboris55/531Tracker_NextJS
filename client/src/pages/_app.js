import '../../styles/index.css';
import { SWRConfig } from 'swr'
import { AuthProvider } from '../context/auth'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
    <SWRConfig  value={{ fetcher: (url) => fetch(url).then(res => res.json())
    }}>
         <Component {...pageProps} />
    </SWRConfig>
    </AuthProvider>
   ) ;
}

export default MyApp;
