

import { getAllPosts } from '../lib/cosmic';
import Loader from "../components/Loader/page";
import PostCardNew from '../components/PostCardNew/page';
import {PostType} from "../lib/types";

// export async function getServerSideProps() {
//   const posts:PostType[] = await getAllPosts();
//   console.log("posts:"+ posts)
//   return {
//     props: { posts },
//     revalidate: 60
//   };
// }

export default async function Page(): Promise<JSX.Element> {

  const posts:PostType[] = await getAllPosts();

  return (<>
    <Loader />
    <main className="	 mx-auto mt-2 max-w-5xl flex-col space-y-16 px-4 lg:px-0 overflow-hidden shadow-[inset_0_0_40px_rgba(36,54,143,.4)]">
      <div className='max-w-4xl mx-auto '>
      {/* {!posts && <Loader/>} */}
      {posts &&
        posts.map((post:PostType,index:number) => {
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

