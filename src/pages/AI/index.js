import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function AI(){
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    return (
        <div className  ={styles.container}>
            <main className ={styles.main}>
                <h1 className ={styles.title}>
                        生成AIツールのまとめ
                </h1>
                <ul>
                    <li>
                        <Link href="/AI/ChatGPT" className ={styles.code}>
                        ChatGPT
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link href="/AI/claude3" className ={styles.code}>
                        claude3
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link href="/AI/MicrosoftCopilot" className ={styles.code}>
                        MicrosoftCopilot
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
