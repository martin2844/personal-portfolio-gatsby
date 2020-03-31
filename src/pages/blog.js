import React, { useState } from 'react';
import Layout from '../layout/Layout';
import {Link, graphql, useStaticQuery} from 'gatsby';
import Img from 'gatsby-image';
import { Helmet } from 'react-helmet';
import './stylesheets/blog.styles.scss';





const Blog = () => {
const postsQuery = useStaticQuery(graphql`
query {
    posts: allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date]}) {
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
    
   images: allFile(sort: {fields: [name], order: ASC}, filter: { sourceInstanceName: { eq: "thumbs" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }

    
  } 
`)
console.log(postsQuery);
// use state to declare global filter tags.
const [filterTags, setFilterTags] = useState([]);

// put all posts on state, filter with tags, via filterThePosts.
const [thePosts, filterThePosts] = useState(postsQuery.posts.edges);
console.log(thePosts);

// image query

//Extract images from queries
const postImages = postsQuery.images.edges

//What happens when there is no image. 
let noImage = postImages.filter((image) => {
  return image.node.childImageSharp.fluid.originalName === "no-image.png";
})

//Begin posts map
const posts = thePosts.map((posts) => {
  // filter from image query which image belongs to which posts
  // the image name must match the slug of the post
  let theImageFilter = postImages.filter( (image) => {
    let { originalName } = image.node.childImageSharp.fluid;
    let slugMatchPNG = posts.node.fields.slug + '.png';
    let slugMatchJPG = posts.node.fields.slug + '.jpg';
    return originalName === (slugMatchPNG || slugMatchJPG);

  })

  let theImage
  // iffy because reading node from undefined crashes gatsby.
  if (theImageFilter.length !== 0) {
    theImage = theImageFilter[0].node.childImageSharp.fluid;
  } else {
    theImage = noImage[0].node.childImageSharp.fluid;
  }

  

  let { tags } = posts.node.frontmatter;
  //iffy in case a post misses tags.
  if (tags) {
    tags.forEach((tag) => {
      filterTags.indexOf(tag) === -1 ? setFilterTags([...filterTags, tag]) : console.log('');
    })
  }
  
    return ( <ul className='post-container'>
            
            <div className='post-container-img'><Link className='no-decor' to={`/blog/${posts.node.fields.slug}`}  ><Img fluid={theImage} /></Link></div>

            <div className='post-container-text'>
              
            <Link className='no-decor' to={`/blog/${posts.node.fields.slug}`}  >
            <h1 className='post-title'>{posts.node.frontmatter.title}</h1> 
            <p className='post-date'>{posts.node.frontmatter.date}</p>
            </Link>
            <div className='post-sinopsis'><p>{posts.node.frontmatter.sinopsis} </p><Link className='read-more' to={`/blog/${posts.node.fields.slug}`}>...Leer más</Link></div>

            </div>
            </ul>
           
    )
    
});

//begin tag map.

const displayTags = filterTags.map((tag) => {
  let runTheFilter = (e) => {
    //filter the posts is working, must try and reset state before each time a tag is clicked
    let filterWord = e.target.getAttribute('name');
    // console.log(filterWord);
    let arrayFilter;
   if(thePosts) { //if thePosts exists, begin filter using tag which is filtered word.
     arrayFilter = postsQuery.posts.edges.filter((post) => {
      console.log(filterWord)
    
      return post.node.frontmatter.tags.includes(filterWord); 
     

     })
   }

   console.log(arrayFilter);
   filterThePosts(arrayFilter);
  }

  return (
    <div className='filter-tag' key={tag} name={tag} onClick={e => runTheFilter(e)}>
     {tag}
    </div>
  )
})

const cleanTags = (e) => {
  filterThePosts(postsQuery.posts.edges);
}



     return (
         <Layout>
                 <Helmet>
                <title>Martin Chammah | Blog</title>
                <meta charset="UTF-8"/>
                <meta name="description" content="My Blog, I write about stuff related to tech and web dev"/>
                <meta name="author" content="Martin Chammah"/>
              
          </Helmet>
             <section className='section-blog-title'>
             <h1>Welcome to my Blog</h1>
             <p>Every now and then I like writting about certain things, that are interesting to me in the world of web development</p>
             </section>
             <section className='section-blog-posts'>
                <div className='tags-section'>
                   <h1>Search By tags</h1>
                   {displayTags}
                   <div className='filter-tag clean' onClick={e => cleanTags(e)}>
                  Clean filters
                  </div>

                </div>
                <div className='posts-section'>
                   {posts}
               </div>
             </section>
            

         </Layout>
     )
}

export default Blog