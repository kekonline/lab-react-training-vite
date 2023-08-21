function IdCard(props) {
  const cardStyle = {
    border: "1px solid black",
    display: "flex",
    flexDirection: "row",
  };

  const bold = {
    fontWeight: "bold",
  };

  const { firstName, lastName, gender, picture, height, birth } =
    props.userInfo;

  return (
    <div style={cardStyle}>
      <div>
        <img src={picture} alt="" width="200" />
      </div>

      <div>
        <p>
          <span style={bold}>firstName: </span>
          {firstName}
        </p>
        <p>
          <span style={bold}>lastName: </span>
          {lastName}
        </p>
        <p>
          <span style={bold}>gender: </span>
          {gender}
        </p>
        <p>
          <span style={bold}>height: </span>
          {height}
        </p>
        <p>
          <span style={bold}>birth: </span>
          {birth}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
