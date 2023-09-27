const arr1=[1,2,3,"Hehehehehe",4]
const arr2=arr1 //create shalow copy.
// arr2[3]=69
// push() for adding Elements and pop() for removing last element
arr1.unshift("first")//for adding the elememt at first place
arr1.shift()// for removing the first element
// arr1=arr1.join() converts the given array to string
arr1.splice(0,1,'LMFAO')

const marvelHeroes=['IronMan', 'Captian America', 'SpiderMan']
const dcHeroes=['Batman','Superman','Flash']
marvelHeroes.push(dcHeroes)
// console.log(marvelHeroes);
console.log(Array.from('Harsh'));
