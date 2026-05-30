import React from 'react'
import styles from './MovieCard.module.css';
import { FaCirclePlay } from 'react-icons/fa6';
import { BsPlusCircle } from 'react-icons/bs';
import { GoCheckCircleFill} from 'react-icons/go';
import { IoIosArrowDropdownCircle} from 'react-icons/io';

const IMAGE_BASE = 'https://image.tmdb.org/t/p/w500'; 


function MovieCard({movie}) {

    let genres = [ "Adventure","Action", "Thriller"];
  return (
    <div className= {styles.cardWrapper}>
        {/* Poser image */}
        <img className={styles.poster} 
        src={`${IMAGE_BASE}${movie?.poster_path}`} 
        alt="poster image" />

        {/* Hover card */}
        <div className={styles.hoverCard}>
            {/* img */}
            <img className={styles.hoverImage} 
            src={`${IMAGE_BASE}${movie?.poster_path}`} 
            alt="hover image" />
            
            {/* badge */}
            <div className={styles.badge}>Recently added</div>
            {/* button row */}
            <div className={styles.buttonRow}>
                <FaCirclePlay className={styles.circleButton} size={40} color="white" />
                <BsPlusCircle className={styles.circleButton} size={40} color="white" />
                <GoCheckCircleFill className={styles.circleButton} size={40} color="white" />
                <IoIosArrowDropdownCircle 
                className={styles.circleButton} size={40} color="white" /> 
                
            </div>
            {/* meta data row */}
            <div className={styles.metaRow}>
                <span className={styles.tag}>U/A 16+</span>
                <span className={styles.tag}>Movie</span>
                <span className={styles.tag}>HD</span>
            </div>
            {/* genres */}
            <div className={styles.genres}>
                {
                genres.map((g,index) => {
                    return <span key={index}>{g}
                    {index < genres.length - 1 && <span className={styles.dot}>.</span>}
                    </span>
                })
            }

            </div>
        </div>
    </div>
  )
}

export default MovieCard