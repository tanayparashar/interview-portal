import './App.css';
import { useEffect ,useState} from 'react';
import Candidate from "./Candidate";
import SetInterview from './SetInterview';

function App() {
  const [candidateObj,setcandidateObj]=useState([]);
  useEffect(() => {
    requestOBJ();
  }, []);
  function requestOBJ()
  {
    fetch("http://localhost:5000/candidate", {
    method: "GET", // or 'PUT'
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    })
    .then((res) => (res.json()))
    .then((data) => (setcandidateObj(data)));
    //console.log(candidateObj);
  }
  return(
    <div>
      <SetInterview></SetInterview>
      {
        candidateObj.map((candidate)=>{
          return(
            <Candidate
              name={candidate.name}
              start={candidate.start}
              end={candidate.end}
            />
        );
        })
        
      }
    </div>
  );


}

export default App;
