import React from 'react'
import vg from "../assets/vg.png";
const Contact = () => {
  return (
    <div id="contact">
      <section>
        <form>
          <h2>Contact me</h2>
          <input type="text" placeholder='Your Name' required></input>
          <input type="email" placeholder='Your Email' required></input>
          <input type="text" placeholder='Message' required></input>
          <button type="submit">Send</button>
        </form>
        
      </section>
      <aside>
          <img src={vg} alt="Graphics"></img>
        </aside>
    </div>
  )
}

export default Contact