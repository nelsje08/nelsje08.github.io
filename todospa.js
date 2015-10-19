
addlistitem = function() {
     var myinput, mymainlist, value1, check;
         myinput = document.querySelector('#newtask');
         value1 = document.createTextNode(myinput.value);
         mymainlist = document.querySelector('#tasklist');
        
         
         item=document.createElement('#checkbox');
         item.appendChild(value1);
         mymainlist.appendChild(item)
         item2=document.createElement("li");
         item2.appendChild(value1);
         mymainlist.appendChild(item2);
   }

