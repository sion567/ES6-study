var fun = function(){
    return new Promise(function(resolve, reject){
        return resolve("fun");
    });
}
var callback = function(){
    return "callback";
}

fun().then(function(){
    return callback();
}).then(r => console.log("==1==",r));                       // ==1== callback,是函数 则将函数的返回值cb() 执行了 的值返回给下一个then

fun().then(function(){
    callback();
}).then(r => console.log("==2==",r));                       // ==2== undefined,执行了 但是没有返回值

fun().then(callback).then(r => console.log("==3==",r));     // ==3== callback,是一个函数且有返回值

fun().then(callback()).then(r => console.log("==4==",r));   // ==4== fun,是一个值 被忽略 返回了上一个then resolve的值


fun().then(function(){
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve("new Promise");
      }, 1000);
    });
}).then(r => console.log("==5==",r)); 