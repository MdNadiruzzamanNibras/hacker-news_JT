import { useState } from "react";
import { useNavigate } from "react-router-dom";


const App = () => {
  const [search, setSearch] = useState('')
  const [datas, setDatas] = useState('')
  const navigate = useNavigate()
  const handlesubmit = (e) => {
    e.preventDefault()
  fetch(`http://hn.algolia.com/api/v1/search?query=${search}`)
    .then(res => res.json())
    .then(data=> setDatas(data.hits))
    
  }
  const handleNavigate = (id) => {
    navigate(`/details/${id}`)
  }
  console.log(datas);
  return (
    <div className="container mx-auto">
      <div>
        <div className="flex justify-center">
          <div className="flex items-center mt-12">
            <form onSubmit={handlesubmit}>
        <input placeholder="search your posts" className="border-2 text-center w-96 h-12  border-black rounded text-xl" type="text" value={search} onChange={(e)=>setSearch(e.target.value)} name="" id="" />
      <button className="px-8 bg-black text-white hover:text-black hover:bg-gray-100 ml-2 py-2 border-2 border-black rounded text-xl" type="submit">Search</button>
      </form>
          </div>
        </div>
        <h1 className="text-center my-10  font-bold text-3xl">{ datas ? "Hacker News": "Please type your topic"}</h1>
        <div className="grid grid-cols-4 gap-5">
          {
        datas &&
        datas?.map((d, index) =>
          <h2 onClick={()=>handleNavigate(d?.objectID)} className="bg-gray-100 cursor-pointer px-4 py-1 w-80 h-20 flex justify-center items-center rounded-md hover:shadow-lg hover:shadow-gray-500" key={index}>{d.title ? d.title : d.story_title
}</h2>)
      }
      </div>
      
      </div>
    </div>
  );
};

export default App;