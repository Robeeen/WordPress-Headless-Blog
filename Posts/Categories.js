import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import './stylesheet.css';

const Categories = () => {
  return (
    <Query query={
        gql`{
          categories{
          edges{
            node {
              name
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
                //console.log(data);
                return (                   
                    <div>
                        {
                            data.categories.edges.map((cat, key)=>{
                                return(
                                    <div key={key}>                                            
                                            {cat.node.name}                                          
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

export default Categories;