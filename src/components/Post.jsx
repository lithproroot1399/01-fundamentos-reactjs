import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({ author, publishedAt, content }) {
    const [comments] = useState ([
        1,
        2,
    ])
    
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
        locale: ptBR, 
        addSuffix: true,
    }) 

    function handleCreateNewComment() {
        event.preventDefault()

        setComments();

        console.log(comments)
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                <Avatar src={author.avatarUrl} />
                <div classNme={styles.authorInfo}>
                    <strong>{author.name}</strong>
                    <span>{author.role}</span>
                    </div>
                </div>

            <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                {publishedDateRelativeNow}
            </time>
        </header>

            <div className={styles.content}>
            {content.map(line => {
                if (line.type === 'paragraph') {
                    return <p>{line.content}</p>;
                } else if (line.type === 'link') {
                    return <p><a href=''>{line.content}</a></p>;
                }
                
            })}
            
            <p>Fala galeraa 👋</p>
            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
            <p>👉{''}<a href="">jane.design/doctorcare</a></p>
            <p> 
                <a href="">#novoprojeto</a> {''}
                <a href="">#nlw </a>{''}
                <a href="">#rocketseat</a>{''}
                </p>     
          </div>

        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        
            <textarea
                placeholder='Deixe um comentário'            
            />
            <footer>
            <button type="submit">Publicar</button>
            </footer>
        </form>

        <div className={styles.commentList}>
          {comments.map(comment => {
            return <Comment />
          })}
        </div>
      </article>
    )
}