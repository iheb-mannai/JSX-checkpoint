import iheb from './denzel.jpg';
import './App.css';
import './Style.css';

function App() {
  return (
    <div className="App">
     <div style={{border:'solid 1px black',maxWidth:'100vw'}}>
     

<h1 className="title red">Denzel Washington</h1>



<img src={iheb} alt='publicImage' />



<img src="/denz.jpg" alt='publicImage'/>

</div>

<video width="320" height="240" controls>

<source src="myvideo.mp4" type="video/mp4" />

</video>
    </div>
  );
}

export default App;
