import profiles from "../data/berlin.json";
import { useState } from "react";

function FaceBook() {
  const [isSelected, setisSelected] = useState(profiles);
  const [searchInput, setSearchInput] = useState("");

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
    border: "1px solid black",
    width: "90vw",
    margin: "20px",
    display: "flex",
    flexDirection: "row",
  };

  const textStyle = {
    display: "flex",
    fontSize: "1.1rem",
    justifyContent: "flex-start",
  };

  let countryList = [];
  const contriesToChoose = () => {
    profiles.forEach((oneProfile) => {
      if (!countryList.includes(oneProfile.country)) {
        countryList.push(oneProfile.country);
      }
    });

    countryList.sort((a, b) => {
      return a > b ? 1 : -1;
    });
  };

  contriesToChoose();

  const handleCountryFilter = (selectedCountry) => {
    let selectedProfile = JSON.parse(JSON.stringify(isSelected));
    // let selectedProfile= cloneselectedProfile.map ((oneProfile) => {

    for (let i = 0; i < selectedProfile.length; i++) {
      if (selectedProfile[i].country === selectedCountry) {
        console.log(selectedProfile);
        selectedProfile[i].isSelected = true;
      } else {
        selectedProfile[i].isSelected = false;
      }
    }

    // )

    console.log(selectedProfile);
    setisSelected(selectedProfile);
  };

  const handleSortCountries = () => {
    let sortedProfile = JSON.parse(JSON.stringify(isSelected));
    sortedProfile.sort((a, b) => {
      return a > b ? 1 : -1;
    });

    setisSelected(sortedProfile);
  };

  const handleShowInfo = (firstName) => {
    let showProfile = JSON.parse(JSON.stringify(isSelected));
    // let selectedProfile= cloneselectedProfile.map ((oneProfile) => {

    for (let i = 0; i < showProfile.length; i++) {
      if (showProfile[i].firstName === firstName) {
        showProfile[i].show === true
          ? (showProfile[i].show = false)
          : (showProfile[i].show = true);
      }
    }

    // )

    setisSelected(showProfile);
  };

  const handleMegaSearch = (event) => {
    const megaSearch = profiles.filter((aProfile) => {
      if (
        aProfile.firstName
          .toLowerCase()
          .startsWith(event.target.value.toLowerCase()) ||
        aProfile.lastName
          .toLowerCase()
          .startsWith(event.target.value.toLowerCase()) ||
        aProfile.country
          .toLowerCase()
          .startsWith(event.target.value.toLowerCase())
      ) {
        return true;
      } else {
        return false;
      }
    });
    console.log(megaSearch);
    setSearchInput(event.target.value);
    setisSelected(megaSearch);
  };

  return (
    <div>
      <div key={Math.random() * 10000000}>
        <h1>FaceBook</h1>
      </div>
      <label htmlFor="search">Search</label>
      <input
        type="text"
        name="search"
        onChange={handleMegaSearch}
        value={searchInput}
      />
      <br />
      <button onClick={handleSortCountries} value={searchInput}>
        Sort
      </button>

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
      {isSelected.map((oneProfile) => {
        return (
          <div
            onClick={() => {
              handleShowInfo(oneProfile.firstName);
            }}
            key={Math.random() * 10000000}
            style={
              oneProfile.isSelected === true ? contStyleSelected : contStyle
            }
          >
            <div>
              <img src={oneProfile.img} width={200} />
            </div>

            {oneProfile.show && (
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
            )}
          </div>
        );
      })}
    </div>
  );
}

export default FaceBook;
