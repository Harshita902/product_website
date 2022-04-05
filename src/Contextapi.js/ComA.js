import React ,{createContext} from 'react';
import {ComB} from './ComB';

const BioData=createContext();

  export const ComA = () => {
  return (
  <BioData.Provider value={"Products"}>
<ComB/>
  </BioData.Provider>
  )
};
export {BioData};