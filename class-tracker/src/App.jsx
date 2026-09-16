import ClassCard from "./Components/ClassCard";
function App() {
 return (
    <div>
      <h1>Class Details </h1>
      < ClassCard lab="Skill-lab" room="D-101" time="10:00 AM" ETime="12:00 AM" teacher="Rajeev sir"/>
      < ClassCard lab="Daa-Lab" room="D-105" time="11:00 AM"  ETime="01:00 PM" teacher="Ajay  sir"/>
       < ClassCard lab="Mern-lab" room="D-202" time="9:00 AM" ETime="11:00 PM" teacher="Lucky sir"/>
      < ClassCard lab="Physics-lab" room="D-112" time="7:00 AM" ETime="09:00 AM" teacher="Mohit sir"/>
    </div>
)}

export default App
