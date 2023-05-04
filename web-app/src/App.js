import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Footer from './Components/ Footer';



function App() {

 
  return (
  <div>
    <Header />
    <About cardObject={cardObject}/>
  <Footer/>
  
 </div>
  );

}
export default App;
