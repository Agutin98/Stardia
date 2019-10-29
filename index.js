var divs = document.getElementsByTagName("div");

divs[0].onmouseover = funcionwea;
divs[1].onmouseover = funcionwea;
divs[0].onmouseleave = funcionweainversa;
divs[1].onmouseleave = funcionweainversa;


function funcionwea(){
    this.style.opacity = "1"
    this.style.backgroundColor = "rgba(100%, 100%, 100%, .5)"
}

function funcionweainversa() {
    this.style.opacity = ".5"
    this.style.backgroundColor = "rgba(100%, 100%, 100%, .1)"
}


