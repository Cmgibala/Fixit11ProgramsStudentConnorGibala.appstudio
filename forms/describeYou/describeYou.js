rdoPersonType.onclick=function(){
  if (rdoPersonType.value == 0) 
    lblLabel.value = `I think that you are optimistic as well.`
  else if (rdoPersonType.value == 1) 
    lblLabel.value = `I don't think that you are pessimistic.`
  else if (rdoPersonType.value == 2) 
    lblLabel.value = `I agree you're very trusting.`
  else if (rdoPersonType.value == 3) 
    lblLabel.value = `I don't think that you are envious.`
    
    
}

Button4.onclick=function(){
  ChangeForm(favExercises)
}
