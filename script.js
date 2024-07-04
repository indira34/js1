let a = 'hello'
let b ='Ivan'
console.log(
    a.slice(0,1).toUpperCase() + a.slice(1, a.length) + ' ' + b.toLowerCase()
)
// записать длину в переменную b
let a2 = 'lorem ipsum dolor'
let b2 = a2.length
console.log(b2)

// вернуть sit lorem ipsum dolor amet
let a3 = 'lorem ipsum dolor sit amet'
console.log(a3.slice(18 , 21) + ' ' + a3.slice(0 , 17) + ' ' +  a3.slice(22 , 26))


//вернуть CHILDREn
let a4 = 'children'
console.log(
    a4.slice(0 , 7).toUpperCase() + a4.slice(7, 8)
)


// вернуть bsso,
let a5 = 'boss'
console.log(
    a5.slice(0 , 1) + a5.slice(2 , 3)+ a5.slice(2 , 3) +  a5.slice(1 ,2) 
)


// вернуть index d 
let a6 = 'sunday'
console.log(a6.indexOf('d'))

// вернуть hekso
let a7 = 'hello'
console.log(
    a7.slice(0 ,2) + 'ks' + a7.slice(4)
)


// вернуть new us
let a8 = 'user'
let b3 = 'new'
console.log(
    b3 + ' ' + a8.slice(0 ,2)
)



// вернуть daydaymon
let a9 = 'monday'
let b4= 'day'
console.log(
    b4 + b4 + a9.slice(0 , 3)
)

// вернуть 'hElLo
let a10 = 'HELLO'
console.log(
    a10.slice(0 ,1).toLowerCase() +a10.slice(1 ,2) + a10.slice(2 ,3).toLowerCase() +'L' + a10.slice(4)
)


// вернуть '450'
let a11 = 5
let b5 = '400'
console.log(
    b5.slice(0 ,1) + 5 + b5.slice(2)
)

// вернуть manak
let a12 = 'monkey'
let b6 = 'banana'
console.log(
    a12.slice(0, 1) +b6.slice(1 , 2) + a12.slice(2,3) +b6.slice(1,2) + a12.slice(3 ,4)
)






