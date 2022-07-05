var custom_title = document.getElementsByClassName("sectionTitle");
var page_title = document.getElementById("support_portal");
var content_box = document.getElementById("sessionKeyBox");
var access_key_form = document.getElementById("access_key_form");
let parentDiv = access_key_form.parentNode

//Cannot have manual macros so modified on execution
if (!page_title.textContent.startsWith("DEXIS ")) {
    page_title.textContent = "DEXIS ".concat(page_title.textContent)
    const custom_text = document.createElement("p");
    custom_title[0].remove();
}

//collapsible-text script
var collapsible_button = document.getElementById("collapsible_button");
collapsible_button.addEventListener("click", function() {
  this.classList.toggle("showLess");
  var content = this.nextElementSibling;
  (content.style.maxHeight) ? content.style.maxHeight = null :
  (content.style.maxHeight) = content.scrollHeight + "px";
});
