const Result = ({ autismResult }) => {



  console.log(autismResult)
  return (
    <div>
      {autismResult?.facialResult ? (
        <div style={{ display: "flex", gap: "0.7rem" }}>
          <h1>Facial Result:</h1>
          <h1>{autismResult.facialResult.message}</h1>
          <img width={200} height={200}  src={autismResult.facialResult.image} alt="facial-img" />
        </div>
      ) : (
        <h1>No Facial image detected</h1>
      )}
      {autismResult?.neuroResult?(
        <div style={{ display: "flex", gap: "0.7rem" }}>
          <h1>Neuro Result:</h1>
          <h1>{autismResult.neuroResult.message}</h1>
          <img width={200} height={200} src={autismResult.neuroResult.image} alt="neuro-img" />
        </div>
      ) : (
        <h1>No Neuro image detected</h1>
      )}
    </div>
  );
};

export default Result;
