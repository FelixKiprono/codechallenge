function Song({time,title,artist,cover,albumname}) {
    return (
      <>
      <div class="p-4">
        <img class="" src={cover} alt=""  />
            <span class="text-sm text-gray-500">{time}</span>
            <h1 class="font-bold text-lg text-gray-600">{title}</h1>
            <span class="text-sm text-gray-500">{artist}</span>
            <span class="text-sm text-gray-500 hidden xl:block">{albumname}</span>

      </div>      
       </>
    );
  }
  export default Song;