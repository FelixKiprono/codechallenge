import React, { Component } from "react";
import Song from "../components/Song";
import axios from "axios";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      songs: [],
      song: null,
      tracks:[]
    };
  }

  openView(data)
  {
    data.preventDefault();
    console.log('The link was clicked.');
    //alert(data.title);

  }
   topTracks = (data)=>{

this.setState({song:data});
    let id = data.artist.id;
    //console.log('https://api.deezer.com/artist/'+id+'/top?limit=5');
    // console.log( this.state.song.artist.tracklist);

    axios
    .get(
      'https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/'+id+'/top?limit=5')
    .then((response) => {
      console.log(response.data.data);
      
      // let tracks = response.data.data;
      // let topfive = tracks.slice(0,6);
      this.setState({ tracks: response.data.data });
    }).catch(err=>{
      console.log(err);
    })
}
  //convert seconds to minutes
  fmtMSS(s) {
    return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s;
  }
  //set the state whenever user types username
  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };

  //make a http request to fetch song based on artist name
  searchSong = (e) => {
   
    if (!this.state.search) {
      return;
    }
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=" +
          this.state.search
      )
      .then((response) => {
        console.log(response.data.data);
        this.setState({ songs: response.data.data });
      }).catch(err=>{
        console.log(err);
        alert('Cant search at the moment!');
      })
  };
  render() {
    const divStyle = {
      width: '100%',
      height:'400px',
      backgroundImage: `url(${'https://images.unsplash.com/photo-1487180144351-b8472da7d491?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80'})`,
      backgroundSize: 'cover' 
    }; 

    if(this.state.song)
    {
     
      return (
      <div>
         <div class="flex w-full">
      <div class="w-full ">
        <div class="p-4">
        <h1></h1>       
        
         <div style={divStyle} class="flex flex-row">
            <div class="w-2/3 h-full flex flex-col justify-center">
                <div class="m-auto max-w-[80%] space-y-2">
                    <h1 class="text-3xl font-bold text-gray-900/70">{this.state.song.artist.name}</h1>
                    <h1 class="text-lg ">200k  Fans</h1>
                    
                    <div class="w-16 
                    border border-gray-500/50 ..."></div>
                   <p class="text-gray-700">
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                   sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                   sunt in culpa qui officia deserunt mollit anim id est laborum.
                   </p>
                </div>

            </div>
            <div class="bg-white flex-1 h-full p-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
            
                <h1 class="font-bold my-4 text-gray-500">Top tracks</h1>

                 <div class="space-y-2  divide-y">
                    
                    {
                    this.state.tracks.map((data, id) => {
                      
                        return (
                          <div class="flex flex-row justify-between pt-2">                
                          <span  class="text-gray-600"><span class="font-bold mr-2">{id+1}</span> {data.title} </span>
                          <span  class="text-gray-300"> {this.fmtMSS(data.duration)} </span>
                          </div>
                        
                        );
                      })}
                   
                    <div class="flex flex-row justify-between pt-2">                
                    
                    </div>
                 </div>
   
             </div>
          <div>

        </div>
        <div>

        </div>
        </div>

        <div>
        <h1 class="py-3 text-3xl font-bold text-gray-900/70">
                     Albums
                    </h1>
                  <div class="flex justify-center">

                 
                 

                    <div class="grid grid-cols-4 grid-rows-auto">

                    <div class="" >
                    <img class="w-full border" src='https://via.placeholder.com/140' alt=""   />
                    <span class="text-sm text-gray-500">1:00</span>
                    <h1 class="font-bold text-lg text-gray-600"></h1>Independent
                    </div>
                    <div class="" >
                    <img class="w-full border" src='https://via.placeholder.com/140' alt=""   />
                    <span class="text-sm text-gray-500">2:00</span>
                    <h1 class="font-bold text-lg text-gray-600">So Lonely</h1>
                    </div>
                    <div class="" >
                    <img class="w-full border" src='https://via.placeholder.com/140' alt=""   />
                    <span class="text-sm text-gray-500">2:10</span>
                    <h1 class="font-bold text-lg text-gray-600">Call me</h1>
                    </div>
                    <div class="" >
                    <img class="w-full border" src='https://via.placeholder.com/140' alt=""   />
                    <span class="text-sm text-gray-500">4:00</span>
                    <h1 class="font-bold text-lg text-gray-600">Smack that</h1>
                    </div>
                    </div>
                    </div>

        </div>
      </div>
     </div>
    </div>
      </div>)
    }
    else
    {
    return (
      <div class="flex justify-center">
  
        <div class="max-w-[800px]">
          <div class="p-4">
          
            <h1 class="p-2">Search Songs By Artist Name</h1>

            <label
              for="search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
            >
              Artist Name
            </label>
            <div class="relative">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="search"
                value={this.state.value}
                onChange={this.handleChange}
                class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                required
              />
              <button
                onClick={this.searchSong}
                class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </div>
          <div class="grid grid-cols-3 grid-rows-auto">
            {this.state.songs.map((data, id) => {
              return (
                <div >
                  <button 
                      onClick={()=>this.topTracks(data)}
                      primary={true}
                      >
                    <Song
                        data={data}
                        time={this.fmtMSS(data.duration)}
                        title={data.title}
                        artist={data.artist.name}
                        cover={data.album.cover}
                        albumname={data.album.title}
                    >
                
                      </Song>
                      </button>
                </div>
              
              );
            })}
          </div>
        </div>
      </div>
    );
          }
  }
}
export default Search;
