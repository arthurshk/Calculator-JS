function calculateMiles(){
    let kilometers = parseFloat(document.getElementById("kil").value);
    let milesInKilometers = 0.621371;
    let miles = kilometers * milesInKilometers;
    document.getElementById('outputDiv').innerHTML = miles;

}