document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field')
    const newWithdrawAmountsrting = withdrawField.value
    const newWithdrawAmount = parseFloat(newWithdrawAmountsrting)

    const withdrawTotalElement = document.getElementById('withdraw-total')
    const prevousTotalElementString = withdrawTotalElement.innerText
    const prevousTotalElement = parseFloat(prevousTotalElementString)


    const currentWithdrawTotal = prevousTotalElement + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal

    const blanceTotalElement = document.getElementById('blance-total')
    const blanceTotalElementString = blanceTotalElement.innerText
    const blanceTotalElements = parseFloat(blanceTotalElementString)

    const totalBlanceNew = blanceTotalElements - newWithdrawAmount;
    blanceTotalElement.innerText = totalBlanceNew




    withdrawField.value = '';


})