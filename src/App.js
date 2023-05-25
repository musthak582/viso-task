
import bgImg from './images/desktop/image-hero.jpg';
import Text from './components/Text';
import Card from './components/Card';
import ImageCollection from './components/ImageCollection';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';


function App() {

  return (

    <div className="container">
      <div style={{
        width: '100%',
        height: '100vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${bgImg})`

      }}>
        
      <Navbar />

      <Text />

      </div>

      <Card />

      <ImageCollection />

      <Footer/>



    </div>

  );
}

export default App;
