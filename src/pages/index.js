import React from "react"
import Layout from '../layout/Layout';
import './Index.styles.scss';

import Typewriter from 'typewriter-effect'; 





const Index = () => { 

   function revealData(){
       console.log('test')
   }


    return (
        <Layout>
            
            <section className='index-main'>
            <div className='index-left'>
            <div className='hello-text'>Hello !</div>
            <div className='before-typewriting-text'>
                <p>I am&nbsp;</p>    
                <p className='typewriting-text'>
                    <Typewriter
                        options={{
                            strings: [' a Web Developer', ' an Architect', ' a Mechanic'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </p>
            </div>
            <p className='typewriter-subtitle'>I am a FullStack web developer based in Buenos Aires, Argentina. 
            I feel most comfortable working on the Mern Stack, Mongo-Express-React-Node, but I have no issues expanding my knowledge base to fit your needs.</p>
            
            <div className='icon-container'>
          <a href='https://github.com/martin2844'><i class="fab fa-github"/></a>
          <a href='https://dev.to/martin2844'> <i class="fab fa-dev"></i></a>
          <a href='https://twitter.com/codigoMate'>  <i class="fab fa-twitter"></i></a>
          <a href='https://www.linkedin.com/in/chammah/'>  <i class="fab fa-linkedin-in"></i></a>
          <a href='mailto:martinchammah@gmail.com'>  <i class="fas fa-envelope"/></a>


            </div>
            </div>
          

            <div className='index-right'>

            </div>
            </section>
            <section id='about' className='index-about'>    
            <div className='index-left'>

            </div>
            <div className='index-right less-padding-top'>
            <h2>About me</h2>
            <hr/>
            <h1>I am a professional web developer with years of experience.</h1>
            <p>I have an Architect degree from the University of Buenos Aires, and I am a self-taught FullStack developer, so I know my way around design and programming.</p>
            <p>Currently I work at an e-commerce company, which mainly develops wordpress sites, so we do a lot of {`<?php`}, but my unconditional love goes to Javascript, and its frameworks. Node for the backend, and React&Gatsby for the front-end </p>
            <p>Nowadays, I am studying for a technician degree in programming, so I can further develop my skills as a programmer.</p>
            <div className='info-container'>
            <div className='first-two'>
                <div className='info-icons'>
                <i class="fas fa-map-marker-alt"></i>
                 <p>Buenos Aires, Argentina</p>

                </div>
                <div className='info-icons'>
                <i class="fas fa-phone"></i>
                 <p onClick={ () => revealData() }>click to reveal</p>

                </div>
           
            </div>
            <div className='last-two'>
            
            </div>              
                
            </div>


            </div>




            </section>





            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous"/>
        </Layout>
    )


}

export default Index
