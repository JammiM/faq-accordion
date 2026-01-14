import iconExpand from "../assets/images/icon-plus.svg";

const ExpandButton = () => {
  return (
    <button>
      <img src={iconExpand} alt="Expand accordion" srcSet={iconExpand} />
    </button>
  );
};

export default ExpandButton;
