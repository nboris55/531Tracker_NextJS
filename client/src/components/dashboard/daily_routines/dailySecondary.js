import { Fragment,useState } from 'react';
import { faPlus, faMinus,faCaretDown,faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { calcSecondaryLift } from '../../../calculations/calculations';
import { saveBtn as SaveBtn, disabledSaveBtn as DisabledSaveBtn } from '../../buttons/SaveBtns'
const url = process.env.URL;

export default function dailySecondary({profile}) {
  const [openLift, toggleLift] = useState(false);
  const [repSet1, setRepSet1] = useState(10)
  const [repSet2, setRepSet2] = useState(10)
  const [repSet3, setRepSet3] = useState(10)
  const [repSet4, setRepSet4] = useState(10)
  const [repSet5, setRepSet5] = useState(10)

  const [checked, setChecked] = useState({
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false,
    checked5: false,
  })

  const handleChecked =(name) => () => {
    setChecked((prevChecked) => ({ ...prevChecked, [name]: !prevChecked[name] }))
  }

  let currentDay, program, lift, weight, secondaryArr = [], volume = 0
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

  async function onSubmit (e) {
    e.preventDefault();
    const {checked1, checked2, checked3, checked4, checked5} = checked

    if (checked1) volume = repSet1 * weight;
    if (checked2) volume += repSet2 * weight;
    if (checked3) volume += repSet3 * weight;
    if (checked4) volume += repSet4 * weight;
    if (checked5) volume += repSet5 * weight;

    const save = {
      ...profile, volume, weight
    }
    try {
      const res = await fetch(`${url}/api/daily_routine/secondarySave`,{
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(save)
      })
    } catch (err) {
      console.log('error secondary')
    }
  };

  return (
    <Fragment>
      <form className="max-w-xl rounded overflow-hidden shadow-lg mt-10 mb-10  bg-gray-700" onSubmit={e => onSubmit(e)}>
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
                <td className='px-4 py-2'>{weight}</td>
              </tr>
              <tr>
                 <td className='px-4 py-2'>
                  <input type="checkbox"  
                    defaultChecked={checked.checked2} 
                    onClick={handleChecked('checked2')}
                  />
                </td>
                <td className='px-4 py-2'>
                  <FontAwesomeIcon icon={faMinus} className='cursor-pointer hover:text-red-500'
                 onClick={() => setRepSet2((prevRepSet2) => (prevRepSet2 > 1 ? prevRepSet2 - 1 : 1))}/>{' '}{repSet2}{' '} 
                <FontAwesomeIcon icon={faPlus} className='cursor-pointer hover:text-red-500' onClick={() => setRepSet2(repSet2 + 1)}/>
                </td>
                <td className='px-4 py-2'>{weight}</td>
              </tr>
              <tr>
                 <td className='px-4 py-2'>
                  <input type="checkbox"  
                    defaultChecked={checked.checked3} 
                    onClick={handleChecked('checked3')}
                  />
                </td>
                <td className='px-4 py-2'>
                  <FontAwesomeIcon icon={faMinus} className='cursor-pointer hover:text-red-500'
                 onClick={() => setRepSet3((prevRepSet3) => (prevRepSet3 > 1 ? prevRepSet3 - 1 : 1))}/>{' '}{repSet3}{' '} 
                <FontAwesomeIcon icon={faPlus} className='cursor-pointer hover:text-red-500' onClick={() => setRepSet3(repSet3 + 1)}/>
                </td>
                <td className='px-4 py-2'>{weight}</td>
              </tr>
              <tr>
                 <td className='px-4 py-2'>
                  <input type="checkbox"  
                    defaultChecked={checked.checked4} 
                    onClick={handleChecked('checked4')}
                  />
                </td>
                <td className='px-4 py-2'>
                  <FontAwesomeIcon icon={faMinus} className='cursor-pointer hover:text-red-500'
                 onClick={() => setRepSet4((prevRepSet4) => (prevRepSet4 > 1 ? prevRepSet4 - 1 : 1))}/>{' '}{repSet4}{' '} 
                <FontAwesomeIcon icon={faPlus} className='cursor-pointer hover:text-red-500' onClick={() => setRepSet4(repSet4 + 1)}/>
                </td>
                <td className='px-4 py-2'>{weight}</td>
              </tr>
              <tr>
                 <td className='px-4 py-2'>
                  <input type="checkbox"  
                    defaultChecked={checked.checked5} 
                    onClick={handleChecked('checked5')}
                  />
                </td>
                <td className='px-4 py-2'>
                  <FontAwesomeIcon icon={faMinus} className='cursor-pointer hover:text-red-500'
                 onClick={() => setRepSet5((prevRepSet5) => (prevRepSet5 > 1 ? prevRepSet5 - 1 : 1))}/>{' '}{repSet5}{' '} 
                <FontAwesomeIcon icon={faPlus} className='cursor-pointer hover:text-red-500' onClick={() => setRepSet5(repSet5 + 1)}/>
                </td>
                <td className='px-4 py-2'>{weight}</td>
              </tr>
            </tbody>
          </table>
          {!(checked.checked1 || checked.checked2 || checked.checked3) ? (<DisabledSaveBtn />) : (<SaveBtn />)}
          </Fragment>)}
         
      </form>
     
   
    </Fragment>
  );
}
