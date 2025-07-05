const flag=true;


//if anothing assigned to variable it will consider it as true 
if (flag) {

    console.log(true);
}else{

    console.log(false);
    
}
// ! negation symbol
if (!flag) {

    console.log(true);
}else{

    console.log(false);
    
}

//else if

if (!flag) {

    console.log(true);
}else if(flag){

    console.log('else if passed');
    
}