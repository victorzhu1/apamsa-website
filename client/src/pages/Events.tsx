import axios from "axios"
import { useEffect, useState } from "react"
import ReactPaginate from 'react-paginate'

const apiUrl = process.env.REACT_APP_API_URL;


interface Post {
    _id: string;
    title: string;
    body: string;
    date: string;
  }

export function Events() {

    const accessToken = sessionStorage.getItem("accessToken");
    const isAuthenticated = accessToken ? true : false;

    const [listOfPosts, setListOfPosts] = useState<Post[]>([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [loading, setLoading] = useState(true);
    const [selectedPost, setSelectedPost] = useState<string | null>(null);

    useEffect(() => {
        axios.get<Post[]>(`${apiUrl}/announcements`)
        .then((response) => {
            setListOfPosts(response.data);
            setLoading(false);
        })
        .catch((error) => {
            console.error("Error fetching announcements:", error);
        });
    }, []);


    const postsPerPage = 5;
    const startIndex = currentPage * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const currentPosts = listOfPosts.slice().reverse().slice(startIndex, endIndex);

    const handlePageChange = (selectedPage: { selected: number }) => {
        setCurrentPage(selectedPage.selected);
    };

    const handlePostClick = (postId: string) => {
        if (isAuthenticated) {
            setSelectedPost(postId === selectedPost ? null : postId);
        }
    };

    const handleDeletePost = async (postId: string) => {
        try {
            await axios.delete(`${apiUrl}/announcements/${postId}`);
            setListOfPosts(prevPosts => prevPosts.filter(post => post._id !== postId));
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    };

    return (
        <div className='events-container h-full w-full flex flex-col items-center justify-center font-oswald'>
            <div className='events-header w-full bg-slate-700 flex justify-center md:justify-start text-center'>
                <div className='events-text-container mt-36 mb-4 md:ml-32'>
                    <h1 className='text-5xl md:text-6xl text-white'>
                        EVENTS
                    </h1>
                </div>
            </div>
            <div className='events-content my-16 w-full flex flex-col justify-normal text-slate-800'>
                <div className='calendar-container mb-16 w-full flex flex-col items-center text-center'>
                    <h1 className='mb-8 text-4xl '>
                        CALENDAR
                    </h1>
                    <div className="w-full px-4 md:w-2/3">
                        <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23dee5ff&ctz=America%2FNew_York&showPrint=0&showTitle=0&src=Y180YTViYjM2MmE3ZWFkODNiOTRmYWZiZmRiNzMyNGFmMDNkZTZiNTQ1YmJkN2EyMDZhNzg3MGQ5NWI3MjQzMjA1QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%233F51B5" 
                            className="w-full"
                            height="600"
                            title="calendar">
                        </iframe>
                    </div>
                </div>
                <div className='announcements-container w-2/3 md:w-1/2 mx-auto flex flex-col items-center'>
                    <h1 className='mb-8 text-4xl '>
                        ANNOUNCEMENTS
                    </h1>

                    {loading ? (
                        <h1 className="mb-4 text-2xl">Loading...</h1>
                    ) : (
                        currentPosts.map((post) => (
                            <div
                                className={`post w-full px-4 py-2 mb-2 border-1 border-gray-400 ${
                                    selectedPost === post._id ? 'selected-post' : ''
                                }`}
                                key={post._id}
                                onClick={() => handlePostClick(post._id)}
                            >
                                <div className="text-2xl mb-2">{post.title}</div>
                                <div className="text-lg mb-1" style={{ wordWrap: "break-word" }}>
                                    {post.body}
                                </div>
                                <div className="text-lg">{post.date}</div>
                                {selectedPost === post._id && (
                                    <button
                                        className="delete-button bg-red-500 text-white px-2 py-1 mt-2"
                                        onClick={(event) => {
                                            event.stopPropagation();
                                            handleDeletePost(post._id);
                                        }}
                                    >
                                        DELETE
                                    </button>
                                )}
                            </div>
                            ))
                    )}

                    <div className='announcements-buttons px-4 mt-4 w-screen md:w-full flex flex-row justify-between'
                    >
                        <div className='paginate-menu w-screen md:text-xl '>
                            <ReactPaginate
                            previousLabel={"Previous"}
                            nextLabel={"Next"}
                            breakLabel={"..."}
                            pageCount={Math.ceil(listOfPosts.length / postsPerPage)}
                            marginPagesDisplayed={1}
                            pageRangeDisplayed={2}
                            onPageChange={handlePageChange}
                            containerClassName={"pagination flex justify-center space-x-4 list-none"}
                            activeClassName={"bg-slate-400 bg-opacity-50"}
                            pageLinkClassName={"border border-slate-800 px-1"}
                            previousClassName={"border border-slate-800 px-2"}
                            nextClassName={"border border-slate-800 px-2"}
                            />
                        </div>
                        
                        <div className='post-add-button'>
                            <a role="button" href="/create" className="inline-block border border-slate-800 cursor-pointer w-8 h-8  
                            text-center text-xl font-bold  transition duration-200 ease-in-out 
                            hover:bg-opacity-25 hover:bg-slate-400">
                                +
                            </a>
                        </div>
                    </div>
                    
                </div>

               
            </div>
            
        </div>
    )
}