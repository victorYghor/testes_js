const letters = ['a','b','c','a','a','b']
 let count = {} ;
letters.forEach(item => {
    if(count[item]){
        count[item]++;
    }else{
        count[item] =1 ;
    }
} )
console.log(count);

const str = ['1','2','3','4','2']
numbers = str.map(item => Number(item) ) // numbers = str.map(item => Number(item))
console.log(numbers)

const friends = [{
    name: 'tomé',
    age: 17
   
},{
    name : 'will',
    age : 17 
},{
    name: 'leo',
    age: 14
},{
    name:'beatriz',
    age:10
},{
    name:'Ŕodrigo',
    age:21
}]
let adults = friends.filter(friends => friends.age >= 18);
console.log(adults)
