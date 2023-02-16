import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import styles from "../../styles/Ninjas.module.css"
import Link from "next/link";


export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    
    return {
        props: { ninjas: data }
    }
}

const Ninjas = ({ ninjas }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Ninja List | Ninjas</title>
      </Head>
      <div>
        <h1>All Ninjas</h1>
        {
            ninjas.map((ninja: any) => (
                <Link href={'/ninjas/' + ninja.id} key={ninja.id}>
                    <div className={styles.single}>
                        <h3>{ ninja.name }</h3>
                    </div>
                </Link>
            ))
        }
      </div>
    </>
  );
};

export default Ninjas;
