import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'

export default function Navbar({signedIn}) {
  const router = useRouter()
  function logout () {
    Cookies.remove('auth')
    router.replace('/')
  }
  return (
    <nav className='flex items-center justify-between bg-gray-700 p-3 h-16 nav'>
      <div className='flex items-center flex-shrink-0 text-white'>
        <span className='font-semibold text-2xl tracking-tight'>
          <FontAwesomeIcon icon={faDumbbell} /> 531 TRACKER
        </span>
      </div>
      {signedIn ? <div className='space-x-3'>
      <Link href='/profiles'>
          <a className='text-red-200 text-xl hover:text-white'>
            Profiles
          </a>
      </Link>
      <Link href='/'>
        <button className='text-teal-200 text-xl hover:text-white cursor-pointer' onClick={logout} >
          Logout
        </button>
      </Link>
    </div>  : (<div className='space-x-3'>
        <Link href='/register'>
          <a className='text-teal-200 text-xl hover:text-white'>
            Register
          </a>
        </Link>
        <Link href='/login'>
          <a className='text-teal-200 text-xl hover:text-white'>
            Login
          </a>
        </Link>
      </div>
      )}
    </nav>
  );
}
