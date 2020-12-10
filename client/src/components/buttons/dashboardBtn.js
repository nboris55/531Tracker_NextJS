import Link from 'next/link';

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