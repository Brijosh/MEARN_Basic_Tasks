function login()
{
    var data= username.value
    localStorage.setItem("username",data)
    //Redirect
    window.location="./home.html"
}
