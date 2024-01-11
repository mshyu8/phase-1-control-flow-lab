function scuberGreetingForFeet(value){
  // Write your code here!
  let returnStatement;

  if (value <= 400) {
    returnStatement = 'This one is on me!';
  } else if (value <= 2000) {
    returnStatement = 'That will be twenty bucks.';
  } else if (value < 2500) {
    returnStatement = 'I will gladly take your thirty bucks.';
  } else {
    returnStatement = 'No can do.';
  }

  return returnStatement;

}

function ternaryCheckCity(city){
  // Write your code here!
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip) {
    case 'generous' : 
      return 'Thank you so much.';
    case 'not as generous' :
      return 'Thank you.';
    default :
      return 'Bye.';
  }

}