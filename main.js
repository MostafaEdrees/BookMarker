document.getElementById("alert2").style.display = "none";
document.getElementById("alert").style.display = "none";
  var userInfo;
  if(localStorage.getItem('information') !=null)
{
  userInfo=JSON.parse( localStorage.getItem('information'))
    display();
}
else{
  userInfo=[];
}

var SiteNameInput =document.getElementById('SiteName');
var SiteUrlInput =document.getElementById('Siteurl');
function getInfo() {
  
  if(myFunction(true)){

  
      var info ={
        name: SiteNameInput.value,
       url:  SiteUrlInput.value}
    userInfo.push(info);
    localStorage.setItem('information',  JSON.stringify( userInfo ) )
    
    myFunction();
      clearForm();
      display();
    
    

  }
  

}

function clearForm() {
     SiteNameInput.value="";
     SiteUrlInput.value="";
     
}


function display()
{ 
  
  var cartoun =""
for(i=0;i<userInfo.length;i++)
{
  cartoun+=`
  <div class="d-flex  justify-content-evenly w-100 py-4 shadow ">

  <p class=" ps-5" id="vist">${userInfo[i].name}</p>
  <div > 
  <button  class=" btn btn-outline-primary"> <a target="_blanck" href=" ${userInfo[i].url}"> vist</a> </button>
  <button onclick="deleteProuduct(${i})"   class="  btn btn-outline-danger mx-4" > delete</button></div>
  </div>
`;

document.getElementById('elementInfo').innerHTML=cartoun;

}
}
function deleteProuduct(index)
{
  userInfo.splice(index,1);
  localStorage.setItem('information',  JSON.stringify( userInfo ) )
  display();
}



function myFunction() {

  if (SiteNameInput.value !="" &&  SiteUrlInput.value !="" ) {
//     document.getElementById("alert2").style.display = "none";
// document.getElementById("alert").style.display ="none";
return true;
  } 
  else if (SiteNameInput.value =="" &&  SiteUrlInput.value =="" ) {
    document.getElementById("alert2").style.display = "block";
document.getElementById("alert").style.display ="block";

}
  else if (SiteNameInput.value =="" &&  SiteUrlInput.value !="" ) {
    document.getElementById("alert").style.display = "block";
   
}
else if (SiteNameInput.value !="" &&  SiteUrlInput.value =="" ) {
  document.getElementById("alert2").style.display = "block";
  
}

else{
return false
}
}



