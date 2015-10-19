
addlistitem = function() {
     var myinput, mymainlist, value1, dropdowninput;
         myinput = document.querySelector('#newtask');
         value1 = document.createTextNode(myinput.value);
         mymainlist = document.querySelector('#tasklist');
        // dropdowninput = document.querySelector("#priority");
        // dropdowninput.value
        // need to create new querySelector to get dropdown input value and assign className to list item.... 
}   
     
         cb=document.createElement("input");
         cb.type="checkbox";
         item=document.createElement("li");
         item.appendChild(cb);
         item.appendChild(value1);
         mymainlist.appendChild(item);
   
         cb.onclick = checkfunc;

checkfunc = function() {
     //set the class of li to done upon click
     this.parentNode.classList.add("done");
}
