
hmbMenu.onclick=function(s){
  if (typeof(s) == "object") 
    return
  else{
    switch(s){
    
    case "Login":
      ChangeForm(loginCU);
      break;
    case "Favorite Foods": 
      ChangeForm(favFoods);
      break;
    case "Dessert Voting": 
      ChangeForm(dessertVoting);
      break;
    case "Describe Me": 
      ChangeForm(describeYou);
      break;
    case "Favorite Exercises": 
      ChangeForm(favExcercises);
      break;
      }
    
  }
}




/*

Scenario: the user will be able to select where they want to go in the project by clicking on the name of a form in a hamburger menu. 
Requirements
Complete the hmbMenu.onclick event handler by using a switch statement so it takes the choice the user made and takes them to the corresponding form.
Hint: use ChangeForm(formname).  
*/