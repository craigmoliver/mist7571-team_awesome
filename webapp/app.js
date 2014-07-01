//put json data into local storage
function getScaventureData() {
    return JSON.parse(getLocalStorage("scaventureData"));
}
//retrieve json data from local storage
function setScaventureData(data) {
    setLocalStorage("scaventureData", JSON.stringify(data));
}

// get selected city or set selected city if null
function getSelectedCity() {
    //retrieve json data from local storage
    var scaventureData = getScaventureData();

    // get cities
    var cities = scaventureData.scaventure.cities;

    // get selected city or set selected city if null
    var selectedCity = getLocalStorage("selectedCity");
    if (!selectedCity) {
        selectedCity = cities[0].name; // select the first city
        setSelectedCity(selectedCity);
    }
    return selectedCity;
}
//set local storage with selected city
function setSelectedCity(selectedCity) {
    setLocalStorage("selectedCity", selectedCity);
}

// get selected city from local storage
function getSelectedHunt() {
    return getLocalStorage("selectedHunt");

}
//set local storage with selected city
function setSelectedHunt(hunt) {
    setLocalStorage("selectedHunt", hunt);
}


// set the localStorage with the changed field
function setLocalStorage(storageKey, storageValue) {
    // check if local storage is available
    if (window.localStorage) {
        // try to set item in local storage
        try {
            localStorage.setItem(storageKey, storageValue);
            var savedVal = localStorage.getItem(storageKey);
            //console.log("Saved [" + storageKey + "] into localStorage with the Value:");
            //console.log(savedVal);
        }
        catch (err) {
            //unable to set item in local storage
            console.log("oops, there was a local storage error: " + err)
        }
    }
    else {
        alert('localStorage is not supported.');
    }
}

// retrieves local storage value
function getLocalStorage(name){
    var returnVal = localStorage.getItem(name);
    if (returnVal) {
        console.log("getLocalStorage(" + name + ") = " + returnVal);
    }
    else {
        console.log("getLocalStorage(" + name + ") is null");
    }
    return returnVal;
}
