import SetInterview from "./SetInterview";
const Candidate = (props) => {
  //console.log(props);
  const { candidateEmail,candidateName ,interviewerName,interviewerEmail,startTime,endTime} = props;
  return (
    <div>
      <span>{candidateEmail}</span>
      <span>{candidateName} </span>
      <span>{interviewerName} </span>
      <span>{interviewerEmail}</span>
      <span>{startTime}</span>
      <span>{endTime}</span>
      <button>edit</button>
    </div>
  );
};

export default Candidate;