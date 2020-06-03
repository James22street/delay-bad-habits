var counter = 4000;
var clicks  = document.getElementById("clicks");
var increase_number = document.getElementById('spinner');

function click_decrease (){
              counter -= 50;
 
}

var st = setInterval(function(){
    if (counter > 0) {
      ++counter;
      increase_number.innerHTML = counter;
    
    return counter;
    }else{
      
      counter = counter/0;
     
      increase_number.innerHTML = "Free to go";
    
    }
    
  },100);


  

   



