import loadimg from "../public/images/sample.gif"

const Loading = () => {
    return (
         <div className="flex justify-center items-center h-screen"><img className="w-28 h-28" src={loadimg } alt=""/></div>
    );
};

export default Loading;