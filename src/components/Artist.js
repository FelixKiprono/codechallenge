function Artist({time,title,artist}) {
    return (
      <>
      <div class="p-4">
        <img class="" src="https://via.placeholder.com/200" alt=""  />
            <span class="text-sm text-gray-500">{time}</span>
            <h1 class="font-bold text-lg text-gray-600">{title}</h1>
            <span class="text-sm text-gray-500">{artist}</span>
      </div>      
       </>
    );
  }
  export default Artist;