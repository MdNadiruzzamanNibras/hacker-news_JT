import { useState } from "react";


const App = () => {
  const [search, setSearch] = useState('')
  const [datas, setDatas] = useState('')

  const handlesubmit = (e) => {
    e.preventDefault()
  fetch(`http://hn.algolia.com/api/v1/search?query=${search}`)
    .then(res => res.json())
    .then(data=> setDatas(data.hits))
    
  }
  console.log(datas,'15');
  return (
    <div className="container mx-auto">
      <div>
        <div className="flex justify-center">
          <div className="flex items-center mt-12">
            <form onSubmit={handlesubmit}>
        <input placeholder="search your posts" className="border-2 text-center w-96 h-12  border-black rounded text-xl" type="text" value={search} onChange={(e)=>setSearch(e.target.value)} name="" id="" />
      <button className="px-8 ml-8 py-2 border-2 border-black rounded text-xl" type="submit">Search</button>
      </form>
          </div>
        </div>
        <h1 className="text-center my-10  font-bold text-3xl">{ datas ? "Hacker News": "Please search your title"}</h1>
        <div className="grid grid-cols-4 gap-5">
          {
        datas &&
        datas?.map((d, index) =>
          <h2 className="bg-gray-100 px-4 py-1 w-80 h-16 flex justify-center items-center rounded hover:shadow-lg hover:shadow-gray-500" key={index}>{d.title ? d.title : d.story_title
}</h2>)
      }
      </div>
      
      </div>
    </div>
  );
};

export default App;