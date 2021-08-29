import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter, Route } from 'react-router-dom';
import Posts from './Posts/Posts';
import Post from './Posts/Post';
import Menu from './Posts/Menu';
import logo from './logo.png';
import DetailsCat1 from './Posts/DetailsCat1';
import { Link } from 'react-router-dom';



const client = new ApolloClient({
  uri : 'http://myblogs.local/graphql',
})
function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>        
          <section className='header'>          
            <div className='container'>
              <div className='image'>
              <Link to ="/" className="links"> <img src={logo} width='30%'/></Link>
              </div>
              <div className='menu'>
                <Menu />
              </div>            
            </div>            
            </section>
            <div className='container'>
              {/* <section className='category'>
                <div class='card blue'>Category<br />React-Native</div>
                <div class='card red'>Category<br />React-Native</div>
                <div class='card green'>Category<br />React-Native</div>
              </section> */}
              <section>
                <div  className='blog-details'>                  
                <Route exact path="/" component={Posts} />
                <Route path="/posts" component={Posts} />
                <Route path="/post/:slug" component={Post} />  
                <Route path="/category" component={DetailsCat1} />            
                </div>
              </section>                       
          </div>
          <section className='footer'>
              <div className='footer-menu'>
               @CopyRight 2021 | IT Services Zone <Menu />
                </div>
            </section> 
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
