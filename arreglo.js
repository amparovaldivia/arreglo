function alwaysHungry(arr){
    var tengo_hambre=true;
    for(var x=0;x<arr.length;x++){
        if(  arr[x]=="comida"){
            console.log("delicioso");
            tengo_hambre=false;
        }
    }
    if(tengo_hambre==true){
        console.log("tengo hambre");
    }
}

alwaysHungry([3.14, "comida", "pastel", true, "comida"]);
// esto debería mostrar "delicioso, "delicioso"
alwaysHungry([4, 1, 5, 7, 2]);
// esto debería mostrar "Tengo hambre"
