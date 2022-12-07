import { Header } from "./components/Header";
import { Post } from "./Post";

import styles from './App.module.css';

import  "./global.css"
import { Sidebar } from './components/Sidebar';

export function App() {
 return (
  <div>
    <Header />
  <div className={styles.wrapper}>
    <Sidebar />
    <main>
    <Post 
      author=  "Leandro Sávio"
      content= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit impedit laudantium debitis incidunt eum rem harum, ab voluptatem culpa obcaecati doloremque corporis quisquam quam dolorum nihil architecto animi quas veritatis."
      />

      <Post 
      author= "Caio Araujo"
      content= "Aprendendo SQL com Leandro"
      />

    </main>

  </div>

  </div>
 )
}


