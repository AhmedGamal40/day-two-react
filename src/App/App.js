import HomeEducation from '../Components/Education/HomeEducation';
import Hero from '../Components/Hero/Hero';
import HomeSkill from '../Components/Skills/HomeSkill';
// import Footer from '../Sharing/Footer';
import Header from '../Sharing/Header';
import './App.css';

function App() {
  return (
    <>
    <div className='body'>
      <div className='row m-0'>
        <div className='col-3'>
          <Hero/>
        </div>
        <div className='col-9'>
          <Header/>
          <HomeSkill/>
          <HomeEducation/>
        </div>
      </div>
    </div>
      
    </>

  );
}

export default App;
