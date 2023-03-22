function convert(){
    // The getElementById() method returns an element with a specified value.
    var degF = document.getElementById("fValue").value;

// Calculation

var degC=(degF-32)*(5/9);

// The innerHTML property sets or returns the HTML content (inner HTML) of an element.
// The toFixed method rounds the string to a specific number of decimals.
document.getElementById("cValue").innerHTML=degC.toFixed(2);

}

// When to run the Function? addEventListener
document.getElementById("button").addEventListener("click" , convert);