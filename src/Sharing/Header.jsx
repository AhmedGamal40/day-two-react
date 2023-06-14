import ahmed from '../assets/photo_2023-01-29_15-27-22.jpg'
function Header (){
  function LrearnC () {
    alert ('Hi, Wellcom ')
  }
    return(
        <div className="hero-section">
    <div className="container">
      <div className="row ">
      <div className="col-md-6">
          <img src={ahmed} alt="Hero section" className="img-fluid p-3" style={{width:"400px", height: "450px"}}/>
        </div>
        <div className="col-md-6 p-3">
          <h1 className="text-white p-3">I'am Ahmed Gamal</h1>
          <h2 className="text-white p-2"> <span className="text-warning p-2"> Front-End</span> Developer</h2>
          <p className="text-white p-5"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, lorem id iaculis ultricies, ex erat lacinia mauris, vitae efficitur ex odio in quam.</p>
          <button className="btn btn-warning m-3" onClick={LrearnC}>Learn more</button>
        </div>
      </div>
    </div>
  </div>
    );
}
export default Header;