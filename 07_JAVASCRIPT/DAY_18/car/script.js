function record()
{
    const data=
            {
                brand:brand.value,
                price:price.value,
                key:key.value
            }
            console.log(data);
    if(data.brand=='' || data.price=='' || data.key=='' )
        {
            alert(`Please Fill the form`)
    }
    else
    {
        if(key in localStorage)
            {
                alert(`Key Already Exisits`)
            
        }
        else
        {
            
            localStorage.setItem(data.key,JSON.stringify(data))
            alert(`Car Added`)
        }

    }
}
function retrieve()
{
    
        if(search.value in localStorage)
            {
                alert(`Emp found`)
                car=JSON.parse(localStorage.getItem(search.value))
                result.innerHTML=`
                <div class="card mt-2 bg-light" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title text-success">Car Details</h5>
                    <p class="card-text text-primary fw-semibold">
                        Car Brand : ${car.brand}
                        <br>
                        Price : ${car.price}
                    </p>
                </div>
                </div>`
            }
        else 
        {
            alert(`Key not found`);
        }
}
function remove()
{
    if(removeKey.value in localStorage)
        {
            localStorage.removeItem(removeKey.value)
            alert(`Key has been removed`)
        }
    else 
    {
        alert(`Key not found`);
    }
}

function clearRecord()
{
    localStorage.clear()
}
