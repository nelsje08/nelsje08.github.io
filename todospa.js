
addlistitem = function() {
         myinput = document.querySelector('#newtask');
         value1 = document.createTextNode(myinput.value);
         mymainlist = document.querySelector('#tasklist');
  
         cb=document.createElement("INPUT");

         cb.type="checkbox";
                 
         cb.onclick = checkfunc;
                  
         myLi=document.createElement("li");
                  
         myLi.appendChild(cb);
                 
         myLi.appendChild(value1);
                 
         mymainlist.appendChild(myLi);
         
         dropdowninput = document.querySelector("#priority");
         myLi.classList.add(dropdowninput.value);
                
}

checkfunc = function() {
     if (this.checked) {
     this.parentNode.classList.add("done");
     }
     else {
     this.parentNode.classList.remove("done")
     }
     localSave("tasklist")
}

window.onload = function() {
         restoreList(tasklist,checkfunc);
}

        
