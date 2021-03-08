import { PageTable, Process } from "src/utils";
import GetNpfRefs from "./GetNpfRefs";
import PIDGenarator from "./PIDGenerator";
import VerifyAmmountPageProcess from "./VerifyAmmountPageProcess";

const AddNewProcess = (tamp: number, newProcessSize : number, processes : Process[], lastPIDAdded: number, tablePageConfig : PageTable[]) : Process[] => {
  const existentProcess = processes;

  const newProcess = {
    pid: String(PIDGenarator(lastPIDAdded)),
    processSize: newProcessSize,
    npfRefs: GetNpfRefs(VerifyAmmountPageProcess(newProcessSize, tamp), tablePageConfig),
    busyPages: VerifyAmmountPageProcess(newProcessSize, tamp)
  }

  existentProcess.push(newProcess);

  return(existentProcess);
}

export default AddNewProcess;
