import React from "react";

const Imagen = props => {
  const { largeImageURL, likes, previewURL, tags, views } = props.imagen;
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card">
        <img src={previewURL} alt={tags} className="card-img-top"></img>
        <div className="card-body">
          <p className="card-text">{likes} likes</p>
          <p className="card-text">{views} vistas</p>
          <a
            href={largeImageURL}
            // eslint-disable-next-line react/jsx-no-target-blank
            target="_blank"
            className="btn btn-danger btn-block"
          >
            Ir a imagen
          </a>
        </div>
      </div>
    </div>
  );
};

export default Imagen;
