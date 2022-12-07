import styles from './Sidebar.module.css';

export function sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=50" />

            <div className= {styles.profile}>
                <strong>Leandro Savio</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href='#'>
                    Editar o seu perfil
                </a>
            </footer>            
        </aside>
    );
}