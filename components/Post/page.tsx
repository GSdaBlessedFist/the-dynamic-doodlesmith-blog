"use client"; /// <----------------------------?
import Image from "next/image";
import styles from "./styles.module.scss";
import Link from "next/link";
import { PostType } from "../../lib/types";
import ArrowRight from "../icons/ArrowRight";
import ArrowLeft from "../icons/ArrowLeft";
import AuthorAvatar from "../AuthorAvatar/page";
import AuthorAttribution from "../AuthorAttribution/page";
import Tag from "../Tag/page";
import { sanitize } from "isomorphic-dompurify";
import SuggestedPostCard from "../SuggestedPostCard";
import { hexToRGBA } from "../../utils/addOpacityToColorUtility";
import { useEffect } from "react";

const Post = ({ post, suggestedPosts }: { post: PostType; suggestedPosts: PostType[] }) => {
  const themeColors = post.metadata.theme.metadata;
  const boxShadowColor = hexToRGBA(themeColors.primary, 0.4);


  useEffect(() => {
    document.documentElement.style.setProperty('--color-layout-primaryDark', 'hsla(230, 41%, 15%, 100%)');
    document.documentElement.style.setProperty('--color-layout-primary' ,'hsla(230, 30%, 15%, 100%)'); 
    document.documentElement.style.setProperty('--color-layout-primary-muted', 'hsla(234, 20%, 48%,100%)');
    document.documentElement.style.setProperty('--tagsRow-view',"none");
  },[])



  return (
    <>
      <div className={styles.post}>
        <div className={styles.heroSection} style={{ backgroundColor: themeColors.primary }}>
          <Title post={post} themeColors= {themeColors} />
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
        {/* <div className={styles.pageBackArrow}>
              <Link href="/" className="rounded-full border border-zinc-100 bg-white p-2   text-zinc-700 shadow-md dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300" >
                <ArrowLeft className="h-4 w-4 " />
              </Link>
            </div> */}
        <main className={styles.main} style={{ boxShadow: `inset 0 0 40px ${boxShadowColor}` }}>
          {/* <div className=" mx-auto  flex w-full flex-col items-start justify-center px-4 md:flex-row border-4"> */}

          {/* <div className="mr-20 flex w-full max-w-3xl flex-col justify-start md:w-3/4"> */}

          {post && (
            <>
              <div className={styles.authorSection} style={{ background: themeColors.primary_muted }}>
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

              <hr className={styles.hr} />

              <div className={styles.tldr} style={{ background: themeColors.primary, color: "white" }}>
                {post.metadata.tldr && (
                  <div dangerouslySetInnerHTML={{ __html: sanitize(post.metadata.tldr) ?? "", }}></div>
                )}
              </div>
              {/* ******************************************************* */}
              {/* ******************************************************* */}
              {/* ******************************************************* */}





              <article className={styles.articleSection}>
                <h2 className={styles.introduction} style={{ color: themeColors.primary }}>Introduction</h2>
                <div dangerouslySetInnerHTML={{ __html: sanitize(post.metadata.article_sections[0].section) ?? "", }}></div>

                <div className={styles.articleGrid}>
                  <div className={styles.articlePic1}></div>
                  <div className={`${styles.section} ${styles.section1}`}>
                    <div dangerouslySetInnerHTML={{ __html: sanitize(post.metadata.article_sections[1].section) ?? "", }}></div>
                  </div>

                  <div className={styles.articlePic2}></div>
                  <div className={`${styles.section} ${styles.section2}`}>
                    <div dangerouslySetInnerHTML={{ __html: sanitize(post.metadata.article_sections[2].section) ?? "", }}></div>
                  </div>

                </div>
              </article>
            </>
          )}




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

const Title = ({ post, themeColors }: { post: PostType, themeColors:any}) => {

  return (
    <div className={styles.title} style={{ color: themeColors.secondary }}>
      {post.title}
    </div>
  );
}