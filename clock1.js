const hour=document.getElementById('hour')
const min=document.getElementById('min')
const sec=document.getElementById('sec')
const ampm=document.getElementById('ampm')

let updateClock=()=>{
    let h=new Date().getHours()
    let m=new Date().getMinutes()
    let s=new Date().getSeconds()
    let ap="AM"
    if(h>=12){
        h=h-12
        ap='PM'

    }
    if(h<10){
        h="0"+h

    }
    if(m<10){
        m="0"+m

    }
    if(s<10){
        s="0"+s

    }
    hour.innerText=h
    min.innerText=m
    sec.innerText=s
    ampm.innerText=ap
    setTimeout(()=>{ updateClock() }, 1000)

}
updateClock()