import React,{Component}from 'react'
class Home extends Component{
  state ={
    posts :[]
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/posts").then(resp=>resp.json()).then(data=>{
      this.setState({
        posts:data.slice(0,10)
      });
    });
  }
  render(){
    const {posts} = this.state;
    const listPosts = posts.length ?(
     posts.map(post=>{
       return(
     <div className="post card blue-grey darken-3" key={post.id}>
       <div className="card-content white-text">
         <span className="card-title">{post.title}</span>
         <p >{post.body}</p>
        </div>
      </div>
         )
     })
      ):(
      <div className="center">No Posts for This !!!!</div>
      )
return(
<div className="container">
   <h4 className="center">Home</h4>
  {listPosts}
</div>
    )
  }
}
export default Home 