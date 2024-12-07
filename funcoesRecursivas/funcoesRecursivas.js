function recursiva(max){
    if (max > 1000000) return;
    max++
    console.log(max);
    recursiva(max);
}

recursiva(0);