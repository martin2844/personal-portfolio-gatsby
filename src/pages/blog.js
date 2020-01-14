import React from 'react';
import Layout from '../layout/Layout';
import {Link, graphql, useStaticQuery} from 'gatsby';

import './stylesheets/blog.styles.scss';





const Blog = () => {
    
const postsQuery = useStaticQuery(graphql`
query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date]}) {
      edges{
        node {
          frontmatter {
            title
            date
            sinopsis
            tags
          }
          fields {
              slug
          }
        }
      }
    }
  }
`)

console.log(postsQuery.allMarkdownRemark.edges)

const posts = postsQuery.allMarkdownRemark.edges.map((posts) => {

    return ( <ul className='post-container'>
            
            <div className='post-container-img'></div>
            <div className='post-container-text'>
              
            <Link className='no-decor' to={`/blog/${posts.node.fields.slug}`}  >
            <h1 className='post-title'>{posts.node.frontmatter.title}</h1> 
            <p className='post-date'>{posts.node.frontmatter.date}</p>
            </Link>
            <div className='post-sinopsis'><p>{posts.node.frontmatter.sinopsis} </p><Link className='read-more' to={`/blog/${posts.node.fields.slug}`}>...Leer más</Link></div>

            </div>
            </ul>
           
    )
    
})


     return (
         <Layout>
             <section className='section-blog-title'>
             <h1>Welcome to my Blog</h1>
             <p>Every now and then I like writting about certain things, that are interesting to me in the world of web development</p>
             </section>
             <section className='section-blog-posts'>
                <div className='tags-section'>
                   <h1>Search By tags</h1>
                </div>
                <div className='posts-section'>
                   {posts}
               </div>
             </section>
            

         </Layout>
     )
}

export default Blog