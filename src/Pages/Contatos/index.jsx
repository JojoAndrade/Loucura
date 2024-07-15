import styles from './Contatos.module.css'
import { GoMail } from "react-icons/go";
import { CiInstagram } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

function Contatos() {
    return (
        <>
        
            <section className={styles.contatos}>
        <h2> Contato </h2>
        <h3> Entre em contato </h3>
        <p> Para que possamos conversar mais sobre</p>
        <div className={styles.icones}>
            <a href='Jovanaandrade7@gmail.com' target='_blank' rel='noopener'>
            <GoMail/> </a>
            <a href='https://' target='_blank' rel='noopener'>
            <CiInstagram/> </a>
            <a href='https://' target='_blank' rel='noopener'>
            <CiYoutube/> </a>
            <a href='https://' target='_blank' rel='noopener'>
            <FaSquareGithub/> </a>
            <a href='https://' target='_blank' rel='noopener'>
            <FaLinkedin/> </a>

        </div>
        </section>
        </>

    )
}

export default Contatos