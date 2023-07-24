import axios from "axios"
import { useEffect, useState } from "react"


interface Post {
    id: number;
    title: string;
    body: string;
    image: string;
  }
  
export function Announcements() {
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
        <div className='announcements-container my-16 py-16 shadow flex flex-col items-center justify-center'>
            <div className='announcements-header'>
                <h1 className='announcements-title'>
                    Announcements!
                </h1>
                <div>
                    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200">
                    <div className="collapse-title text-xl font-medium">
                        Focus me to see content
                    </div>
                    <div className="collapse-content"> 
                        <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="posts-container">
                {listOfPosts.map((post) => (
                <div className="post" key={post.id}>
                    
                    <div className="title">{post.title}</div>
                    <div className="body">{post.body}</div>
                    <div className="image">{post.image}</div>
                    abc
                </div>
                ))}
            </div>
        </div>
    )
}