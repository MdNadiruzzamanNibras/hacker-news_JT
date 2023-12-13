import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const Details = () => {
    
    const { id } = useParams();
    const [post, setPosts] = useState({})
     useEffect(() => {
        fetch(`http://hn.algolia.com/api/v1/items/${id}`)
            .then(res => res.json())
            .then(data => {
                setPosts(data)
            })
     }, [id])
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
                        <button onClick={handleback} className="px-8 ml-2 my-3 py-2 rounded bg-black text-white">Back</button>
                    </div>
                    <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
                        {
                            post?.children?.map((p, index) =>
                                <p className="bg-gray-50 text-base rounded-lg w-96 p-5 m-2" key={index}>
                          {p.text}  
                        </p>)

                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;