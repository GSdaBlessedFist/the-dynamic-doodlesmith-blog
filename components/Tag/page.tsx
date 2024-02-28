import React from 'react';
import styles from './styles.module.scss';

interface TagProps {
  children: React.ReactNode;
  themeColors?: { primary_muted: string } | null; // Make themeColors optional
}

export default function Tag({
  children,
  themeColors = { primary_muted: 'defaultColor' }, 
}: TagProps): JSX.Element {
  const borderColor = themeColors ? `2px ${themeColors.primary_muted} solid` : '';

  return (
    <div className={styles.tag} style={{ border: borderColor }}>
      <span className={styles.tagSpan}>
        {children}
      </span>
    </div>
  );
}
