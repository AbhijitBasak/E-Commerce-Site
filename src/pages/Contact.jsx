import React, { useState } from 'react'

export default function Contact() {

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    <>
      <section className="section-contact">
        <div className="container">
          <h2 className="common-heading">contact us</h2>
        </div>

        <div className="container">
          <div className="contact-content">
            <form action="" className="contact-form" onSubmit={handleSubmit}>
              <label className="form-control">
                <input type="text" name='name' value={inputs.name || ""} onChange={handleChange} placeholder="Your Name" required autoComplete='off' />
              </label>
              <label className="form-control">
                <input type="email" name='email' value={inputs.email || ""} onChange={handleChange} placeholder="Your Email" required autoComplete='off' />
              </label>

              <label className="form-control">
                <textarea name="Message" id="" cols="30" rows="10" placeholder="Enter Your Massage" required autoComplete='off'></textarea>
              </label>

              <input type="submit" value="send message" />
            </form>
          </div>


          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278896!2d73.91411937501422!3d18.562253982539413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1696124215167!5m2!1sen!2sin"
              width="100%"
              height="300px"
              style={{border: 0}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            >
            </iframe>

          </div>
        </div>
      </section>
    </>
  )
}
