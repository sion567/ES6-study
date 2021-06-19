/**
 * 传入参数 n，表示这个函数执行的时间（毫秒）
 * 执行的结果是 n + 200，这个值将用于下一步骤
 */
function takeLongTime(n) {
    return new Promise(resolve => {
        setTimeout(() => resolve(n + 200), n);
    });
}

function step1(n) {
    console.log(`step1 with ${n}`);
    return takeLongTime(n);
}

function step2(n) {
    console.log(`step2 with ${n}`);
    return takeLongTime(n);
}

function step3(n) {
    console.log(`step3 with ${n}`);
    return takeLongTime(n);
}

// function doIt0() {
//     console.time("doIt");
//     const time1 = 300;
//     step1(time1)
//         .then(time2 => step2(time2))
//         .then(time3 => step3(time3))
//         .then(result => {
//             console.log(`result is ${result}`);
//             console.timeEnd("doIt");
//         });
// }
async function doIt0() {
    console.time("doIt0");
    try {
        const time1 = 300;
        const time2 = await step1(time1);
        const time3 = await step2(time2);
        const result = await step3(time3);
    console.log(`result is ${result}`);
    } catch(err) {
        console.log(err)
    }
    console.timeEnd("doIt0");
}
doIt0();





function stepA(n) {
    console.log(`stepA with ${n}`);
    return takeLongTime(n);
}

function stepB(m, n) {
    console.log(`stepB with ${m} and ${n}`);
    return takeLongTime(m + n);
}

function stepC(k, m, n) {
    console.log(`stepC with ${k}, ${m} and ${n}`);
    return takeLongTime(k + m + n);
}
// function doIt() {
//     console.time("doIt");
//     const time1 = 300;
//     step1(time1)
//         .then(time2 => {
//             return step2(time1, time2)
//                 .then(time3 => [time1, time2, time3]);
//         })
//         .then(times => {
//             const [time1, time2, time3] = times;
//             return step3(time1, time2, time3);
//         })
//         .then(result => {
//             console.log(`result is ${result}`);
//             console.timeEnd("doIt");
//         });
// }
async function doIt() {
    console.time("doIt");
    try {
        const time1 = 300;
        const time2 = await stepA(time1);
        const time3 = await stepB(time1, time2);
        const result = await stepC(time1, time2, time3);
        console.log(`result is ${result}`);
    } catch(err) {
        console.log(err)
    }
    console.timeEnd("doIt");
}
doIt();