let createObjArr = [];
let pos = 1;
let bool = false;
let id = 1;

for(let i = 1; i <= 8; i++){
    let obj = {};

    for(let k = 1; k <= 8; k++){
        let color;
        if(pos >= 1 && pos <= 16 || pos >= 48 && pos <= 64) bool = true;
        else bool = false;
        
        if(k % 2 != 0 && i % 2  != 0 || i % 2 == 0 && k % 2 == 0){
            color = "#f0d9b5";
        }
        if(k % 2 == 0 && i % 2  != 0 || i % 2 == 0 && k % 2 != 0){
            color = "#b58863";
        }
        obj = {
            id,
            y : i,
            x : k,
            pos : bool,
            color,
        }
        
        id++;
        pos++;
        createObjArr.push(obj);
    }
}