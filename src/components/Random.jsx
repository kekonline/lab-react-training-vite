 function Random (props) {
   
    const cardStyle = {
        border: "1px solid black",
        display: "flex",
        flexDirection: "row",
      };




   const randomNumber = Math.floor(Math.random() * (props.max - props.min + 1)) + props.min
   
    return (
     <div  style={cardStyle}>
       <h1>Random value between {props.min} and {props.max} => {randomNumber}</h1>
     </div>
   );
 }
 
 export default Random