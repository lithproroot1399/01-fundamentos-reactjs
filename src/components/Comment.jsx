import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="http://github.com/lithproroot1399.png" alt="" />

            <div clasName={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                    <strong>Leandro Sávio</strong>
                    <time title="11 de Maio às 08:13" dateTime="2022-05-11 08:13:00">Cerca de 1h atraz</time>
                </div>

                <button title="Deletar comentário">

                    <Trash size={20} />
                </button>

                </header>

                <p>Muito bom Devon, parabéns!! 👏👏</p>
       </div>
           <footer>
            <button>
                <ThumbsUp />
                Aplaudir <span>20</span>
            </button>
           </footer>
        </div>
    </div> 
    )
}