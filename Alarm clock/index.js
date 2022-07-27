function timer(){
    const d = new Date();
    document.getElementById("time").innerHTML = d.toLocaleTimeString();
    let t=d.toLocaleTimeString();
// let str = String(d.toLocaleTimeString());
// console.log(str);

// function imgchng(){
    if((t[0] >= 5 || t[0] == 1) && t[8]== "A"){
        document.getElementById('morning').style.display="block";
        remove('noon', 'evening', 'night');
        document.getElementById('text').innerHTML = "GOOD MORNING";
    }
    else if((t[0] >= 1 && t[0] <= 4) && t[8] == "P"){
        document.getElementById('noon').style.display="block";
        remove('morning', 'evening', 'night');
        document.getElementById('text').innerHTML = "GOOD NOON";
    }
    else if((t[0] >= 5 && t[0] <= 8) && t[8] == "P"){
        document.getElementById('evening').style.display="block";
        remove('noon', 'morning', 'night');
        document.getElementById('text').innerHTML = "GOOD EVENING";
    }
    else{
        document.getElementById('night').style.display="block";
        remove('noon', 'evening', 'morning');
        document.getElementById('text').innerHTML = "GOOD NIGHT";
    }
}
setInterval(timer, 1000);
function remove(x,y,z){
    document.getElementById(x).style.display="none";
    document.getElementById(y).style.display="none";
    document.getElementById(z).style.display="none";
}
// imgchng();