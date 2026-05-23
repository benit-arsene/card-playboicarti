let instagramButton=document.getElementIdBy("instagram-button");
instagramButton.addEventListener("click", function(){
    let confirmMove = confirm("Are u sure you want to visit instagram?");
    if (confirmMove=="true");
    console.log("MOVE");
})