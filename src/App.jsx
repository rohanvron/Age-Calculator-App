import AgeForm from "./components/AgeForm";
import Output from "./components/Output";
import { useState } from "react";

function App() {

  //state initialization
  const [ageResult, setAgeResult] = useState({years: 0, months: 0, days: 0 });

  return(
    <main>
      <AgeForm setAgeResult={setAgeResult}/>
      <Output years={ageResult.years} 
              months={ageResult.months} 
              days={ageResult.days}
            />
    </main>
  )

}

export default App