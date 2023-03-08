// Javascript code to determine leap year


/*function leap() {
    let year = document.getElementById("year").value;
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                document.getElementById("result").innerHTML = year + " is a leap year ";
            } else {
                document.getElementById("result").innerHTML = year + "is not a leap year ";

            }
        } else {
                    document.getElementById("result").innerHTML = year + " is a leap year ";
                }
        } else {
                    document.getElementById("result").innerHTML = year + " is a leap year "
                        
                }

}
*/

function checkLeapYear() {
    const year = document.getElementById("yearInput").value;
  
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
      alert(`${year} is a leap year!`);
      document.getElementById("result").innerHTML = `${year} is a leap year!`;
    } else {
      alert(`${year} is not a leap year.`);
      document.getElementById("result").innerHTML = `${year} is not a leap year.`;
    }
  }