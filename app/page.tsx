"use client";
import { getAllPosts } from '../lib/cosmic';
import Loader from "../components/Loader/page";
import PostCardNew from '../components/PostCardNew/page';
import { PostType } from "../lib/types";
import { useEffect, useState } from 'react';



// export default async function Page(): Promise<JSX.Element> {
export default  function Page(): Promise<JSX.Element> {
  const [posts, setPosts] = useState([])


  useEffect(() =>{

  },[]);

  useEffect(() =>{
    document.documentElement.style.setProperty('--color-layout-primaryDark','#152055' );
    document.documentElement.style.setProperty('--color-layout-primary' ,'#24368F'); 
    document.documentElement.style.setProperty('--tagsRow-view',"flex");
  },[]);

  useEffect(() => {
    async function getPosts() {
      const newPosts = await getAllPosts();
      setPosts([...newPosts]);
    }
    getPosts();
    
  }, []);





  return (<>
    {/* {!Loader.isPlayed && <Loader />} */}
    <main className="	 mx-auto mt-2 max-w-5xl flex-col space-y-16 px-4 lg:px-0 overflow-hidden shadow-[inset_0_0_40px_rgba(36,54,143,.4)]">
      <div className='max-w-5xl mx-auto '>
        {/* {!posts && <Loader/>} */}
        {posts &&
          posts.map((post: PostType, index: number) => {
            const alignment = index % 2 === 0 ? "left" : "right";
            return (
              <div key={post.id} >
                <PostCardNew post={post} alignment={alignment} />
              </div>
            );
          })}
      </div>
    </main>
  </>);
}



