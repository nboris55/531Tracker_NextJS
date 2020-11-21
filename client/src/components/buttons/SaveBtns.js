import Link from 'next/link';

export function saveBtn () {
    return (
        <button
              className='bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 mb-2 ml-4'
              type='submit'
            >
              Save
        </button>
    )
}

export function disabledSaveBtn () {
    return (
        <button
              className='bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 
              rounded focus:outline-none focus:shadow-outline mt-4 mb-2 ml-4
              opacity-50 cursor-not-allowed'
              type='submit'
            >
              Save
        </button>
    )
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

