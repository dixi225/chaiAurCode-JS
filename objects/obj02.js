const obj={}
obj.name='Harsh'
obj.id=29058
obj.subObj={
    subProp1:'subProp1',
    subProp2:'subProp2'
}
// console.log(obj?.subObj);
console.log(Object.keys(obj));
//DESTRUCTURING
 const obj1={
    studentName:'Harsh',
    courseFee:999,
    enrollmentId:69
 }
 const{studentName:name, enrollmentId:id}=obj1
 console.log(name+' '+id);
 //JSOM FORMAT
 {
    'name'='Harsh',
    'roll-no'=120
 }