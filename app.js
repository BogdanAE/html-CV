var buton1 = document.querySelector(".button1");
var buton2 = document.querySelector(".button2");
var buton3 = document.querySelector(".button3");
var buton4 = document.querySelector(".button4");

var buton11 = document.querySelector(".button11");
var buton22 = document.querySelector(".button22");
var buton33 = document.querySelector(".button33");
var buton44 = document.querySelector(".button44");

var cont1 = document.getElementById('contentContainer1');
var cont2 = document.getElementById('contentContainer2');
var cont3 = document.getElementById('contentContainer3');
var cont4 = document.getElementById('contentContainer4');

var cont11 = document.getElementById('contentContainer11');
var cont22 = document.getElementById('contentContainer22');
var cont33 = document.getElementById('contentContainer33');
var cont44 = document.getElementById('contentContainer44');

var langB = document.querySelector('.langButton');
var langBCircle = document.querySelector('.circle');
var pos;

initRO();

function initRO(){
    buton1.classList.add("activeb");
    buton2.classList.remove('activeb');
    buton3.classList.remove('activeb');
    buton4.classList.remove('activeb');
    cont1.style.display = 'block';
    cont2.style.display = 'none';
    cont3.style.display = 'none';
    cont4.style.display = 'none';
    pos = 1;
    document.querySelector(".EN").style.display = "none";
}

function initEN(){
    buton11.classList.add("activeb");
    buton22.classList.remove('activeb');
    buton33.classList.remove('activeb');
    buton44.classList.remove('activeb');
    cont11.style.display = 'block';
    cont22.style.display = 'none';
    cont33.style.display = 'none';
    cont44.style.display = 'none';
    pos = 2;
    document.querySelector(".RO").style.display = "none";
}

//-----------------LANG BUTTON------------
langB.addEventListener('click', function(){
    if (pos == 2)
    {
        initRO();
        langBCircle.classList.add("animate");
        langBCircle.style.transform = "translate(0, 0)";
        langB.style.transition = "1s ease";
        langB.style.background = "url('./srcs/ro.png')";
        langB.style.backgroundSize = "cover";
        document.querySelector(".RO").style.display = "block";
        document.querySelector(".EN").style.display = "none";
        pos = 1;
    }
    else    
    {
        initEN();
        langBCircle.classList.add("animate");
        langBCircle.style.transform = "translate(65px, 0px)";
        langB.style.transition = "1s ease";
        langB.style.background = "url('./srcs/en.png')";
        langB.style.backgroundSize = "100px 25px";
        document.querySelector(".RO").style.display = "none";
        document.querySelector(".EN").style.display = "block";
        initEN();
        pos = 2;
    }

});
//----------------------------------------

buton1.addEventListener('click', function()
{
    if (buton2.classList.contains('activeb') || buton3.classList.contains('activeb') || buton4.classList.contains('activeb'))
    {
        cont1.style.display = 'block';
        cont2.style.display = 'none';
        cont3.style.display = 'none';
        cont4.style.display = 'none';
        buton1.classList.add('activeb');
        buton2.classList.remove('activeb');
        buton3.classList.remove('activeb');
        buton4.classList.remove('activeb');
    }
});

buton2.addEventListener('click', function()
{
    if (buton1.classList.contains('activeb') || buton3.classList.contains('activeb') || buton4.classList.contains('activeb'))
    {
        cont2.style.display = 'block';
        cont1.style.display = 'none';
        cont3.style.display = 'none';
        cont4.style.display = 'none';
        document.getElementById('contentContainer1').style.display = 'none';
        buton2.classList.add('activeb');
        buton1.classList.remove('activeb');
        buton3.classList.remove('activeb');
        buton4.classList.remove('activeb');
    }
});

buton3.addEventListener('click', function()
{
    if (buton1.classList.contains('activeb') || buton2.classList.contains('activeb') || buton4.classList.contains('activeb'))
    {
        cont3.style.display = 'block';
        cont1.style.display = 'none';
        cont2.style.display = 'none';
        cont4.style.display = 'none';
        buton3.classList.add('activeb');
        buton1.classList.remove('activeb');
        buton2.classList.remove('activeb');
        buton4.classList.remove('activeb');
    }
});

buton4.addEventListener('click', function()
{
    if (buton1.classList.contains('activeb') || buton2.classList.contains('activeb') || buton3.classList.contains('activeb'))
    {
        cont4.style.display = 'block';
        cont1.style.display = 'none';
        cont2.style.display = 'none';
        cont3.style.display = 'none';
        buton4.classList.add('activeb');
        buton1.classList.remove('activeb');
        buton2.classList.remove('activeb');
        buton3.classList.remove('activeb');
    }
});
//------EN BUTTONS--------
buton11.addEventListener('click', function()
{
    if (buton22.classList.contains('activeb') || buton33.classList.contains('activeb') || buton44.classList.contains('activeb'))
    {
        cont11.style.display = 'block';
        cont22.style.display = 'none';
        cont33.style.display = 'none';
        cont44.style.display = 'none';
        buton11.classList.add('activeb');
        buton22.classList.remove('activeb');
        buton33.classList.remove('activeb');
        buton44.classList.remove('activeb');
    }
});

buton22.addEventListener('click', function()
{
    if (buton11.classList.contains('activeb') || buton33.classList.contains('activeb') || buton44.classList.contains('activeb'))
    {
        cont22.style.display = 'block';
        cont11.style.display = 'none';
        cont33.style.display = 'none';
        cont44.style.display = 'none';
        document.getElementById('contentContainer1').style.display = 'none';
        buton22.classList.add('activeb');
        buton11.classList.remove('activeb');
        buton33.classList.remove('activeb');
        buton44.classList.remove('activeb');
    }
});

buton33.addEventListener('click', function()
{
    if (buton11.classList.contains('activeb') || buton22.classList.contains('activeb') || buton44.classList.contains('activeb'))
    {
        cont33.style.display = 'block';
        cont11.style.display = 'none';
        cont22.style.display = 'none';
        cont44.style.display = 'none';
        buton33.classList.add('activeb');
        buton11.classList.remove('activeb');
        buton22.classList.remove('activeb');
        buton44.classList.remove('activeb');
    }
});

buton44.addEventListener('click', function()
{
    if (buton11.classList.contains('activeb') || buton22.classList.contains('activeb') || buton33.classList.contains('activeb'))
    {
        cont44.style.display = 'block';
        cont11.style.display = 'none';
        cont22.style.display = 'none';
        cont33.style.display = 'none';
        buton44.classList.add('activeb');
        buton11.classList.remove('activeb');
        buton22.classList.remove('activeb');
        buton33.classList.remove('activeb');
    }
});