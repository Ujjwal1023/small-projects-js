let person={
    myname:"ujjwal",
    age:25,
    role:"sde",
    has_driving_license:false,
    hobbies:["singing","music"]

};


    console.log(person.has_driving_license);



    //modifying elements

    let myfruits=["apple","kiwi","banana","orange"]
    console.log(myfruits);
    myfruits[1]="mango";
    console.log(myfruits);
    console.log(myfruits.length);


    
    myfruits.push("guave");
    console.log(myfruits);//it will add from end

    myfruits.pop();  //it will remove from starting
    console.log(myfruits);

    myfruits.shift() //  it will remove from starting
    console.log(myfruits);

    myfruits.unshift() //  it will add in start
    console.log(myfruits);

     // slice

     let myfruits2=["apple","kiwi","banana","orange"]
     let newarr=[myfruits2.slice(1,3)];
     console.log(newarr);
    
    