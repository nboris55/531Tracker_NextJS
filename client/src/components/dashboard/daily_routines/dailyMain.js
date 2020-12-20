import { Fragment, useState } from 'react';
import { faPlus, faMinus,faCaretDown,faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { saveBtn as SaveBtn, disabledSaveBtn as DisabledSaveBtn } from '../../buttons/SaveBtns'


import { calcWeekOneMainLifts, calcWeekTwoMainLifts, calcWeekThreeMainLifts, calcWeekFourMainLifts} from '../../../calculations/calculations';


/*
currentDay is counted like this in the DB
   0  |    1  |   2  |  3   |   4  |  5   |  6    |    7 |   8  |  9   |   10   |   11  |  12 |  13   |   14  |   15 |  
 d1w1 | d2w1 | d3w1 | d4w1 | d1w2 |  d2w2 |  d3w2 | d4w2 | d1w3 |  d2w3 |  d3w3 | d4w3 | d1w4 |  d2w4 |  d3w4 | d4w4 |
*/

export default function dailyMain({profile}) {
  const [openLift, toggleLift] = useState(false);
  const [repSet1, setRepSet1] = useState(5)
  const [repSet2, setRepSet2] = useState(3)
  const [repSet3, setRepSet3] = useState(1)

  const [checked, setChecked] = useState({
    checked1: false,
    checked2: false,
    checked3: false,
  })

  const handleChecked =(name) => () => {
    setChecked((prevChecked) => ({ ...prevChecked, [name]: !prevChecked[name] }))
  }

  let weightArr = [], lift, weightSet1, weightSet2, weightSet3,
      volume = 0
  

  let currentDay, currentWeek
  if (profile) {
    currentDay = profile.currentDay
    currentWeek = profile.currentWeek
  }

  switch (currentWeek) {
    case 0: 
      calcWeekOneMainLifts(profile, weightArr)
      if(weightArr) { 
          switch (currentDay) {
            case 0 :
              lift = 'Bench Press'
              weightSet1 = weightArr[0]
              weightSet2 = weightArr[1]
              weightSet3 = weightArr[2]
            break  
            case 1 :
              lift = 'Squat'
              weightSet1 = weightArr[3]
              weightSet2 = weightArr[4]
              weightSet3 = weightArr[5]
            break  
            case 2 :
              lift = 'Overhead Press'
              weightSet1 = weightArr[6]
              weightSet2 = weightArr[7]
              weightSet3 = weightArr[8]
            break  
            case 3 :
              lift = 'Deadlift'
              weightSet1 = weightArr[9]
              weightSet2 = weightArr[10]
              weightSet3 = weightArr[11]
            break  
          }    
      }
    break
    case 1: 
      calcWeekTwoMainLifts(profile, weightArr)
      if(weightArr) { 
          switch (currentDay) {
            case 0 :
              lift = 'Bench Press'
              weightSet1 = weightArr[0]
              weightSet2 = weightArr[1]
              weightSet3 = weightArr[2]
            break  
            case 1 :
              lift = 'Squat'
              weightSet1 = weightArr[3]
              weightSet2 = weightArr[4]
              weightSet3 = weightArr[5]
            break  
            case 2 :
              lift = 'Overhead Press'
              weightSet1 = weightArr[6]
              weightSet2 = weightArr[7]
              weightSet3 = weightArr[8]
            break  
            case 3 :
              lift = 'Deadlift'
              weightSet1 = weightArr[9]
              weightSet2 = weightArr[10]
              weightSet3 = weightArr[11]
            break  
          }    
      }
    break
    case 2: 
     calcWeekThreeMainLifts(profile, weightArr)
      if(weightArr) { 
          switch (currentDay) {
            case 0 :
              lift = 'Bench Press'
              weightSet1 = weightArr[0]
              weightSet2 = weightArr[1]
              weightSet3 = weightArr[2]
            break  
            case 1 :
              lift = 'Squat'
              weightSet1 = weightArr[3]
              weightSet2 = weightArr[4]
              weightSet3 = weightArr[5]
            break  
            case 2 :
              lift = 'Overhead Press'
              weightSet1 = weightArr[6]
              weightSet2 = weightArr[7]
              weightSet3 = weightArr[8]
            break  
            case 3 :
              lift = 'Deadlift'
              weightSet1 = weightArr[9]
              weightSet2 = weightArr[10]
              weightSet3 = weightArr[11]
            break  
          }    
    }
    break
    case 3: 
      calcWeekFourMainLifts(profile, weightArr)
      if(weightArr) { 
          switch (currentDay) {
            case 0 :
              lift = 'Bench Press'
              weightSet1 = weightArr[0]
              weightSet2 = weightArr[1]
              weightSet3 = weightArr[2]
            break  
            case 1 :
              lift = 'Squat'
              weightSet1 = weightArr[3]
              weightSet2 = weightArr[4]
              weightSet3 = weightArr[5]
            break  
            case 2 :
              lift = 'Overhead Press'
              weightSet1 = weightArr[6]
              weightSet2 = weightArr[7]
              weightSet3 = weightArr[8]
            break  
            case 3 :
              lift = 'Deadlift'
              weightSet1 = weightArr[9]
              weightSet2 = weightArr[10]
              weightSet3 = weightArr[11]
            break  
          }    
      }
    break
  }

  async function onSubmit (e) {
    e.preventDefault();
    const {checked1, checked2, checked3} = checked
    let reps, weight

    if (checked1) {
      reps = repSet1
      weight = weightSet1
    } else if (checked2) {
      reps = repSet2
      weight = weightSet2
    } else if (checked3) {
      reps = repSet3
      weight = weightSet3
    }

    if (checked1) volume = repSet1 * weightSet1;
    if (checked2) volume += repSet2 * weightSet2;
    if (checked3) volume += repSet3 * weightSet3;

    const save = {
      ...profile,
      volume: volume, reps, weight
    }
    try {
      const res = await fetch('http://localhost:3000/api/daily_routine/mainSave',{
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(save)
      })
    } catch (err) {
      console.log('error main save')
    }
  };

  return (
    <Fragment>
      <form className="max-w-xl rounded overflow-hidden shadow-lg mt-10 mb-10  bg-gray-700" onSubmit={e => onSubmit(e)}>
          <button type='button' id='formBtn' 
          className="w-full bg-white text-2xl font-bold focus:outline-none focus:shadow-outline text-gray-800"
           onClick={() => toggleLift(!openLift)}>
             <FontAwesomeIcon icon={faCaretDown} size='lg' />{' '}{lift} - Main</button>
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
                <td className='px-4 py-2'>
                  <input type="checkbox"  
                    defaultChecked={checked.checked1} 
                    onClick={handleChecked('checked1')}
                  />
                </td>
                <td className='px-4 py-2'>
                  <FontAwesomeIcon icon={faMinus} className='cursor-pointer hover:text-red-500'
                 onClick={() => setRepSet1((prevRepSet1) => (prevRepSet1 > 1 ? prevRepSet1 - 1 : 1))}/>{' '}{repSet1}{' '} 
                <FontAwesomeIcon icon={faPlus} className='cursor-pointer hover:text-red-500' onClick={() => setRepSet1(repSet1 + 1)}/>
                </td>
                <td className='px-4 py-2'>{weightSet1}</td>
              </tr>
              <tr>
                <td className='px-4 py-2'>
                  <input type="checkbox" 
                    value=""
                    defaultChecked={checked.checked2}
                    onClick={handleChecked('checked2')}
                  />
                </td>
                <td className='px-4 py-2'>
                  <FontAwesomeIcon icon={faMinus} className='cursor-pointer hover:text-red-500'
                 onClick={() => setRepSet2((prevRepSet2) => (prevRepSet2 > 1 ? prevRepSet2 - 1 : 1))}/>{' '}{repSet2}{' '} 
                <FontAwesomeIcon icon={faPlus} className='cursor-pointer hover:text-red-500' onClick={() => setRepSet2(repSet2 + 1)}/>
                </td>
                <td className='px-4 py-2'>{weightSet2}</td>
              </tr>
              <tr>
                <td className='px-4 py-2'>
                  <input type="checkbox" 
                    value="" 
                    defaultChecked={checked.checked3}
                    onClick={handleChecked('checked3')}
                    />
                   </td>
                <td className='px-4 py-2'>
                  <FontAwesomeIcon icon={faMinus} className='cursor-pointer hover:text-red-500'
                 onClick={() => setRepSet3((prevRepSet3) => (prevRepSet3 > 1 ? prevRepSet3 - 1 : 1))}/>{' '}{repSet3}{' '} 
                <FontAwesomeIcon icon={faPlus} className='cursor-pointer hover:text-red-500' onClick={() => setRepSet3(repSet3 + 1)}/>
                </td>
                <td className='px-4 py-2'>{weightSet3}</td>
              </tr>
            </tbody>
          </table>
          {!(checked.checked1 || checked.checked2 || checked.checked3) ? (<DisabledSaveBtn />) : (<SaveBtn />)}
          </Fragment>)}
         
      </form>
     
   
    </Fragment>
  );
}
