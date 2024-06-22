// console.log("hari\"".length)

// let text = "Please give Rs 10000";
// let parts = text.split(' ');
// let amount = parts[3];
// console.log(amount);


// let str="Where you able to do it?"
// console.log(str.replace(str[3],'X'));


// let str1="silent";
// let str2="listen";

// let n1=str1.length;
// let n2=str2.length;

// let ana=true;

// if(n1!=n2)
//     {
//         ana=false;
//     }
// else
// {
//     let sort1=str1.split('').sort();
//     let sort2=str2.split('').sort();

//     for(let i=0;i<n1;i++)
//         {
//             if(sort1[i]!=sort2[i])
//                 {
//                     ana=false;
//                 }
//         }
// }
// if(ana=true)
//     {
//         console.log(`${str1} and ${str2} are anagrams`);
//     }
// else
// {
//     console.log(`${str1} and ${str2} are not anagrams`);

// }

function count(str)
{
    let vowels='aeiou';
    let cons=0;
    let vow=0;
    for(let char of str.toLowerCase())
        {
            if(vowels.includes(char))
                {
                    vow++;
                }
            else
                {
                    cons++;
                }
        }
    return `No. of consonents: ${cons} \nNo. of Vowels: ${vow}`;
    }
    console.log(count('Bananarama'));

// function caps(sentence)
// {
//     let words=sentence.split(' ');
//     for(let i=0;i<words.length;i++)
//         {
//             let fletter=words[i].charAt(0).toUpperCase();
//             words[i]=fletter+ words[i].slice(1)
//         }
//         return words.join(' ')
// }
// console.log(caps("hello world"));

// function compress(str)
// {
//     let count=1;
//     let compress="";
//     for(let i=0;i<str.length;i++)
//         {
//             if(str[i]==str[i+1])
//                 {
//                     count++;                }
//             else
//                 {
//                     compress=compress+str[i]+count;
//                     count=1;
//                 }
//         }
//     return compress;
// }

// console.log(compress('aaaabbccccdeeeeeeee'));


    // let str='aabbbcccceeee'
    // let count=1;
    // let compress="";
    // for(let i=0;i<str.length;i++)
    //     {
    //         if(str[i]==str[i+1])
    //             {
    //                 count++;                }
    //         else
    //             {
    //                 compress=compress+str[i]+count;
    //                 count=1;
    //             }
    //     }
    //  console.log(compress);

