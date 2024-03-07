"use client"
import Link from "next/link";
import styles from "./styles.module.scss";

import { getAllCategories } from "../../lib/cosmic";
import { useEffect, useState } from "react";

export default function TagsRow(){
    const [tags, setTags] = useState([]);

    useEffect(() => {
        const fetchTags = async () => {
            const fetchedTags = await getAllCategories();
            setTags(fetchedTags);
        };
        fetchTags();
    }, []);
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
