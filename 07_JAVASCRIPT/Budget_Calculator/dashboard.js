function logout() {
    window.location = 'login.html'
}

function income() {
    if (incomeAmtInput.value != '' && incomeTypeInput.value != '') {
        userData = JSON.parse(localStorage.getItem(localStorage.displayUserName))
        console.log(userData);
        budgetData = userData.budget
        console.log(budgetData);
        budgetData.incomeType = incomeTypeInput.value
        budgetData.incomeAmt = incomeAmtInput.value
        console.log(budgetData.balance);
        budgetData.balance = Number(budgetData.balance) + Number(incomeAmtInput.value)
        totalBalanceDisplay.innerHTML = `₹${budgetData.balance}`

        totalExpenseDisplay.innerHTML = `₹${budgetData.totalExp}`

        budgetData.totalInc = Number(budgetData.totalInc) + Number(incomeAmtInput.value)
        totalIncomeDisplay.innerHTML = `₹${budgetData.totalInc}`

        const now = new Date();
        const date = now.toLocaleDateString();
        const time = now.toLocaleTimeString();
        console.log();



        htmlData = `
    <tr>
                                <td class="px-6 py-4 border-b border-gray-200 text-sm text-center font-medium text-gray-900">${date} , ${time}</td>
                                <td class="px-6 py-4 border-b border-gray-200 text-sm font-medium text-center text-gray-500">${budgetData.incomeType}</td>
                                <td class="px-6 py-4 border-b border-gray-200 text-sm text-center font-medium text-green-500">₹${budgetData.incomeAmt}</td>
                                <td class="px-6 py-4 border-b border-gray-200 text-sm text-center font-medium text-gray-500"></td>
                                <td class="px-6 py-4 border-b border-gray-200 text-sm text-center font-medium text-blue-500">₹${budgetData.balance}</td>
                              </tr>
    `
        budgetData.tableLog += htmlData
        document.getElementById('statement').innerHTML = budgetData.tableLog


        userData.budget = budgetData
        localStorage.setItem(localStorage.displayUserName, JSON.stringify(userData))
    }
    else {
        alert(`Please fill the income form`)
    }

}
function expense() {
    if (expenseAmtInput.value != '' && expenseTypeInput.value != '') {
        userData = JSON.parse(localStorage.getItem(localStorage.displayUserName))
        console.log(userData);
        budgetData = userData.budget
        console.log(budgetData);
        budgetData.expenseType = expenseTypeInput.value
        budgetData.expenseAmt = expenseAmtInput.value
        console.log(budgetData.balance);
        budgetData.balance = Number(budgetData.balance) - Number(expenseAmtInput.value)
        totalBalanceDisplay.innerHTML = `₹${budgetData.balance}`

        totalIncomeDisplay.innerHTML = `₹${budgetData.totalInc}`

        budgetData.totalExp = Number(budgetData.totalExp) + Number(expenseAmtInput.value)
        totalExpenseDisplay.innerHTML = `₹${budgetData.totalExp}`

        const now = new Date();
        const date = now.toLocaleDateString();
        const time = now.toLocaleTimeString();

        htmlData = `
    <tr>
                                <td class="px-6 py-4 border-b border-gray-200 text-sm text-center font-medium text-gray-900">${date} , ${time}</td>
                                <td class="px-6 py-4 border-b border-gray-200 text-sm text-center font-medium text-gray-500">${budgetData.expenseType}</td>
                                <td class="px-6 py-4 border-b border-gray-200 text-sm text-center font-medium text-green-500"></td>
                                <td class="px-6 py-4 border-b border-gray-200 text-sm text-center font-medium text-red-500">₹${budgetData.expenseAmt}</td>
                                <td class="px-6 py-4 border-b border-gray-200 text-sm text-center font-medium text-blue-500">₹${budgetData.balance}</td>
                              </tr>
    `
        budgetData.tableLog += htmlData
        document.getElementById('statement').innerHTML = budgetData.tableLog


        userData.budget = budgetData
        localStorage.setItem(localStorage.displayUserName, JSON.stringify(userData))
    }
    else {
        alert(`Please fill the expense form`)
    }

}