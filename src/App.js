import './App.css';
import { useEffect ,useState} from 'react';
import ScrollToTop from "react-scroll-to-top";
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
    let data={candidateName:candidateName,candidateEmail:candidateEmail,interviewerName:interviewerName,interviewerEmail:interviewerEmail, startTime:startTime, endTime:endTime}
    console.log(candidateName,candidateEmail,interviewerName,interviewerEmail, startTime, endTime);
    fetch('https://interview-backend-scaler.herokuapp.com/candidates/delete', {
    method: 'POST', // or 'PUT'
    headers: {
      "Access-Control-Allow-Origin": "*",
      'Content-Type': 'application/json'
    },
    mode:"cors",
    body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    updateCandidateName(candidateName);
    updateCandidateEmail(candidateEmail);
    updateStartTime(startTime);
    updateEndTime(endTime);
    updateInterName(interviewerName);
    updateInterEmail(interviewerEmail);
    <SetInterview interviewerEmail={interviewerEmail} interviewerName={interviewerName} candidateEmail={candidateEmail} candidateName={candidateName} endTime={endTime} startTime={startTime} updateInterEmail={updateInterEmail} updateInterName={updateInterName} updateCandidateEmail={updateCandidateEmail} updateCandidateName={updateCandidateName} updateEndTime={updateEndTime} updateStartTime={updateStartTime}></SetInterview>
    window.scrollTo(0,0);
  }

  function requestOBJ()
  {
    fetch("https://interview-backend-scaler.herokuapp.com/candidates", {
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
              <div className="cand-center">
              <div className="candidate-table">
                  <span> Candidate Email   : {candidate.candidateEmail}</span>
                  <span> Candidate Name   : {candidate.candidateName} </span>
                  <span> Interviewer Email   : {candidate.interviewerEmail}</span>
                  <span> Interviewer Name   : {candidate.interviewerName} </span>
                  <span> Start Time   : {candidate.startTime}</span>
                  <span> End Time   : {candidate.endTime}</span>
                  <button className="edit-button" onClick={(e)=>{e.preventDefault();customupdate(candidate.candidateName,candidate.candidateEmail,candidate.interviewerName,candidate.interviewerEmail, candidate.startTime, candidate.endTime);}}>Edit</button>
              </div>
              </div>
            );
          })
      }
      </div>
    </div>
  );


}

export default App;
