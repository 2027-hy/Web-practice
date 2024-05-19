import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function List(){

    return (
        <div className  ={styles.container}>
            <main className ={styles.main}>
                <h1 className ={styles.title}>
                        Webサイト作成練習
                </h1>
                <ul>
                    <li>
                        <Link href="/weather" className ={styles.code}>
                        川口市の天気のまとめサイト
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link href="/AI" className ={styles.code}>
                        生成AIツールのリンクのまとめ
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link href="/binary" className ={styles.code}>
                        二進数変換ツール
                        </Link>
                    </li>
                </ul>
            </main>
        </div>
    );
}
