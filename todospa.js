
addlistitem = function() {
         myinput = document.querySelector('#newtask');
         value1 = document.createTextNode(myinput.value);
         mymainlist = document.querySelector('#tasklist');
         
         dropdowninput = document.querySelector("#priority");
         myLi.classList.add(dropdowninput.value);
  
         cb=document.createElement("INPUT");
                  alert = "is this working";
         cb.type="checkbox";
                  alert = "is this working";
         cb.onclick = checkfunc;
                  alert = "is this working";
         myLi=document.createElement("li");
                  alert = "is this working";
         myLi.appendChild(cb);
                  alert = "is this working";
         myLi.appendChild(value1);
                  alert = "is this working";
         mymainlist.appendChild(myLi);
                  alert = "is this working";
}

checkfunc = function() {
     if (this.checked) {
     this.parentNode.classList.add("done");
     }
     else {
     this.parentNode.classList.remove("done")
     }
}
        
