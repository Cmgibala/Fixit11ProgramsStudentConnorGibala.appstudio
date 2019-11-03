 req1 = ""



btnLogin.onclick=function(){
    req1 = Ajax("https://radlab.creighton.edu/appStudio/authLDAP.php", "POST", "j_username=" + inptNetID.value + "&j_password=" + inptPassword.value);
    if (req1.status == 200) { //everything worked.
        lblResponse.value = (`The authentication code is ${req1.responseText}`)
        //1 good 0 bad
        if (req1.responseText == 1) 
          ChangeForm(favFoods)
        
    } else {
        //Handle that. 
        lblResponse.hidden = false
        lblResponse.value = (`Error Connection Not Made: ${req1.status}`) 
    } 
    
    
}

Button1.onclick=function(){
  ChangeForm(favFoods)
}

