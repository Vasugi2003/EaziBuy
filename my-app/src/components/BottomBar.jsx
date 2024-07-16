import React from 'react';
import '../style/BottomBar.css';

function BottomBar() {
  return (
    <footer className='bottom-bar'>
      <div className='bottom-bar-content'>
        <p>&copy; 2024 EaziBuy. All rights reserved.</p>  <br /> <br />
        <div className='social-links'>
          <a href='#'>Facebook</a>
          <a href='#'>Twitter</a>
          <a href='#'>Instagram</a>
        </div> <br />
        <p>Thankyou for visiting us..</p>
      </div>
    </footer>
  );
}

export default BottomBar;
