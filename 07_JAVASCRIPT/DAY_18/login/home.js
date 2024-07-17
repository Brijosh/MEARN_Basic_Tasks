    function addEmployee()
    {
        const employee={
            id :empid.value,
            name:empname.value,
            address:empadd.value,
            designation:empdes.value,
            exp:empexp.value,
            salary:empsal.value
        
        }
        if(employee.id=="" || employee.name=="" || employee.address=="" || employee.designation=="" || employee.exp=="" || employee.salary=="" )
        {
            alert("Please fill the form")
        }
        else
        {
            if(employee.id in localStorage)
            {
                alert(`Employee already exists`)
            }
            else
            {
                localStorage.setItem(employee.id,JSON.stringify(employee))
                alert(`Employee added successfully`)
            } 
        }
        
        
    }
    function searchBox()
    {
        key=search.value
        if(key in localStorage)
            {
                alert(`Emp found`)
                employee=JSON.parse(localStorage.getItem(key))
                result.innerHTML=`
                <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Employee Details</h5>
                    <p class="card-text">
                        id :${employee.id}
                        <br>
                        name:${employee.name}
                        <br>
                        address:${employee.address}
                        <br>
                        designation:${employee.designation}
                        <br>
                        exp:empexp.${employee.exp}
                        <br>
                        salary:${employee.salary}
                    </p>
                </div>
                </div>`
            }
        else 
        {
            alert(`Emp not found`);
        }
    }