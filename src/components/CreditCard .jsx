function CreditCard(props) {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;


  const cardStyle = {
    backgroundColor:bgColor,
    width:"400px",
    
}

const textColor = {
  color:color,
}


const cardNumb = number.slice(-4)
const shortYears = expirationYear.toString().slice(-2)

// console.log(expirationYear)


  return (
    <div style={cardStyle}>
      <h3 style={textColor}>{type}</h3>
      <h2 style={textColor}>**** **** **** {cardNumb}</h2>
      <p style={textColor}>Expires: {expirationMonth}/{shortYears}    {bank}</p>
      <p style={textColor}>{owner}</p>
    </div>
  );
}

export default CreditCard;
