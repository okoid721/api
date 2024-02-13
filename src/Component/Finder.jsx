import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { IoSunnyOutline } from 'react-icons/io5';
import { FaLocationDot } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CgOrganisation } from "react-icons/cg";
import { useState } from 'react';
import { useEffect } from 'react';


const Finder = () => {
  const [data, setData] = useState({});
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${inputValue}`
        );
        const data = await response.json();
        setData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (inputValue) {
      fetchData();
    }
  }, [inputValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // fetchData();  // No need to call fetchData here, it's handled in useEffect
  };

    

  return (
    <div className=" bg-[#141c2f]">
      <div className=" max-w-[40%] flex justify-center items-center mx-auto h-screen flex-col">
        <nav className=" w-full justify-between flex flex-row">
          <h1 className=" text-3xl font-bold text-blue-50">devFinder</h1>
          <h1 className=" text-3xl font-bold text-blue-50 flex gap-5 items-center">
            Light <IoSunnyOutline />
          </h1>
        </nav>
        <div className="md:flex mt-10 gap-y-6 justify-between w-full bg-[#1F2A48] py-4 rounded-md px-5">
          <div className=" flex flex-row gap-1 items-center">
            <FaSearch className=" size-10 text-blue-300" />
            <input
              type="search"
              name="search"
              id="search"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter GitHub username"
              className="w-full  px-3 py-2 mb-4 md:mb-0 mr-4 bg-transparent border-none outline-none text-white"
            />
          </div>
          <button className="w-[20%]  px-4 py-3  bg-sky-500 text-white font-semibold rounded-md">
            Search
          </button>
        </div>

        <div className=" bg-[#1F2A48] mt-10  w-full py-5 px-2 rounded-md">
          <div className=" flex w-full">
            <div className=" rounded-full w-32 h-32   bg-no-repeat bg-center animate-pulse">
            <img  src={data.avatar_url} className="rounded-full" alt="" />
            </div>
            <div className=" flex justify-around w-full">
              <div className=" flex flex-col gap-2    ">
                <h1 className=" font-bold text-3xl text-white username">{data.login}</h1>
                <h3 className=" font-bold text-blue-500">{data.name}</h3>
                <p className=" text-[#d7d7d7]">{data.bio}</p>
              </div>
              <div className=" text-[#d7d7d7]">{data.created_at}</div>
            </div>
          </div>
          <div className=" flex justify-center items-center mt-10 flex-col">

          <div className="bg-[#141c2f] w-[70%] flex flex-row justify-between px-5 py-5 rounded-md">
            <div className=" text-center text-white font-bold">
              <h3>Repo</h3>
              <p>{data.public_repos}</p>
            </div>
            <div className="  text-center text-white font-bold">
              <h3>Followers</h3>
              <p>{data.followers}</p>
            </div>
            <div className="  text-center text-white font-bold">
              <h3>Following</h3>
              <p>{data.following}</p>
            </div>
          </div>
          <div className=" flex flex-row justify-around w-full mt-10 text-white">
            <div className="flex flex-col gap-6">
                 <div className="flex items-center gap-2"> <FaLocationDot />{data.location ? data.location : "None"}</div>
                <div className="flex items-center gap-2"> <FaLink />{data.blog === "" ? "None" : data.blog}</div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2"> < FaTwitter/>{data.twitter_username ? data.twitter_username : "None"}</div>
               <div className="flex items-center gap-2"> < CgOrganisation/> {data.company ? data.company : "None"}</div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finder;


// import React, { useState, useEffect } from 'react';
// import { FaSearch, FaLocationDot, FaLink, FaTwitter, CgOrganisation, IoSunnyOutline } from 'react-icons/all';

// const Finder = () => {
//   const [data, setData] = useState({});

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch('https://api.github.com/users/octocat');
//       const result = await response.json();
//       setData(result);
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="max-w-[40%] flex justify-center items-center mx-auto h-screen flex-col">
//       {/* ... */}
//       <div className="bg-[#1F2A48] mt-10 w-full py-5 px-2 rounded-md">
//         <div className="flex w-full">
//           <div className="flex items-center gap-6">
//             <div className="w-32 h-32 bg-slate-100 rounded-full"></div>
//           </div>
//           <div className="flex justify-around w-full">
//             <div className="flex flex-col gap-2">
//               <h1 className="font-bold text-3xl text-white username">{data.login}</h1>
//               <h3 className="font-bold text-blue-500">{data.name}</h3>
//               <p className="text-[#d7d7d7]">{data.bio}</p>
//             </div>
//             <div className="text-[#d7d7d7]">{data.created_at}</div>
//           </div>
//         </div>
//         {/* ... */}
//       </div>
//     </div>
//   );
// };

// export default Finder;