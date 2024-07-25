function login()
{
    window.location="login.html"
}

function signup()
{
    const userData=
    {
        username:uNameInput.value,
        emailAddress:emailAddInput.value,
        password:pswrdInput.value,
        budget: { 
            incomeType:'',
            incomeAmt:'',
            expenseType:'',
            expenseAmt:'',
            balance:'0',
            totalInc:'0',
            totalExp:'0',
            timeLog:'',
            tableLog:``
        }
    }
    if(userData.username==''||userData.emailAddress==''||userData.password=='')
    {
        alert(`Please Fill The Form`)
    }
    else
    {
        
        
        if(userData.username in localStorage)
            {
                alert(`Username Already Exists.\nTry Logging In`)
            }
            else
            {
                localStorage.setItem(userData.username,JSON.stringify(userData))
                window.location='login.html'

            }
    }
}