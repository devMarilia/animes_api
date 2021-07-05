import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import SearchInput from "./components/SearchInput";
import './styles/styled.css';

const api = "https://kitsu.io/api/edge/";

function App() {
  const [info, setInfo] = useState({});
  const [text, setText] = useState("");

  useEffect(() => {
    if (text) {
      fetch(`${api}anime?filter[text]=${text}&page[limit]=10`)
        .then((response) => response.json())
        .then((response) => {
          setInfo(response);
        });
    }
  }, [text]);

  return (
    <div className="App">
      <Nav>
        <SearchInput value={text} onChange={(search) => setText(search)} />
      </Nav>
      {info.data && (
          <ul className="container">
            {info.data.map((anime) => (
              <div key={anime.id} className='card'>
                <div className="box">
                  <li  className="img-box">
                    <img
                      src={anime.attributes.posterImage.small}
                      alt={anime.attributes.canonicalTitle}
                    />
                    <div className="contentBx">
                      <div key={anime.id}>
                        <h2>{anime.attributes.canonicalTitle}</h2>
                        {/* <p>{anime.attributes.synopsis}</p> */}
                      </div>
                    </div>
                  </li>
                </div>
              </div>
            ))}
          </ul>
      )}
    </div>
  );
}

export default App;