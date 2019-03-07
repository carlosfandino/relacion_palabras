//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=8; attempts=0; attemptsMax=1;
var score=0; scoreMax=8; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=false;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#0080FF"; colorText="#000000"; colorSele="#00FF00";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="¡Felicitaciones! :)"; messageTime="Se acabó el tiempo"; messageError="No completaste la actividad adecuamdamente.  :("; messageErrorG="No completaste la actividad adecuamdamente.  :("; messageAttempts="Se acabaron los intentos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="cmVsYWNpb25hcg"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["<p>RED</p>","<p>BLUE</p>","<p>YELLOW</p>","<p>ORANGE</p>","<p>GREEN</p>","<p>PINK</p>","<p>BLACK</p>","<p>WHITE</p>"];
var iL=["","","","","","","",""];
var order=["","","","","","","",""]; orderR=["","","","","","","",""];indexR=0; indexL=0;
var cR=["","","","","","","",""]; ansRL=["Ng","Mg","Mw","MA","NA","MQ","NQ","Nw"];
var iR=["<div  align='center'><img src='relacionar_resources/media/naranja.jpg'></div>","<div  align='center'><img src='relacionar_resources/media/rosado.jpg'></div>","<div  align='center'><img src='relacionar_resources/media/azul.jpg'></div>","<div  align='center'><img src='relacionar_resources/media/amarillo.jpg'></div>","<div  align='center'><img src='relacionar_resources/media/verde.jpg'></div>","<div  align='center'><img src='relacionar_resources/media/negro.jpg'></div>","<div  align='center'><img src='relacionar_resources/media/rojo.jpg'></div>","<div  align='center'><img src='relacionar_resources/media/blanco.jpg'></div>"];
