const Candidate = (props) => {
  console.log(props);
  const { candidateEmail,candidateName ,interviewerName,interviewerEmail,startTime,endTime} = props;
  return (
    <div>
      <span>{candidateEmail}</span>
      <span>{candidateName} </span>
      <span>{interviewerName} </span>
      <span>{interviewerEmail}</span>
      <span>{startTime}</span>
      <span>{endTime}</span>
    </div>
  );
};

export default Candidate;