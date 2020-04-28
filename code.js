function processing(){
    var number, paragraf;
    number = document.getElementById("num1").value;
    paragraf = document.getElementById("printOut");
// эта функция позволяет выделить число из таких
// значений 7g, 5dfhd...
     number = parseInt(number);
    

  
    if (number == 100){
        paragraf.innerHTML = "Число равно 100";
    } else if (number > 100){
        paragraf.innerHTML = "Число больше 100";
    } else {
        paragraf.innerHTML = "Число меньше 100";
    }

}