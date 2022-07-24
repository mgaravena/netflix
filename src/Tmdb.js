 const API_KEY="6ccbededeb6f0bfa5d6ca1699b4f82ee";
 const API_BASE="https://api.themoviedb.org/3";

/*
- Originales de nefli
- Recomendados
- Top Rated
- Accion
- Comendia
- Terror
- Documentales
*/

const basicFetch = async (endpoint) =>{
    const req = await fetch (API_BASE+endpoint);
    const json = await req.json();
    return json;
}


export default {
    
    getHomeList : async ()=>{
        return [
            {
                slug:"Originales",
                title:"Originales de Netflix",
                items:await basicFetch("/discover/tv?with_network=213&language=es&api_key="+API_KEY)
            },
            {
                slug:"Top",
                title:"La Mejor seleccion",
                items:await basicFetch("/movie/top_rated?language=es&api_key="+API_KEY)
            },
            {
                slug:"Accion",
                title:"Peliculas de Accion",
                items:await basicFetch("/discover/movie?with_genres=28&language=es&api_key="+API_KEY)
            },
            {
                slug:"Comedia",
                title:"Peliculas de Comedia",
                items:await basicFetch("/discover/movie?with_genres=35&language=es&api_key="+API_KEY)
            },
            {
                slug:"Documentales",
                title:"Documentales del mundo",
                items:await basicFetch("/discover/movie?with_genres=99&language=es&api_key="+API_KEY)
            },
            
        ];
    },
    getMovieInfo : async (movieId,type) =>{
           let info ={};

           if(movieId){
            switch(type) {
                case 'movie':
                   info = await basicFetch("/movie/"+movieId+"?language=es&api_key="+API_KEY);
                break;
                case 'tv':
                    info = await basicFetch("/tv/"+movieId+"?language=es&api_key="+API_KEY);
                break;
                default:
                    info = null;
                break;
            };
           }
           
               
           
           return info;
    }

}