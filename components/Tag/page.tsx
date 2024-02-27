import React from 'react';
import styles from './styles.module.scss';

export default function Tag({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className={styles.tag}>
      <span className={styles.tagSpan}>
        {children}
      </span>
    </div>
  );
}
