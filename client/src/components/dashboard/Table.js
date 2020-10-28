import { Fragment } from 'react';


function round5(numb) {
    let final = 0;
    let ld = numb % 10;
    if (ld < 5) {
      final = numb - ld;
    }
    if (ld > 5) {
      const a = 10 - ld;
      final = numb + a;
    }
    if (ld === 5) {
      final = numb;
    }
    return final
  }

export default function GlanceTable({profile: {bench, squat, deadlift, overheadPress}}) {
 /* --- This is the same as below ---- */
 const lifts = [.65, .70, .75, .80, .85, .90, .95]
 const percentages = [bench, squat, deadlift, overheadPress]
 let arr = []
 
 lifts.map((v,i) => {percentages.map((v2,i2)=>{arr.push(round5(Math.floor(v*v2)))})})
 /*----[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]-----*/
  const benchRM = round5(bench)
  const squatRM = round5(squat)
  const overheadPressRM = round5(overheadPress)
  const deadliftRM = round5(deadlift)

  const bench6 = round5(Math.floor(bench + 30))
  const squat6 = round5(Math.floor(squat + 60))
  const overheadPress6 = round5(Math.floor(overheadPress + 30))
  const deadlift6 = round5(Math.floor(deadlift + 60))
  
  const bench65 = arr[0]
  const squat65 = arr[1]
  const overheadPress65 = arr[2]
  const deadlift65 = arr[3]

  const bench75 = arr[4]
  const squat75 = arr[5]
  const overheadPress75 = arr[6]
  const deadlift75 = arr[7]

  const bench85 = arr[8]
  const squat85 = arr[9]
  const overheadPress85 = arr[10]
  const deadlift85 = arr[11]

  const bench70 = arr[12]
  const squat70 = arr[13]
  const overheadPress70 = arr[14]
  const deadlift70 = arr[15]

  const bench80 = arr[16]
  const squat80 = arr[17]
  const overheadPress80 = arr[18]
  const deadlift80 = arr[19]

  const bench90 = arr[20]
  const squat90 = arr[21]
  const overheadPress90 = arr[22]
  const deadlift90 = arr[23]

  const bench95 = arr[24]
  const squat95 = arr[25]
  const overheadPress95 = arr[26]
  const deadlift95 = arr[27]

  return (
    <Fragment>
       <table className='rounded overflow-hidden bg-red-500 mb-6 table-fixed w-full'>
       <thead>
          <tr> 
            <th className='px-4 py-2'>Lift</th>
            <th className='px-4 py-2'>Rep Max</th>
            <th className='px-4 py-2'>Training Max</th>
            <th className='px-4 py-2'>6 Week Potential</th>
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
            <td className='border px-4 py-2'>Deadlift</td>
            <td className='border px-4 py-2'>{deadliftRM}</td>
            <td className='border px-4 py-2'>{deadlift90}</td>
            <td className='border px-4 py-2'>{deadlift6}</td>
          </tr>
          <tr className='bg-gray-100'>
            <td className='border px-4 py-2'>Overhead Press</td>
            <td className='border px-4 py-2'>{overheadPressRM}</td>
            <td className='border px-4 py-2'>{overheadPress90}</td>
            <td className='border px-4 py-2'>{overheadPress6}</td>
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
            <td className='border px-4 py-2'>Deadlift</td>
            <td className='border px-4 py-2'>{deadlift65}</td>
            <td className='border px-4 py-2'>{deadlift75}</td>
            <td className='border px-4 py-2'>{deadlift85}</td>
          </tr>
          <tr className='bg-gray-100'>
            <td className='border px-4 py-2'>Overhead Press</td>
            <td className='border px-4 py-2'>{overheadPress65}</td>
            <td className='border px-4 py-2'>{overheadPress75}</td>
            <td className='border px-4 py-2'>{overheadPress85}</td>
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
            <td className='border px-4 py-2'>Deadlift</td>
            <td className='border px-4 py-2'>{deadlift70}</td>
            <td className='border px-4 py-2'>{deadlift80}</td>
            <td className='border px-4 py-2'>{deadlift90}</td>
          </tr>
          <tr className='bg-gray-100'>
            <td className='border px-4 py-2'>Overhead Press</td>
            <td className='border px-4 py-2'>{overheadPress70}</td>
            <td className='border px-4 py-2'>{overheadPress80}</td>
            <td className='border px-4 py-2'>{overheadPress90}</td>
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
            <td className='border px-4 py-2'>Deadlift</td>
            <td className='border px-4 py-2'>{deadlift75}</td>
            <td className='border px-4 py-2'>{deadlift85}</td>
            <td className='border px-4 py-2'>{deadlift95}</td>
          </tr>
          <tr className='bg-gray-100'>
            <td className='border px-4 py-2'>Overhead Press</td>
            <td className='border px-4 py-2'>{overheadPress75}</td>
            <td className='border px-4 py-2'>{overheadPress85}</td>
            <td className='border px-4 py-2'>{overheadPress95}</td>
          </tr>
        </tbody>
      </table>

    </Fragment>
  );
}
