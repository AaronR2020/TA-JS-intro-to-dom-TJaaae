var sHand=document.querySelector(".sHand");
var mHand=document.querySelector(".mHand");
var hHand=document.querySelector(".HHand");

function getTime(){
   let time=new Date();
   let seconds=time.getSeconds()
   let minutes=time.getMinutes()
   let hours=time.getHours()
   //seconds
   degSec=(((seconds/60)*360)+90)
   sHand.style.transform=`rotate(${degSec}deg)`;
   //minutes
   degMin=(((minutes/60)*360)+90)
   mHand.style.transform=`rotate(${degMin}deg)`;
   //hours
   degHours=(((hours/12)*360)+90)
   HHand.style.transform=`rotate(${degHours}deg)`;
}


setInterval(getTime,1000)