const mainFn = (a) => (b)=> (c) => console.log(a+b+c)


const secFn = mainFn(5)
const thirdFn = secFn(3)
thirdFn(7)
const newFn = (()=> console.log("big Nour"))()
const customHook = (a,b,...c) => c