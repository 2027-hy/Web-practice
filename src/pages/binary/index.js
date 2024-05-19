import styles from "../../styles/Home.module.css";
import { useState } from 'react';
import Link from "next/link";
 
function InputForm({ onSubmit }) {
    const [num, setNum] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(num);
    };
    return (
    <form  className ={styles.form} onSubmit={handleSubmit}>
        <label className ={styles.label}>
            Number:
            <input className ={styles.label} type="number"  name= "num" value={num} onChange={(event) => setNum(event.target.value)} />
            <button className ={styles.label} type="submit">送信</button>
        </label>
    </form>);
}

function changeBinary(num) {
    return parseInt(num, 10).toString(2);
}

export default function Binary(){
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL||'/';
    const [decimal, setDecimal] = useState('');
    const [binary, setBinary] = useState('');
    const update_num = (num) => {
        setDecimal(num);
        setBinary(changeBinary(num));
    }
    
    return (
        <div className  ={styles.container}>
            <main className ={styles.main}>
                <h1 className ={styles.title}>
                        2進数変換ツール
                </h1>
                <InputForm onSubmit={update_num} />
                {decimal && (
                    <div>
                        <p className={styles.code}>10進数: {decimal}</p>
                        <p className={styles.code}>2進数: {binary}</p>                     
                    </div>
                )}
                <Link href= {baseURL} className ={styles.code}>戻る</Link>
            </main>
        </div>
    );
}
