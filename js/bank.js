//deposit area
document.getElementById("deposite-from-button").addEventListener('click', function () {
    const bankDeposit = document.getElementById('input-deposite');
    const bankDepositValue = parseFloat(bankDeposit.value);
    //clear the value area
    bankDeposit.value = '';

    if (isNaN(bankDepositValue)){
        alert('please enter a valid number')
        return
    }
    const totalDepositElement = document.getElementById('total-deposite');
    const previousTotalDepositValue = totalDepositElement.innerText;
    const currentDepositTotal = parseFloat(previousTotalDepositValue) +bankDepositValue;
    totalDepositElement.innerText = currentDepositTotal;



    //total balance calculation
    const totalBalanceElement = document.getElementById('total-balance')
    const totalBalance = parseFloat(totalBalanceElement.innerText);
    const totalBalanceCalculation = parseFloat(bankDepositValue) + totalBalance;
    totalBalanceElement.innerText = totalBalanceCalculation;

})

//withdraw area
document.getElementById("withdraw-from-button").addEventListener('click', function () {
    const bankWithdraw = document.getElementById('input-withdraw');
    const bankWithdrawValue = parseFloat(bankWithdraw.value);
    //clear the value area
    bankWithdraw.value = '';
    if (isNaN(bankWithdrawValue)) {
        alert('please enter a valid number')
        return
    }
    const totalWithdrawElement = document.getElementById('total-withdraw');

    //total balance calculation
    const totalBalanceElement = document.getElementById('total-balance')


    const totalBalance = parseFloat(totalBalanceElement.innerText);
    if (bankWithdrawValue > totalBalance) {
        alert('Baap ar Bank a Taka nao');
        return
    }
    const previousTotalWithdrawValue = totalWithdrawElement.innerText;
    const currentWithdrawTotal = parseFloat(previousTotalWithdrawValue) + bankWithdrawValue;
    totalWithdrawElement.innerText = currentWithdrawTotal;

    const totalBalanceCalculation = totalBalance - parseFloat(bankWithdrawValue);
    totalBalanceElement.innerText = totalBalanceCalculation;


})