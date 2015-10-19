
addlistitem = function() {
     var myinput, mymainlist, value1, dropdowninput, value2;
         myinput = document.querySelector('#newtask');
         value1 = document.createTextNode(myinput.value);
         mymainlist = document.querySelector('#tasklist');
         dropdowninput = document.querySelector("#priority");
         dropdowninput.value = mymainlist;
        //need to create new querySelector to get dropdown input value and assign className to list item.... 
        
        
     
         input=document.createElement("input");
         input.type = "checkbox";
         item=document.createElement("li");
         mymainlist.appendChild(input);
         item.appendChild(value1);
         mymainlist.appendChild(item);
   }

