import styles from "./avatar.module.scss";
const Avatar = ({ src, hasBorder = true }) => {
  return (
    <div className={hasBorder ? styles["avatarWithBorder"] : styles["avatar"]}>
      <img src={src} alt="" />
    </div>
  );
};

export default Avatar;
