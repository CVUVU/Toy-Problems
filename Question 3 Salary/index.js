const Payment = 24000;
//constant declarion and assignment

function deductions(grossPay){
    //functions to cater for statutory deductions (PAYE, NHIF, NSSF)
    //calculation of deduction percentages
    let netSalary = grossPay-NHIF -NSSF -PAYE
    let NHIF = 500;
    let NSSF = 200;
    let PAYE;{
        if(grossPay <24,000)
        result = 10%(grossPay)
    } if (grossPay >=24,000 && grossPay <= 32,333){
    result = 25%(grossPay)
    } else if(grossPay > 32,333){
        result = 30%(grossPay)
    }
}    
console.log(120000);