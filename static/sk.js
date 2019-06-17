
var galo=new Array(0,0,0,0,0,0,0,0,0)
var ajogar=1

function jogapc(){
var pos=-1
var i
for (i=0;i<9;i++) if (galo[i]==0) pos=i
if (pos==-1) {alert("Fugiram a soro");return;}
do pos=Math.floor(Math.random()*9)
while (galo[pos]!=0)


mover(pos)
}

function f(q){
mover(q)
jogapc()
}

function mover(q){
if (galo[q]!=0) return
if (ajogar==1)
{
   galo[q]=1
   document.images[q].src="/static/galo/cruz.jpg"
   ajogar=2
}
else
{
   galo[q]=2
   document.images[q].src="/static/galo/genji.png"
   ajogar=1
}
verseganhou ()
}
   function v(q1,q2,q3){
if((galo[q1]==1)&&(galo[q2]==1)&&(galo[q3]==1)) return 1
if((galo[q1]==2)&&(galo[q2]==2)&&(galo[q3]==2)) return 2
return 0
}

function verseganhou (){
if (v(0,1,2)==1) {alert("Ganhou a WidowMaker !!!")}
if (v(3,4,5)==1) {alert("Ganhou a WidowMaker !!!")}
if (v(6,7,8)==1) {alert("Ganhou a WidowMaker !!!")}
if (v(0,3,6)==1) {alert("Ganhou a WidowMaker !!!")}
if (v(1,4,7)==1) {alert("Ganhou a WidowMaker !!!")}
if (v(2,5,8)==1) {alert("Ganhou a WidowMaker !!!")}
if (v(0,4,8)==1) {alert("Ganhou a WidowMaker !!!")}
if (v(2,4,6)==1) {alert("Ganhou a WidowMaker !!!")}

if (v(0,1,2)==2) {alert("Ganhou o Genji !!!")}
if (v(3,4,5)==2) {alert("Ganhou o Genji  !!!")}
if (v(6,7,8)==2) {alert("Ganhou o Genji  !!!")}
if (v(0,3,6)==2) {alert("Ganhou o Genji  !!!")}
if (v(1,4,7)==2) {alert("Ganhou o Genji  !!!")}
if (v(2,5,8)==2) {alert("Ganhou o Genji  !!!")}
if (v(0,4,8)==2) {alert("Ganhou o Genji  !!!")}
if (v(2,4,6)==2) {alert("Ganhou o Genji  !!!")}
}

function reset(){
location.reload()
}
