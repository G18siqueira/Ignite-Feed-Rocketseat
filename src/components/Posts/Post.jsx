import styles from "./post.module.scss";

const Post = ({ author, profession, content }) => {
  return (
    <article className={styles["post"]}>
      {/* Header */}
      <header className={styles["header"]}>
        <div className={styles["author"]}>
          <div className={styles["author-avatar"]}>
            <img
              src="https://avatars.githubusercontent.com/u/22178998?v=4"
              alt=""
            />
          </div>
          <div className={styles["author-info"]}>
            <h2 className={styles["name"]}>{author}</h2>
            <p className={styles["profession"]}>{profession}</p>
          </div>
        </div>

        <time
          className={styles["published"]}
          title="20 de maio às 17:36"
          dateTime="20/05/2023 17:36"
        >
          Publicado há 1h
        </time>
      </header>

      <div className={styles["content"]}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          <a href="#">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto</a> <a href="#">#nlw</a>
          <a href="#">#rocketseat </a>
        </p>
      </div>
    </article>
  );
};

export default Post;
