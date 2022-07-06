function myFunction(){
    var x = document.getElementById("topnav");
    if(x.className === "main-nav"){
        x.className+=" active";
    }
    else{
        x.className="main-nav";
    }
}