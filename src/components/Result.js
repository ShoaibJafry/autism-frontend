const Result = ({ autismResult }) => {
  console.log(autismResult);

  return (
    <div>
      {autismResult.facialResult?.facial ? (
        <div style={{ display: "flex", gap: "0.7rem" }}>
          <h1>Facial Result:</h1>
          <h1>{autismResult.facialResult.facial.message}</h1>
          <img src={autismResult.facialResult.facial.image.name} alt="facial-img" />
        </div>
      ) : (
        <h1>No Facial image detected</h1>
      )}
      {autismResult.neuroResult?.neuro ? (
        <div style={{ display: "flex", gap: "0.7rem" }}>
          <h1>Neuro Result:</h1>
          <h1>{autismResult.neuroResult.neuro.message}</h1>
          <img src={autismResult.neuroResult.neuro.imageUrl} alt="neuro-img" />
        </div>
      ) : (
        <h1>No Neuro image detected</h1>
      )}
    </div>
  );
};

export default Result;
