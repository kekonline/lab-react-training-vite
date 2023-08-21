import Rating from "./Rating"

function DriverCard (props){
const {name, rating, img, car:{model, licensePlate}} = props


const imgpros = {
borderRadius: "100%"

}



const cont = {
 display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "blue",
    borderRadius: "20px",
    }

    const cont2 = {
        
        display: "flex",
        flexDirection: "column",
 
    alignItems: "flex-start",
        }











return(

<div style={cont}>
<img style={imgpros} src={img} alt="" width="150" height="150" />
<div>


</div>
<div style={cont2}>
    <h3>{name}</h3>
<Rating>{rating}</Rating>
<p>{model} - {licensePlate}</p>
</div>

</div>
)




}


export default DriverCard