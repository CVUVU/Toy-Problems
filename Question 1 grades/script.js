// Function for calculating grades
const calculate = () => {
  
    // Getting input from user into height variable.
    let chemistry = Document.querySelector("#chemistry").value;
    let english = Document.querySelector("#english").value;
    let maths = Document.querySelector("#maths").value;
    let kiswahili = Document.querySelector("#kiswahili").value;
    let phy = Document.querySelector("#phy").value;
    let grades = "";
    
    // Input is string so typecasting is necessary. */
    let totalgrades =
      parseFloat(chemistry) +
      parseFloat(english) +
      parseFloat(maths) +
      parseFloat(kiswahili) +
      parseFloat(phy);
    
    // Checking the condition for the providing the 
    // grade to student based on percentage
    let percentage = (totalgrades / 500) * 100;
    if (percentage <= 100 && percentage > 79) {
      grades = "A";
    } else if (percentage <= 79 && percentage >= 60) {
      grades = "B-";
    } else if (percentage <= 59 && percentage >= 49) {
      grades = "C-";
    } else if (percentage <=49 && percentage >= 40){
      grades = "D-"
    }    else {
      grades = "E";
    }
    // Checking the values are empty if empty than
    // show please fill them
    if (chemistry == "" || english == ""
              || maths == ""|| kiswahili =="" || phy == "") {
      Document.querySelector("#showdata").innerHTML
           = "Please enter all the fields";
    } else {
    
      // Checking the condition for the fail and pass
      if (percentage >= 39.5) {
        Document.querySelector(
          "#showdata"
        ).innerHTML = 
          ` Out of 500 your total is  ${totalgrades} 
          and percentage is ${percentage}%. <br> 
          Your grade is ${grades}. You are Pass. `;
      } else {
        Document.querySelector(
          "#showdata"
        ).innerHTML = 
          ` Out of 500 your total is  ${totalgrades} 
          and percentage is ${percentage}%. <br> 
          Your grade is ${grades}. You are Fail. `;
      }
    }
  };