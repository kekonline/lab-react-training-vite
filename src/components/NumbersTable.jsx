function NumbersTable(props) {
  const { limit } = props;

  const contStyle = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  };
  const even = {
    width: "200px",
    height: "200px",
  };
  const odd = {
    width: "200px",
    height: "200px",
  };

  let numbArr = [];

  for (let i = 0; i < limit; i++) {
    numbArr[i] = i;
  }

  const complicatedStyle = (eachNumb) => {
    return {
      border: "1px solid black",
      width: "200px",
      height: "200px",
      backgroundColor: eachNumb % 2 === 0 ? "red" : "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    };
  };

  return (
    <div style={contStyle}>
      {numbArr.map((eachNumb, i) => {
        return (
          <div key={eachNumb} style={complicatedStyle(eachNumb)}>
            <h2> {eachNumb}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default NumbersTable;
