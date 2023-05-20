import Post from "./Post";
import styles from "./posts.module.scss";

const Posts = () => {
  return (
    <section className={styles["posts"]}>
      <Post
        author={"Gustavo Siqueira"}
        profession={"Front-end Developer"}
        content={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic magnam delectus repellat laudantium consequatur voluptates enim repudiandae quia quibusdam, eum repellendus, deleniti aliquam. Consectetur saepe maxime eos nam possimus repellendus."
        }
      />

      <Post
        author={"Naomi Matsura"}
        profession={"Front-end Developer"}
        content={
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam quisquam quas deleniti labore harum rerum!"
        }
      />

      <Post
        author={"Sonia M Domingos"}
        profession={"Front-end Developer"}
        content={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum dolore numquam incidunt? Perspiciatis, facilis et modi natus asperiores consequatur nulla culpa incidunt, reprehenderit voluptatem blanditiis ex! Tenetur mollitia facere molestias magnam corporis, a eum laudantium aspernatur, facilis porro, architecto ad."
        }
      />
    </section>
  );
};

export default Posts;
