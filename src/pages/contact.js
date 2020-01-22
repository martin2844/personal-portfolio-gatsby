import React from 'react'; 
import Layout from '../layout/Layout';
import './stylesheets/contact.styles.scss';



const Contact = () => {
    return (
        <Layout>
            <section className='contact-title-section'>
                <h1>Contact me!</h1>
                <p>Leave a message, get in touch, inquiries, doubts, anything!</p>
            </section>
            <section className="contact-main-content">
            <div className='form-container'>
                   <form className='contact-form' name="contact" method="POST" data-netlify="true" action="/success">
                       <input type="hidden" name="form-name" value="contact"/>
                       <div><input type="text" name="nombre" placeholder='Name*' />
                       <input type="email" name="email" placeholder='Email*' />
                       </div>
                       <label htmlFor="2textarea" for="mensaje">Leave me a message:</label>
                       <textarea id="2textarea" type='text' name='mensaje' placeholder=''/>
                       <button type='submit'>Submit</button>
                   </form>
               </div>

        <div className='contact-icon-container'>
            <h2>Or contact me through social media</h2>
          <a href='https://github.com/martin2844'><i className="fab fa-github"/></a>
          <a href='https://dev.to/martin2844'> <i className="fab fa-dev"></i></a>
          <a href='https://twitter.com/codigoMate'>  <i className="fab fa-twitter"></i></a>
          <a href='https://www.linkedin.com/in/chammah/'>  <i className="fab fa-linkedin-in"></i></a>
          <a href='mailto:martinchammah@gmail.com'>  <i className="fas fa-envelope"/></a>
     </div>
            </section>

        </Layout>
    )
}

export default Contact