"use client"; /// <----------------------------?
import Image from "next/image";
import styles from "./styles.module.scss";
import Link from "next/link";
import { PostType,OverlayInfo } from "../../lib/types";
import ArrowRight from "../icons/ArrowRight";
import ArrowLeft from "../icons/ArrowLeft";
import AuthorAvatar from "../AuthorAvatar/page";
import AuthorAttribution from "../AuthorAttribution/page";
import Tag from "../Tag/page";
import { sanitize } from "isomorphic-dompurify";
import SuggestedPostCard from "../SuggestedPostCard";
import { hexToRGBA } from "../../utils/addOpacityToColorUtility";
import React, { useEffect, useRef, useState } from "react";
import Markdown from 'react-markdown'
import overlayConfigurations from "../Overlays/overlays";
import Overlay from "../Overlays/page";


const Post = ({ post, suggestedPosts }: { post: PostType; suggestedPosts: PostType[] }) => {
  const themeColors = post.metadata.theme.metadata;
  const boxShadowColor = hexToRGBA(themeColors.primary, 0.4);
  const articleSections = post.metadata.article_sections.sections;
  const [filteredSections, setFilteredSections] = useState([]);



  const regexPattern = /Introduction/;
  // imageSources = the targeted markdown 
  // those get passed to the OVerlay where cooridinates will be obtained



  const articleBodyMarkdown = {
    p: ({ ...props }) => (<p className="w-full px-6 py-3 text-slate-600 text-xl tracking-wide my-4 " {...props} />),
    strong: ({ ...props }) => (<strong style={{ color: themeColors.primary_dark }} {...props} />),
    h2: ({ ...props }) => (<h2 style={{ color: themeColors.primary }} {...props} />),
    h3: ({ ...props }) => (<h3 style={{ color: themeColors.primary_dark }} className=" font-bold text-3xl" {...props} />),
    h4: ({ ...props }) => (<h4 style={{ color: themeColors.primary_muted }} className="px-8 font-bold text-3xl" {...props} />),
    li: ({ ...props }) => (<li style={{ color: themeColors.primary }} className="text-lg ml-10 my-4  list-decimal" {...props} />),
    // a: ({ ...props }) => (<Link href={props.href} className="text-md text-[#428A7F] tracking-normal font-bold" {...props} />),
    a: ({ ...props }) => {
      if (props.href.startsWith('#')) {
        return (<Link href={props.href} className="tracking-normal font-bold" style={{ color: themeColors.primary }} {...props}></Link>)
      } else {
        return (<Link href={props.href} className="tracking-normal font-bold" style={{ color: themeColors.primary }} {...props} target="_blank" rel="noopener noreferrer"></Link>)
      }

    },
    pre: ({ ...props }) => (<pre {...props} className={`my-6 mx-4 w-[96%] overflow-x-auto block  bg-slate-800  p-3 rounded-md`} style={{ color: themeColors.primary_muted }} />),
    code: ({ ...props }) => (<code {...props} className={` text-base`} />)
  }


  useEffect(() => {
    document.documentElement.style.setProperty('--color-layout-primaryDark', 'hsla(230, 41%, 15%, 100%)');
    document.documentElement.style.setProperty('--color-layout-primary', 'hsla(230, 30%, 15%, 100%)');
    document.documentElement.style.setProperty('--color-layout-primary-muted', 'hsla(234, 20%, 48%,100%)');
    document.documentElement.style.setProperty('--tagsRow-view', "none");

  }, [])
  const overlayInfo:OverlayInfo[] = [];
  useEffect(() => {

    const config = overlayConfigurations(post.slug, articleSections)
    config.forEach((section:any, index:number) => {
      const element = document.getElementById(config[index].section_slug) || null
      if(element) element.style.border = "10px blue solid" ;
      console.log("config")
      console.log(config)
      overlayInfo.push(
        {
          ...section,
          dimensions: element?.getBoundingClientRect()
        })
    });
    //console.log("%cOverlayInfo: %o", "color:steelblue;font-size:1.5rem", overlayInfo)
  }, [post]);



  return (
    <>
      <div className={`${styles.post} openSansFont`}>
        <div className={styles.heroSection} >
          <Title post={post} themeColors={themeColors} />
          {post && post.metadata.hero?.imgix_url && (
            <Image

              className={styles.hero}
              fill={true}
              src={`${post.metadata.hero?.imgix_url}?w=1400&auto=format`}
              priority
              alt={post.title}
              placeholder="blur"
              blurDataURL={`${post.metadata.hero?.imgix_url}?auto=format,compress&q=1&blur=500&w=2`}
            />
          )}
        </div>


        <main className={styles.main} style={{ boxShadow: `inset 0 0 40px ${boxShadowColor}` }}>


          {post && (
            <>
              <div className={styles.authorSection} style={{ background: themeColors.primary }}>
                <div className={styles.authorInfo}>
                  <AuthorAvatar post={post} />
                  <AuthorAttribution post={post} />
                </div>
                <div className={styles.tags}>
                  {post.metadata.categories &&
                    post.metadata.categories.map((category) => (
                      <Tag key={category.title} themeColors={themeColors}>{category.title}</Tag>
                    ))}
                </div>
              </div>


              <div className="bg-grayDark w-full text-center p-6 px-60">
                <h1 className="text-[2rem] font-bold text-white">
                  {post.title}
                </h1>

              </div>


              <div className={styles.tldr} style={{ background: themeColors.primary_muted, borderBottom: `5px ${themeColors.primary_dark} solid`, color: "white" }}>
                {post.metadata.tldr && (
                  <div dangerouslySetInnerHTML={{ __html: sanitize(post.metadata.tldr) ?? "", }}></div>
                )}
              </div>

              {/* ******************************************************* */}
              {/* ******************************************************* */}
              {/* ******************************************************* */}
              {/* ******************************************************* */}
              {/* ******************************************************* */}
              {/* ******************************************************* */}


              <article className={styles.articleSection}>
                <div className={styles.underlay}></div>

                {articleSections.map((section, index) => (
                  <div key={`section-${section.section_title}`} id={section.section_slug}>
                    <div className={styles.header} style={{ color: themeColors.primary }}>{section.section_title}</div>

                    <div>
                      <Markdown className="w-[900px]  bg-transparent overflow-hidden" components={articleBodyMarkdown}>{section.section_body}</Markdown>
                    </div>

                  </div>
                ))}



                {/* <div className={styles.pageBackArrow}>
                    <Link href="/" className="rounded-full border border-zinc-100 bg-white p-6  opacity-25 text-zinc-700 shadow-md dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300" >
                    <ArrowLeft className="h-16 w-16 " />
                    </Link>
                  </div> */}

                <Overlay overlayInfo={overlayInfo} />
              </article>
            </>
          )}



          {/* ******************************************************* */}
          {/* ******************************************************* */}
          {/* ******************************************************* */}
          {/* ******************************************************* */}
          {/* ******************************************************* */}
          {/* ******************************************************* */}

          <div className="mx-auto mt-8 w-full">
            <hr className="w-full border-t border-zinc-300 pb-8 dark:border-zinc-700" />
            {suggestedPosts && (
              <div className="flex w-full flex-col">
                <h3 className="pb-3 text-xl font-semibold text-zinc-800 dark:text-zinc-200">
                  Suggested Posts
                </h3>
                <div className="flex flex-col space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                  {suggestedPosts
                    // .filter((nextPost) => nextPost?.id !== post?.id)
                    .slice(0, 2)
                    .map((post) => {
                      return (
                        <SuggestedPostCard key={post.id} post={post} />
                      );
                    })}
                </div>
              </div>
            )}
          </div>
          {/* </div> */}
          {/* </div> */}
        </main>
      </div>
    </>
  );
};

export default Post;

const Title = ({ post, themeColors }: { post: PostType, themeColors: any }) => {

  return (
    <div className={styles.title} style={{ color: themeColors.secondary }}>
      {post.title}
    </div>
  );
}
