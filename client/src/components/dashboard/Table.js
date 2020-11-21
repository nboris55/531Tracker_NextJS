import { Fragment } from 'react';
import { calcWeekOneMainLifts, calcWeekTwoMainLifts, calcWeekThreeMainLifts, calcProgression} from '../../calculations/calculations';

export default function GlanceTable({profile}) {
  let weekOneArr = [], weekTwoArr = [], weekThreeArr = [], progArr = []
  calcWeekOneMainLifts(profile, weekOneArr)
  calcWeekTwoMainLifts(profile, weekTwoArr)
  calcWeekThreeMainLifts(profile, weekThreeArr)
  calcProgression(profile, progArr)

  const bench6 = progArr[0]
  const squat6 = progArr[1]
  const overheadPress6 = progArr[2]
  const deadlift6 = progArr[3]

  const benchRM = profile.bench
  const squatRM = profile.squat
  const overheadPressRM = profile.overheadPress
  const deadliftRM = profile.deadlift

  const bench65 = weekOneArr[0]
  const bench70 = weekOneArr[1]

  const squat65 = weekOneArr[3]
  const squat70 = weekOneArr[4]

  const overheadPress65 = weekOneArr[6]
  const overheadPress70 = weekOneArr[7]

  const deadlift65 = weekOneArr[9]
  const deadlift70 = weekOneArr[10]

  const bench75 = weekTwoArr[0]
  const bench80 = weekTwoArr[1]

  const squat75 = weekTwoArr[3]
  const squat80 = weekTwoArr[4]

  const overheadPress75 = weekTwoArr[6]
  const overheadPress80 = weekTwoArr[7]

  const deadlift75 = weekTwoArr[9]
  const deadlift80 = weekTwoArr[10]

  const bench85 = weekThreeArr[0]
  const bench90 = weekThreeArr[1]
  const bench95 = weekThreeArr[2]

  const squat85 = weekThreeArr[3]
  const squat90 = weekThreeArr[4]
  const squat95 = weekThreeArr[5]

  const overheadPress85 = weekThreeArr[6]
  const overheadPress90 = weekThreeArr[7]
  const overheadPress95 = weekThreeArr[8]

  const deadlift85 = weekThreeArr[9]
  const deadlift90 = weekThreeArr[10]
  const deadlift95 = weekThreeArr[11]

  return (
    <Fragment>
    <table className='rounded overflow-hidden bg-red-500 mb-6 table-fixed w-full'>
    <thead>
       <tr> 
         <th className='px-4 py-2'>Lift</th>
         <th className='px-4 py-2'>Rep Max</th>
         <th className='px-4 py-2'>Training Max</th>
         <th className='px-4 py-2'>Next Cycle TMs</th>
       </tr>
     </thead>
     <tbody className='text-gray-800' >
       <tr className='bg-gray-100'>
         <td className='border px-4 py-2'>Bench</td>
         <td className='border px-4 py-2'>{benchRM}</td>
         <td className='border px-4 py-2'>{bench90}</td>
         <td className='border px-4 py-2'>{bench6}</td>
       </tr>
       <tr className='bg-gray-100'>
         <td className='border px-4 py-2'>Squat</td>
         <td className='border px-4 py-2'>{squatRM}</td>
         <td className='border px-4 py-2'>{squat90}</td>
         <td className='border px-4 py-2'>{squat6}</td>
       </tr>
       <tr className='bg-gray-100'>
       <td className='border px-4 py-2'>Overhead Press</td>
         <td className='border px-4 py-2'>{overheadPressRM}</td>
         <td className='border px-4 py-2'>{overheadPress90}</td>
         <td className='border px-4 py-2'>{overheadPress6}</td>
       </tr>
       <tr className='bg-gray-100'>
       <td className='border px-4 py-2'>Deadlift</td>
         <td className='border px-4 py-2'>{deadliftRM}</td>
         <td className='border px-4 py-2'>{deadlift90}</td>
         <td className='border px-4 py-2'>{deadlift6}</td>
       </tr>
     </tbody>
   </table>
   <table className='rounded overflow-hidden bg-red-500 mb-6 table-fixed w-full'>
    <thead>
       <tr> 
         <th className='px-4 py-2'>Lift</th>
         <th className='px-4 py-2'>65% x 5</th>
         <th className='px-4 py-2'>75% x 3</th>
         <th className='px-4 py-2'>85% x 1+</th>
       </tr>
     </thead>
     <tbody className='text-gray-800' >
       <tr className='bg-gray-100'>
         <td className='border px-4 py-2'>Bench</td>
         <td className='border px-4 py-2'>{bench65}</td>
         <td className='border px-4 py-2'>{bench75}</td>
         <td className='border px-4 py-2'>{bench85}</td>
       </tr>
       <tr className='bg-gray-100'>
         <td className='border px-4 py-2'>Squat</td>
         <td className='border px-4 py-2'>{squat65}</td>
         <td className='border px-4 py-2'>{squat75}</td>
         <td className='border px-4 py-2'>{squat85}</td>
       </tr>
       <tr className='bg-gray-100'>
       <td className='border px-4 py-2'>Overhead Press</td>
         <td className='border px-4 py-2'>{overheadPress65}</td>
         <td className='border px-4 py-2'>{overheadPress75}</td>
         <td className='border px-4 py-2'>{overheadPress85}</td>
       </tr>
       <tr className='bg-gray-100'>
       <td className='border px-4 py-2'>Deadlift</td>
         <td className='border px-4 py-2'>{deadlift65}</td>
         <td className='border px-4 py-2'>{deadlift75}</td>
         <td className='border px-4 py-2'>{deadlift85}</td>
       </tr>
     </tbody>
   </table>
   <table className='rounded overflow-hidden bg-red-500 mb-6 table-fixed w-full'>
    <thead>
       <tr> 
         <th className='px-4 py-2'>Lift</th>
         <th className='px-4 py-2'>70% x 5</th>
         <th className='px-4 py-2'>80% x 3</th>
         <th className='px-4 py-2'>90% x 1+</th>
       </tr>
     </thead>
     <tbody className='text-gray-800' >
       <tr className='bg-gray-100'>
         <td className='border px-4 py-2'>Bench</td>
         <td className='border px-4 py-2'>{bench70}</td>
         <td className='border px-4 py-2'>{bench80}</td>
         <td className='border px-4 py-2'>{bench90}</td>
       </tr>
       <tr className='bg-gray-100'>
         <td className='border px-4 py-2'>Squat</td>
         <td className='border px-4 py-2'>{squat70}</td>
         <td className='border px-4 py-2'>{squat80}</td>
         <td className='border px-4 py-2'>{squat90}</td>
       </tr>
       <tr className='bg-gray-100'>
       <td className='border px-4 py-2'>Overhead Press</td>
         <td className='border px-4 py-2'>{overheadPress70}</td>
         <td className='border px-4 py-2'>{overheadPress80}</td>
         <td className='border px-4 py-2'>{overheadPress90}</td>    
       </tr>
       <tr className='bg-gray-100'>
       <td className='border px-4 py-2'>Deadlift</td>
         <td className='border px-4 py-2'>{deadlift70}</td>
         <td className='border px-4 py-2'>{deadlift80}</td>
         <td className='border px-4 py-2'>{deadlift90}</td>
       </tr>
     </tbody>
   </table>
   <table className='rounded overflow-hidden bg-red-500 mb-6 table-fixed w-full'>
    <thead>
       <tr> 
         <th className='px-4 py-2'>Lift</th>
         <th className='px-4 py-2'>75% x 5</th>
         <th className='px-4 py-2'>85% x 3</th>
         <th className='px-4 py-2'>95% x 1+</th>
       </tr>
     </thead>
     <tbody className='text-gray-800' >
       <tr className='bg-gray-100'>
         <td className='border px-4 py-2'>Bench</td>
         <td className='border px-4 py-2'>{bench75}</td>
         <td className='border px-4 py-2'>{bench85}</td>
         <td className='border px-4 py-2'>{bench95}</td>
       </tr>
       <tr className='bg-gray-100'>
         <td className='border px-4 py-2'>Squat</td>
         <td className='border px-4 py-2'>{squat75}</td>
         <td className='border px-4 py-2'>{squat85}</td>
         <td className='border px-4 py-2'>{squat95}</td>
       </tr>
       <tr className='bg-gray-100'>
       <td className='border px-4 py-2'>Overhead Press</td>
         <td className='border px-4 py-2'>{overheadPress75}</td>
         <td className='border px-4 py-2'>{overheadPress85}</td>
         <td className='border px-4 py-2'>{overheadPress95}</td>
       </tr>
       <tr className='bg-gray-100'>
       <td className='border px-4 py-2'>Deadlift</td>
         <td className='border px-4 py-2'>{deadlift75}</td>
         <td className='border px-4 py-2'>{deadlift85}</td>
         <td className='border px-4 py-2'>{deadlift95}</td>
       </tr>
     </tbody>
   </table>

 </Fragment>
  );
}
