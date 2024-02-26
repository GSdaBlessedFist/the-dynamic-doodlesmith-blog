import React from 'react';
// import PostCard from '../components/PostCard';

import { getAllPosts } from '../lib/cosmic';
import Loader from "../components/Loader/page";
import PostCardNew from '../components/PostCardNew/page';

export default async function Page(): Promise<JSX.Element> {
  const posts = await getAllPosts();



  return (<>
    <main className=" mx-auto mt-2 max-w-4xl flex-col space-y-16 px-4 lg:px-0 overflow-hidden">
      <div className='max-w-4xl mx-auto '>
      {!posts && <Loader/>}
      {posts &&
        posts.map((post,index) => {
          const alignment = index % 2 === 0 ? "left" : "right";
          return (
            <div key={post.id} >
              <PostCardNew post={post} alignment={alignment}/>
            </div>
          );
        })}
        </div>
    </main>
    </>);
}
export const revalidate = 60;
