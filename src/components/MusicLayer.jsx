
import styles from "./MusicLayer.module.css";

function MusicLayer({ className }) {
    return (
        <>
            <section className={`${styles.musicLayer} ${className || ""}`}>
                <div className={`${styles.lyricContainer} default-boxshadow`}>
                    <p>Maybe we seek for something that
                        <br />
                        We couldn't ever have
                    </p>

                    <p>Maybe we choose the only love
                        <br />
                        We know we won't accept
                    </p>

                    <p>Or maybe we're taking all the risks
                        <br />
                        For something that is real
                    </p>

                    <p>Cause maybe the greatest love of all
                        <br />
                        Is who the eyes can't see yeah
                    </p>
                </div>
                <div className={styles.metadata}>
                    <img className={`${styles.albumCover} default-boxshadow `} src="/album_cover.jpg" width="64px" height="64px" alt="album cover" />
                    <div>
                        <h1 className={styles.title}>To The Bone</h1>
                        <p className={`${styles.artist} text-sm`}>Pamungkas</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default MusicLayer;