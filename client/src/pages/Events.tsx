import axios from "axios"
import { useEffect, useState } from "react"
import ReactPaginate from 'react-paginate'



interface Post {
    id: number;
    title: string;
    body: string;
    date: string;
  }

export function Events() {
    const [listOfPosts, setListOfPosts] = useState<Post[]>([]);

    useEffect(() => {
        axios.get<Post[]>("http://localhost:3001/announcements")
        .then((response) => {
            setListOfPosts(response.data);
        })
        .catch((error) => {
            console.error("Error fetching announcements:", error);
        });
    }, []);

    return (
        <div className='events-container h-full w-full flex flex-col items-center justify-center font-oswald'>
            <div className='events-header w-full bg-slate-700'>
                <div className='events-text-container mt-36 mb-4 ml-32'>
                    <h1 className='text-6xl text-white'>
                        EVENTS
                    </h1>
                </div>
            </div>
            <div className='events-content my-16 w-full flex flex-col justify-normal text-center'>
                <div className='calendar-container mb-16 w-full flex flex-col items-center'>
                    <h1 className='mb-8 text-4xl text-slate-700'>
                        CALENDAR
                    </h1>
                    <div>
                        <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23dee5ff&ctz=America%2FNew_York&showPrint=0&showTitle=0&src=Y180YTViYjM2MmE3ZWFkODNiOTRmYWZiZmRiNzMyNGFmMDNkZTZiNTQ1YmJkN2EyMDZhNzg3MGQ5NWI3MjQzMjA1QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%233F51B5" width="1000" height="600"></iframe>
                    </div>
                </div>
                <div className='announcements-container w-1/2 mx-auto flex flex-col items-center'>
                    <h1 className='mb-8 text-4xl text-slate-700'>
                        ANNOUNCEMENTS
                    </h1>
                    {listOfPosts.slice().reverse().map((post) => (
                    <div className="post w-full px-4 py-2 mb-2 border-1 border-gray-400" key={post.id}>
                        
                        <div className="text-2xl mb-2">{post.title}</div>
                        <div className="text-lg mb-1" style={{ wordWrap: "break-word" }}>
                            {post.body}
                        </div>
                        <div className="text-lg">{post.date}</div>
                    </div>
                    ))}
                    
                </div>

                <div className='post-add-button self-end'>
                        <a role="button" href="/create" className="inline-block border border-slate-800 cursor-pointer w-8 h-8  
                        text-center text-xl font-bold text-slate-800 transition duration-200 ease-in-out 
                        hover:bg-opacity-25 hover:bg-slate-400">
                            +
                        </a>
                    </div>
            </div>
            
        </div>
    )
}