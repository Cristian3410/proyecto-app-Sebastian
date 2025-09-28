import styles from "../../styles/Home.module.css";
import video from "./../../../src/video.mp4";
import ImagenNegocio from "../../public/imgs/imagenNegocio.jpeg"

function HomePage() {
  return (
    <main className={styles.Body}>
        <div className={styles.Container}>
      <div className={styles.VideoWrapper}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className={styles.VideoBackground}
        >
          <source src={video} type="video/mp4" />
        </video>
        </div>
         <div className={styles.Generos}>
        <img src={ImagenNegocio} className={styles.imagen}/>
        <div className={styles.overlay}>
            <div className={styles.brngroup}>
                <button className={styles.btn}>Hombre</button>
          <button className={styles.btn} >Mujer</button>
            </div>
        </div>
      </div>
      </div>
    </main>
  );
}

export default HomePage;
