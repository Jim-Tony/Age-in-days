function Ageindays(){
    var Birthyear = prompt('Enter your birthyear');
    var Currentyear = prompt('Enter the curent year');

    console.log(Birthyear);
    console.log(Currentyear);

    var Ageindays = (Currentyear - Birthyear) * 365;
    console.log(Ageindays); 
    var h1 =document.createElement('marquee');
    var textbox = document.createTextNode('You are ' + Ageindays + ' days old');
    h1.setAttribute('behaviuor' , 'scroll');
    h1.setAttribute('direction' , 'left');
    h1.setAttribute('id' , 'ageindays');
    h1.appendChild(textbox);
    document.getElementById('flex-box-result').appendChild(h1);

}   
function reset() {
    document.getElementById('ageindays').remove();
}