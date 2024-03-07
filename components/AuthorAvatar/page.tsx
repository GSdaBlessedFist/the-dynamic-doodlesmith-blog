import Image from 'next/image';
import Link from 'next/link';
import { PostType } from '../../lib/types';
import styles from "./styles.module.scss";

export default function AuthorAvatar({ post }: { post: PostType }): JSX.Element {
  return (
    <Link href={`/author/${post.metadata.author?.slug}`}>
      <Image
        className={styles.avatarImage}
        src={`${post.metadata.author?.metadata.image?.imgix_url}?w=100&auto=format`}
        width={48}
        height={48}
        alt={post.title}
      ></Image>
    </Link>
  );
}
