// let myPromise = new Promise((resolve) => {
//     const numb = Math.random();
//     resolve(numb);
// });
//
// myPromise.then((number) => {
//     console.log(`myPromise зарезолвился, и я узнал об этом:  ${number}`);
// })

// let myPromise = new Promise((resolve, reject) => {
//     const numb = Math.random();
//     resolve(numb);
// });
//
// myPromise.then((number) => {
//     console.log(`myPromise зарезолвился, и я узнал об этом:  ${number}`);
// })
//
// myPromise.then((number) => {
//     console.log(`myPromise зарезолвился, и я узнал об этом:  ${number}`);
// })

//console.log('finish')

// const doAfter = (del) => {
//     let myPromise = new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//         }, del)
//     });
//
//     return myPromise;
// }
//
//
// doAfter(3)
//     .then(() => {
//         console.log('Мой промис зарезолвился');
//         return 10;
//     })
//     .then((n) => {
//         console.log(`Мой промис тоже зарезолвился следом ${n}`);
//     })

// let pr = new Promise( (resolve) => {
//     let data = {
//         cities: [{title: "Minsk"}, {title: "Kiev"}],
//         website: "it-kamasutra.com"
//     };
//     resolve(data);
// });
//
// pr.then( data => {
//     console.log(data);
//     return data.website
// })
//     .then( website => {
//         console.log(website);
//     })

const getRandomAfter = (del) => {
    let myPromise = new Promise((resolve) => {
        setTimeout(() => {
            const numb = Math.random();
            resolve(numb);
        }, del)
    });

    return myPromise;
}

//getRandomAfter(4).then( number => console.log(`я получил ${number} спустя 4 секунды`))

let promises = [getRandomAfter(1),getRandomAfter(2), getRandomAfter(3)];
let commonPromise = Promise.all(promises);
commonPromise.then( (data) => {
    // как вывести здесь все 3 числа?? гуглим Promise.all
    console.log(`${data[0]} ${data[1]} ${data[2]}`)
} );

