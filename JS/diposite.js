document.getElementById('btn-diposit').addEventListener('click', function () {
    // step- 2 get the deposit amount from the deposit input field
    const totalDipusitAmont = document.getElementById('deposit-field')
    const newtotalAmontString = totalDipusitAmont.value
    const newtotalAmont = parseFloat(newtotalAmontString)

    totalDipusitAmont.value = '';
    if (isNaN(newtotalAmont)) {
        alert('Please Provide a valid number');
        return;
    }

    const totalAmountDiposit = document.getElementById('diposit-total')
    const newPreviusAmountAddedString = totalAmountDiposit.innerText
    const newPreviusAmountAdded = parseFloat(newPreviusAmountAddedString);
    totalAmountDiposit.innerText = newtotalAmont

    const currentTotal = newPreviusAmountAdded + newtotalAmont;
    totalAmountDiposit.innerText = currentTotal

    const addedBlacnce = document.getElementById('blance-total')
    const newblanceTotalstring = addedBlacnce.innerText;
    const newblanceTotal = parseFloat(newblanceTotalstring)

    const allBlacnestring = newblanceTotal  + newtotalAmont;
  
    addedBlacnce.innerText = allBlacnestring;




    //  step clear the deposit filed
    

})




