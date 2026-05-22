console.log("Hello, World!");
let followButton=document.getElementById("follow-button");
followButton.addEventListener("click", function(){
    if (followButton.textContent=="Follow") {
        followButton.textContent="Following";
    
    alert(`You have followed the user!`);
    console.log("Follow button clicked!");}

    else if (followButton.textContent=="Following") {
        let confirmUnfollow=confirm("Are you sure you want to unfollow the user?");
        if (confirmUnfollow==true) {
            
        
        followButton.textContent="Follow";
        alert(`You have unfollowed the user!`);
         console.log("Unfollow button clicked!");}
     }
   
});
