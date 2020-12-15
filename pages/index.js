import Head from 'next/head';
import { gql, useQuery } from '@apollo/client';

import styles from '../styles/Home.module.css';
import Post from '../components/Post';

const QUERY_POSTS = gql`
  query QueryPosts {
    posts {
      nodes {
        id
        content
        title
        slug
      }
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(QUERY_POSTS);

  if (loading) {
    return <p>Loading ...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const posts = data.posts.nodes;

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

        {posts.map(({ id, title, url, content }) => (
          <Post key={id} url={url} title={title} content={content} />
        ))}
      </main>
    </div>
  );
}
