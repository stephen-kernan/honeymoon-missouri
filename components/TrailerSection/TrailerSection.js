/* eslint-disable react/no-unknown-property */
import home from "../../styles/Home.module.scss";
import trailer from "./TrailerSection.module.scss";
export const TrailerSection = ({ variant }) => {
  return (
    <div className={`${home.pane} ${home[variant]}`}>
      <div className={trailer.trailerTitleContainer}>
        <h2 className={trailer.trailerTitle}>Official Trailer</h2>
      </div>
      <span className={trailer.trailerBox}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/Pa0C_sMvDCU?rel=0&modestbranding=1"
          title="YouTube video player"
          showinfo="0"
          frameborder="0"
          modestbranding="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </span>
    </div>
  );
};
