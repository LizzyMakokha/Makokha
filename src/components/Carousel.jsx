import React from 'react'

const Carousel = () => {
  return (
    <div>
    <section className="row">
        <div className="col-md-12">
            {/* Carousel */}
            <div className="carousel slide" data-bs-ride="carousel" id="mycarousel">
            {/* Carousel inner */}
            <div className="carousel-inner">
                {/* Image 1 */}
                <div className="carousel-item active">
                <img src="/lizzyimages/me.jpg" alt="carousel me2" className="d-block w-80" width={'1200px'} height={'600px'} />
                </div>

                {/* Image 2 */}
                <div className="carousel-item">
                <img src="/lizzyimages/me2.jpg" alt="carousel me5" className="d-block w-100" width={'1500'} height={'600'} />
                </div>

                {/* Image 3 */}
                <div className="carousel-item">
                <img src="/lizzyimages/me3.jpg" alt="carouselme3" className="d-block w-100" width={'1500'} height={'600'}/>
                </div>

                </div>
            {/* Controls */}
            <a
                href="#mycarousel"
                className="carousel-control-prev"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon bg-danger"></span>
            </a>

            <a
                href="#mycarousel"
                className="carousel-control-next"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon bg-danger"></span>
            </a>
            </div>
        </div>
        </section>

    </div>
  )
}

export default Carousel