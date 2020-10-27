
export function tMax(profile) {
    const bench = Math.floor(profile.bench * .9)
    const squat = Math.floor(profile.squat * .9)
    const overheadPress = Math.floor(profile.overheadPress * .9)
    const deadlift = Math.floor(profile.deadlift * .9)
}

const CalcPlates = () => {
    const platesArr = [90, 50, 20, 10, 5];
    const x = 135;
    const numb = x - 45;
  
    const greedyMath = (platesArr, numb) => {
      let i = 0;
      let newArr = platesArr.map(() => {
        return 0;
      });
  
      while (i < platesArr.length) {
        while (platesArr[i] <= numb) {
          numb -= platesArr[i];
          newArr[i]++;
        }
        i++;
      }
      return newArr;
    };
  
    const math = greedyMath(platesArr, numb);
  
    const p45 = math[0] * 2;
    const p25 = math[1] * 2;
    const p10 = math[2] * 2;
    const p5 = math[3] * 2;
    const p2 = math[4] * 2;
  };

//   const x = repMax.number;
//   const tMax = x * 0.9;

//   const a = Math.floor(tMax * 0.65);
//   const b = Math.floor(tMax * 0.75);
//   const c = Math.floor(tMax * 0.85);

//   const arr = [a, b, c];
//   let newArr = [];

//   function round5(numb) {
//     let final = 0;
//     let ld = numb % 10;
//     if (ld < 5) {
//       final = numb - ld;
//     }
//     if (ld > 5) {
//       const a = 10 - ld;
//       final = numb + a;
//     }
//     if (ld === 5) {
//       final = numb;
//     }
//     newArr.push(final);
//   }

//   arr.forEach(round5);

//   const firstSet = newArr[0];
//   const secondSet = newArr[1];
//   const thirdSet = newArr[2];