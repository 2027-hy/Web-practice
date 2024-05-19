import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function Weather(){
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL||'/';
    return (
        <div className  ={styles.container}>
            <main className ={styles.main}>
                <h1 className ={styles.title}>
                        川口市の天気のまとめサイト
                </h1>
                <ul>
                    <li>
                        <Link href="https://weathernews.jp/onebox/tenki/saitama/11203/" className ={styles.code}>
                        Wethernews
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link href="https://weather.yahoo.co.jp/weather/jp/11/4310/11203.html" className ={styles.code}>
                        yahoo天気
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link href="https://tenki.jp/forecast/3/14/4310/11203/1hour.html" className ={styles.code}>
                        天気気象協会
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                    <Link href= {baseURL} className ={styles.code}>戻る</Link>
                    </li>
                </ul>
            </main>

        </div>
    );
}
