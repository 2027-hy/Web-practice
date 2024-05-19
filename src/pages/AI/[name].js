import { useRouter } from "next/router"
import styles from "../../styles/Home.module.css";
import Link from "next/link";

//SSR
export async function getServerSideProps({ params }) {
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const req = await fetch(`${baseURL}/${params.name}.json`);
    const data = await req.json();
    return {
        props: {
            ai: data,
        },
    };
}

const Ai = ({ai}) => {
    const router = useRouter();
    const {name} = router.query
    return (
    <div className  ={styles.container}>
        <main className ={styles.main}>
            <h1 className ={styles.title}>{name}のページです</h1>
            <p className ={styles.label}>{ai.message}<br /></p>
            <Link href= {ai.Link} className ={styles.code}>{name}へはこちらへ</Link>
            <Link href="/AI" className ={styles.code}>生成AIツールのまとめへ戻る</Link>
            </main>
            </div>
    );
}
export default Ai