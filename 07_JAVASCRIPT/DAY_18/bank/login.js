function login()
{
    let username=userinput.value;
    let password=pswdinput.value;
    if(username in localStorage)
    {
        user=JSON.parse(localStorage.getItem(username))
        if(password==user.password)
        {
            alert(`Login Successful`)
            console.log(user.username);
            localStorage.setItem("username", user.username)
            window.location='dashboard.html'
        }
        else
        {
            alert(`Incorrect Password`)
        }
    }
    else
    {
        alert(`User doesn't exist`)
    }
}