import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import countdown from "./countdown";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Balázs and Sarah</title>
        <meta name="description" content="Balázs and Sarah wedding" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Balázs and Sarah
        </h1>

        <p className={styles.description}>
          Only {countdown()} days left!
        </p>

        <ul className={styles.menubar}>
            <Link href="/#section_rsvp"><li className={styles.menuitem}>RSVP</li></Link>
            <Link href="/#section_venue"><li className={styles.menuitem}>Menu 2</li></Link>
            <Link href="/#menu3"><li className={styles.menuitem}>Menu 3</li></Link>
        </ul>

        <div id='section_rsvp' className={styles.section}>RSVP form</div>
        <div id='section_venue' className={styles.section}>Map to the venue, parking directions</div>
        <div id='menu3' className={styles.section}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
