import React, { Component } from "react";

class Song extends Component {
   
  constructor() {
    super();
  }

  render() {
    return (
  <>

  
        <div class="p-4" >
           
            <img class="" src={this.props.cover} alt=""   />
            <span class="text-sm text-gray-500">{this.props.time}</span>
            <h1 class="font-bold text-lg text-gray-600">{this.props.title}</h1>
            <span class="text-sm text-gray-500">{this.props.artist}</span>
            <span class="text-sm text-gray-500 hidden xl:block">{this.props.albumname}</span>
          
      </div>
  </>
      
        
    )
}
}
  export default  Song;