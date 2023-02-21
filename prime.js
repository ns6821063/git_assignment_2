let x = 11;
let fac = 0;
for(let i=0;i<=x;i++){
if(x%i==0){
fac++
}
}
if(fac==2){
console.log("prime")
}else{
console.log("Not prime")
}