import profiles from "../data/berlin.json";
import { useState } from "react";

function FaceBook() {
  const contStyle = {
    border: "1px solid black",
    width: "90vw",
    margin: "20px",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
  };

  const contStyleSelected = {
    backgroundColor: "lightblue",
  };
  const [isSelected, setisSelected] = useState(contStyle);

  const textStyle = {
    display: "flex",
    fontSize: "1.1rem",
    justifyContent: "flex-start",
  };

  let countryList = [];

  profiles.forEach((oneProfile) => {
    if (!countryList.includes(oneProfile.country)) {
      countryList.push(oneProfile.country);
    }
  });

  countryList.sort((a, b) => {
    return a > b ? 1 : -1;
  });

  const handleCountryFilter = (selectedCountry) => {

    
    let selectedProfile = JSON.parse(JSON.stringify(profiles))
    // let selectedProfile= cloneselectedProfile.map ((oneProfile) => {
        

for(let i = 0; i < selectedProfile.length; i++){

        if(selectedProfile[i].country === selectedCountry){
            // console.log(selectedProfile)
            selectedProfile[i].isSelected = true
        } else {
            selectedProfile[i].isSelected = false
        }





    }
    
    // )


console.log(selectedProfile)
setisSelected(selectedProfile)
  };

  return (
    <div>
      <div key={Math.random() * 10000000}>
        <h1>FaceBook</h1>
      </div>
      {countryList.map((oneCountry) => {
        return (
          <button
            key={Math.random() * 10000000}
            onClick={() => {
              handleCountryFilter(oneCountry);
            }}
          >
            {oneCountry}
          </button>
        );
      })}

      {profiles.map((oneProfile) => {
        return (
          <div key={Math.random() * 10000000} style= {oneProfile.isSelected === true ? contStyleSelected : contStyle}>
            <div>
              <img src={oneProfile.img} width={200} />
            </div>
            <div>
              <p style={textStyle}>
                <b>First name: </b>
                {oneProfile.firstName}
              </p>
              <p style={textStyle}>
                <b>Last name: </b>
                {oneProfile.lastName}
              </p>
              <p style={textStyle}>
                <b>Country: </b>
                {oneProfile.country}
              </p>
              <p style={textStyle}>
                <b>Type: </b>
                {oneProfile.isStudent === false ? "Teacher" : "Student"}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FaceBook;
