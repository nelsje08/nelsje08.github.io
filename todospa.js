
addlistitem = function() {
     var myinput, mymainlist, value1;
         myinput = document.querySelector('#newtask');
         value1 = textNode.querySelector(myinput.value);
         mymainlist = document.querySelector('#tasklist');
         mymainlist.innerHTML = value1;
   }

