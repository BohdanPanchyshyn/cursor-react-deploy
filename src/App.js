import React from 'react';
import './App.css';
import Post from './components/post/post';

const NARUTO_IMAGE = "https://i.pinimg.com/564x/86/20/e5/8620e55406d4ceb0c2d1ce55e81baf81.jpg";
const VASUL_IMAGE = "https://upload.wikimedia.org/wikipedia/commons/f/fc/Vasyl_Chebanyk.jpg";
const ruteniaImage = "https://i.ytimg.com/vi/8VUtumjk2Tg/maxresdefault.jpg";
const contentImage = "https://kartinkin.net/uploads/posts/2021-07/thumbs/1625811634_7-kartinkin-com-p-naruto-i-saske-art-druzya-art-krasivo-7.jpg";



const App = () => {
   return (
      <div>
         <Post author={{
            name: "Василь Чебаник",
            photo: VASUL_IMAGE,
            nickname: "@chebanuk"
         }}
            content="До вашої Уваги презентую справжню Українську абетку, під назвою 'Рутенія'..."
            image={ruteniaImage}
            date={"31 лип."}
         />
         <Post author={{
            name: "Наруто Узумакі",
            photo: NARUTO_IMAGE,
            nickname: "@uzumaki_kurama"
         }}
            content="Ти вдома друже..."
            image={contentImage}
            date={"18 лют."}
         />
      </div>
   )
}

export default App;
