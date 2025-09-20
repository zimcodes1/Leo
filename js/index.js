const but = document.getElementById("drop");
    var but2 = document.getElementById("dropup");
    var box = document.getElementById("chats");
    var chatb = document.getElementById('inputbg');
    var msgBox = document.getElementById("msgBox");
    //menu chatlist dropdown
    but.onclick = function(){
            box.style.animation = "dropdown .3s ease-in none 1";
            but.style.display = "none";
            box.style.height = "40%";
            but2.style.display = "block";
        }
    but2.onclick =  function(){
        box.style.animation = "dropup .3s ease-in 1";
        box.style.height = '10%';
        but2.style.display = "none";
        but.style.display = 'block';
    }
 
    //sugesstions displayed when there are no activa chats
    const suggest = document.getElementsByClassName('suggest');
    var color = 'rgb(0, 168, 98)';
    for (x=0; x<suggest.length; x++){
        suggest[x].style.color = color;
    }

    var nomsg = document.getElementById("nomsg");
    var msgbox = document.getElementById('msgpresent');
    var scrolldiv = document.getElementById('msgpresent');

    //function to display messages on send

    function display(message){
        if (message.type == "text"){
            var content = message.content.trim();
            if(content !== ""){
            var text = content;
            var msg = '<div class="msgdiv"><div class="msg"><p>'+text+'</p></div></div>';
            msgbox.insertAdjacentHTML('beforeend', msg);
            scrolldiv.scrollTo({top:scrolldiv.scrollHeight, behavior:"smooth"})
            }
        }
        else{
            var file = message.image;
            var msg = ' <div class="msgdiv"><div class="msg"><p></p><div class="msgimg"><img src="'+file+'" alt="file"></div></div></div>'
            msgbox.insertAdjacentHTML('beforeend', msg);
            scrolldiv.scrollTo({top:scrolldiv.scrollHeight, behavior:"smooth"})

        }
    }

    //get messages from the input and forward to above send function

    const msg = document.getElementById("msg");
    var sendbut = document.getElementById("send");
    var nomsg = document.getElementById("nomsg");
    send.onclick = function(){
        //check if suggestion box is active
        if (nomsg.style.display = "block"){
            nomsg.style.display = "none";
            msgbox.style.display = "block";
        var message = {
            "type": "text",
            "content": msg.value
        }
        //send to display function
        display(message);
        msg.value = "";
    }
    }
    //get image input

    var butto = document.getElementById("imgbut");
    var fileinp = document.getElementById("imageinp");
    butto.onclick = function(){
        fileinp.click();
    }

//get file URL on send and display it onscreen

    fileinp.oninput = function(){
        const fileobject = document.getElementById("imageinp").files[0];
        var filepath = URL.createObjectURL(fileobject)
        var message = {
            "type": "image",
            "image": filepath
        }
        display(message);
        fileobject.value = "";
    }


    //Create new chat
var newBut = document.getElementById("newchat");
var nomsg = document.getElementById("nomsg");
var msgDiv = document.getElementsByClassName('msgdiv');
newBut.onclick = function(){
    nomsg.style.display = "block";
    for (x=0; x<msgDiv.length; x++){
        msgDiv[x].style.display = "none";
    }
    msgBox.style.display = "block";
    chatb.style.display = 'block';
}

//open Data control from menubar
var contBut = document.getElementById("datacont");
var contbox = document.getElementById("data");
contbox.style.display = "none";
contBut.onclick = function(){
    msgBox.style.display = "none";
    contbox.style.display = "block";
    chatb.style.display = "none";
}


//Code for navigation
  $(document).ready(function() {
      // Toggle nav open/close
      $("#nav-toggle").on("click", function(e) {
        e.stopPropagation(); // prevent event bubbling
        $("#nav").toggleClass("active");
      });

      // Close nav when clicking outside
      $(document).on("click", function(e) {
        if ($("#nav").hasClass("active")) {
          if (!$(e.target).closest("#nav, #nav-toggle").length) {
            $("#nav").removeClass("active");
          }
        }
      });
    });