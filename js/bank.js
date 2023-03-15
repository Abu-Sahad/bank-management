//deposit area
document.getElementById("deposite-from-button").addEventListener('click', function () {
    const bankDeposit = document.getElementById('input-deposite');
    const bankDepositValue = bankDeposit.value;
    const totalDepositElement = document.getElementById('total-deposite');
    const previousTotalDepositValue = totalDepositElement.innerText;
    const currentDepositTotal = parseFloat(previousTotalDepositValue) + parseFloat(bankDepositValue);
    totalDepositElement.innerText = currentDepositTotal;



    //total balance calculation
    const totalBalanceElement = document.getElementById('total-balance')
    const totalBalance = parseFloat(totalBalanceElement.innerText);
    const totalBalanceCalculation = parseFloat(bankDepositValue) + totalBalance;
    totalBalanceElement.innerText = totalBalanceCalculation;

    //clear the value area
    bankDeposit.value = '';

})

//withdraw area
document.getElementById("withdraw-from-button").addEventListener('click', function () {
    const bankWithdraw = document.getElementById('input-withdraw');
    const bankWithdrawValue = bankWithdraw.value;
    const totalWithdrawElement = document.getElementById('total-withdraw');
    const previousTotalWithdrawValue = totalWithdrawElement.innerText;
    const currentWithdrawTotal = parseFloat(previousTotalWithdrawValue) + parseFloat(bankWithdrawValue);
    totalWithdrawElement.innerText = currentWithdrawTotal;



    //total balance calculation
    const totalBalanceElement = document.getElementById('total-balance')
    const totalBalance = parseFloat(totalBalanceElement.innerText);
    const totalBalanceCalculation = totalBalance-parseFloat(bankWithdrawValue);
    totalBalanceElement.innerText = totalBalanceCalculation;

    //clear the value area
    bankWithdraw.value = '';
})