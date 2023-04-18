import * as React from 'react'
import Head from 'next/head'
import styles from './podcast.module.scss'
import {Layout} from '@/components/Layout'
import {Podcast} from "@/lib/podcast/domain/podcast";

interface PodcastPageProps {
  episodes: Podcast[]
}

export const PodcastPage: React.FC<PodcastPageProps> = ({episodes = []}) => {
  const baseURL = process.env.NEXT_PUBLIC_URL;

  return (
    <Layout>
      <Head>
        <title>Devs Lives - Podcast</title>
        <link rel="icon" href="/favicon.ico"/>
        <meta name="description"
              content=""/>
        <link rel="alternate" href={`${baseURL}/podcast`} hrefLang="x-default"/>
        <meta property="og:image" content="/images/profile.jpg"/>
      </Head>

      <section className={styles.podcast}>
        <h3>Podcast</h3>
        <ul>
          {episodes.map(episode =>
            <li key={episode.episodeNumber}>
              <h4>{episode.episodeTitle}</h4>
              <iframe src={episode.link}
                      allowFullScreen loading="lazy"/>
            </li>
          )}
        </ul>
      </section>
    </Layout>
  );
}

export default PodcastPage
