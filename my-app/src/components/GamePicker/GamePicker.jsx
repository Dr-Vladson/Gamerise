import GameFeaturePicker from "../GameFeaturePicker/GameFeaturePicker";
import styles from "./GamePicker.module.css"

export default function GamePicker (){
    return ( 
        <section className={styles.wrap}>
            <div className={styles.container + " container"}>
                <div className={styles.content}>
                    <div className={styles.left}>
                        <div className={styles.titleContainer}>
                            <div className={styles.title}><h1>Оберіть гру для себе!</h1></div>
                        </div>
                        <div className={styles.form}>
                            <GameFeaturePicker featureTitle={"Категорія"}/>
                            <GameFeaturePicker featureTitle={"Кількість гравців"}/>
                            <GameFeaturePicker featureTitle={"Вік"}/>
                            <div className={styles.button}>
                                <div className={styles.buttonTitle}><p>Підібрати гру</p></div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.image}></div>
                    </div>
                </div>
            </div>
        </section>
    );
}