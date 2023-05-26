import './App.css';
import { Parallax } from 'react-parallax';

function ParallaxComponent(props) {
  const { url, title} = props
  return (
    <Parallax bgImage={url} strength={950}>
      <div className='parallax-container'>
        <div className='parallax-title'>{title}</div>
      </div>
    </Parallax>
  );
}
function App() {
  return (
    <div className="App">
      <ParallaxComponent url="./wall.jpeg" title="this is 1st wall" />
      <ParallaxComponent url="./gall.jpeg" title="this is 2nd wall" />
      <ParallaxComponent url="./wall.jpeg" title="this is 3rd wall" />
    </div>
  );
}

export default App;
