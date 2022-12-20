import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

export function Post({ author, publishedAt, content }) {
    const [comments, setComments] = useState ([
       'Post muito bacana!, hen?!'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
        locale: ptBR, 
        addSuffix: true,
    }) 

    function handleCreateNewComment() {
        event.preventDefault()

        setComments([...comments, newCommentText]);
        setNewCommentText('');
            
    }

    function handNewCommentChange() {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity('Esse campo é obrigatório');
    }

    function deleteComment(commentToDelete) {
        setComments();
        const commentsWithoutDeleteOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })

        setComments(commentsWithoutDeleteOne);
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                <Avatar src={author.avatarUrl} />
                <div className={styles.authorInfo}>
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
                    return <p key={line.content}>{line.content}</p>;
                } else if (line.type === 'link') {
                    return <p key={line.content}><a href=''>{line.content}</a></p>;
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
                name="comment"
                placeholder="Deixe um comentário"
                value={newCommentText}
                onChange={handNewCommentChange}  
                onInvalid={handleNewCommentInvalid}
                required          
            />
            <footer>
            <button type="submit">Publicar</button>
            </footer>
        </form>

        <div className={styles.commentList}>
          {comments.map(comment => {
            return ( 
            <Comment
                 key={comment}
                 content={comment}
                 ondeleteComment={deleteComment}
                />
            )
        })}
        </div>
      </article>
    )
}