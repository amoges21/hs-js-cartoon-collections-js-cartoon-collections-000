var int1;
var int2;
var int3;
var int4;

var typesofcheese = ["cheddar" , "gouda" , "camembert" , "swiss"];


function dwarfRollCall(dwarves) 
{
  var thestring = "";
  
  for (int1 = 0 ; int1 < dwarves.length / 2 ; ++int1)
  {
    var thenumber = int1 + 1;
    
 thestring = thestring + thenumber + ". " + dwarves[int1] + " ";
    
   
  }  return thestring;

}



function summonCaptainPlanet(planeteerCalls)
{
  var emptyarray = [];
  
    for (int2 = 0 ; int2 < planeteerCalls.length ; ++int2)
  {
    
 var thestring = planeteerCalls[int2].toUpperCase() + "!";
 emptyarray.push(thestring);
    
    if (int2 === planeteerCalls.length -1)
    {
          return emptyarray;
    }
  }
}



function longPlaneteerCalls(words) 
{
  for (int3 = 0 ; int3 < words.length ; ++int3)
  {
    if (words[int3].length > 4) 
    {
      return true;
    }
    else
    {
      return false;
    }
  }
}



function findTheCheese (foods) 
{
  for (int4 = 0 ; int4 < foods.length ; ++int4)
  {
    if (typesofcheese.includes(foods[int4]))
    {
      return foods[int4]
    }
    else if (int4 === foods.length -1)
    {
      return "no cheese!";
    }
  }
}


function wordswithb (words)
{
  var emptryarray = [];
  
  for (let int5 = 0 ; int5 < words.length ; ++int5)
  {
    
    if (words[int5].startsWith("b"))
    {
      emptryarray.push(words[int5]);
    }
    
  }return emptryarray;
}
