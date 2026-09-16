const ClassCard=(props)=>{
return (
<div>
  <h1>Lab name : {props.lab}</h1>
  <h2>Teacher/Trainer name :{props.teacher}</h2>
  <h2>Room : {props.room}</h2>
  <h2>Entry Time : {props.time}</h2>
  <h2>Exit Time : {props.ETime}</h2>
  
  

</div>
)
}
export default ClassCard;