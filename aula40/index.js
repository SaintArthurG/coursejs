const sum = (x, y) => {
    if (isNaN(x) || isNaN(y)){
        throw("x and y must be numbers!")
    }
    return x + y;
}

try{
    console.log(sum("2d",2));
} catch (error){
    console.log("Something goes wrong...")
} finally{
    console.log("sourei")
}