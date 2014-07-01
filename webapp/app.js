// set the localStorage with the changed field
function setLocalStorage(storageKey, storageValue) {
    // check if local storage is available
    if (window.localStorage) {
        // try to set item in local storage
        try {
            localStorage.setItem(storageKey, storageValue);
            var savedVal = localStorage.getItem(storageKey);
            console.log("Saved [" + storageKey + "] into localStorage with the Value:");
            console.log(savedVal);
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

// check if storage exists and output storage to console
function checkStorage() {
    // check if local storage available
    if (window.localStorage) {
        // intialize variables
        var key, value, field;
        // loop through local storage
        for (var i = 0; i < localStorage.length; i++) {
            // retrieve the key
            key = localStorage.key(i);
            console.log("localStorage.key(" + i + ") = '" + key + "'");
            // set the field from the key
            field = document.getElementById(key);
            console.log("localStorage.key(" + i + ") = '" + key + "'");
            // check for field and assign value
            if (field) {
                // retrieve the value
                value = localStorage.getItem(key);
                // set the field value
                field.value = value;
            }
        } // end for loop
    } // end local storage check
} // end function