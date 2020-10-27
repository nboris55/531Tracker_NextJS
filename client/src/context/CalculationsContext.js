import React, { useState, createContext } from 'react';

export const CalculationsContext = createContext();

export const NumberProvider = (props) => {
  const [lifts, setLifts] = useState({
    repMax : {
        benchRM: '',
        squatRM: '',
        overheadPressRM: '',
        deadliftRM: '',
    },
    trainingMax : {
        benchTM: '',
        squatTM: '',
        overheadPressTM: '',
        deadliftTM: '',
    },
    weekOne : {
        bench: '',
        squat: '',
        overheadPress: '',
        deadlift: '',
    },
    weekTwo : {
        bench: '',
        squat: '',
        overheadPress: '',
        deadlift: '',
    },
    weekThree : {
        bench: '',
        squat: '',
        overheadPress: '',
        deadlift: '',
    },
  });
  return (
    <CalculationsContext.Provider value={[lifts,setLifts]}>{props.children}</CalculationsContext.Provider>
  );
};
