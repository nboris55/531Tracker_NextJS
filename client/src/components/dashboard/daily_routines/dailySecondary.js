import { Fragment,useState } from 'react';
import { faPlus, faMinus,faCaretDown,faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { calcSecondaryLift } from '../../../calculations/calculations';

export default function dailySecondary({profile}) {
  const [openLift, toggleLift] = useState(false);

  let currentDay, program, lift, weight, secondaryArr = []
  if (profile) {
    currentDay = profile.currentDay
    program = profile.program
  }

  switch (program) {
    case 'A': 
      switch (currentDay) {
        case 0: {
          calcSecondaryLift(profile, secondaryArr)
          lift = 'Bench Press'
          weight = secondaryArr[0]
        }
        break
        case 1: {
          calcSecondaryLift(profile, secondaryArr)
          lift = 'Squat'
          weight = secondaryArr[1]
        }
        break
        case 2: {
          calcSecondaryLift(profile, secondaryArr)
          lift = 'Overhead Press'
          weight = secondaryArr[2]
        }
        break
        case 3: {
          calcSecondaryLift(profile, secondaryArr)
          lift = 'Deadlift'
          weight = secondaryArr[3]
        }
      }
    break
    case 'B': 
    switch (currentDay) {
      case 0: {
        calcSecondaryLift(profile, secondaryArr)
        lift = 'Overhead Press'
        weight = secondaryArr[2]
      }
      break
      case 1: {
        calcSecondaryLift(profile, secondaryArr)
        lift = 'Deadlift'
        weight = secondaryArr[1]
      }
      break
      case 2: {
        calcSecondaryLift(profile, secondaryArr)
        lift = 'Bench Press'
        weight = secondaryArr[0]
      }
      break
      case 3: {
        calcSecondaryLift(profile, secondaryArr)
        lift = 'Squat'
        weight = secondaryArr[3]
      }
    }

  }

  return (
    <Fragment>
      <form className="max-w-xl rounded overflow-hidden shadow-lg mt-10 mb-10  bg-gray-700">
          <button type='button' className="w-full bg-white text-2xl font-bold focus:outline-none focus:shadow-outline text-gray-800"
           onClick={() => toggleLift(!openLift)}>
             <FontAwesomeIcon icon={faCaretDown} size='lg' />{' '}{lift} - Secondary</button>
            {openLift && (<Fragment> 
              <table className=" table-fixed">
            <thead>
              <tr>
                <th className='px-12 sm:px-20 py-2'>Set</th>
                <th className='px-12 sm:px-20 py-2'>Reps</th>
                <th className='px-12 sm:px-20 py-2'>lbs</th>
                <th></th>
              </tr>
            </thead>
            <tbody className='text-xl'>
              <tr>
                <td className='px-4 py-2'><input type="checkbox" id="" name="" value="" /></td>
                <td className='px-4 py-2'> 10  </td>
                <td className='px-4 py-2'>{weight}</td>
              </tr>
              <tr>
                <td className='px-4 py-2'><input type="checkbox" id="" name="" value="" /></td>
                <td className='px-4 py-2'> 10 </td>
                <td className='px-4 py-2'>{weight}</td>
              </tr>
              <tr>
                <td className='px-4 py-2'><input type="checkbox" id="" name="" value="" /></td>
                <td className='px-4 py-2'> 10 </td>
                <td className='px-4 py-2'>{weight}</td>
              </tr>
              <tr>
                <td className='px-4 py-2'><input type="checkbox" id="" name="" value="" /></td>
                <td className='px-4 py-2'> 10 </td>
                <td className='px-4 py-2'>{weight}</td>
              </tr>
              <tr>
                <td className='px-4 py-2'><input type="checkbox" id="" name="" value="" /></td>
                <td className='px-4 py-2'> 10 </td>
                <td className='px-4 py-2'>{weight}</td>
              </tr>
            </tbody>
          </table>
          <button
              className='bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 mb-2 ml-4'
              type='submit'
            >
              Save
            </button>
          </Fragment>)}
         
      </form>
     
   
    </Fragment>
  );
}
