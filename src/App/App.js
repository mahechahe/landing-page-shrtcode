import './App.css';
import { Nav } from '../components/Nav';
import { Card } from '../components/Card';
import { SectionBody } from '../components/SectionBody';
import Context from '../context/Context';
import useContext from '../context/staticContext';

function App() {
  const initialState = useContext()


  return (
    <Context.Provider value={initialState}>
      <section className='section-container'>
        <Nav></Nav>
        <Card></Card>
        <SectionBody></SectionBody>
      </section>
    </Context.Provider>
    
  );
}

export default App;
