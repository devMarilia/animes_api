
import { useEffect, useState } from 'react';
import  './styles/styled.css'
import SearchInput from '../src/components/SearchInput'

const api = 'https://kitsu.io/api/edge/'
function App() {
  const [info, setInfo] = useState({})
  const [text,setText]= useState('');
 
  useEffect(() => {
    if (text){
      console.log(text)
    fetch(`${api}anime?filter[text]=${text}&page[limit]=10`)
    .then((response) => response.json())
    .then((response) => {
      setInfo(response)
    }) 
    }
  },[text])
  return (
    <div className='App'>
    <h1>Animes!</h1>
    <SearchInput value={text} onChange={(search) => setText(search)}/>
    {info.data && (
      <ul className='animes-list'>
        {info.data.map((anime) => (
          <li key={anime.id}>
            <img src={anime.attributes.posterImage.small} alt={anime.attributes.posterImage.small}/>
            {anime.attributes.canonicalTitle}
          </li>
        ))}
      </ul>
    )}
    </div>
  );
}

export default App;
