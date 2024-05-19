import { useRouter } from "next/router"
import styles from "../../styles/Home.module.css";
import Link from "next/link";

//SSG
export async function getStaticProps({params}){
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL|| '/';
    try {
        const req = await fetch(`${baseURL}/${params.name}.json`);
        if (!req.ok) {
            return { notFound: true }; // 404ページを表示するようにする
        }
        const data = await req.json();
        return {
            props: {
                ai: data,
            },
        };
    } catch (error) {
        return {
            notFound: true,
        };
    }
}
export async function getStaticPaths(){
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL|| '/';
    try{
        const req = await fetch (`${baseURL}/ai.json`);
    if (!req.ok) {
        return {paths: [], fallback: false};
    }
        const data = await req.json();
        const paths = data.map(ai=>{
            return{
                params:{
                    name: ai,
                },
            };
        });
    return{
        paths,
        fallback: false,
    };
}
    catch(error){
        return {
        paths: [],
        fallback: false,};
    }
}    
 
const Ai = ({ai}) => {
    const router = useRouter();
    const {name} = router.query
    if (!ai) {
        return <h1>データが見つかりませんでした</h1>;
    }
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