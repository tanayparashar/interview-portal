const Candidate = (props) => {
  console.log(props);
  const { name, start, end} = props;
  return (
    <div>
      <span>{name}</span>
      <span>{start} </span>
      <span>{end} </span>
    </div>
  );
};

export default Candidate;