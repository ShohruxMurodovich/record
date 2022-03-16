var elList = document.querySelector(".list");
var elBtnRec = document.querySelector(".btn-rec");
var elBody = document.querySelector("body")

var record = new webkitSpeechRecognition();

record.lang = "en-US"

record.onend = function(){
  console.log("===== Aloqa tugadi =====");
  elBtnRec.classList.remove("red");
}

record.onerror = function(){
  console.log("===== Xatolik yuz berdi =====");
  elBody.classList.add("error");
}

record.onresult = function(evt){

  var command = evt["results"][0][0]["transcript"];

  if(command.includes("rain")){
    elBody.classList.add("rain");
  }

  if(command.includes("snow")){
    elBody.classList.add("winter");
  }

  if(command.includes("go")){
    elBody.classList.add("infinity");
  }

  if(command.includes("cl")){
    window.close() ;
  }

  if(command.includes("teleport")){
    elBody.classList.add("teleport");
    setTimeout(function(){
      window.location.href = 'https://github.com/ShohruxMurodovich/record';
    }, 1 * 500);
  }

}


elBtnRec.addEventListener("click", function(){
  console.log("===== Aloqa boshlandi =====");
  record.start();
  elBtnRec.classList.add("red");
})
