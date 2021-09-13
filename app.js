var rects = document.querySelectorAll("svg rect");
i= 0;

rects.forEach(function(item, index){

    i++;
    var RectLength = item.getTotalLength(),
    speed = 250;

    item.setAttribute("stroke-dasharray", RectLength);
    item.setAttribute("stroke-dashoffset", RectLength);

    if(index == 0){
        item.innerHTML = "<animate id='a" + i + "' attributeName='stroke-dashoffset' begin='0s' dur='" +  RectLength/speed + "'s to='0' fill='freeze' />";
    }
    else{
        item.innerHTML = "<animate id='a" + i + "' attributeName='stroke-dashoffset' begin='a" + (i-1) +".end' dur='" + RectLength/speed + "'s to='0' fill='freeze' />";
    }
 

    console.log(index, RectLength, item.innerHTML)
});

// Another path-------

var paths = document.querySelectorAll("svg path");
i= 0;

paths.forEach(function(item, index){

    i++;
    var pathLength = item.getTotalLength(),
    speed = 50;

    item.setAttribute("stroke-dasharray", pathLength);
    item.setAttribute("stroke-dashoffset", pathLength);

    if(index == 0){
        item.innerHTML = "<animate id='a" + i + "' attributeName='stroke-dashoffset' begin='0s' dur='" +  pathLength/speed + "'s to='0' fill='freeze' />";
    }
    else{
        item.innerHTML = "<animate id='a" + i + "' attributeName='stroke-dashoffset' begin='a" + (i-1) +".end' dur='" + pathLength/speed + "'s to='0' fill='freeze' />";
    }
 

    console.log(index, pathLength, item.innerHTML)
});
// path circle
var paths = document.querySelectorAll("svg circle");
i= 0;

paths.forEach(function(item, index){

    i++;
    var pathLength = item.getTotalLength(),
    speed = 50;

    item.setAttribute("stroke-dasharray", pathLength);
    item.setAttribute("stroke-dashoffset", pathLength);

    if(index == 0){
        item.innerHTML = "<animate id='a" + i + "' attributeName='stroke-dashoffset' begin='0s' dur='" +  pathLength/speed + "'s to='0' fill='freeze' />";
    }
    else{
        item.innerHTML = "<animate id='a" + i + "' attributeName='stroke-dashoffset' begin='a" + (i-1) +".end' dur='" + pathLength/speed + "'s to='0' fill='freeze' />";
    }
 

    console.log(index, pathLength, item.innerHTML)
});