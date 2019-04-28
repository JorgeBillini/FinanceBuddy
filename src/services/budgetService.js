const calculateBudget = (arr,budget) =>{
    let total =0;
    for(let i = 0; i < arr.length; i++){
        total+= arr[i].expense_amount
    }
    return ((total / budget) * 100).toFixed(2);

}

export default calculateBudget;