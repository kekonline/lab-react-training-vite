function BoxColor(props) {
  const cardStylew = {
    backgroundColor: `rgb(${props.r} ${props.g} ${props.b})`,
    margin: "10px",
    padding: "10px",
  };

  return (
    <div style={cardStylew}>
      <p>
        rgb ({props.r} {props.g} {props.b} )
      </p>
    </div>
  );
}

export default BoxColor;
