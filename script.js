const landing=document.getElementById('landing');
const p1=document.getElementById('page1');
const p2=document.getElementById('page2');
document.getElementById('openGift').onclick=()=>{
landing.style.display='none';
p1.style.display='block';
p1.classList.add('fade');
window.scrollTo({top:0,behavior:'smooth'});
};
document.getElementById('continueBtn').onclick=()=>{
p1.style.display='none';
p2.style.display='block';
p2.classList.add('fade');
window.scrollTo({top:0,behavior:'smooth'});
};

document.getElementById("backToLanding").onclick=()=>{p1.style.display="none";landing.style.display="flex";window.scrollTo({top:0,behavior:"smooth"});};
document.getElementById("backToPage1").onclick=()=>{p2.style.display="none";p1.style.display="block";window.scrollTo({top:0,behavior:"smooth"});};
const heartContainer=document.getElementById("heart-container");function createHeart(){const h=document.createElement("div");h.className="heart";h.innerHTML="♡";h.style.left=Math.random()*100+"vw";h.style.animationDuration=(5+Math.random()*5)+"s";h.style.fontSize=(15+Math.random()*20)+"px";heartContainer.appendChild(h);setTimeout(()=>h.remove(),10000);}setInterval(createHeart,350);