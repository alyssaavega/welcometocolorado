<script>
"use script";

function setupWishList() {
var addButtons = document.getElementsByClassName("addButton");
for(let i =0; i < addButtons.length; i++) {
  const e = addButtons[i];
e.addEventListener("click", function () {
addItem(e);
});
}
}

var addItemId = 0;
function addItem(e) {
  addItemId += 1;
  var selectedItem = document.createElement('div');
  selectedItem.classList.add('wishImg');
  selectedItem.setAttribute('id',addItemId);
  var img = document.createElement('img');
  img.setAttribute()
  var wishItems = document.getElementById('title');
  wishItems.append(selectedItem);




</script>