let x = 11;
let factors = 0;
for(let i=0;i<=x;i++){
if(x%i==0){
factors++
}
}
if(factors==2){
console.log("prime")
}else{
console.log("Not prime")
}