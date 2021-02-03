import { useFormik } from 'formik';
import * as Yup from 'yup';
import Router from 'next/router'
import Navbar from '../components/layout/Navbar'
import { Fragment } from 'react';
import { Dashboard } from '../components/buttons/dashboardBtn'
import useUser from '../middleware/user'

export default function editProfile() {
  const { data, signedIn, isError } = useUser()

  let profile, liftProfile, program, bench, squat,overheadPress, deadlift, id;

  if (!isError && data) {
    profile = data.profile
    id = profile._id
    liftProfile = profile.profile
    if (liftProfile) {
    program = liftProfile.program
    bench = liftProfile.bench
    squat = liftProfile.squat
    overheadPress = liftProfile.overheadPress
    deadlift = liftProfile.deadlift
    }
  }


  const formik = useFormik({
    initialValues: {
      program,
      bench,
      squat,
      overheadPress,
      deadlift,
      id: id
    },
    enableReinitialize:true,
    validationSchema: Yup.object({
      bench: Yup.number().min(5, 'Lift must be 5 or more').max(1000, 'Lift must be less than or equal to 1000').required('Please enter your bench max'),
      squat: Yup.number().min(5, 'Lift must be 5 or more').max(1000, 'Lift must be less than or equal to 1000').required('Please enter your squat max'),
      overheadPress: Yup.number().min(5, 'Lift must be 5 or more').max(1000, 'Lift must be less than or equal to 1000').required('Please enter your overhead press max'),
      deadlift: Yup.number().min(5, 'Lift must be 5 or more').max(1000, 'Lift must be less than or equal to 1000').required('Please enter your deadlift max'),
    }),
    onSubmit: values => {
     submit(values)
    }
  })

  async function submit(values) {
    try {
      const res = await fetch('http://localhost:3000/api/profile',{
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      })
      const user = await res.json()
      if (!user) {
        console.log('User not found')
      } else {
        Router.replace('/dashboard')
      }
  } catch (error) {
    console.log(error) 
  }
  }
  
return(
<Fragment> 
    <Navbar signedIn={signedIn}/>
    <div className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-5xl mx-auto">
      <div>
        <h1 className='text-5xl sm:text-6xl font-bold mb-2 sm:mb-4 text-center sm:text-left'>Profile</h1>
      </div>
        <Dashboard />
        <form className="bg-gray-700 shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-10" onSubmit={formik.handleSubmit}>
          <div className='mb-4 mt-4'>
            <p className=' text-sm font-bold mb-2' >* in lbs please</p>
            <label className='text-sm font-bold' htmlFor='program'>
              Program
            </label>
            <select name='program' className='mt-2 shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline text-gray-800'
            {...formik.getFieldProps('program')}
            >
              <option value="" label="Select program variation" />
              <option value="A">A - Same lift for main and assistance</option>
              <option value="B">B - Opposite lift for main and assistance</option>
            </select>
          </div>
          <div className='mb-4 mt-4'>
            <label className='block text-sm font-bold mb-2' htmlFor='bench'>
              Bench
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline text-gray-800'
              name='bench'
              id='bench'
              type='number'
              placeholder='Enter your one rep max for the bench press'
              {...formik.getFieldProps('bench')}
            />
            {formik.touched.bench && formik.errors.bench ? (
                <div role="alert" className='mb-2'>
                  <div className="border border-red-400 rounded bg-red-100 px-4 py-3 text-red-700">
                    <p>{formik.errors.bench}</p>
                    </div>
                </div> ) : null} 
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-bold mb-2' htmlFor='squat'>
              Squat
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline text-gray-800'
              name='squat'
              id='squat'
              type='number'
              placeholder='Enter your one rep max for the squat'
              {...formik.getFieldProps('squat')}
            />
            {formik.touched.squat && formik.errors.squat ? (
                <div role="alert" className='mb-2'>
                  <div className="border border-red-400 rounded bg-red-100 px-4 py-3 text-red-700">
                    <p>{formik.errors.squat}</p>
                    </div>
                </div> ) : null} 
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-bold mb-2' htmlFor='overheadPress'>
              Overhead Press
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline text-gray-800'
              name='overheadPress'
              id='overheadPress'
              type='number'
              placeholder='Enter your one rep max for the overhead press'
              {...formik.getFieldProps('overheadPress')}
            />
            {formik.touched.overheadPress && formik.errors.overheadPress ? (
                <div role="alert" className='mb-2'>
                  <div className="border border-red-400 rounded bg-red-100 px-4 py-3 text-red-700">
                    <p>{formik.errors.overheadPress}</p>
                    </div>
                </div> ) : null} 
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-bold mb-2' htmlFor='deadlift'>
              Deadlift
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline text-gray-800'
              name='deadlift'
              id='deadlift'
              type='number'
              placeholder='Enter your one rep max for the deadlift'
              {...formik.getFieldProps('deadlift')}
            />
            {formik.touched.deadlift && formik.errors.deadlift ? (
                <div role="alert" className='mb-2'>
                  <div className="border border-red-400 rounded bg-red-100 px-4 py-3 text-red-700">
                    <p>{formik.errors.deadlift}</p>
                    </div>
                </div> ) : null} 
          </div>
          <button className='bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 mb-2'
            type='submit'      >
              Save
          </button>
        </form>  
        </div>
      </Fragment>
)}