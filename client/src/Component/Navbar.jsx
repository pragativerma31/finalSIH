import React from 'react';
import '../style/navbar.css'
const Navbar = () => {
  return (
    <div class="navbar">
        <div class="left_box">
            <i class="fa-solid fa-sheet-plastic fa-2xl" style="color: #4c4e52;"></i>
            <input type="text" placeholder="Untitled Spreadsheet" id="title_name"/>
        </div>
        <div class="right_box">
            <button style="background: none; cursor: pointer;"><i class="fa-solid fa-message fa-lg"  style="color: #4c4e52;"></i></button>
            <button style="background: none; cursor: pointer;"><i class="fa-solid fa-video fa-lg" style="color: #4c4e52;"></i></button>
            <button class="share_button">
                <i class="fa-solid fa-lock"  style="color: #4c4e52;"></i>
                <p>Share</p>
            </button>
            <img src="" id="profile_pic"/>
        </div>
    </div>
  );
};

export default Navbar;