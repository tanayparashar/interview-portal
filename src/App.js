import './App.css';
import { useEffect ,useState} from 'react';
import Candidate from "./Candidate";
import SetInterview from './SetInterview';
function App() {
  const [candidateObj,setcandidateObj]=useState([]);
  
  function requestOBJ()
  {
    fetch("http://localhost:5000/candidates", {
      method: "GET", // or 'PUT'
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      mode:"cors"
    })
    .then((res) => (res.json()))
    .then((data) => (setcandidateObj(data)));
  }
  useEffect(() => {
    requestOBJ();
  },[]);
  return(
    <div>
      <SetInterview></SetInterview>
      <div>
      {
        candidateObj.map((candidate)=>{
          //console.log(candidate);
          return(
            <Candidate
              candidateEmail={candidate.candidateEmail}
              candidateName={candidate.candidateName}
              interviewerName={candidate.interviewerName}
              interviewerEmail={candidate.interviewerEmail}
              startTime={candidate.startTime}
              endTime={candidate.endTime}
            />
        );
        })
      }
      </div>
    </div>
  );


}

export default App;
