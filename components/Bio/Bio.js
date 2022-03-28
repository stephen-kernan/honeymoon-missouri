import home from "../../styles/Home.module.scss";
import bio from "./Bio.module.scss";
import Image from "next/image";
import { useState } from "react";

export const Bio = ({
  variant,
  name,
  role,
  imgPath,
  content = [],
  paragraphCount = 1,
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const buttonLabel = expanded ? "Show Less" : "Show More"

  return (
    <div className={`${home.pane} ${home[variant]}`}>
      <div className={home.paneTextContainer}>
        <h2 className={home.paneTitle}>
          {name} – {role}{" "}
        </h2>
        <div className={home.profilePicture}>
          <Image src={imgPath} alt="" layout="fill" objectFit="cover" />
        </div>
        {content.map(
          (paragraph, i) =>
            (i <= paragraphCount - 1 || expanded) && (
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
  );
};
