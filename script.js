"use strict";
// var cardContainer = document.getElementsByClassName("dCards");
// console.log(cardContainer);

function openNav() {
  	document.getElementById("mySidebar").style.width = "250px";
  	document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
	document.getElementById("mySidebar").style.width = "0";
	document.getElementById("main").style.marginLeft= "0";
}

function listView(){
		Array.from(document.querySelectorAll(".btn")).forEach((item, index) => {
         if (index === 0) item.classList.add("active");
         else item.classList.remove("active");
      });
		var currentView = event.target.dataset.trigger;
		Array.from(document.querySelectorAll(".dCards")).forEach((item, index) => {
         item.setAttribute("data-view", currentView);
      });
}

function cardView(){
		Array.from(document.querySelectorAll(".btn")).forEach((item, index) => {
         if (index === 1) item.classList.add("active");
         else item.classList.remove("active");
      });
		var currentView = event.target.dataset.trigger;
		Array.from(document.querySelectorAll(".dCards")).forEach((item, index) => {
         item.setAttribute("data-view", currentView);
      });
}
