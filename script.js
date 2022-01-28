
const panels= document.querySelectorAll(".panel")
 panels.forEach(panel =>{
     panel.addEventListener('click', ()=>{
         if(panel.classList.contains("active")){
            removeactiveclass();
         
         }else{
            panel.classList.add('active');
         }
         

     })
     
 })




 function removeactiveclass(){
     panels.forEach(panel=>{
         panel.classList.remove('active')
     })
 }