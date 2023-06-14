import HomeEducation from '../Components/Education/HomeEducation';
import HomeSkill from '../Components/Skills/HomeSkill';
import Footer from '../Sharing/Footer';
import Header from '../Sharing/Header';
import './App.css';

function App() {
  return (
    <>
    <div className='body'>
      <Header/>
      <HomeSkill/>
      <HomeEducation/>
      <Footer/>
    </div>
      
    </>

  );
}

export default App;
