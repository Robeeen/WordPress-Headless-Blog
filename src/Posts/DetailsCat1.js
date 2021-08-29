import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import './stylesheet.css';

const DetailsCat1 = () => {
  return (
    <Query query={
        gql`{
            categories {
              nodes {
                categoryId
                name
                posts(where: {categoryId: 2}) {
                  nodes {
                    content(format: RENDERED)
                  }
                }
              }
            }
          }          
      `
     }>
        {
            ({ loading, error, data}) => {
                if( loading){
                    return (<p>.....</p>);
                } 
                console.log(data);
                return (                   
                    <div>
                        {
                            data.categories.nodes.map((category, key)=>{
                                return(
                                    <div key={key}>       
                                      <div className='containers'>                                     
                                           <p> {category.categoryId}</p>
                                           <p> {category.name}</p>
                                           <p> {category.posts.nodes.content}</p>  
                                           
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
);
};

export default DetailsCat1;