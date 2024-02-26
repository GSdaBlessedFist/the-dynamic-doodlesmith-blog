import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ArrowRight from '../icons/ArrowRight';
import Tag from '../Tag';
import { Post } from '../../lib/types';
import AuthorAttribution from '../AuthorAttribution/page';
import AuthorAvatar from '../AuthorAvatar/page';
import { sanitize } from 'isomorphic-dompurify';
import styles from "./styles.module.scss";

export default function PostCardNew({ post, alignment }: { post: Post; alignment?: string }) {
  const alignmentClass = alignment === "left" ? styles.alignLeft : styles.alignRight;
  const drawnAvatarClass = alignment === "left" ? styles.drawnAvatarRight : styles.drawnAvatarLeft;
  const authorSectionAlignmentClass = alignment === "left" ? styles.authorSectionRight: styles.authorSectionLeft;
  const articleInfoAlignmentClass = alignment === "left" ? styles.articleInfoAlignmentLeft : styles.articleInfoAlignmentRight;
  const teaserAlignmentClass = alignment === "left" ? styles.teaserSectionLeft : styles.teaserSectionRight;
  return (

    <div className={styles.postCard}>
      <div className={styles.heroSection}>
        {post.metadata.hero?.imgix_url && (
          <Link href={`/posts/${post.slug}`}>
            {/* <Image
              width={2800}
              height={400}
              className="mb-0 h-48 w-full rounded-xl bg-no-repeat object-cover object-center transition-transform duration-200 ease-out hover:scale-[1.02]"
              src={`${post.metadata.hero?.imgix_url}?w=1400&auto=format`}
              priority
              alt={post.title}
              placeholder="blur"
              blurDataURL={`${post.metadata.hero?.imgix_url}?auto=format,compress&q=1&blur=500&w=2`}
            /> */}
            <Title post={post} alignment={alignmentClass} />
          </Link>
        )}
      </div>

      <div className={styles.infoSection}>
        <div className={`${styles.authorSection} ${authorSectionAlignmentClass}`}>
          <div className={styles.authorInfo}>
            <AuthorAvatar post={post} />
            <AuthorAttribution post={post} />
          </div>
        </div>
        <div className={`${styles.articleInfoSection} ${articleInfoAlignmentClass}`}>
          <div className={`${styles.teaserSection} ${teaserAlignmentClass}`}>
            <div className={styles.teaser} dangerouslySetInnerHTML={{
              __html: sanitize(post.metadata.teaser) ?? '',
            }} />
          </div>

          <div className='flex gap-3'>
            <div className={styles.readMore}>
              <Link href={`/posts/${post.slug}`}>
                <div className="flex items-center space-x-2">
                  <span>Read more</span>
                  <ArrowRight className="h-4 w-4 text-inherit" />
                </div>
              </Link>
            </div>

            <div className={styles.tags}>
              {post.metadata.categories && post.metadata.categories.map((category) => (
                <Tag key={category.title}>{category.title}</Tag>
              ))}
            </div>
          </div>

        </div>

        <DrawnAvatar drawnAvatarAlignment={drawnAvatarClass} />
      </div>

    </div>
  );
}

const Title = ({ post, alignment }: { post: Post; alignment: string }) => {
  return (
    <div className={`${styles.title} ${alignment}`}>
      {post.title}
    </div>
  );
}

const DrawnAvatar = ({ drawnAvatarAlignment }: { drawnAvatarAlignment: string }) => {
  return (
    <div className={`${styles.drawnAvatar} ${drawnAvatarAlignment}`}>
        {/* <Image src={"/images/hmm.png"} width={200} height={250} alt={"thinking about it"} /> */}
    </div>
  );
}

