
const emails=["tanay641@gmail.com","nayansethi30@gmail.com","someuser@gmail.com","anotheruser@gmail.com"];
const SetInterview = (props) => {

  // const [startTime, updateStartTime] = useState("");
  // const [endTime, updateEndTime] = useState("");
  // const [candidateName,updateCandidateName]=useState("");
  // const [candidateEmail,updateCandidateEmail]=useState("");
  // const [interviewerName,updateInterName]=useState("");
  // const [interviewerEmail,updateInterEmail]=useState("");
  //console.log(props);
  const {candidateName,startTime,endTime,candidateEmail,interviewerName,interviewerEmail,updateInterEmail,updateInterName,updateCandidateEmail,updateCandidateName,updateEndTime,updateStartTime}=props;
  function setCandidate()
  {
    var starttime=(startTime.slice(0,2)+startTime.slice(3));
    var endtime=(endTime.slice(0,2)+endTime.slice(3));
    console.log(startTime,endTime);
    const data = { candidateEmail: candidateEmail,
      candidateName: candidateName,
      interviewerName: interviewerName,
      interviewerEmail:interviewerEmail,
      startTime: parseInt(starttime),
      endTime:parseInt(endtime)
    };

    fetch('http://patch:5000/candidates', {
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
     window.location.reload(false);
    })
    .catch((error) => {
    console.error('Error:', error);
});
  }
  return(
    <div>
      <form  onSubmit={(e) => {
          e.preventDefault();
          setCandidate();
        }}
      >
        <label htmlFor="Candidate Email">
          candidateEmail
          <select
            id="candidateEmail"
            value={candidateEmail}
            onChange={(e) => updateCandidateEmail(e.target.value)}
            onBlur={(e) => updateCandidateEmail(e.target.value)}
          >
            <option />
              {emails.map((email) => (
              <option key={email} value={email}>
                {email}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="Candidate Name">
          Candidate Name
          <input
            id="CandidateName"
            value={candidateName}
            placeholder="Candidate Name"
            onChange={(e) => updateCandidateName(e.target.value)}
          />
        </label>
        <label htmlFor="Interviewer Name">
          Interviewer Name
          <input
            id="interviewerName"
            value={interviewerName}
            placeholder="Interviewer Name"
            onChange={(e) => updateInterName(e.target.value)}
          />
        </label>
        <label htmlFor="Interviewer Email">
          Interviewer Email
          <input
            id="interviewerEmail"
            value={interviewerEmail}
            placeholder="Interviewer Email"
            onChange={(e) => updateInterEmail(e.target.value)}
          />
        </label>
        <label htmlFor="startTime">
          Start Time
          <input
            type="time"
            step="0"
            value={startTime}
            placeholder="Start Time"
            onChange={(ev) => updateStartTime(ev.target.value)}
          />
        </label>
        <label htmlFor="EndTime">
          End Time
          <input
            type="time"
            step="0"
            value={endTime}
            placeholder="End Time"
            onChange={(ev) => updateEndTime(ev.target.value)}
          />
        </label>

        <button>Submit</button>
      </form>
    </div>
  );
  
};

export default SetInterview;