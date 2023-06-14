function Education ({Name,One,Two}){
    return(
        <>
    
            <div className="col-md-6">
              <div className="card bg-dark" style={{height:'175px'}}>
                <div className="card-body text-center text-white">
                  <h3>{Name} </h3>
                  <p>{One}</p>
                  <p>{Two}</p>
                </div>
              </div>
            </div>
        </>
    );
}
export default Education;