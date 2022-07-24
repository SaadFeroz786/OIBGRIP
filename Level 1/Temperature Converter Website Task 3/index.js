let button = document.getElementById("convertButton");
button.addEventListener("click", function() {
    let degrees = document.getElementById("degrees").value;
    if(isNaN(degrees))
    {
        alert("Please Enter Valid Degrees i.e. 34,54,64");
    }
    else{
        let temperatureType = document.getElementById("temperatureType").value;
        let result = document.getElementById("result");
        if(temperatureType == "Fahrenheit")
        {
            result.value = ((degrees-32) / 1.8).toFixed(4) + " \xB0C";
        }
        if(temperatureType == "Celsius"){
            result.value = ((degrees*1.8) + 32).toFixed(4) + " \xB0F";
        }
    }
  });