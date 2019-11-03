var exercises = ["pullups","pushups","situps","jogging","plank","curls"]
var coreExercises = ["situps","plank"]

favExercises.onshow=function(){
    selExercises.clear()   
    for (i = 0; i <= exercises.length - 1; i++) 
        selExercises.addItem(exercises[i])
}

selExercises.onfocusout=function(s){
  if (s == coreExercises[0] || s == coreExercises[1]){
    Label1.value = `That is a good exercise.`
  
  }
}

Button3.onclick=function(){
  ChangeForm(mobileNav)
}

