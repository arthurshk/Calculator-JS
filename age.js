function calculateAgeGroup() {
    let ages = parseInt(document.getElementById("age").value);
    const outputNode = document.querySelector('.js-output');
    let child = "child";
    let teen = "teen";
    let adult = "adult";
    let elder = "elder";
    let invalid = "Invalid age";

    if (ages >= 0 && ages <= 12)
    {
        outputNode.innerHTML = child;
    }

    if (ages >= 13 && ages <= 18)
    {
        outputNode.innerHTML = teen;
    }


    if (ages >= 19 && ages <= 60){
        outputNode.innerHTML = adult;
    }
    if (ages >= 61 && ages <= 130)
    {
        outputNode.innerHTML = elder;
    }
    if (ages < 0 || ages > 130)
    {
        outputNode.innerHTML = invalid;
    }
}

