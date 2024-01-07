import { useState } from "react";
import ExpencesDisplay from "./ExpencesDisplay";
import ExpencesForm, {FormData} from "./ExpencesForm";

export interface ExpenceType extends FormData {
  id: number;
}

function Expences() {
  const [expences, setExpences] = useState<ExpenceType[]>([])
  return (
    <div>
      <ExpencesForm setExpences={setExpences}/>
      <ExpencesDisplay expences={expences} setExpences={setExpences}/>
    </div>
  );
}
export default Expences;
