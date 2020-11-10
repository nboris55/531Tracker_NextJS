import { Fragment,useState } from 'react';
import { faPlus, faMinus,faCaretDown,faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function dailySecondary(props) {
  const [openLift, toggleLift] = useState(false);
  const lift=props.lift;
  let order;
  if (props.order === "1") {
    order = 'Main';
  } else if (props.order === "2") {
    order = 'Secondary'
  } else {order = 'Accessory'}
  return (
    <Fragment>
      <form className="max-w-xl rounded overflow-hidden shadow-lg mt-10 mb-10  bg-gray-700">
          <button type='button' className="w-full bg-white text-2xl font-bold focus:outline-none focus:shadow-outline text-gray-800"
           onClick={() => toggleLift(!openLift)}>
             <FontAwesomeIcon icon={faCaretDown} size='lg' /> {' '}{lift} - {order}</button>
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
                <td className='px-4 py-2'><FontAwesomeIcon icon={faMinus} className='cursor-pointer'/>{' '}
                 10 <FontAwesomeIcon icon={faPlus} className='cursor-pointer'/> </td>
                <td className='px-4 py-2'>115</td>
              </tr>
              <tr>
                <td className='px-4 py-2'><input type="checkbox" id="" name="" value="" /></td>
                <td className='px-4 py-2'><FontAwesomeIcon icon={faMinus} className='cursor-pointer'/>{' '}
                10 <FontAwesomeIcon icon={faPlus} className='cursor-pointer' /></td>
                <td className='px-4 py-2'>115</td>
              </tr>
              <tr>
                <td className='px-4 py-2'><input type="checkbox" id="" name="" value="" /></td>
                <td className='px-4 py-2'><FontAwesomeIcon icon={faMinus} className='cursor-pointer' />{' '}
                10 <FontAwesomeIcon icon={faPlus} className='cursor-pointer'/></td>
                <td className='px-4 py-2'>115</td>
              </tr>
              <tr>
                <td className='px-4 py-2'><input type="checkbox" id="" name="" value="" /></td>
                <td className='px-4 py-2'><FontAwesomeIcon icon={faMinus} className='cursor-pointer' />{' '}
                10 <FontAwesomeIcon icon={faPlus} className='cursor-pointer'/></td>
                <td className='px-4 py-2'>115</td>
              </tr>
              <tr>
                <td className='px-4 py-2'><input type="checkbox" id="" name="" value="" /></td>
                <td className='px-4 py-2'><FontAwesomeIcon icon={faMinus} className='cursor-pointer' />{' '}
                10 <FontAwesomeIcon icon={faPlus} className='cursor-pointer'/></td>
                <td className='px-4 py-2'>115</td>
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
