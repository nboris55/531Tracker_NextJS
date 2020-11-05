import { Fragment, useEffect } from 'react';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {useRouter} from 'next/router'
import useUser from '../middleware/user'
import Navbar from '../components/layout/Navbar';

export default function register() {
  const router = useRouter()
  const {user, mutate} = useUser()

  const formik = useFormik({
    initialValues: {
      name:'',
      email: '',
      password:'',
      passwordConfirmation:''
    },
    validationSchema: Yup.object({
      name: Yup.string().required().min(2).max(100),
      email: Yup.string().email().required(),
      password: Yup.string().min(6).max(20).required(),
      passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('password confirmation is a required field')
    }),
    onSubmit: values => {
      submit(values)
    }
  })

  async function submit(values) {
    try {
      const res = await fetch('http://localhost:3000/api/register',{
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      })
      const user = await res.json()
      if (!user) {
        console.log('User not created')
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
          <p className='text-lg font-bold mb-2'>Create Your Account</p>
          <div className='mb-4'>
            <label className='block  text-sm font-bold mb-2' htmlFor='name'>
              Name
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline text-gray-800'
              name='name'
              id='name'
              type='text'
              placeholder='name'
              {...formik.getFieldProps('name')}
            />
            {formik.touched.name && formik.errors.name ? (
            <div role="alert" className='mb-2'>
              <div className="border border-red-400 rounded bg-red-100 px-4 py-3 text-red-700">
                <p>{formik.errors.name}</p>
                </div>
            </div> ) : null}
          </div>
          <div className='mb-4'>
            <label className='block  text-sm font-bold mb-2' htmlFor='email'>
              Email
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline text-gray-800'
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
            <label className='block  text-sm font-bold mb-2' htmlFor='password'>
              Password
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline text-gray-800'
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
          <div className='mb-4'>
            <label className='block  text-sm font-bold mb-2' htmlFor='password2'>
              Confirm Password
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline text-gray-800'
              name='passwordConfirmation'
              id='passwordConfirmation'
              type='password'
              placeholder='confirm password'
              {...formik.getFieldProps('passwordConfirmation')}
            />
            {formik.touched.passwordConfirmation && formik.errors.passwordConfirmation ? (
            <div role="alert" className='mb-2'>
              <div className="border border-red-400 rounded bg-red-100 px-4 py-3 text-red-700">
                <p>{formik.errors.passwordConfirmation}</p>
                </div>
            </div> ) : null}
          </div>
          <button
            className='bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline'
            type='submit'
          >
            Register
          </button>
        </form>
        <p className='my-1'>
          Already have an account?{' '}
          <Link href='/login'>
            <a className='text-teal-200 hover:underline'>Sign In</a>
          </Link>
        </p>
      </div>
    </Fragment>
  );
}
