var crsr=document.querySelector("#cursor");
var blur= document.querySelector('#cursorBlur')
document.addEventListener("mousemove",function(dets){
    crsr.style.top=dets.y +"px";
    crsr.style.left=dets.x +"px";
    blur.style.top=dets.y -200 +"px";
    blur.style.left=dets.x -200 +"px";
})
var h4=document.querySelectorAll("#nav h4");
h4.forEach(function(ele){
    ele.addEventListener('mouseenter',function(){
        crsr.style.border="1px solid #fff";
        crsr.style.scale=3;
        crsr.style.backgroundColor="transparent";
        crsr.style.transition="all ease 0.6s";
    })
    ele.addEventListener("mouseleave",function(){
        crsr.style.scale=1;
        crsr.style.border="0px solid #c4f345";
        crsr.style.backgroundColor="#c4f345";
        crsr.style.transition="none";
    })
})
gsap.to("#nav",{
    backgroundColor:'#000',
    duration:0.5,
    height:"105px",
    scrollTrigger:{
        trigger:'#nav',
        scroller:'body',
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:'#000',
    duration:0.5,
    
    scrollTrigger:{
        trigger:'#main',
        scroller:'body',
        scrub:2,
        start:"top -25%",
        end:"top -70%"
    }
})
gsap.from("#about-us img, #about-us-in",{
    y:80,
    opacity:0,
    duration:1,
    scrollTrigger:{
        scroller:"body",
        trigger:"#about-us",
        start:"top 60%",
        end:"top 55%",
        scrub:1
    }
})

gsap.from(".cards",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        scroller:"body",
        trigger:".cards",
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})
gsap.from("#coln1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        scroller:"body",
        trigger:"#coln1",
        start:"top 55%",
        end:"top 45%",
        scrub:3
    }
})
gsap.from("#coln2",{
    y:70,
    x:70,
    scrollTrigger:{
        scroller:"body",
        trigger:"#coln1",
        start:"top 55%",
        end:"top 45%",
        scrub:3
    }
})
var elem=document.querySelectorAll('#page4 .elem');
var chngedh4=document.querySelector('#page4 h4');
console.log(elem);
console.log(chngedh4);
elem.forEach(function(ele){
    ele.addEventListener('mouseenter',function(){
        chngedh4.style.webkitTextStroke="2px #c4f345";
        
    })
    ele.addEventListener('mouseleave',function(){
        chngedh4.style.webkitTextStroke="2px #fff";
    })
})
gsap.from('#page4 h4',{
    y:50,
    scrollTrigger:{
        scroller:"body",
        trigger:"#page4 h4",
        start:"top 80%",
        end:"top 85%",
        scrub:0
    }
})