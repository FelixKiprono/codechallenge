const divStyle = {
    width: '100%',
    height:'400px',
    backgroundImage: `url(${'https://images.unsplash.com/photo-1487180144351-b8472da7d491?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80'})`,
    backgroundSize: 'cover' 
  }; 
const View = () => {

  return (
    <>
    <div class="flex w-full">
      <div class="w-full ">
        <div class="p-4">
        <h1>View Artist</h1>       
        
         <div style={divStyle} class="flex flex-row">
            <div class="w-2/3 h-full flex flex-col justify-center">
                <div class="m-auto max-w-[80%] space-y-2">
                    <h1 class="text-3xl font-bold text-gray-900/70">Burna Boy</h1>
                    <h1 class="text-lg ">200k  Fans</h1>
                    
                    <div class="w-16 
                    border border-gray-500/50 ..."></div>
                   <p class="text-gray-700">
                   Tailwind lets you conditionally apply utility classes in different states using variant modifiers. 
                   For example, 
                   use hover:divide-pink-400 to only apply the divide-pink-400 utility on hover.
                   </p>
                </div>

            </div>
            <div class="bg-white flex-1 h-full p-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
            
                <h1 class="font-bold my-4 text-gray-500">Top tracks</h1>

                 <div class="space-y-2  divide-y">
                   <div class="flex flex-row justify-between pt-2">                
                    <span  class="text-gray-600"><span class="font-bold mr-2">1</span> Call me maybe </span>
                    <span  class="text-gray-300"> 12:00 </span>
                    </div>
                    <div class="flex flex-row justify-between pt-2">                
                    <span  class="text-gray-600"><span class="font-bold mr-2">2</span> Call me maybe </span>
                    <span  class="text-gray-300"> 12:00 </span>
                    </div>
                    <div class="flex flex-row justify-between pt-2">                
                    <span  class="text-gray-600"><span class="font-bold mr-2">3</span> Call me maybe </span>
                    <span  class="text-gray-300"> 12:00 </span>
                    </div>
                    <div class="flex flex-row justify-between pt-2">                
                    <span  class="text-gray-600"><span class="font-bold mr-2">4</span> Call me maybe </span>
                    <span  class="text-gray-300"> 12:00 </span>
                    </div>
                    <div class="flex flex-row justify-between pt-2">                
                    <span  class="text-gray-600"><span class="font-bold mr-2">5</span> Call me maybe </span>
                    <span  class="text-gray-300"> 12:00 </span>
                    </div>
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
            
        </div>
      </div>
     </div>
    </div>
    </>
  );
};

export default View;
