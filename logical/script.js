function logicalOperatorSwitch() {
    const op = document.getElementById('operator').value;
    const val1 = document.getElementById('value1').value.toLowerCase() === 'true';
    const val2Input = document.getElementById('value2').value;
    const val2 = val2Input.toLowerCase() === 'true';
    const resultDiv = document.getElementById('result');

    let result;

    switch(op) {
        case "and":
            // AND operation
            result = val1 && val2;
            resultDiv.innerHTML = `${val1} AND ${val2} = ${result}`;
            break;

        case "or":
            // OR operation
            result = val1 || val2;
            resultDiv.innerHTML = `${val1} OR ${val2} = ${result}`;
            break;

        case "not":
            // NOT operation (only first value matters)
            result = !val1;
            resultDiv.innerHTML = `NOT ${val1} = ${result}`;
            break;

        default:
            resultDiv.innerHTML = "Invalid operator selected!";
            break;
    }
}