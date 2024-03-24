const buttonB = document.querySelector("#button_B");
const headingB = document.querySelector("#heading_B");


buttonB.onclick = () => {
    const name = prompt("What is Your name?");
    alert(`Hello ${name}, Glad to see you!!!`);
    headingB.textContent = `Welcome ${(name)}!`;
}
    
    /* dfkjldsfj */