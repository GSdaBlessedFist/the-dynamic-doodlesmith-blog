import Link from "next/link";
import styles from "./styles.module.scss";

const TagsRow = () => {

    const tags = ["React","Medusa.js","SVG"];
    return (
        <div className={styles.tagsRow}>
            {tags.map((tag,i) =>(
                <div key={`tag-${tag}`}>
                    <button className={styles.button}>
                    <Link href={"/"}>{tag}</Link>
                    </button>
                </div>
            ))}
        </div>
    );
}

export default TagsRow;