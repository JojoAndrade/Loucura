import styles from './Sobre.module.css'
import html from './imagens/icon-html.svg'
import css from './imagens/icon-css.svg'
import js from './imagens/icon-js.svg'
import node from './imagens/icon-node.svg'
import sql from './imagens/icon-sql.svg'
import react from './imagens/icon-react.svg'
import avatar from './imagens/avatar01.jpg'

function Sobre() {
    return (

    <section className={styles.sobre}>
        <div className={styles.bio}>
            <img src={avatar} className={styles.avatar}></img>
        
        <div className={styles.textos}>
            <h2>Sobre</h2>
            <p> Sou
                <span> Jovana Andrade</span><br/> 
                <strong> Dev Frontend</strong>
                
                <p> Aprendendo desenvolvimento frontend </p>
                <p>
                    Estou amando aprender várias linguagens e códigos ❤️ 
                    </p>
                    <p>
                    Atualmente estou cursando MBA em Gestão de Processos e Projetos com Ênfase em Metodologias Ágeis e PMI | 
                    Pós Graduanda em Gestão em Saúde | Administradora                    
                    </p>

            </p>
        </div>
        </div>
        
        <div className={styles.techs}>
            <h3> Techs </h3>
            <div className={styles.icones}>
                <img src={html}></img>
                <img src={css}></img>
                <img src={js}></img>
                <img src={react}></img>
                <img src={sql}></img>
                <img src={node}></img>
            </div>
        </div>



    </section>
        

    )
}

export default Sobre