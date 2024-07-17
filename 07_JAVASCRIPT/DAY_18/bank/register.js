        function signup() {
            const user={
                username:username.value,
                accountNumber:accNo.value,
                password:pswd.value,
                balance:0
            }

            if(user.username =="" || user.accountNumber=="" || user.password=="")
            {
                alert(`Please enter the details`)
            }
            else
            {
                if(user.username in localStorage)
                {
                    alert(`User Already Exits`)
                }
               else
               {
                localStorage.setItem(user.username,JSON.stringify(user));
                alert(`User added successfully`);
                window.location='login.html'
               }
            }
        }