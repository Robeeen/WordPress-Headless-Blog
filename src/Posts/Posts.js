import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import './stylesheet.css';

const Blogs = () => (
    <Query query={
        gql`{
        posts {
            edges {
              node {
                title
                slug
                featuredImage {
                  node {
                    sourceUrl(size: THUMBNAIL)
                  }
                }
                excerpt(format: RENDERED)
              }
            }
          } 
        }      
        `
     }>
        {
            ({ loading, error, data}) => {
                if( loading){
                    return (<p>Loading Data .....</p>);
                } 
                //console.log(data);
                return (
                    <div className='container'>
                    
                        {
                            data.posts.edges.map((postm, key)=>{
                                return(
                                    <div key={key} className='card'>
                                            <img src={postm.node.featuredImage.node.sourceUrl} width='100%' />
                                            <div className='containers'>
                                            <h4><b>{postm.node.title}</b></h4>
                                            <p>{postm.node.excerpt}</p>
                                            <Link to={`/post/${postm.node.slug}`}><button type="button">More Details</button></Link>
                                            </div>
                                    </div>
                                )
                            })
                        }
                    
                    </div>
                    )
            }
        }

    </Query>
)

export default Blogs;