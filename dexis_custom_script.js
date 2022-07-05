var collapsible_button = document.getElementById("collapsible_button");
collapsible_button.addEventListener("click", function() {
  this.classList.toggle("showLess");
  var content = this.nextElementSibling;
  (content.style.maxHeight) ? content.style.maxHeight = null :
  (content.style.maxHeight) = content.scrollHeight + "px";
});
