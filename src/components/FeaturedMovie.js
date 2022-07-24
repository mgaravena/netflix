import React from 'react';
import './FeaturedMovie.css'

const featuredMovie = ( {item}) => {

  let firstDate = new  Date(item.first_air_date);
  let genres = [];
  for(let i in item.genres){
    genres.push( item.genres[i].name)
  };

  let description = item.overview;
  
  if ( description.length >200){
      description = description.substring(0,200)+'...';
  }

  return (
    <section className='featured' style={{
       backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
       backgroundPosition : 'center',
       backgroundSize : 'cover'
    }}>
        <div className='featured--vertical'>
          <div className='featured--horizontal'>
            <div className='featured--name'>{item.original_name}</div>
            <div className='featured--info'>
              <div className='featured--points'>{item.vote_average}</div>
              <div className='featured--year'>{firstDate.getFullYear()}</div> 
              <div className='featured--seasons'>{item.number_of_seasons} Temporadas</div>
            </div>
            <div className='featured--description'>{description}</div>
            <div className='featured--buttons'>
                 <a href={`/watch/${item.id}`} className='featured--watchbutton'>Reproducir</a>
                 <a href={`/list/add/${item.id}`} className='featured--mylistbutton'>Mi lista</a>
            </div>
            <div className='featured--genres'><strong>Generos :</strong>{genres.join(',')}</div>
          </div>
        </div>
    </section>
    
  )
}

export default featuredMovie