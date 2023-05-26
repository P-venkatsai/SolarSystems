function create_orbit()
{    
    let k=0;
    let si=setInterval(()=>
    {
    console.log(k)
    let angle=k%360;
    let orb=document.createElement("div")
    orb.style.height="1px"
    orb.style.width="1px"
    orb.style.background="#ded7d7"
    orb.style.position="absolute"
    let orb1=document.createElement("div")
    orb1.style.height="1px"
    orb1.style.width="1px"
    orb1.style.background="#ded7d7"
    orb1.style.position="absolute"
    let orb2=document.createElement("div")
    orb2.style.height="1px"
    orb2.style.width="1px"
    orb2.style.background="#ded7d7"
    orb2.style.position="absolute"
    let orb3=document.createElement("div")
    orb3.style.height="1px"
    orb3.style.width="1px"
    orb3.style.background="#ded7d7"
    orb3.style.position="absolute"
    let orb4=document.createElement("div")
    orb4.style.height="1px"
    orb4.style.width="1px"
    orb4.style.background="#ded7d7"
    orb4.style.position="absolute"
    let orb5=document.createElement("div")
    orb5.style.height="1px"
    orb5.style.width="1px"
    orb5.style.background="#ded7d7"
    orb5.style.position="absolute"
    let orb6=document.createElement("div")
    orb6.style.height="1px"
    orb6.style.width="1px"
    orb6.style.background="#ded7d7"
    orb6.style.position="absolute"
    let orb7=document.createElement("div")
    orb7.style.height="1px"
    orb7.style.width="1px"
    orb7.style.background="#ded7d7"
    orb7.style.position="absolute"
    if(angle>=0&&angle<=90)
    {
        orb.style.zIndex="11"
        orb1.style.zIndex="11"
        orb2.style.zIndex="11"
        orb3.style.zIndex="11"
        orb4.style.zIndex="11"
        orb5.style.zIndex="11"
        orb.style.top=`${(window.innerHeight/2)+52*parseFloat(Math.sin(angle*Math.PI/180).
        toFixed(4))}px`
        orb.style.left=`${(window.innerWidth/2)+
        92*parseFloat(Math.cos(angle*Math.PI/180).toFixed(4))}px`
        orb1.style.top=`${(window.innerHeight/2)+75*parseFloat(Math.sin(angle*Math.PI/180).
        toFixed(4))}px`
        orb1.style.left=`${(window.innerWidth/2)+
        125*parseFloat(Math.cos(angle*Math.PI/180).toFixed(4))}px`
        orb2.style.top=`${(window.innerHeight/2)+96*parseFloat(Math.sin(angle*Math.PI/180).
        toFixed(4))}px`
        orb2.style.left=`${(window.innerWidth/2)+
        166*parseFloat(Math.cos(angle*Math.PI/180).toFixed(4))}px`
        orb3.style.top=`${(window.innerHeight/2)+134*parseFloat(Math.sin(angle*Math.PI/180).
        toFixed(4))}px`
        orb3.style.left=`${(window.innerWidth/2)+
        238*parseFloat(Math.cos(angle*Math.PI/180).toFixed(4))}px`
        orb4.style.top=`${(window.innerHeight/2)+190*parseFloat(Math.sin(angle*Math.PI/180).
        toFixed(4))}px`
        orb4.style.left=`${(window.innerWidth/2)+
        350*parseFloat(Math.cos(angle*Math.PI/180).toFixed(4))}px`
        orb5.style.top=`${(window.innerHeight/2)+230*parseFloat(Math.sin(angle*Math.PI/180).
        toFixed(4))}px`
        orb5.style.left=`${(window.innerWidth/2)+
        420*parseFloat(Math.cos(angle*Math.PI/180).toFixed(4))}px`
        orb6.style.top=`${(window.innerHeight/2)+270*parseFloat(Math.sin(angle*Math.PI/180).
        toFixed(4))}px`
        orb6.style.left=`${(window.innerWidth/2)+
        500*parseFloat(Math.cos(angle*Math.PI/180).toFixed(4))}px`
        orb7.style.top=`${(window.innerHeight/2)+350*parseFloat(Math.sin(angle*Math.PI/180).
        toFixed(4))}px`
        orb7.style.left=`${(window.innerWidth/2)+
        620*parseFloat(Math.cos(angle*Math.PI/180).toFixed(4))}px`
    }
    else if(angle>90&&angle<=180)
    {
        orb.style.top=`${(window.innerHeight/2)+52*parseFloat(Math.sin(angle*Math.PI/180).toFixed(4))}px`
        orb.style.left=`${(window.innerWidth/2)+92*parseFloat(Math.cos(angle*Math.PI/180).
        toFixed(8))}px`
        orb1.style.top=`${(window.innerHeight/2)+75*parseFloat(Math.sin(angle*Math.PI/180).
        toFixed(4))}px`
        orb1.style.left=`${(window.innerWidth/2)+
        125*parseFloat(Math.cos(angle*Math.PI/180).toFixed(4))}px`
        orb2.style.top=`${(window.innerHeight/2)+96*parseFloat(Math.sin(angle*Math.PI/180).
        toFixed(4))}px`
        orb2.style.left=`${(window.innerWidth/2)+
        166*parseFloat(Math.cos(angle*Math.PI/180).toFixed(4))}px`
        orb3.style.top=`${(window.innerHeight/2)+134*parseFloat(Math.sin(angle*Math.PI/180).
        toFixed(4))}px`
        orb3.style.left=`${(window.innerWidth/2)+
        238*parseFloat(Math.cos(angle*Math.PI/180).toFixed(4))}px`
        orb4.style.top=`${(window.innerHeight/2)+190*parseFloat(Math.sin(angle*Math.PI/180).
        toFixed(4))}px`
        orb4.style.left=`${(window.innerWidth/2)+
        350*parseFloat(Math.cos(angle*Math.PI/180).toFixed(4))}px`
        orb5.style.top=`${(window.innerHeight/2)+230*parseFloat(Math.sin(angle*Math.PI/180).
        toFixed(4))}px`
        orb5.style.left=`${(window.innerWidth/2)+
        420*parseFloat(Math.cos(angle*Math.PI/180).toFixed(4))}px`
        orb6.style.top=`${(window.innerHeight/2)+270*parseFloat(Math.sin(angle*Math.PI/180).
        toFixed(4))}px`
        orb6.style.left=`${(window.innerWidth/2)+
        500*parseFloat(Math.cos(angle*Math.PI/180).toFixed(4))}px`
        orb7.style.top=`${(window.innerHeight/2)+350*parseFloat(Math.sin(angle*Math.PI/180).
        toFixed(4))}px`
        orb7.style.left=`${(window.innerWidth/2)+
        620*parseFloat(Math.cos(angle*Math.PI/180).toFixed(4))}px`
    }
    else if(angle>180&&angle<=270)
    {
        orb.style.zIndex="1"
        orb1.style.zIndex="1"
        orb2.style.zIndex="1"
        orb3.style.zIndex="1"
        orb4.style.zIndex="1"
        orb5.style.zIndex="1"
        orb.style.top=`${(window.innerHeight/2)+52*parseFloat(Math.sin(angle*Math.PI/180).
        toFixed(4))}px`
        orb.style.left=`${(window.innerWidth/2)+92*parseFloat(Math.cos(angle*Math.PI/180).
        toFixed(4))}px`
        orb1.style.top=`${(window.innerHeight/2)+75*parseFloat(Math.sin(angle*Math.PI/180).
        toFixed(4))}px`
        orb1.style.left=`${(window.innerWidth/2)+
        125*parseFloat(Math.cos(angle*Math.PI/180).toFixed(4))}px`
        orb2.style.top=`${(window.innerHeight/2)+96*parseFloat(Math.sin(angle*Math.PI/180).
        toFixed(4))}px`
        orb2.style.left=`${(window.innerWidth/2)+
        166*parseFloat(Math.cos(angle*Math.PI/180).toFixed(4))}px`
        orb3.style.top=`${(window.innerHeight/2)+134*parseFloat(Math.sin(angle*Math.PI/180).
        toFixed(4))}px`
        orb3.style.left=`${(window.innerWidth/2)+
        238*parseFloat(Math.cos(angle*Math.PI/180).toFixed(4))}px`
        orb4.style.top=`${(window.innerHeight/2)+190*parseFloat(Math.sin(angle*Math.PI/180).
        toFixed(4))}px`
        orb4.style.left=`${(window.innerWidth/2)+
        350*parseFloat(Math.cos(angle*Math.PI/180).toFixed(4))}px`
        orb5.style.top=`${(window.innerHeight/2)+230*parseFloat(Math.sin(angle*Math.PI/180).
        toFixed(4))}px`
        orb5.style.left=`${(window.innerWidth/2)+
        420*parseFloat(Math.cos(angle*Math.PI/180).toFixed(4))}px`
        orb6.style.top=`${(window.innerHeight/2)+270*parseFloat(Math.sin(angle*Math.PI/180).
        toFixed(4))}px`
        orb6.style.left=`${(window.innerWidth/2)+
        500*parseFloat(Math.cos(angle*Math.PI/180).toFixed(4))}px`
        orb7.style.top=`${(window.innerHeight/2)+350*parseFloat(Math.sin(angle*Math.PI/180).
        toFixed(4))}px`
        orb7.style.left=`${(window.innerWidth/2)+
        620*parseFloat(Math.cos(angle*Math.PI/180).toFixed(4))}px`
    }
    else
    {
        orb.style.top=`${(window.innerHeight/2)+52*parseFloat(Math.sin(angle*Math.PI/180).
        toFixed(4))}px`
        orb.style.left=`${(window.innerWidth/2)+92*parseFloat(Math.cos(angle*Math.PI/180).
        toFixed(4))}px`
        orb1.style.top=`${(window.innerHeight/2)+75*parseFloat(Math.sin(angle*Math.PI/180).
        toFixed(4))}px`
        orb1.style.left=`${(window.innerWidth/2)+
        125*parseFloat(Math.cos(angle*Math.PI/180).toFixed(4))}px`
        orb2.style.top=`${(window.innerHeight/2)+96*parseFloat(Math.sin(angle*Math.PI/180).
        toFixed(4))}px`
        orb2.style.left=`${(window.innerWidth/2)+
        166*parseFloat(Math.cos(angle*Math.PI/180).toFixed(4))}px`
        orb3.style.top=`${(window.innerHeight/2)+134*parseFloat(Math.sin(angle*Math.PI/180).
        toFixed(4))}px`
        orb3.style.left=`${(window.innerWidth/2)+
        238*parseFloat(Math.cos(angle*Math.PI/180).toFixed(4))}px`
        orb4.style.top=`${(window.innerHeight/2)+190*parseFloat(Math.sin(angle*Math.PI/180).
        toFixed(4))}px`
        orb4.style.left=`${(window.innerWidth/2)+
        350*parseFloat(Math.cos(angle*Math.PI/180).toFixed(4))}px`
        orb5.style.top=`${(window.innerHeight/2)+230*parseFloat(Math.sin(angle*Math.PI/180).
        toFixed(4))}px`
        orb5.style.left=`${(window.innerWidth/2)+
        420*parseFloat(Math.cos(angle*Math.PI/180).toFixed(4))}px`
        orb6.style.top=`${(window.innerHeight/2)+270*parseFloat(Math.sin(angle*Math.PI/180).
        toFixed(4))}px`
        orb6.style.left=`${(window.innerWidth/2)+
        500*parseFloat(Math.cos(angle*Math.PI/180).toFixed(4))}px`
        orb7.style.top=`${(window.innerHeight/2)+350*parseFloat(Math.sin(angle*Math.PI/180).
        toFixed(4))}px`
        orb7.style.left=`${(window.innerWidth/2)+
        620*parseFloat(Math.cos(angle*Math.PI/180).toFixed(4))}px`
    }
    let bo=document.querySelector("body")
    bo.appendChild(orb)
    bo.appendChild(orb1)
    bo.appendChild(orb2)
    bo.appendChild(orb3)
    bo.appendChild(orb4)
    bo.appendChild(orb5)
    bo.appendChild(orb6)
    bo.appendChild(orb7)
    k=k+0.75
    if(k>=361)
    {
        clearInterval(si)
        create_rotation()
    }
    },1)
}
function start_animation()
{
    create_orbit()
    // create_rotation()
}
function create_rotation()
{
    let k=0;
    let k1=45;
    let k2=90;
    let k3=30;
    let k4=180;
    let k5=270;
    let k6=225;
    let k7=325;
    console.log(`${window.innerHeight/2} ${window.innerWidth/2}`)
    let sun=document.querySelector("#eclipse")
    sun.style.top=`${window.innerHeight/2}px`
    sun.style.left=`${window.innerWidth/2}px`
    let z=document.querySelector("#mercury")
    let venus=document.querySelector("#venus")
    let earth=document.querySelector("#earth")
    let mars=document.querySelector("#mars")
    let jupiter=document.querySelector("#jupiter")
    let saturn=document.querySelector("#saturn")
    let uranus=document.querySelector("#uranus")
    let neptune=document.querySelector("#neptune")
    saturn.style.zIndex="1"
    sun.style.zIndex="10"
    sun.style.display="block"
let si=setInterval(()=>
{
    let angle=k%360;
    let angle1=k1%360;
    let angle2=k2%360;
    let angle3=k3%360;
    let angle4=k4%360;
    let angle5=k5%360;
    let angle6=k6%360;
    let angle7=k7%360;
    if(angle>=0&&angle<=90)
    {
        z.style.zIndex="12"
        z.style.top=`${(window.innerHeight/2)+40*parseFloat(Math.sin(angle*Math.PI/180).toFixed(4))}px`
        z.style.left=`${(window.innerWidth/2)+80*parseFloat(Math.cos(angle*Math.PI/180).toFixed(4))}px`
    }
    else if(angle>90&&angle<=180)
    {
        z.style.zIndex="12"
        let per=angle-90;
        z.style.top=`${(window.innerHeight/2)+40*parseFloat(Math.sin(angle*Math.PI/180).toFixed(4))}px`
        z.style.left=`${(window.innerWidth/2)+80*parseFloat(Math.cos(angle*Math.PI/180).
        toFixed(4))-(Math.sin(per*Math.PI/180))*24}px`
    }
    else if(angle>180&&angle<=270)
    {
        z.style.zIndex="9"
        let per=angle-180;
        z.style.top=`${(window.innerHeight/2)+40*parseFloat(Math.sin(angle*Math.PI/180).
        toFixed(4))-(Math.sin(per*Math.PI/180))*24}px`
        z.style.left=`${(window.innerWidth/2)+80*parseFloat(Math.cos(angle*Math.PI/180).
        toFixed(4))-(Math.cos(per*Math.PI/180))*24}px`
    }
    else
    {
        z.style.zIndex="9"
        let per=angle-270;
        z.style.top=`${(window.innerHeight/2)+40*parseFloat(Math.sin(angle*Math.PI/180).
        toFixed(4))-(Math.cos(per*Math.PI/180))*24}px`
        z.style.left=`${(window.innerWidth/2)+80*parseFloat(Math.cos(angle*Math.PI/180).
        toFixed(4))}px`
    }
    if(angle1>=0&&angle1<=90)
    {
        venus.style.zIndex="13"
        venus.style.top=`${(window.innerHeight/2)+60*parseFloat(Math.sin(angle1*Math.PI/180).toFixed(4))}px`
        venus.style.left=`${(window.innerWidth/2)+110*parseFloat(Math.cos(angle1*Math.PI/180).toFixed(4))}px`      
    }
    else if(angle1>90&&angle1<=180)
    {
        venus.style.zIndex="13"
        let per=angle1-90;
        venus.style.top=`${(window.innerHeight/2)+60*parseFloat(Math.sin(angle1*Math.PI/180).toFixed(4))}px`
        venus.style.left=`${(window.innerWidth/2)+110*parseFloat(Math.cos(angle1*Math.PI/180).
        toFixed(4))-(Math.sin(per*Math.PI/180))*30}px`
    }
    else if(angle1>180&&angle1<=270)
    {
        venus.style.zIndex="8"
        let per=angle1-180;
        venus.style.top=`${(window.innerHeight/2)+60*parseFloat(Math.sin(angle1*Math.PI/180).
        toFixed(4))-(Math.sin(per*Math.PI/180))*30}px`
        venus.style.left=`${(window.innerWidth/2)+110*parseFloat(Math.cos(angle1*Math.PI/180).
        toFixed(4))-(Math.cos(per*Math.PI/180))*30}px`
    }
    else
    {
        venus.style.zIndex="8"
        let per=angle1-270;
        venus.style.top=`${(window.innerHeight/2)+60*parseFloat(Math.sin(angle1*Math.PI/180).
        toFixed(4))-(Math.cos(per*Math.PI/180))*30}px`
        venus.style.left=`${(window.innerWidth/2)+110*parseFloat(Math.cos(angle1*Math.PI/180).
        toFixed(4))}px`
    }
    if(angle2>=0&&angle2<=90)
    {
        earth.style.zIndex="14"
        earth.style.top=`${(window.innerHeight/2)+80*parseFloat(Math.sin(angle2*Math.PI/180).toFixed(4))}px`
        earth.style.left=`${(window.innerWidth/2)+150*parseFloat(Math.cos(angle2*Math.PI/180).toFixed(4))}px`      
    }
    else if(angle2>90&&angle2<=180)
    {
        earth.style.zIndex="14"
        let per=angle2-90;
        earth.style.top=`${(window.innerHeight/2)+80*parseFloat(Math.sin(angle2*Math.PI/180).toFixed(4))}px`
        earth.style.left=`${(window.innerWidth/2)+150*parseFloat(Math.cos(angle2*Math.PI/180).
        toFixed(4))-(Math.sin(per*Math.PI/180))*30}px`
    }
    else if(angle2>180&&angle2<=270)
    {
        earth.style.zIndex="7"
        let per=angle2-180;
        earth.style.top=`${(window.innerHeight/2)+80*parseFloat(Math.sin(angle2*Math.PI/180).
        toFixed(4))-(Math.sin(per*Math.PI/180))*30}px`
        earth.style.left=`${(window.innerWidth/2)+150*parseFloat(Math.cos(angle2*Math.PI/180).
        toFixed(4))-(Math.cos(per*Math.PI/180))*30}px`
    }
    else
    {
        earth.style.zIndex="7"
        let per=angle2-270;
        earth.style.top=`${(window.innerHeight/2)+80*parseFloat(Math.sin(angle2*Math.PI/180).
        toFixed(4))-(Math.cos(per*Math.PI/180))*30}px`
        earth.style.left=`${(window.innerWidth/2)+150*parseFloat(Math.cos(angle2*Math.PI/180).
        toFixed(4))}px`
    }
    if(angle3>=0&&angle3<=90)
    {
        mars.style.zIndex="15"
        mars.style.top=`${(window.innerHeight/2)+120*parseFloat(Math.sin(angle3*Math.PI/180).toFixed(4))}px`
        mars.style.left=`${(window.innerWidth/2)+224*parseFloat(Math.cos(angle3*Math.PI/180).toFixed(4))}px`      
    }
    else if(angle3>90&&angle3<=180)
    {
        mars.style.zIndex="15"
        let per=angle3-90;
        mars.style.top=`${(window.innerHeight/2)+120*parseFloat(Math.sin(angle3*Math.PI/180).toFixed(4))}px`
        mars.style.left=`${(window.innerWidth/2)+224*parseFloat(Math.cos(angle3*Math.PI/180).
        toFixed(4))-(Math.sin(per*Math.PI/180))*30}px`
    }
    else if(angle3>180&&angle3<=270)
    {
        mars.style.zIndex="6"
        let per=angle3-180;
        mars.style.top=`${(window.innerHeight/2)+120*parseFloat(Math.sin(angle3*Math.PI/180).
        toFixed(4))-(Math.sin(per*Math.PI/180))*30}px`
        mars.style.left=`${(window.innerWidth/2)+224*parseFloat(Math.cos(angle3*Math.PI/180).
        toFixed(4))-(Math.cos(per*Math.PI/180))*30}px`
    }
    else
    {
        mars.style.zIndex="6"
        let per=angle3-270;
        mars.style.top=`${(window.innerHeight/2)+120*parseFloat(Math.sin(angle3*Math.PI/180).
        toFixed(4))-(Math.cos(per*Math.PI/180))*30}px`
        mars.style.left=`${(window.innerWidth/2)+224*parseFloat(Math.cos(angle3*Math.PI/180).
        toFixed(4))}px`
    }
    if(angle4>=0&&angle4<=90)
    {
        jupiter.style.zIndex="16"
        jupiter.style.top=`${(window.innerHeight/2)+160*parseFloat(Math.sin(angle4*Math.PI/180).toFixed(4))}px`
        jupiter.style.left=`${(window.innerWidth/2)+320*parseFloat(Math.cos(angle4*Math.PI/180).toFixed(4))}px`      
        console.log(`${mars.style.top} ${mars.style.left}`)
    }
    else if(angle4>90&&angle4<=180)
    {
        jupiter.style.zIndex="16"
        let per=angle4-90;
        jupiter.style.top=`${(window.innerHeight/2)+160*parseFloat(Math.sin(angle4*Math.PI/180).toFixed(4))}px`
        jupiter.style.left=`${(window.innerWidth/2)+320*parseFloat(Math.cos(angle4*Math.PI/180).
        toFixed(4))-(Math.sin(per*Math.PI/180))*60}px`
    }
    else if(angle4>180&&angle4<=270)
    {
        jupiter.style.zIndex="5"
        let per=angle4-180;
        jupiter.style.top=`${(window.innerHeight/2)+160*parseFloat(Math.sin(angle4*Math.PI/180).
        toFixed
        (4))-(Math.sin(per*Math.PI/180))*60}px`
        jupiter.style.left=`${(window.innerWidth/2)+320*parseFloat(Math.cos(angle4*Math.PI/180).
        toFixed(4))-(Math.cos(per*Math.PI/180))*60}px`
    }
    else
    {
        jupiter.style.zIndex="5"
        let per=angle4-270;
        jupiter
        .style.top=`${(window.innerHeight/2)+160*parseFloat(Math.sin(angle4*Math.PI/180).
        toFixed(4))-(Math.cos(per*Math.PI/180))*60}px`
        jupiter.style.left=`${(window.innerWidth/2)+320*parseFloat(Math.cos(angle4*Math.PI/180).
        toFixed(4))}px`
    }
    if(angle5>=0&&angle5<=90)
    {
        saturn.style.zIndex="17"
        saturn.style.top=`${(window.innerHeight/2)+200*parseFloat(Math.sin(angle5*Math.PI/180).toFixed(4))}px`
        saturn.style.left=`${(window.innerWidth/2)+390*parseFloat(Math.cos(angle5*Math.PI/180).toFixed(4))}px`      
    }
    else if(angle5>90&&angle5<=180)
    {
        saturn.style.zIndex="17"
        let per=angle5-90;
        saturn.style.top=`${(window.innerHeight/2)+200*parseFloat(Math.sin(angle5*Math.PI/180).toFixed(4))}px`
        saturn.style.left=`${(window.innerWidth/2)+390*parseFloat(Math.cos(angle5*Math.PI/180).
        toFixed(4))-(Math.sin(per*Math.PI/180))*60}px`
    }
    else if(angle5>180&&angle5<=270)
    {
        saturn.style.zIndex="4"
        let per=angle5-180;
        saturn.style.top=`${(window.innerHeight/2)+200*parseFloat(Math.sin(angle5*Math.PI/180).
        toFixed
        (4))-(Math.sin(per*Math.PI/180))*60}px`
        saturn.style.left=`${(window.innerWidth/2)+390*parseFloat(Math.cos(angle5*Math.PI/180).
        toFixed(4))-(Math.cos(per*Math.PI/180))*60}px`
    }
    else
    {
        saturn.style.zIndex="4"
        let per=angle5-270;
        saturn
        .style.top=`${(window.innerHeight/2)+200*parseFloat(Math.sin(angle5*Math.PI/180).
        toFixed(4))-(Math.cos(per*Math.PI/180))*60}px`
        saturn.style.left=`${(window.innerWidth/2)+390*parseFloat(Math.cos(angle5*Math.PI/180).
        toFixed(4))}px`
    }
    if(angle6>=0&&angle6<=90)
    {
        uranus.style.zIndex="18"
        uranus.style.top=`${(window.innerHeight/2)+245*parseFloat(Math.sin(angle6*Math.PI/180).toFixed(4))}px`
        uranus.style.left=`${(window.innerWidth/2)+475*parseFloat(Math.cos(angle6*Math.PI/180).toFixed(4))}px`      
    }
    else if(angle6>90&&angle6<=180)
    {
        uranus.style.zIndex="18"
        let per=angle6-90;
        uranus.style.top=`${(window.innerHeight/2)+245*parseFloat(Math.sin(angle6*Math.PI/180).toFixed(4))}px`
        uranus.style.left=`${(window.innerWidth/2)+475*parseFloat(Math.cos(angle6*Math.PI/180).
        toFixed(4))-(Math.sin(per*Math.PI/180))*50}px`
    }
    else if(angle6>180&&angle6<=270)
    {
        uranus.style.zIndex="3"
        let per=angle6-180;
        uranus.style.top=`${(window.innerHeight/2)+245*parseFloat(Math.sin(angle6*Math.PI/180).
        toFixed
        (4))-(Math.sin(per*Math.PI/180))*50}px`
        uranus.style.left=`${(window.innerWidth/2)+475*parseFloat(Math.cos(angle6*Math.PI/180).
        toFixed(4))-(Math.cos(per*Math.PI/180))*50}px`
    }
    else
    {
        uranus.style.zIndex="3"
        let per=angle6-270;
        uranus
        .style.top=`${(window.innerHeight/2)+245*parseFloat(Math.sin(angle6*Math.PI/180).
        toFixed(4))-(Math.cos(per*Math.PI/180))*50}px`
        uranus.style.left=`${(window.innerWidth/2)+475*parseFloat(Math.cos(angle6*Math.PI/180).
        toFixed(4))}px`
    }
    if(angle7>=0&&angle7<=90)
    {
        neptune.style.zIndex="19"
        neptune.style.top=`${(window.innerHeight/2)+326*parseFloat(Math.sin(angle7*Math.PI/180).toFixed(4))}px`
        neptune.style.left=`${(window.innerWidth/2)+596*parseFloat(Math.cos(angle7*Math.PI/180).toFixed(4))}px`      
    }
    else if(angle7>90&&angle7<=180)
    {
        neptune.style.zIndex="19"
        let per=angle7-90;
        neptune.style.top=`${(window.innerHeight/2)+326*parseFloat(Math.sin(angle7*Math.PI/180).toFixed(4))}px`
        neptune.style.left=`${(window.innerWidth/2)+596*parseFloat(Math.cos(angle7*Math.PI/180).
        toFixed(4))-(Math.sin(per*Math.PI/180))*48}px`
    }
    else if(angle7>180&&angle7<=270)
    {
        neptune.style.zIndex="2"
        let per=angle7-180;
        neptune.style.top=`${(window.innerHeight/2)+326*parseFloat(Math.sin(angle7*Math.PI/180).
        toFixed
        (4))-(Math.sin(per*Math.PI/180))*48}px`
        neptune.style.left=`${(window.innerWidth/2)+596*parseFloat(Math.cos(angle7*Math.PI/180).
        toFixed(4))-(Math.cos(per*Math.PI/180))*48}px`
    }
    else
    {
        neptune.style.zIndex="2"
        let per=angle7-270;
        neptune
        .style.top=`${(window.innerHeight/2)+326*parseFloat(Math.sin(angle7*Math.PI/180).
        toFixed(4))-(Math.cos(per*Math.PI/180))*48}px`
        neptune.style.left=`${(window.innerWidth/2)+596*parseFloat(Math.cos(angle7*Math.PI/180).
        toFixed(4))}px`
    }
    k+=4
    k1+=(1/0.85)
    k2+=(1)
    k3+=(1/1.89);
    k4+=(1/11.57);
    k5+=(1/24.87);
    k6+=(1/84.07)
    k7+=(1/164.9)
    if(k4>=(360*10))
    {
        clearInterval(si)
    }
},20)
}

