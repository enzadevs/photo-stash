var myArray = [];
var i = 0;
for (i=0; i<40; i++){
  myArray.push("Element " + i)
}

var obj = document.getElementById("temp_main")
counter = 10
firstElement = true
output = ''

for (i=0; i<40; i++){
  var temp = '<div class="row">' + myArray[i] + '</div>'
  if(counter>=10){
    temp = '<div class="column">' + temp
    if( !firstElement ) temp = '</div>' +  temp
    counter = 0
  }
  output = output + temp
  firstElement = false
  counter++
}

output = output + '</div>'
obj.innerHTML = output