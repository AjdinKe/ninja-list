import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return ( 
        <>
            <Head>
                <title>Ninja List | Homepage</title>
            </Head>
            <nav>
                <div className="logo">
                    <Image src="/logo.png" alt="" width={129} height={77}/>
                </div>
                <div>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/ninjas">Ninja Listing</Link>
                </div>
            </nav>
        </>
     );
}
 
export default Navbar;
