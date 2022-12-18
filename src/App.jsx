import './App.css';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { MdRadio} from "react-icons/md";
import { DATA } from './Data';
import { useState } from 'react';

function App() {

  const [url, setUrl] = useState(null);

  const getLink = () => {
    setUrl(url)
  }

  return (
    <div className="App">
      <header>
        <h1> Turkish Radio Station <MdRadio className='radio'/> </h1>
      </header>

      <div className="radio-flex">
        {
          DATA.map((item, id) => {
            return (
              <div key={id} onClick={() => setUrl(item.url)} className="radio-images">
                <img src={item.image} />
              </div>
            )
          })
        }
      </div>

      <div className="audio-player">
        <AudioPlayer
          autoPlay
          src={url}
          showJumpControls={false}
          onPlay={e => console.log("onPlay")}
        />
      </div>

    </div>
  );
}

export default App;
