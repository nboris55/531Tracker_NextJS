import Link from 'next/link';

export function AuthLinks() {
  return (
      <div className='space-x-3'>
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
  );
}

export function Logout() {

  return (
    <Link href='/'>
      <span className='text-teal-200 text-xl hover:text-white cursor-pointer'>
        Logout
      </span>
    </Link>
  );
}
export function Dashboard() {
  return (
    <div className='text-center sm:text-left'>
     <Link href='/dashboard'>
            <a className='block sm:inline-block rounded-full py-1 px-3 bg-red-600 hover:bg-red-500 focus:outline-none focus:shadow-outline mb-2'>
              Back to dashboard
            </a>
          </Link>
  </div>
  );
}




