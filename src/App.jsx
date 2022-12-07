import { Header } from "./components/Header";
import { Post } from "./Post";

import  "./styles.css"

export function App() {
 return (
  <div>

    <Header />

    <Post
      author= "Leandro Savio" 
      content= "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, ipsum labore, mollitia voluptatibus facere nobis ipsa vel nisi tempora libero molestiae sapiente placeat quidem maxime deleniti esse culpa cupiditate error" 
    />

    <Post
    author= "Caio Marinho"
    content= "Estou aprendendo SQL"
  
    />
    
  </div>
 )
}


