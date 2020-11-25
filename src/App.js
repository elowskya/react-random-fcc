import './App.css';
import Quote from './components/Quote';
import ScriptTag from 'react-script-tag';

function App() {

  return (
    
  <main id="quote-box">
      <h1>Quote Generator</h1>
     <Quote/>

      <ScriptTag type="text/javascript" src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js" />
  </main>
  

  
  
   ); }




export default App;