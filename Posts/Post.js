import React, { Component} from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import './stylesheet.css';
import { Link } from 'react-router-dom';

class Blogss extends Component{
    render(){
        const props = this.props;
        //console.log({props});
        if( !props.data.post){
            return (<p>Loading....</p>)
        }
        return(
            <div className='details-more'>                
                <p className='paragraph-text'>Date: {props.data.post.date}, Category:{props.data.post.categories.edges[0].node.name}</p>
                <p className='paragraph-text'>ID:{props.data.post.id}, Tags: {props.data.post.tags.nodes[0].name}</p>
                <h3>{props.data.post.title}</h3>
                <p>Content: {props.data.post.content}</p>
                <img src={props.data.post.featuredImage.node.sourceUrl} />
                <p>Comments: {props.data.post.comments.nodes[0].content}</p>
                <Link to ="/" className="links"><button type="button">Go Back</button></Link>                              
            </div>

        );
    }

}
const GetPostBySlug = gql`
query getPostBySlug($slug: String){
    post: postBy(uri: $slug){
      id
      date  
      title
      content(format: RENDERED)
      categories {
        edges {
          node {
            name
          }
        }
      }
      featuredImage {
        node {
          sourceUrl(size: MEDIUM)
        }
      }
      tags {
        nodes {          
          name
        }
      }
      comments (first: 5) {
        nodes {
          content(format: RENDERED)
        }
      }
    }
  }
`;
export default graphql(GetPostBySlug,{
    options: (props) => {
        const slug = props.match.params.slug;
        return {
            variables: {
                slug
            }
        }
    }
    
})(Blogss);


