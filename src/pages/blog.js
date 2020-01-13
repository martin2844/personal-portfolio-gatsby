import React from 'react';
import Layout from '../layout/Layout';
import {Link, graphql, useStaticQuery} from 'gatsby'





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
          }
          fields {
              slug
          }
        }
      }
    }
  }
`)

const posts = postsQuery.allMarkdownRemark.edges.map((posts) => {

    return ( <ul>
            <Link className='no-decor' to={`/blog/${posts.node.fields.slug}`}  >
            <h1 className='post-title'>{posts.node.frontmatter.title}</h1> 
            <p className='post-date'>{posts.node.frontmatter.date}</p>
            </Link>
            <p className='post-sinopsis'>{posts.node.frontmatter.sinopsis} </p><Link className='read-more' to={`/blog/${posts.node.fields.slug}`}>...Leer más</Link>
            <hr/>
            </ul>
           
    )
    
})


     return (
         <Layout>
             <section className='section-blog-title'>
             <h1>Welcome to my Blog</h1>
             <p>Every now and then I like writting about certain things, that are interesting to me in the world of web development</p>
             </section>
             {posts}

         </Layout>
     )
}

export default Blog