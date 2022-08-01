import React from 'react';
import "./post.css";


const like = "https://icon-icons.com/icons2/3197/PNG/512/love_like_heart_icon_194836.png";
const comments = "https://icon-icons.com/icons2/2622/PNG/512/gui_comments_icon_157672.png";
const retwit = "https://icon-icons.com/icons2/1339/PNG/512/retweet_87545.png";
const share = "https://icon-icons.com/icons2/2098/PNG/512/share_icon_128757.png";
const dot = "https://icon-icons.com/icons2/2367/PNG/128/circle_dot_icon_143621.png";
const accept = "https://icon-icons.com/icons2/159/PNG/256/gtg_ok_accept_apply_22344.png";


const Post = ({ author, content, image, date }) => {
   return (
      <div class="container">
         <div class="post">
            <div class="head">
               <img class="photo" src={author.photo} />
               <div class="headText">
                  <p class="nameAuthor">{author.name}</p>
                  <img class="ico" src={accept} />
                  <span class="nickname">{author.nickname}</span>
                  <img class="dot" src={dot} />
                  <span class="date">{date}</span>
               </div>
               <span class="text">{content}</span>
            </div>
            <div class="main">
               <img class="contentImage" src={image} />
            </div>
            <div class="footer">
               <span class="like">
                  <img class="like" src={like} />
                  521
               </span>
               <span class="comments">
                  <img class="comments" src={comments} />
                  64
               </span>
               <span class="retwit">
                  <img class="retwit" src={retwit} />
                  642
               </span>
               <span class="share">
                  <img class="share" src={share} />
                  781
               </span>
            </div>
         </div>
      </div>
   );
}



export default Post;

