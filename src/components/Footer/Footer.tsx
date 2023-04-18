import * as React from 'react'
import styles from './Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAmazon,
  faGoogle,
  faInstagram,
  faItunes,
  faSpotify,
  faTiktok,
  faTwitter, faYoutube
} from '@fortawesome/free-brands-svg-icons'
import {ExternalRoutes} from "@/application-routes";
import {faRss} from "@fortawesome/free-solid-svg-icons";

export const Footer: React.FC<{}> = () => {

  return (
    <footer className={styles.Footer}>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href={ExternalRoutes.devsLives.rss}
          >
            <span className={styles.iconWrapper}><FontAwesomeIcon icon={faRss} size="sm"/></span> Feed RSS
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href={ExternalRoutes.devsLives.youtube}
          >
            <span className={styles.iconWrapper}><FontAwesomeIcon icon={faYoutube} size="sm"/></span> Youtube
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href={ExternalRoutes.devsLives.spotify}
          >
            <span className={styles.iconWrapper}><FontAwesomeIcon icon={faSpotify} size="sm"/></span> Spotify
          </a>
        </li>

        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href={ExternalRoutes.devsLives.applePodcast}
          >
            <span className={styles.iconWrapper}><FontAwesomeIcon icon={faItunes} size="sm"/></span> Apple Podcast
          </a>
        </li>

        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href={ExternalRoutes.devsLives.googlePodcast}
          >
            <span className={styles.iconWrapper}><FontAwesomeIcon icon={faGoogle} size="sm"/></span> Google Podcast
          </a>
        </li>

        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href={ExternalRoutes.devsLives.amazon}
          >
            <span className={styles.iconWrapper}><FontAwesomeIcon icon={faAmazon} size="sm"/></span> Amazon Music
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href={ExternalRoutes.devsLives.tiktok}
          >
            <span className={styles.iconWrapper}><FontAwesomeIcon icon={faTiktok} size="sm"/></span> TikTok
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href={ExternalRoutes.devsLives.instagram}
          >
            <span className={styles.iconWrapper}><FontAwesomeIcon icon={faInstagram} size="sm"/></span> Instagram
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href={ExternalRoutes.devsLives.twitter}
          >
            <span className={styles.iconWrapper}><FontAwesomeIcon icon={faTwitter} size="sm"/></span> Twitter
          </a>
        </li>
      </ul>
    </footer>
  );
}
