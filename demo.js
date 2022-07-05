let a = true;
let count = 0;
setTimeout(() => {
    a = false
}, 1000)
// setInterval(()=>{
//     if(a){
//         console.log(count)
//         count++ 
//     }
// },100)

while (a) {
    console.log(count)
    count++
}