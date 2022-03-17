import './App.css';
import { useEffect ,useState} from 'react';
//import Candidate from "./Candidate";
import SetInterview from './SetInterview';
function App() {
  const [candidateObj,setcandidateObj]=useState([]);
  const [startTime, updateStartTime] = useState("");
  const [endTime, updateEndTime] = useState("");
  const [candidateName,updateCandidateName]=useState("");
  const [candidateEmail,updateCandidateEmail]=useState("");
  const [interviewerName,updateInterName]=useState("");
  const [interviewerEmail,updateInterEmail]=useState("");

  //const [hello,updateHello]=useState("hello");
  function customupdate(candidateName,candidateEmail,interviewerName,interviewerEmail, startTime, endTime)
  {
    //console.log(candidateName,candidateEmail,interviewerName,interviewerEmail, startTime, endTime);
    updateCandidateName(candidateName);
    updateCandidateEmail(candidateEmail);
    updateStartTime(startTime);
    updateEndTime(endTime);
    updateInterName(interviewerName);
    updateInterEmail(interviewerEmail);
    <SetInterview interviewerEmail={interviewerEmail} interviewerName={interviewerName} candidateEmail={candidateEmail} candidateName={candidateName} endTime={endTime} startTime={startTime} updateInterEmail={updateInterEmail} updateInterName={updateInterName} updateCandidateEmail={updateCandidateEmail} updateCandidateName={updateCandidateName} updateEndTime={updateEndTime} updateStartTime={updateStartTime}></SetInterview>
  }
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
      <SetInterview interviewerEmail={interviewerEmail} interviewerName={interviewerName} candidateEmail={candidateEmail} candidateName={candidateName} endTime={endTime} startTime={startTime} updateInterEmail={updateInterEmail} updateInterName={updateInterName} updateCandidateEmail={updateCandidateEmail} updateCandidateName={updateCandidateName} updateEndTime={updateEndTime} updateStartTime={updateStartTime}></SetInterview>
      <div>
      {
          candidateObj.map((candidate)=>{
            return(
              <div>
                  <span>{candidate.candidateEmail}</span>
                  <span>{candidate.candidateName} </span>
                  <span>{candidate.interviewerName} </span>
                  <span>{candidate.interviewerEmail}</span>
                  <span>{candidate.startTime}</span>
                  <span>{candidate.endTime}</span>
                  <button onClick={()=>customupdate(candidate.candidateName,candidate.candidateEmail,candidate.interviewerName,candidate.interviewerEmail, candidate.startTime, candidate.endTime)}>Edit</button>
              </div>
            );
          })
      }
      </div>
    </div>
  );


}

export default App;
