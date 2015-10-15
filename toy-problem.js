var calculateTaxesForYear = function(percentageOfPay, upTo, salary){
  var taxes = [];
  var monthlySalary = salary / 12;

  for( var i = 0; i < 12; i++ ){
    //if employee has not made the upTo amount yet
    if( upTo >= monthlySalary * (i + 1) ){
      taxes[i] = monthlySalary * percentageOfPay;
    }
    //if employee has made more than the upTo amount
    if( upTo < monthlySalary * (i + 1) ){
      taxes[i] = upTo * percentageOfPay;
    } 
  }
  return taxes;
}

