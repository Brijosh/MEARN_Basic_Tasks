function signup()
{
    window.location="index.html"
}

function login()
{
    if(uNameInput.value==''||pswrdInput.value=='')
    {
        alert('Please Verify Username & Password')
    }
    else
    {
        if(uNameInput.value in localStorage)
            {
                userData=JSON.parse(localStorage.getItem(uNameInput.value))
                if(userData.password==pswrdInput.value)
                {
                    localStorage.setItem('displayUserName',uNameInput.value)
                    window.location='dashboard.html'
                }
                else
                {
                    alert(`Incorrect Password\nTry Again`)
                }
            }
            else
            {
                alert(`User Doesn't Exist.\nTry Signing Up`)
            }
    }
    
}