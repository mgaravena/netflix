import React , { useEffect , useState } from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/header/Header';


const App = () => {

  const [movieList, setMovielist] = useState([]);
  const [featuredData, setfeaturedData] =useState(null);
  const [blackHeader,setblackHeader] = useState(true);

  useEffect(() => {
     const loadAll = async ()=>{
          let list = await Tmdb.getHomeList();
         setMovielist(list);

          let originals = list.filter(i=>i.slug === 'Originales');

          let cantidad = originals[0].items.results.length -1;
          
          let randomChosen= Math.floor(Math.random() * cantidad );
          
          let chosen= originals[0].items.results[randomChosen];

          let chosenInfo = await Tmdb.getMovieInfo(chosen.id,"tv");

          setfeaturedData(chosenInfo);
          
     }
   
    loadAll(); 
  }, []);
  
useEffect(()=>{
   const scrollListener = ()=>{
      if(window.scrollY >0){
        setblackHeader(true);
      }else{
        setblackHeader(false);
      }
   }

   window.addEventListener('scroll',scrollListener);

   return ()=>{
     window.removeEventListener('scroll',scrollListener);
   }
},[])
  return (
    <div className='page'>
 
         <Header black={blackHeader}/>
         {featuredData &&
            <FeaturedMovie item={featuredData} />
         }

        <section className='lists'> 
           {movieList.map((item,key)=>(
             <MovieRow key={key} title={item.title} items={item.items} />
           ))}
        </section>
        <footer>
            www.mgaravena.com<br/>
            Derechos de imagenes de Netflix<br/>
            Uso de API de moviedb.org
        </footer>

        
    </div>
  )
}

export default App
