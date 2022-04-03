import home from "../../styles/Home.module.scss";
import trailer from "./TrailerSection.module.scss"
export const TrailerSection = ({ variant }) => {
  return (
    <div className={`${home.pane} ${home[variant]}`}>
      <span className={trailer.trailerBox}></span>
    </div>
  );
};
