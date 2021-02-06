import { Fragment } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Navbar from '../../../components/layout/Navbar';
import { useRouter } from 'next/router'
import crypto from 'crypto'
const url = process.env.URL;

export default function register() {
  const router = useRouter()
  
  const formik = useFormik({
    initialValues: {
      password:'',
      passwordConfirmation:'',
    },
    validationSchema: Yup.object({
      password: Yup.string().min(6).max(20).required(),
      passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('password confirmation is a required field'),
    }),
    onSubmit: values => {
      submit(values)
    }
  })

  async function submit(values) {
    const { id } = router.query
    const resetPasswordToken = crypto.createHash('sha512').update(id).digest('hex')
    const save = {
      ...values,
      resetPasswordToken
    }
    try {
      const res = await fetch(`${url}/api/newpassword`,{
        method: 'PUT',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(save)
      })
      const user = await res.json()
      if (!user) {
        console.log('Password has not been changed')
      } else {
        router.replace('/login')
      }
  } catch (error) {
    console.log(error) 
  }
  }

  return (
   
    <Fragment>
      <Navbar />
      <div className='max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-5xl mx-auto'>
        <form className='bg-gray-700 shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-10' onSubmit={formik.handleSubmit}>
          <p className='text-lg font-bold mb-2'>Enter new password</p>
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
            Submit
          </button>
        </form>
      </div>
    </Fragment>
  );
}
