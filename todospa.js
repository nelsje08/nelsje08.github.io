
addlistitem = function() {
     var myinput, mymainlist, value1;
         myinput = document.querySelector('#newtask');
         value1 = document.createTextNode(myinput.value);
         mymainlist = document.querySelector('#tasklist');
         
         item=document.createElement("li");
         item.appendChild(value1);
         mymainlist.appendChild(item);
   }

