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
import { useEffect, useState } from "react";

const Post = ({ post, suggestedPosts }: { post: PostType; suggestedPosts: PostType[] }) => {
  const themeColors = post.metadata.theme.metadata;
  const boxShadowColor = hexToRGBA(themeColors.primary, 0.4);
  const articleSections = post.metadata.article_sections.sections;
  const [explainationsHidden, setExplainationsHidden] = useState(false);
  const [displayOptionMessage, setDisplayOptionMessage] = useState("Instructions Only");

  function hideExplaination(e: any) {
    let option;
    switch (displayOptionMessage) {
      case "Instructions Only":
        option = "Include Explainations"
        break;
      case "Include Explainations":
        option = "Instructions Only";
        break;
      default: return
    }
    console.log(option)
    setExplainationsHidden(prevState => !prevState)
    setDisplayOptionMessage(option);
  }


  useEffect(() => {
    console.log(explainationsHidden)
  }, [explainationsHidden])

  useEffect(() => {
    document.documentElement.style.setProperty('--color-layout-primaryDark', 'hsla(230, 41%, 15%, 100%)');
    document.documentElement.style.setProperty('--color-layout-primary', 'hsla(230, 30%, 15%, 100%)');
    document.documentElement.style.setProperty('--color-layout-primary-muted', 'hsla(234, 20%, 48%,100%)');
    document.documentElement.style.setProperty('--tagsRow-view', "none");
    console.log(articleSections[0].classification)
  }, [])



  return (
    <>
      <div className={styles.post}>
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
        {/* <div className={styles.pageBackArrow}>
              <Link href="/" className="rounded-full border border-zinc-100 bg-white p-2   text-zinc-700 shadow-md dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300" >
                <ArrowLeft className="h-4 w-4 " />
              </Link>
            </div> */}
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

              <hr className={styles.hr} />

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
                <h2 className={styles.introduction} style={{ color: themeColors.primary }}>Introduction</h2>
                {/* <p style={{ color: themeColors.primary_dark }}>{post.metadata["introduction_body"]}</p> */}
                <div style={{ color: themeColors.primary_dark }} dangerouslySetInnerHTML={{ __html: sanitize(post.metadata["introduction_body"]) ?? "", }}></div>

                <button style={{background:`${themeColors.primary_muted}`}} className={`${styles.classificationButton} `} onClick={hideExplaination}>{displayOptionMessage}</button>

                {articleSections.map((section, index) => (
                  <div key={`section-${section.section_title}`} id={section.section_title}>
                    <div className={styles.header} style={{ color: themeColors.primary_muted }}>{section.section_title}</div>
                    <div className={` border-2 border-teal-600 ${explainationsHidden && section.classification === "explaination" ? styles.explaination : ""}`} dangerouslySetInnerHTML={{ __html: sanitize(section.section_body) ?? "", }}></div>

                  </div>
                ))}
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
