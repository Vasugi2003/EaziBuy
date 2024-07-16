import React from 'react'
import '../style/Home.css'
function Home() {
  return (
    <>
      <div className='home'>
  <div className='home-background'></div>
  <div className='home-text'>
    <h1>CLASSIC CLOTHING</h1>
  </div>
  <div className='home-button'>
    <button>Shop Now</button>
  </div>
</div>


      <div className='home-her'>
        <div className='her-left'>
          <h1>#for HER</h1>
          <img src="/images/homett.jpeg" alt="" />
        </div>

        <div className='her-right'>
          <div className='card'>
            <img src='/images/guitar.jpg' alt='Image 1' />
            <p>Lorem ipsum dolor sit amet</p>
            <p>$29.99</p>
            
          </div>
          <div className='card'>
            <img src='/images/menhat.jpg' alt='Image 2' />
              <p>Lorem ipsum dolor sit amet</p>
            <p>$39.99</p>
            
          </div>
          <div className='card'>
            <img src='/images/clock.jpg' alt='Image 3' />
            <p>Lorem ipsum dolor sit amet</p>
            <p>$49.99</p>
            
          </div>
          <div className='card'>
            <img src='/images/sunglass.jpg' alt='Image 4' />
            <p>Lorem ipsum dolor sit amet</p>
            <p>$59.99</p>
            
          </div>
          <div className='card'>
            <img src='/images/clock.jpg' alt='Image 5' />
            <p>Lorem ipsum dolor sit amet</p>
            <p>$69.99</p>
          </div>
          <div className='card'>
            <img src='/images/holiday.jpg' alt='Image 6' />
            <p>Lorem ipsum dolor sit amet</p>
            <p>$79.99</p>
          </div>
        </div>
      </div>


      <div className='home-him'>
        <div className='him-right'>
          <h1>#for HIM</h1>
          <img src="/images/men.JPG" alt="" />
        </div>

        <div className='him-left'>
          <div className='card'>
            <img src='/images/heall.jpg' alt='Image 1' /> {/* Replace with your image paths */}
            <p>Lorem ipsum dolor sit amet</p>
            <p>$29.99</p>
            
          </div>
          <div className='card'>
            <img src='/images/clock.jpg' alt='Image 2' />
              <p>Lorem ipsum dolor sit amet</p>
            <p>$39.99</p>
            
          </div>
          <div className='card'>
            <img src='/images/bamboo.jpg' alt='Image 3' />
            <p>Lorem ipsum dolor sit amet</p>
            <p>$49.99</p>
            
          </div>
          <div className='card'>
            <img src='/images/holiday.jpg' alt='Image 4' />
            <p>Lorem ipsum dolor sit amet</p>
            <p>$59.99</p>
            
          </div>
          <div className='card'>
            <img src='/images/handmade.jpg' alt='Image 5' />
            <p>Lorem ipsum dolor sit amet</p>
            <p>$69.99</p>
          </div>
          <div className='card'>
            <img src='/images/cosmetics.jpg' alt='Image 6' />
            <p>Lorem ipsum dolor sit amet</p>
            <p>$79.99</p>
          </div>
        </div>
      </div>

      <div className='bestsellers'>
        <p className='best-para'>Our Best Sellers</p>
          <div className='best-card'>
            <img src="/images/holiday.jpg" alt="" />
            <img src="/images/edevice.jpg" alt="" />
            <img src="/images/guitar.jpg" alt="" />
          </div>
          <button>Shop Now</button>
      </div>
    </>
  )
}

export default Home

