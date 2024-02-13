import React from 'react';

const Finder = () => {
  return (
    <div className=" bg-[#141c2f]">
      <div className=" max-w-[40%] flex justify-center items-center mx-auto h-screen flex-col">
        <nav className=" w-full justify-between flex flex-row">
          <h1 className=" text-3xl font-bold text-blue-50">devFinder</h1>
          <h1 className=" text-3xl font-bold text-blue-50">Light</h1>
        </nav>
        <div className="md:flex mt-20 gap-y-6 justify-between w-full bg-[#1F2A48] py-2 rounded-md px-2" >
            <div className="">
          <input
            type="text"
            placeholder="Enter GitHub username"
            className="w-full  px-3 py-2 mb-4 md:mb-0 mr-4 bg-transparent border-none outline-none"
          />
          </div>
          <button className="w-[20%]  px-4 py-3  bg-sky-500 text-white font-semibold rounded-md">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Finder;



// return (
//     <div className="p-8">
//       <h2 className="text-4xl font-bold mb-4 text-center">GitHub User Finder</h2>
//       <div className="md:flex">
//         <input
//           type="text"
//           placeholder="Enter GitHub username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           className="w-full md:w-1/3 px-3 py-2 mb-4 md:mb-0 mr-4 rounded-md border focus:outline-none focus:ring focus:ring-sky-400"
//         />
//         <button
//           onClick={handleSearch}
//           className="w-full md:w-1/3 px-3 py-2 mb-4 md:mb-0 rounded-md bg-sky-500 text-white font-semibold hover:bg-sky-600 focus:outline-none focus:ring focus:ring-sky-400"
//         >
//           Search
//         </button>
//       </div>

//       {user ? (
//         <div className="md:flex mt-8">
//           <div className="md:w-1/3">
//             <img
//               src={user.avatar_url}
//               alt={`${user.name} avatar`}
//               className="w-48 h-48 md:w-64 md:h-auto rounded-full mx-auto"
//             />
//           </div>
//           <div className="pt-6 md:p-8 text-center md:text-left space-y-4 md:space-y-8 md:w-2/3">
//             <blockquote>
//               <p className="text-lg font-medium">{user.bio || 'This profile has no bio.'}</p>
//             </blockquote>
//             <figcaption className="font-medium">
//               <div className="text-sky-500">{user.name}</div>
//               <div className="text-slate-500">{user.login}</div>
//             </figcaption>
//             <div className="text-slate-500">
//               Joined: {new Date(user.created_at).toLocaleDateString()}
//             </div>
//             <div className="text-slate-500">Repos: {user.public_repos}</div>
//             <div className="text-slate-500">Followers: {user.followers}</div>
//             <div className="text-slate-500">Following: {user.following}</div>
//           </div>
//         </div>
//       ) : (
//         <p className="mt-8 text-center">Enter a GitHub username and click "Search" to begin.</p>
//       )}
//     </div>
//   );
// }

// export default App;