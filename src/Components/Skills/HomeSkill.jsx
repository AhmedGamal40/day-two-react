import { useState } from "react";
import Skill from "./Skill";
import { SkillsData } from "../../Data/SkillsData";

function HomeSkill (){
    const [skills , skillSet] = useState(SkillsData);


  return(
        <>
           <div className="skills-section">
       <div className="container">
          <h2 className="text-center text-warning p-5">My Services</h2>
         <div className="row">
        {
    skills.map((skill)=>{
      return(
        <Skill key={skill.id} Name={skill.name} One={skill.one} Two={skill.two} Three={skill.three} Four={skill.four}/>
        ) 
    })
  }
      </div>
      </div>
     </div>
     </>
    
  )   
}
export default HomeSkill;