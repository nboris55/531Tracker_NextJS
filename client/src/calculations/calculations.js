
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

function trainMax(numb) {
  const tm = numb * .9
  return tm
}

export function  calcWeekOneMainLifts(props, arr) {
  let bench, squat, overheadPress, deadlift
  if (props) {
     bench = props.bench
     squat = props.squat
     overheadPress = props.overheadPress
     deadlift = props.deadlift
  
    const lifts = [bench, squat, overheadPress, deadlift]
    const percentages = [.65, .70, .75]
    
    lifts.map((v,i) => {percentages.map((v2,i2)=>{arr.push(round5(trainMax(Math.floor(v*v2))))})})

  return { arr }
  }

}

export function  calcWeekTwoMainLifts(props, arr) {
  let bench, squat, overheadPress, deadlift
  if (props) {
     bench = props.bench
     squat = props.squat
     overheadPress = props.overheadPress
     deadlift = props.deadlift
  
    const lifts = [bench, squat, overheadPress, deadlift]
    const percentages = [.75,.80, .85]
    
    lifts.map((v,i) => {percentages.map((v2,i2)=>{arr.push(round5(trainMax(Math.floor(v*v2))))})})

  return { arr }
  }

}

export function  calcWeekThreeMainLifts(props, arr) {
  let bench, squat, overheadPress, deadlift
  if (props) {
     bench = props.bench
     squat = props.squat
     overheadPress = props.overheadPress
     deadlift = props.deadlift
  
    const lifts = [bench, squat, overheadPress, deadlift]
    const percentages = [.85,.90,.95]
    
    lifts.map((v,i) => {percentages.map((v2,i2)=>{arr.push(round5(trainMax(Math.floor(v*v2))))})})
  return { arr }
  }

}

export function  calcWeekFourMainLifts(props, arr) {
  let bench, squat, overheadPress, deadlift
  if (props) {
     bench = props.bench
     squat = props.squat
     overheadPress = props.overheadPress
     deadlift = props.deadlift
  
    const lifts = [bench, squat, overheadPress, deadlift]
    const percentages = [.50]
    
    lifts.map((v,i) => {percentages.map((v2,i2)=>{arr.push(round5(trainMax(Math.floor(v*v2))))})})

  return { arr }
  }

}

export function calcSecondaryLift(props, arr) {
  let bench, squat, overheadPress, deadlift
  if (props) {
     bench = props.bench
     squat = props.squat
     overheadPress = props.overheadPress
     deadlift = props.deadlift
  
    const lifts = [bench, squat, overheadPress, deadlift]
    const percentages = [.5]
    
    lifts.map((v,i) => {percentages.map((v2,i2)=>{arr.push(round5(trainMax(Math.floor(v*v2))))})})

  return { arr }
  }
}

export function calcProgression (props, arr) {
  let bench, squat, overheadPress, deadlift
  if (props) {
     bench = props.bench
     squat = props.squat
     overheadPress = props.overheadPress
     deadlift = props.deadlift

   bench = round5(Math.floor(bench + 5) * .9 ) 
   squat = round5(Math.floor(squat + 10) * .9) 
   overheadPress = round5(Math.floor(overheadPress + 5) * .9) 
   deadlift = round5(Math.floor(deadlift + 10)  * .9)
  }
  arr.push(bench)
  arr.push(squat)
  arr.push(overheadPress)
  arr.push(deadlift)

  return { arr }

}