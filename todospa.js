
addlistitem = function() {
     var myinput, mymainlist, value1;
         myinput = document.querySelector('#newtask');
         value1 = textNode.querySelector(myinput.value);
         mymainlist = document.querySelector('#tasklist');
         mymainlist.innerHTML = value1;
   }

var myinput, myh2
           myinput = document.querySelector('#newword').value;
     	   myh2 = document.querySelector('#oldword');
     	   myh2.innerHTML = myinput;
           myh2.className = "spinanimation";
     	   
add = function() {
     var myIn1, myIn2, value1, value2, resultFunc
           myIn1 = document.querySelector('#in1id');
     	   value1 = Number.parseInt(myIn1.value);
     	   myIn2 = document.querySelector('#in2id');
     	   value2 = Number.parseInt(myIn2.value);
     	   resultFunc = document.querySelector('#result');
     	   calculatorFunc = (value1+value2);
     	   resultFunc.innerHTML = calculatorFunc;
  		  
   }
