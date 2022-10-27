import Layout from 'components/Layout';
import Head from 'next/head';

export default function FirstPost() {
  return (
    <Layout home={false}>
      <Head>
        <title>FirstPost</title>
      </Head>
      <h1>FirstPost</h1>
    </Layout>
  );
}
