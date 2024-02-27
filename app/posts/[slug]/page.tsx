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

  // (() => {
  //   const { theme } = useTheme(); // Access theme from context

  //   useEffect(() => {
  //     applyTheme(theme); // Apply theme styles
  //   }, [theme]); // Re-apply theme when it changes

  //   function applyTheme() {
  //     if (theme) {
  //       document.documentElement.style.setProperty('--color-primary', theme.primary);
  //       document.documentElement.style.setProperty('--color-primary-muted', theme.primary_muted);
  //       document.documentElement.style.setProperty('--color-primary-dark', theme.primary_dark);
  //       document.documentElement.style.setProperty('--color-secondary', theme.secondary);
  //     }
  //   }
  // })()


  return (
    <>
      <Post post={post} suggestedPosts={suggestedPosts}/>
      
    </>
  );
};
//export const revalidate = 60;
