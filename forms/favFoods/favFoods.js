let goodFoods = ["pizza","apples","cookies","sushi","pasta","steak"]

//populates list
favFoods.onshow=function(){
   lgpFoods.clear()   
  for (i = 0; i <= goodFoods.length - 1; i++) 
    lgpFoods.addItem(goodFoods[i])
}


//
lgpFoods.onclick=function(s){
  if (typeof(s) == "object"){  // means control clicked but no selection made yet
    return                     // do nothing
  } else {
    lblChoices.value = (`Your favorite food is ${goodFoods[s]}`);   // make dropdown show choice user made
  }
  
}

//Changes form
btnDessert.onclick=function(){
    ChangeForm(dessertVoting)
}
