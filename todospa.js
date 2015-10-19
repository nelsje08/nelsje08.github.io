
no script tag needed. just start writing code

addlistitem = function() {
     var myinput, mymainlist
         myinput = document.querySelector('#newtask').value;
         mymainlist = document.querySelector('#tasklist');
         mymainlist.innerHTML = myinput;
   }

var myinput, myh2
           myinput = document.querySelector('#newword').value;
     	   myh2 = document.querySelector('#oldword');
     	   myh2.innerHTML = myinput;
           myh2.className = "spinanimation";
     	   
