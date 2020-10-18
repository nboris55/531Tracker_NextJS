import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AuthLinks, Logout } from './links';

export default function Navbar() {
  let loggedIn = false;

  return (
    <nav className='flex items-center justify-between bg-gray-700 p-3 h-16 nav'>
      <div className='flex items-center flex-shrink-0 text-white'>
        <span className='font-semibold text-2xl tracking-tight'>
          <FontAwesomeIcon icon={faDumbbell} /> 531 TRACKER
        </span>
      </div>
      {loggedIn ? <Logout /> : <AuthLinks />}
    </nav>
  );
}
