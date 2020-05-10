function ageInDays() {
   var year = prompt('What year were you born?');
   var currentyear = new Date().getFullYear();
   console.log("Yes " + currentyear + " is a leap year.");

   function leapyear(currentyear) {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
   }
/*
   function leapyr(year) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            if (year % 4 === 0) {
                return true;
            }
        }
    }
    else {
        console.log(false);
    }
   }
*/

   if (leapyear(currentyear) === 'true') {
    var results = (currentyear)*366 - (year) * 365; 
   }

   
   
   
   
   
   //Here the results that I created can be written in console or alert.
   //But we want to print it on our index.html file.. so I m creating h1 element       

   var h1 = document.createElement('h1');
   //I want results to be printed along with a sentence. Thus I created textNode.

   var text = document.createTextNode('You are ' + results + ' days old.');
   //I have to set id of h1 to use css later.

   h1.setAttribute('id', 'ageInDays');
   //I m giving a child to h1. that will assign value of child to h1

   h1.appendChild(text);
   //I m giving a child to existing index.html's parents

   document.getElementById('flex-box-result').appendChild(h1);
}



function reset() {

    //grab the text by its id tht's wht we added above. So its id was ageInDays and simply remove it
    //don't forget to add button attribute of onclick="fun()" of running a functio
    document.getElementById('ageInDays').remove();
}