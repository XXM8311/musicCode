export const formatPlayCount=(val:number)=>{
    if(val<10000){
        return val
    }else {
        return Math.ceil(val/10000)+'万'
    }
}
export const formatTime=(val:number)=>{
    const time=val/1000
    const m=Math.floor(time/60)
    const s=Math.floor(time%60)
    const formatM=String(m).padStart(2,'0')
    const formatS=String(s).padStart(2,'0')
    return `${formatM}:${formatS}`
}
interface LyricType{
  time:number,
  text:string
}
export const formatLyric=(val:string)=>{
   const lines:string[]=val.split('\n')
   const lyric:LyricType[]=[]
   const timeReg=/\[(\d{2}):(\d{2})\.(\d{2,3})\]/
for (const element of lines) {
    const result =timeReg.exec(element)
    if(!result) continue
    const time1=Number(result[1])*60*1000
    const time2=Number(result[2])*1000
    const time3=result[3].length===3? Number(result[3]):Number(result[3])*10
    const text=element.replace(timeReg,'')
    const time=time1+time2+time3
    lyric.push({time,text})
}   
return lyric
}       