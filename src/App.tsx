
import './App.css';
import ImageCardList from './components/card-list/ImageCardList';

function App() {
  return (
    <div className='App'> 
        <header>
          <h1 className='head'>Spacetagram</h1>
          <p className='head'>Brought to you by NASA's Mars Rover Photos API</p>

       </header>
        <main >
          <ImageCardList/>
        </main>
</div>
   
  );
}

export default App;
