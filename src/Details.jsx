import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";

const Details = () => {
    
    const { id } = useParams();
    const [post, setPosts] = useState({})
    const [page, setpage] = useState(0);
     useEffect(() => {
        fetch(`http://hn.algolia.com/api/v1/items/${id}`)
            .then(res => res.json())
            .then(data => {
                setPosts(data)
            })
     }, [id])
    
  const ITEMS_PER_PAGE = 10;
  const handlePageClick = (selectedPage) => {
    setpage(selectedPage.selected * ITEMS_PER_PAGE);
  };

  const paginatedData = post?.children?.slice(page, page + ITEMS_PER_PAGE);
    const navigate = useNavigate()
    const handleback = () => {
       navigate("/")
   }
    return (
        <div className="container mx-auto">
            <div className=" ">
                <div >
                    <div className=" ">
                        
                    <h1 className="text-center mt-10 text-3xl font-bold">Title: { post.title}</h1>
                        <h1 className="text-center my-5 text-3xl font-bold">Points: {post.points}</h1>
                        <button onClick={handleback} className="px-8 ml-4 my-3 py-2 rounded bg-black text-white">Back</button>
                    </div>
                    <div className="">
                        {
                            paginatedData?.map((p, index) =>
                                <p className="bg-gray-50 text-lg rounded-lg w-full p-5 m-2" key={index}>
                          {p.text}  
                        </p>)

                    }
                    </div>
                </div>
            </div>
            <div>
                <ReactPaginate
          className="flex justify-center mt-16 items-center text-black "
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={Math.ceil(post?.children?.length / ITEMS_PER_PAGE)}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName="flex justify-center items-center"
          pageClassName="mr-2"
          pageLinkClassName=" py-2 px-3 rounded-md"
          activeClassName=" text-white bg-black   py-2 px-3 rounded-md"
          previousClassName="mr-2"
          previousLinkClassName="  py-2 px-3 rounded-md"
          nextClassName="mr-2"
          nextLinkClassName="  py-2 px-3 rounded-md"
          breakClassName="mr-2"
          breakLinkClassName="  py-2 px-3 rounded-md"
        />
            </div>
        </div>
    );
};

export default Details;