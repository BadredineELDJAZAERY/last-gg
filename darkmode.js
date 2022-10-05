function changevideo()
{
    var video = document.getElementById('bar');
    video.src = 'moon.mp4';
    document.getElementById('a').style.color='red';
    document.getElementById('a1').style.color='red';
    document.getElementById('a2').style.color='red';
    document.getElementById('a3').style.color='red';
    document.getElementById('a4').style.color='red';
    document.getElementById('logo').style.color='red';
    document.getElementById('b1').style.color='red';
    document.getElementById('b2').style.color='red';
    document.getElementById('b1').style.background='black';
    document.getElementById('b2').style.background='black';
    document.getElementById('text').style.color='red';
    document.getElementById('PO').style.color='red';
    document.getElementById('Pn').style.color='red';
    document.getElementById('hours').style.color='red';
    document.getElementById('minutes').style.color='red';
    document.getElementById('seconds').style.color='red';
    document.getElementById('session').style.color='red';
    document.getElementById('ponte').style.color='red';
    document.getElementById('pontea').style.color='red';
}
function changevideo1()
{
    var video = document.getElementById('bar');
    video.src = 'sun.mp4';
    document.getElementById('a').style.color='white';
    document.getElementById('a1').style.color='white';
    document.getElementById('a2').style.color='white';
    document.getElementById('a3').style.color='white';
    document.getElementById('a4').style.color='white';
    document.getElementById('logo').style.color='white';
    document.getElementById('b1').style.color='white';
    document.getElementById('b2').style.color='white';
    document.getElementById('b1').style.background='black';
    document.getElementById('b2').style.background='black';
    document.getElementById('text').style.color='white';
    document.getElementById('PO').style.color='white';
    document.getElementById('Pn').style.color='white';
    document.getElementById('hours').style.color='white';
    document.getElementById('minutes').style.color='white';
    document.getElementById('seconds').style.color='white';
    document.getElementById('session').style.color='white';
    document.getElementById('ponte').style.color='white';
    document.getElementById('pontea').style.color='white';
    
}

var i=0,text;
text = "The power of programming is waiting for you"

function typing(){
    if(i<text.length){
        document.getElementById("text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing,65);

    }
}
typing();





