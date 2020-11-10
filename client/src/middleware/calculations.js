
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

export function calcDailyRoutine ({bench, squat, deadlift, overheadPress}) {
  const lifts = [.65, .70, .75, .80, .85, .90, .95]
  const percentages = [bench, squat, overheadPress, deadlift]
  let arr = []
  
  lifts.map((v,i) => {percentages.map((v2,i2)=>{arr.push(Math.floor(v*v2))})})

  return { arr }
}