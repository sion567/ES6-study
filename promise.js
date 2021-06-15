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
}).then(r => console.log("==1==",r));

fun().then(function(){
    callback();
}).then(r => console.log("==2==",r));

fun().then(callback).then(r => console.log("==3==",r));

fun().then(callback()).then(r => console.log("==4==",r));