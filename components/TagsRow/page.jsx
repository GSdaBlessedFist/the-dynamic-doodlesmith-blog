
import Link from "next/link";
import styles from "./styles.module.scss";

import { getAllCategories } from "../../lib/cosmic";

const TagsRow =  async() => {
    const tags = await getAllCategories();
    
    console.log(tags);
    return (
        <div className={styles.tagsRow}>
            {tags.map((tag,i) =>(
                <div key={tag.slug || i}>
                    <button className={styles.button}>
                    <Link href={"/"} className="truncate">{tag.title.toUpperCase()}</Link>
                    </button>
                </div>
            ))}
        </div>
    );
}

export default TagsRow;