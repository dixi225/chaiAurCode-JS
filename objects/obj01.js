// SINGLETON OBJECTS
    // Object.create()

// OBJECT LITERALS
 const obj={
    "name":"Harsh"
 }    
 obj.id=29058
 obj.greeting=()=> console.log("Sup amigos!!");
 Object.freeze(obj)//will not allow any change to happen to obj
 obj.id=69
 console.log(obj.greeting) //gives anonymous callback function
 console.log(obj);