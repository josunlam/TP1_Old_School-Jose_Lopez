$(document).ready(function() {
    // if ((screen.width>=1024) &amp;amp;&amp;amp; (screen.height>=768)) {
    // alert('Resolucion: 1024x768 o mayor');
    // $("link[rel=stylesheet]:not(:first)").attr({href : "detect1024.css"});
    // }
    // else&amp;amp;nbsp; {
    // alert('Resolucion: Menos de 1024x768, a lo mejor es 800x600');
    // $("link[rel=stylesheet]:not(:first)").attr({href : "detect800.css"});
    // }
    var x=screen.width;
    var y=screen.height;
    document.getElementById("resolucion").innerHTML=screen.width +' x ' + screen.height;

    });