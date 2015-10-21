
addlistitem = function() {
         myinput = document.querySelector('#newtask');
         value1 = document.createTextNode(myinput.value);
         mymainlist = document.querySelector('#tasklist');
         
         dropdowninput = document.querySelector("#priority");
         myLi.classList.add(dropdowninput.value);
  
         cb=document.createElement("INPUT");

         cb.type="checkbox";
                 
         cb.onclick = checkfunc;
                  
         myLi=document.createElement("li");
                  
         myLi.appendChild(cb);
                 
         myLi.appendChild(value1);
                 
         mymainlist.appendChild(myLi);
                
}

checkfunc = function() {
     if (this.checked) {
     this.parentNode.classList.add("done");
     }
     else {
     this.parentNode.classList.remove("done")
     }
}
        
