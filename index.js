function addingEventListener() {
    const input = document.getElementById("input")

    function clickAlert(){
        alert(`WHo clicked me!!!!`)
    }

    input.addEventListener("click", clickAlert)
}
addingEventListener()


// const input = document.getElementById("input");
// input.addEventListener('click',()=> alert(`I was clicked`))

const input = document.getElementById("input")

function clickAlert(){
    alert(`WHo clicked me!!!!`)
}

input.addEventListener("click", clickAlert)