function showThis(){
    // "use strict"  --> It prevent this from binding with global object.
    console.log("Default Binding:")
    console.log(this)
}

showThis()