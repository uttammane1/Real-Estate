import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Do You Have Questions ?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <button className='btn5'>Contact Us Today</button>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='https://th.bing.com/th/id/R.8f8a9c8def189ad376909cf53160bc2c?rik=n3BPXSA2FHMMDw&riu=http%3a%2f%2fwww.signandrent.com%2fvmanager%2fart%2flogo.png&ehk=xmXaTHEHQO2l3vF1GlUYxet7jjveRuu4A%2bzxteIVreU%3d&risl=&pid=ImgRaw&r=0' alt='' />
              <h2>Do You Need Help With Anything?</h2>
              <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>

              <div className='input flex'>
                <input type='text' placeholder='Email Address' />
                <button>Subscribe</button>
              </div>
            </div>
          </div>

          {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span>© Designd By Uttam Mane.</span>
      </div>
    </>
  )
}

export default Footer




// '../images/logo-light.png'