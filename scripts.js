
function clicked (event){
    console.log (event.pageX);
    console.log (event.pageY);
    
    var circle = document.createElement("div");
    
    
    //var color = document.getElementById('circle');
    var value1 = Math.floor(Math.random() * 256);
    var value2 = Math.floor(Math.random() * 256);
    var value3 = Math.floor(Math.random() * 256);
    // rgb(120,122,90)
    circle.style.backgroundColor = "rgb(" + value1 + "," + value2 +"," +value3 +")";
    

    var x = Math.floor(Math.random()*300);
    var y = Math.floor(Math.random()*300);
    var radius = Math.floor(Math.random()*20);
    circle.style.width = x + "px";
    circle.style.height = circle.style.width

    button.appendChild(circle);
    circle.className = "circle";
}

var button = document.getElementById("button");
button.addEventListener ("click", clicked);

    // work on the position of the circle

    // create a new circle

  
    


