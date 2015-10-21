
addlistitem = function() {
     var myinput, mymainlist, value1, dropdowninput, cb, item;
         myinput = document.querySelector('#newtask');
         value1 = document.createTextNode(myinput.value);
         mymainlist = document.querySelector('#tasklist');
         
         dropdowninput = document.querySelector("#priority");
         item.className = dropdowninput.value;
  
         cb=document.createElement("input");
         cb.type="checkbox";
         item=document.createElement("li");
         item.appendChild(cb);
         item.appendChild(value1);
         mymainlist.appendChild(item);
         alert = "is this working";
}

checkfunc = function() {
     //set the class of li to done upon click
     this.parentNode.classList.add("done");
}
        cb.onclick = checkfunc;
