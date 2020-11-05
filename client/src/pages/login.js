import { Fragment, useEffect } from 'react';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router'
import useUser from '../middleware/user'
import Navbar from '../components/layout/Navbar';

export default function login() {
  const router = useRouter();
  const {user, mutate} = useUser()

  const formik = useFormik ({
    initialValues: {
      email: '',
      password:''
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().min(6).max(20).required()
    }),
    onSubmit: values => {
      submit(values)
    } 
  })

  async function submit(values) {
    try {
      const res = await fetch('http://localhost:3000/api/login',{
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      })
      const user = await res.json()
      if (!user) {
        router.replace('/register')
        mutate()
      } else {
        router.replace('/dashboard')
      }
  } catch (error) {
    console.log(error) 
  }
  }

  // if logged in, redirect to the dashboard
  useEffect(() => {
    if (user) {
      router.replace("/dashboard");
    }
  }, [user]);

  return (
    <Fragment>
      <Navbar />
      <div className='max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-5xl mx-auto'>
        <form className='bg-gray-700 shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-10' onSubmit={formik.handleSubmit}>
          <p className='text-lg font-bold mb-2'>Sign In</p>
          <div className='mb-4'>
            <label className='block text-sm font-bold mb-2' htmlFor='email'>
              Email
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-gray-800'
              name='email'
              id='email'
              type='email'
              placeholder='email'
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email ? (
            <div role="alert" className='mb-2'>
              <div className="border border-red-400 rounded bg-red-100 px-4 py-3 text-red-700">
                <p>{formik.errors.email}</p>
                </div>
            </div> ) : null}               
           </div>

          <div className='mb-4'>
            <label className='block text-sm font-bold mb-2' htmlFor='password'>
              Password
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-gray-800'
              name='password'
              id='password'
              type='password'
              placeholder='password'
              {...formik.getFieldProps('password')}
            />
            {formik.touched.password && formik.errors.password ? (
            <div role="alert" className='mb-2'>
              <div className="border border-red-400 rounded bg-red-100 px-4 py-3 text-red-700">
                <p>{formik.errors.password}</p>
                </div>
            </div> ) : null}
          </div>

          <span className='space-x-12'>
            {' '}
            <button
              className='bg-red-600 hover:bg-red-500 font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline'
              type='submit'
            >
              Sign In
            </button>
            <a className='inline-block align-baseline font-bold text-sm' href='#'>
              Forgot Password?
            </a>
          </span>
        </form>
        <p className='my-1'>
          Don't have an account?{' '}
          <Link href='/register'>
            <a className='text-teal-200 hover:underline'>Register</a>
          </Link>
        </p>
      </div>
    </Fragment>
  );
}
