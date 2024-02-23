import "./Imagessilder.scss";

const Imagessilder = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="5"
          aria-label="Slide 6"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="6"
          aria-label="Slide 1"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="./assets/p1.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="./assets/p2.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="./assets/p3.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="./assets/p4.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="./assets/p5.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="./assets/p6.jpg" className="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Imagessilder;
