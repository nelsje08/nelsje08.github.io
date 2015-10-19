
addlistitem = function() {
     var myinput, mymainlist, value1;
         myinput = document.querySelector('#newtask');
         value1 = document.createTextNode(myinput.value);
         mymainlist = document.querySelector('#tasklist');
        //need to create new querySelector to get dropdown input value and assign className to list item.... 
        
        
     
         item=document.createElement("input type=checkbox");
         item.appendChild(value1);
         mymainlist.appendChild(item);
         item=document.createElement("li");
         item.appendChild(value1);
         mymainlist.appendChild(item);
   }

