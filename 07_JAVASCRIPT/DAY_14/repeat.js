pattern = 'ABCABBC'
//find first recursive character from the given pattern
output =
    arr = pattern.split('');
console.log(arr);
for(let letter of pattern)
    {if (letter in output) { 
        console.log(`First Recursive ${letter} `) 
        break;
    } else { 
        output[letter] = 1 
    }}
 
