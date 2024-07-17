function displayNumber(num)
{
    document.getElementById("result").value+=num
}
function clearScreen()
{
    document.getElementById("result").value='';
}
function operations()
{
    result.value=eval(result.value)
}
function backspace()
{
    result.value=result.value.slice(0,-1)
}