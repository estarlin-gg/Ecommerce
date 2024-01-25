export const Button = ({ onClick, classes, icon,text }) => {
  return (
    <button onClick={onClick} className={classes}>
      {" "}
      {text} {icon}
    </button>
  );
};
