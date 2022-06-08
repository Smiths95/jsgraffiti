let header = document.querySelector('#page-header')
header.style.textAlign = "left"
document.getElementByID("Doggos").innerHTML="The Best Woofers";
header.style.backgroundColor="coral";



let dogImages = document.querySelectorAll('.dog-image')
for(let i = 0; i<dogImages.length; i++){
    dogImages[i].stlye.borderRadius = '50px'
}