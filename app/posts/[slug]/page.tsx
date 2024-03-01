import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ArrowLeft from '../../../components/icons/ArrowLeft';
import { getPost } from '../../../lib/cosmic';
import { getRelatedPosts } from '../../../lib/cosmic';
import SuggestedPostCard from '../../../components/SuggestedPostCard';
import Tag from '../../../components/Tag/page';
import AuthorAvatar from '../../../components/AuthorAvatar/page';
import AuthorAttribution from '../../../components/AuthorAttribution/page';
import { sanitize } from 'isomorphic-dompurify';
import { PostType, Theme } from '../../../lib/types';
import Post from "../../../components/Post/page";
//import {useTheme} from "../../../context/ThemeProvider";



export default async ({ params }: { params: { slug: string } }) => {

  const post = await getPost({ params });
  const suggestedPosts = await getRelatedPosts({ params });

  
  return (
    <>
      <Post post={post} suggestedPosts={suggestedPosts}/>
      
    </>
  );
};
//export const revalidate = 60;
