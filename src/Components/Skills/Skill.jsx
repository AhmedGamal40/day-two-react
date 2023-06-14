function Skill ({Name,One,Two,Three,Four}){
    return(
        
          <div className="col-md-4 mt-2">
            <div className="card">
              <div className="card-body bg-dark"style={{height:'200px'}}>
                <h3 className="text-center text-white">{Name}</h3>
                <ul className=" text-white" >
                  <li>{One}</li>
                  <li>{Two}</li>
                  <li>{Three}</li>
                  <li>{Four}</li>
                </ul>
              </div>
            </div>
         </div>
     );
}
export default Skill;