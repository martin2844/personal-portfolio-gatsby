import React from 'react';
import Layout from '../layout/Layout';
import {graphql} from 'gatsby';


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
      }
      html
    }
  }

`



const BlogTemplate = (props) => {

 return (
    <Layout>

        <h1 className='post-title-content'>{props.data.markdownRemark.frontmatter.title}</h1>
        <p className='post-date'> posteado el {props.data.markdownRemark.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
    </Layout>
 )
}

export default BlogTemplate