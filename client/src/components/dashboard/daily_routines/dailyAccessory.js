import { Fragment,useState } from 'react';
import { faPlus, faMinus,faCaretDown,faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function dailyAccessory({profile}) {
  const [openLift, toggleLift] = useState(false);
  let currentDay, lift

  if (profile) {
    currentDay = profile.currentDay
  }


 switch (currentDay) {
    case 0: 
      lift = 'Lat Work'
    break 
    case 1:
      lift = 'Abs' 
    break
    case 2:
      lift = 'Lat Work' 
    break
    case 3:
      lift = 'Abs' 
    break
}
 
  return (
    <Fragment>
      <form className="max-w-xl rounded overflow-hidden shadow-lg mt-10 mb-10  bg-gray-700">
          <button type='button' className="w-full bg-white text-2xl font-bold focus:outline-none focus:shadow-outline text-gray-800"
           onClick={() => toggleLift(!openLift)}>
             <FontAwesomeIcon icon={faCaretDown} size='lg' /> {' '}{lift} - Accessory</button>
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
                <td className='px-4 py-2'></td>
              </tr>
              <tr>
                <td className='px-4 py-2'><input type="checkbox" id="" name="" value="" /></td>
                <td className='px-4 py-2'> 10 </td>
                <td className='px-4 py-2'></td>
              </tr>
              <tr>
                <td className='px-4 py-2'><input type="checkbox" id="" name="" value="" /></td>
                <td className='px-4 py-2'> 10 </td>
                <td className='px-4 py-2'></td>
              </tr>
              <tr>
                <td className='px-4 py-2'><input type="checkbox" id="" name="" value="" /></td>
                <td className='px-4 py-2'> 10 </td>
                <td className='px-4 py-2'></td>
              </tr>
              <tr>
                <td className='px-4 py-2'><input type="checkbox" id="" name="" value="" /></td>
                <td className='px-4 py-2'> 10 </td>
                <td className='px-4 py-2'></td>
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
