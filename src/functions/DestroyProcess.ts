import { Process } from "../utils";

const DestroyProcess = (PID : string, processes : Process[]) : Process[] => {
  var i = 0;
  const newProcessesArray : Process[] = [];

  while(i < processes.length){
    if(processes[i].pid !== PID){
      newProcessesArray.push(processes[i]);
    }
    i++;
  }

  return(newProcessesArray);
}

export default DestroyProcess;
