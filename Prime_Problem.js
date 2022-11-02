function prime(num)
{
    let count = 0;
    for(let i=1;i<=num;i++)
    {
        if(num%i==0)
        count++;
    }
    if(count==2)
     return true;
    else
     return false;
}
let N = 15;
for(let i = 1; i<=N ;i++ )
{
    let condition = prime(i);
    if(condition == true)
    console.log(i,'is Prime');
    else
    console.log(i,'is not Prime');
}