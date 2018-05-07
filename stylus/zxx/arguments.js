
function sum(...args) {
  /*   for(let i=0;i<arguments.length;i++){
         total+=arguments[i];

    } */
    //arguments 类数组 js生成的怪胎
    /* let total=0;
    arguments.forEach(i => {
        total+=i;
    }) */
    let total=0;
    Array.from(arguments).forEach(i=>{
        total+=i;
    })
    return total;
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));



