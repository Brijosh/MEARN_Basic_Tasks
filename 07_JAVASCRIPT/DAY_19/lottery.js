var pro =new Promise((resolve,reject)=>{
    let lotnum=5;
    let prizeNum=Math.floor(Math.random()*10)
    if(lotnum==prizeNum)
    {
        resolve(`You won the lottery`)
    }
    else
    {
        reject(`Better luck next time`)
    }
})

pro.then(msg=>console.log(msg))
.catch(err=>console.log(err))