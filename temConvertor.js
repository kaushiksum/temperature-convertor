let Celsius = document.getElementById("cel");

let fahranite = document.getElementById("fah");

Celsius.addEventListener("input", function(){
     

    let c = this.value;

    let f = (c * 9/5) + 32 ;

    if(!Number.isInteger(f)){
        f = f.toFixed(4);

    }
    fahranite.value = f;

    // value get by this.value......isme value store hp jayege jo change hui hai.

  

});

fahranite.addEventListener('input', function(){
    

    let f = this.value;

    let c = (f - 32) * 5/9;

    if(!Number.isInteger(c)){

        c = c.toFixed(4);
    }


    Celsius.value = c;

});