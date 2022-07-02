import React, { Component } from "react";
import Song from "../components/Song";
import axios from "axios";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      songs: [],
      items: [{ name: "felix" }, { name: "john" }],
    };
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
      });
  };
  render() {
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
                <Song
                  time={this.fmtMSS(data.duration)}
                  title={data.title}
                  artist={data.artist.name}
                  cover={data.album.cover}
                  albumname={data.album.title}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default Search;
