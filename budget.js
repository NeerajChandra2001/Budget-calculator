function submit() {
    uname = user_name.value;
    mincome = income.value;
    room = ex_rent.value;
    bill = ex_bill.value;
    food = ex_food.value;
    insurance = ex_insurance.value;
    other = ex_others.value;


    if(uname==''&& mincome==''){
        alert('Enter Name and Salary ')
    }
    else{
        total=parseInt(room)+parseInt(bill)+parseInt(food)+parseInt(insurance)+parseInt(other)
        balance=parseInt(mincome)-total;
        console.log(total);
        console.log(balance);
        Balance.value=balance;

    
      
    }
  



}
