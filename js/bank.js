
document.getElementById("deposite-from-button").addEventListener('click', function () {
    const bankDeposit = document.getElementById('input-deposite');
    const bankDepositValue = bankDeposit.value;
    const totalDepositElement = document.getElementById('total-deposite');
    const previousTotalDepositValue = totalDepositElement.innerText;
    const currentDepositTotal = parseInt(previousTotalDepositValue) + parseInt(bankDepositValue);
    totalDepositElement.innerText = currentDepositTotal;

    
    
    //total balance calculation
    const totalBalanceElement = document.getElementById('total-balance')
    const totalBalance = parseInt(totalBalanceElement.innerText);
    const totalBalanceCalculation =parseInt(bankDepositValue) + totalBalance;
    totalBalanceElement.innerText = totalBalanceCalculation;


    bankDeposit.value = '';

})