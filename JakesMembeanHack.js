// ==UserScript==
// @name Jake's Membean HACK
// @namespace none
// @version 1
// @description Membean hack coded by Jake, for tech support send me a message on Skype: mjakee-99
// @author Jake
// @match *://membean.com/training_sessions/*
// @grant none
// ==/UserScript==

//will answer a question every 30 seconds.
setInterval(function(){
if(document.getElementsByClassName("choice answer").length > 0){
    document.getElementsByClassName("choice answer")[0].click();
}

if(document.getElementById("next-btn")){
    document.getElementById("next-btn").click();
}

var choice = Math.floor(Math.random()*100) < 80;
if(choice){
    document.querySelectorAll("input[value=Pass]")[0].click();
}else{
    document.querySelectorAll("input[value=Fail]")[0].click();
}
}, 25000);
