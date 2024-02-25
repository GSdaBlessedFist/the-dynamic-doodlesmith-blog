import React from 'react';
import PostCard from '../components/PostCard';
import { getAllPosts } from '../lib/cosmic';
import Loader from "../components/Loader/page";

export default async function Page(): Promise<JSX.Element> {
  const posts = await getAllPosts();



  return (<>
    <main className="border-2 border-red-200 mx-auto mt-2 max-w-5xl flex-col space-y-16 px-4 lg:px-0 overflow-hidden">
      <div className='max-w-4xl mx-auto '>
      {!posts && <Loader/>}
      {posts &&
        posts.map((post) => {
          return (
            <div key={post.id} >
              <PostCard post={post} />
            </div>
          );
        })}
        </div>
    </main>
    </>);
}
export const revalidate = 60;
