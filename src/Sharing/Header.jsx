// import ahmed from '../assets/photo_2023-01-29_15-27-22.jpg'
function Header (){
  function LrearnC () {
    alert ('Hi, Wellcom ')
  }
    return(
      <div className="hero-section m-2">
        <div className="container bg-dark">
          <div className="row">
            <div className="col-md-12 p-3">
              <h1 className="text-white p-3 text-center">I'am Ahmed Gamal</h1>
              <h2 className="text-white p-2 text-center"> <span className="text-warning p-2"> Full Stack</span> Developer Using <span className="text-success p-2">MEARN</span></h2>
              <p className="text-white p-5 text-center">I am the engineer: Ahmed Gamal

Graduated from the Faculty of Science, Department of Mathematics and Computer Science

I studied at the ITI Institute in the field of developing websites using Mearn (Javascript)

IT engineer specializing in web programming. I have experience in programming different languages that are used in web development, such as HTML, CSS, JavaScript, Angular, Bootstarp, Node js, React js. Making the site more flexible with smart devices, mobile applications, and advanced websites.
                  </p>
              <button className="btn btn-warning m-3" onClick={LrearnC}>Learn more</button>
            </div>
          {/* <div className="col-md-6">
              <img src={ahmed} alt="Hero section" className="rounded p-3" style={{width:"400px", height: "450px"}}/>
            </div> */}
          </div>
        </div>
      </div>
    );
}
export default Header;