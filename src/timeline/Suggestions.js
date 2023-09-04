import React from 'react';
import "./Suggestions.css";
import {Avatar} from "@mui/material";


function Suggestions() {
  return (
    <div className='suggestions'>
      <div className='sugesstion__title'>Suggestions for you</div>
      <div className='suggestions__usernames'>


        <div className='suggestion__username'>
          <div className='username__left'>
            <span className='avatar'>
              <Avatar>S</Avatar>
            </span>
            <div className='username__info'>
              <span className='username'>robust</span>
              <span className='relation'>New to instagram</span>

            </div>
          </div>
          <button className='follow__button'>Follow</button>
        </div>

        <div className='suggestion__username'>
          <div className='username__left'>
            <span className='avatar'>
              <Avatar>S</Avatar>
            </span>
            <div className='username__info'>
              <span className='username'>robust</span>
              <span className='relation'>New to instagram</span>

            </div>
          </div>
          <button className='follow__button'>Follow</button>
        </div>

        <div className='suggestion__username'>
          <div className='username__left'>
            <span className='avatar'>
              <Avatar>S</Avatar>
            </span>
            <div className='username__info'>
              <span className='username'>robust</span>
              <span className='relation'>New to instagram</span>

            </div>
          </div>
          <button className='follow__button'>Follow</button>
        </div>

        <div className='suggestion__username'>
          <div className='username__left'>
            <span className='avatar'>
              <Avatar>S</Avatar>
            </span>
            <div className='username__info'>
              <span className='username'>robust</span>
              <span className='relation'>New to instagram</span>

            </div>
          </div>
          <button className='follow__button'>Follow</button>
        </div>

        <div className='suggestion__username'>
          <div className='username__left'>
            <span className='avatar'>
              <Avatar>S</Avatar>
            </span>
            <div className='username__info'>
              <span className='username'>robust</span>
              <span className='relation'>New to instagram</span>

            </div>
          </div>
          <button className='follow__button'>Follow</button>
        </div>


      </div>
    </div>
  )
}

export default Suggestions