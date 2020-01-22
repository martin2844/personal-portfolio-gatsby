import React from 'react';
import Layout from '../layout/Layout';
import {graphql, Link} from 'gatsby';
import { Helmet } from 'react-helmet';
import './BlogTemplate.styles.scss';


//export query so gatsby can grab it as a prop
export const query = graphql`
query (
    $slug: String!
  ){
    markdownRemark (
      fields: {
        slug: {
          eq: $slug
        }
      }
    ){
      frontmatter {
        title
        date
        sinopsis
      }
      html
    }
  }

`



const BlogTemplate = (props) => {

 return (
    <Layout>
            <Helmet>
                <title>Martin Chammah | {props.data.markdownRemark.frontmatter.title}</title>
                <meta charset="UTF-8"/>
                <meta name="description" content={props.data.markdownRemark.frontmatter.sinopsis}/>
                <meta name="author" content="Martin Chammah"/>
              
          </Helmet>
        <section className='post-main'>
        <div className='post-title-container'>
        <h1 className='post-title-content'>{props.data.markdownRemark.frontmatter.title}</h1>
        <p className='post-date'> posted on {props.data.markdownRemark.frontmatter.date}</p>
        </div>
        <div className='post-content-container' dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
        <Link className='goback' to="/blog">Go back to posts</Link>
        </section>
    </Layout>
 )
}

export default BlogTemplate