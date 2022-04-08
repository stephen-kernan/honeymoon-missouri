import home from "../../styles/Home.module.scss";
import photoGrid from "./PhotoGrid.module.scss";
export const PhotoGrid = ({ variant, photos, title, useRawImage=false }) => {
  return (
    <div className={`${home.pane} ${home[variant]}`}>
      <div className={photoGrid.title}>
        <h2>{title}</h2>
      </div>
      <div className={photoGrid.gridContainer}>
        {photos.map((photo) => (
          // <div className={photoGrid.gridImage} key={photo.url}></div>
          <div className={useRawImage ?  null : photoGrid.photoContainer}  key={photo.url}>
            <img
              src={photo.url}
              alt={photo.alt}
              className={photoGrid.gridImage}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
