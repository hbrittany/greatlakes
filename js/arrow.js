var downArrow = document.querySelectorAll('.down-arrow');
var imgDescription = document.querySelectorAll('.p-description');

for (var i=0;i<downArrow.length;i++){
    downArrow.item(i).addEventListener("click", myFunction);
}


function myFunction() {
    var num = this.getAttribute('data-num');
    if (imgDescription.item(num).getAttribute('data-state') == 'expanded') {
        imgDescription.item(num).setAttribute('data-state', 'collapsed');
		this.src='images/dummy.png';
		this.src='images/down-arrow.svg';
    }else{
        imgDescription.item(num).setAttribute('data-state', 'expanded');
		this.src='images/dummy.png'
		this.src='images/up-arrow.svg'
    }
    

}