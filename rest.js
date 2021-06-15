function animals(...types){
    console.log(types)
}
animals('cat', 'dog', 'fish')




//给数组排序
function sortFunc(){
　　return Array.prototype.slice.call(arguments).sort();
}
     
const sortFunc = (...numbers) => number.sort();


//sample
// rest参数只能写在最后，前面用...标识，从运行结果可知，传入的参数先绑定a、b，多余的参数以数组形式交给变量rest，所以，不再需要arguments我们就获取了全部参数。
// 如果传入的参数连正常定义的参数都没填满，也不要紧，rest参数会接收一个空数组（注意不是undefined）。
function foo(a,b,...rest){
    console.log(a);
    console.log(b);
    console.log(rest);
}

foo(1,2,3,4,5)
foo(1)