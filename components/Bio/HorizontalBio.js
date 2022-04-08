import home from "../../styles/Home.module.scss";
import { useState } from "react";

export const HorizontalBio = ({
  name,
  role,
  imgPath,
  content = [],
  paragraphCount = 1,
  alt
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const buttonLabel = expanded ? "Show Less" : "Show More";

  return (
    <div className={home.horizontalBio}>
      <div className={home.paneTextContainer}>
        <div className={home.profilePicture}>
          <img src={imgPath} alt={alt} />
        </div>
        <div>
          <h2 className={home.paneTitle}>
            {name} – {role}
          </h2>
          {content.map(
            (paragraph, i) =>
              (i < 1 || expanded) && (
                <>
                  <p key={paragraph[0]}>{paragraph}</p>
                  <br />
                </>
              )
          )}
          {content.length > paragraphCount && (
            <button className={home.showMore} onClick={toggleExpanded}>
              {buttonLabel}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
