function logout() {
    window.location = "login.html"
}
function deposit() {
    username = localStorage.getItem("username")
    userData = JSON.parse(localStorage.getItem(username))
    if (depoPswd.value == userData.password && depsitAmt.value != "") {
        userData.balance = Number(userData.balance) + Number(depsitAmt.value)
        localStorage.setItem(userData.username, JSON.stringify(userData));
        trans.innerHTML=`<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title text-center">Account balance</h5>
          <h6 class="card-subtitle my-2 text-body-secondary text-center">Balance Amount= ₹ ${userData.balance}</h6>
        </div>
      </div>`
    }
    else {
        alert(`Please check the deposit amount and password`)
    }

}
function withdraw() {
    username = localStorage.getItem("username")
    userData = JSON.parse(localStorage.getItem(username))
    if (withdrawPswd.value == userData.password && withdrawAmt.value!= "")
         {
            if (withdrawAmt.value <= userData.balance) {
                userData.balance = Number(userData.balance) - Number(withdrawAmt.value)
                localStorage.setItem(userData.username, JSON.stringify(userData));
                trans.innerHTML=`<div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title text-center">Account balance</h5>
              <h6 class="card-subtitle my-2 text-body-secondary text-center">Balance Amount= ₹ ${userData.balance}</h6>
            </div>
          </div>`
            }
            else {
                alert(`Insufficent Funds`)
            }

    }
    else {
        alert(`Please check the deposit amount and password`)
    }

}