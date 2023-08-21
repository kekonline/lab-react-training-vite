function Greetings (props) {
  
    const cardStyle = {
        border: "1px solid black",
        display: "flex",
        flexDirection: "row",
      };




if(props.lang === "de"){
  return (
 <div style={cardStyle} > 
  
  <h1> Hallo {props.children}</h1>
  </div>
  )
}
else if(props.lang === "fr"){
  return (
    <div style={cardStyle} > 
  
  <h1>Bonjour {props.children}</h1>
  
  </div>
  
  )
}

}

 
   
   
export default Greetings;