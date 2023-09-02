import myImage from "../../assets/photo_2021-07-22_22-14-18.png"
  import { FaFacebook, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
function Hero(){
    return(
        <>
        <div class="row bg-dark">
            <div className="col-md-12">
                <img src={myImage} class="img-fluid rounded-circle p-3" alt="Cinque Terre" />
            </div>
            <div className="col-md-12 text-center">
                <h3 className="text-white">Ahmed Gamal</h3>
                <p className="text-secondary">Full Stack Developer</p>
            </div>
            <div class="col-md-12 d-flex justify-content-center m-1">
                <a href="https://www.facebook.com/Google.xv/" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={20} class="m-1 text-warning" />
                </a>
                <a href="https://github.com/AhmedGamal40" target="_blank" rel="noopener noreferrer">
                <FaGithub size={20} class="m-1 text-warning" />
                </a>
                <a href="https://twitter.com/MR__G00GLE" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={20} class="m-1 text-warning" />
                </a>
                <a href="https://www.linkedin.com/in/ahmed-gamal-900202177/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={20} class="m-1 text-warning" />
                </a>
            </div>
            <div className="col-md-12 d-flex justify-content-center m-1">
            <hr  style={{ color:"white",width: "100%" ,borderWidth: "5px" }}/>
            </div>
            <div class="col-md-12 p-3" style={{ display: "flex", justifyContent: "space-between" }}>
                <strong class="text-warning" style={{ maxWidth: "100%", height: "25px"}}>Age:</strong>
                <strong class="text-white" >23</strong>
            </div>
            <div class="col-md-12 p-3" style={{ display: "flex", justifyContent: "space-between" }}>
                <strong class="text-warning" style={{ maxWidth: "100%", height: "25px"}}>Freelance:</strong>
                <strong class="text-success" >Avilable</strong>
            </div>
            <div className="col-md-12 p-3" style={{ display: "flex", justifyContent: "space-between" }}>
                <strong className="text-warning" style={{ maxWidth: "100%", height: "25px"}}>Address:</strong>
                <strong className="text-white" >Zagazig,Egypt</strong>
            </div>
            <div className="col-md-12 d-flex justify-content-center m-1">
                <hr  style={{ color:"white",width: "100%" ,borderWidth: "5px" }}/>
            </div>
            <div className="col-md-12">
                <h4 className="text-white text-center">Languages</h4>
                <h6 className="text-white m-1"> Arabic</h6>
                <div className="progress m-1">
                    <div className="bg-warning" role="progressbar" aria-valuenow="60"
                    aria-valuemin="0" aria-valuemax="100" style={{width:"100%"}}>
                    </div>
                </div>
                <h6 className="text-white m-1">English</h6>
                <div className="progress m-1">
                    <div className="bg-warning" role="progressbar" aria-valuenow="60"
                    aria-valuemin="0" aria-valuemax="100" style={{width:"60%"}}>
                    </div>
                </div>
            </div>
            <div className="col-md-12 d-flex justify-content-center m-1">
                <hr  style={{ color:"white",width: "100%" ,borderWidth: "5px" }}/>
            </div>
        </div>
        </>
        
    )
}

export default Hero;