import styles from './Post.module.css';

export default function Post({ url, title, content }) {
  return (
    <div className={styles.grid}>
      <a href={url} className={styles.card}>
        <h3>{title}</h3>
        <p>{content}</p>
      </a>
    </div>
  );
}
