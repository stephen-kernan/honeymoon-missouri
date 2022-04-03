import home from "../../styles/Home.module.scss";
import photoGrid from "./PhotoGrid.module.scss";
export const PhotoGrid = ({ variant, photos, title }) => {
  return (
    <div className={`${home.pane} ${home[variant]}`}>
      <div className={photoGrid.title} >
        <h2>{title}</h2>
      </div>
      <div className={photoGrid.gridContainer}>
        {photos.map((photo) => (
          <div className={photoGrid.gridImage} key={photo.url}></div>
          // <img src={photo.url} alt={photo.alt} key={photo.url} className={photoGrid.gridImage} />
        ))}
      </div>
    </div>
  );
};
