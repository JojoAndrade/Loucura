import { FaReact, FaJs, FaCss3, FaHtml5, FaArrowRight } from "react-icons/fa";

import styles from './Card.module.css'

function Card({name, description, html_url}) {
    return(
        <section className={styles.card}>
        <h3> {name} </h3>
        <p> {description} </p>
        <div className={styles.card_footer}>
            <div className={styles.card_icones}>
            
            <FaHtml5 />
            <FaCss3 />
             <FaJs />
            <FaReact/>
                
            </div>
            <a href={html_url} className={styles.botao}
                target="_blank">
            <FaArrowRight/>

            </a>
        </div>
        </section>
    )
}
export default Card