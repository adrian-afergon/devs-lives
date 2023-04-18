import * as React from 'react'
import styles from './Layout.module.scss'
import {Header} from '../Header'
import {Footer} from '../Footer'
import Head from "next/head";

type LayoutProps = {
  children?: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Head>
      <title>Devs Lives</title>
      <link rel="icon" href="/favicon.ico"/>
      <meta name="description"
            content=""/>
      <meta property="og:image" content="/images/profile.jpg"/>
    </Head>

    <div className={styles.container}>
      <Header title={'Devs Lives'}/>
      <main>
          {children}
      </main>
      <Footer />
    </div>
  </>
)
