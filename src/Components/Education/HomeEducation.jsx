import Education from "./Education";
import {EducationData } from "../../Data/EducationData";
import { useState } from "react";

function HomeEducation (){
    const [educationdata , educationSet]=useState(EducationData)
    return(
        <>
        <div className="education-section">
        <div className="container">
          <h2 className="text-center text-warning p-5">Education</h2>
          <div className="row">
        {
            educationdata.map((education)=> {
                return(
                    <Education Key={education.id} Name={education.name} One={education.one} Two={education.two}/>
                    )
            }
            )     
        }
        
          </div>
        </div>
      </div>
        
        </>
    );
}
export default HomeEducation;