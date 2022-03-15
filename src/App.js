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
    fetch("http://localhost:5000/home", {
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
  <SetInterview butVal="submit"></SetInterview>
  return(
    candidateObj.map((candidate)=>
    {
      console.log(candidate);
      return(
        <Candidate
          name={candidate.name}
          start={candidate.start}
          end={candidate.end}
        />
      );}))
}

export default App;
