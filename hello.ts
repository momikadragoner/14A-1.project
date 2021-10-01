// document.getElementsByTagName('body')[0].innerHTML = "Hello!";

function Összeadás(a:number, b:number) : number {
    return a + b;
}

function Számol() {
    let a = Number((document.getElementById('a') as HTMLInputElement).value);
    let b = Number((document.getElementById('b') as HTMLInputElement).value);
    let c = a + b;

    (document.getElementById('c') as HTMLInputElement).value = c.toString();
}

document.getElementById("szamol")?.addEventListener("click", Számol);