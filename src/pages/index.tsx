import { Inter } from '@next/font/google'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>  
      <h1 className={styles.title} >Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nemo dolores perspiciatis, quae aliquid quaerat blanditiis sit rerum deleniti id officia? Rem placeat quaerat modi laboriosam laudantium deserunt earum reiciendis, nulla sint ea magni sapiente maxime tempore incidunt eaque! Ex autem a reiciendis nobis alias voluptas illum aperiam, officiis excepturi laudantium possimus adipisci qui perferendis optio necessitatibus, doloribus, dolorum ipsam ratione nulla porro quos fuga consequatur eius harum.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nemo dolores perspiciatis, quae aliquid quaerat blanditiis sit rerum deleniti id officia? Rem placeat quaerat modi laboriosam laudantium deserunt earum reiciendis, nulla sint ea magni sapiente maxime tempore incidunt eaque! Ex autem a reiciendis nobis alias voluptas illum aperiam, officiis excepturi laudantium possimus adipisci qui perferendis optio necessitatibus, doloribus, dolorum ipsam ratione nulla porro quos fuga consequatur eius harum.</p>
      
      <Link href="/ninjas">
      <button className={styles.btn}>See Ninja Listing</button>
      </Link>
    </div>
  )
}
