document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field')
    const newWithdrawAmountsrting = withdrawField.value
    const newWithdrawAmount = parseFloat(newWithdrawAmountsrting)

    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('Please Provide a valid number');
        return;
    }
    const withdrawTotalElement = document.getElementById('withdraw-total')
    const prevousTotalElementString = withdrawTotalElement.innerText
    const prevousTotalElement = parseFloat(prevousTotalElementString)

    const blanceTotalElement = document.getElementById('blance-total')
    const blanceTotalElementString = blanceTotalElement.innerText
    const blanceTotalElements = parseFloat(blanceTotalElementString)


    if (newWithdrawAmount > blanceTotalElements) {
        alert('baper bank e etu taka nai')
        return;
    }

    const currentWithdrawTotal = prevousTotalElement + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal

    const totalBlanceNew = blanceTotalElements - newWithdrawAmount;
    blanceTotalElement.innerText = totalBlanceNew




})