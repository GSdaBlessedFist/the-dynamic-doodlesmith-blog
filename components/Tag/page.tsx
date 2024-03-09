import React from 'react';
import styles from './styles.module.scss';

interface TagProps {
  children: React.ReactNode;
  themeColors?: { primary:string,primary_muted: string,primary_dark:string } | null; // Make themeColors optional
}

export default function Tag({
  children,
  themeColors = {primary:'defaultColor', primary_muted: 'defaultColor', primary_dark:"defaultColor"}, 
}: TagProps): JSX.Element {
  const borderColor = themeColors ? `2px ${themeColors.primary_dark} solid` : '';

  return (
    <div className={styles.tag} style={{ border: borderColor }}>
      <span className={styles.tagSpan}>
        {children}
      </span>
    </div>
  );
}
