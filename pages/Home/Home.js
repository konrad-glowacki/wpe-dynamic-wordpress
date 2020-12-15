import Head from 'next/head';

import styles from './Home.module.css';
import Post from '../../components/Post';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js with Dynamic wordpress data</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Headless Wordpress</h1>

        <p className={styles.description}>
          Next.js with dynamic data from Wordpress
        </p>

        <Post url='test' title='test' content='content' />
      </main>
    </div>
  );
}
