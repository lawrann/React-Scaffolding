import React from "react";
import "./LandingPageStyles.css";
import Carousel from "../../components/Carousel/Carousel";

const LandingPage = () => {
  return (
    <React.Fragment>
      <div className="landing-container">
        <Carousel />
        <div className="container marketing">
          <h1 className="display-4">The Company</h1>
          <p className="lead">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit..
          </p>
          <hr className="my-4" />
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit
            amet commodo mi. Donec id lorem in nunc viverra porttitor. Sed nec
            accumsan mauris. Morbi ultricies eleifend nunc, ut pellentesque dui
            efficitur in. Donec risus est, pharetra a posuere nec, placerat sit
            amet diam. Pellentesque vel elit orci. Maecenas dui leo, dignissim
            nec augue quis, efficitur suscipit leo. Vivamus ultrices arcu vitae
            risus consequat lobortis. Nullam at massa erat. Mauris sit amet
            neque eu est congue pharetra. Quisque luctus viverra metus non
            tristique. Nullam convallis felis non orci mollis gravida.
            Vestibulum egestas tortor et varius commodo. Vestibulum rhoncus
            neque vehicula dui molestie eleifend non eget velit. Maecenas ac
            lobortis nisi.
          </p>
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">
                First <span className="text-muted">featurette</span> heading.
              </h2>
              <p className="lead">
                Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                id ligula porta felis euismod semper. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus
                ac cursus commodo.
              </p>
            </div>
            <div className="col-md-5">
              <img
                className="featurette-image img-fluid mx-auto"
                src="https://picsum.photos/id/1/500/500"
                alt="Generic placeholder image"
              />
            </div>
          </div>

          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading">
                Second <span className="text-muted">featurette</span> heading.
              </h2>
              <p className="lead">
                Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                id ligula porta felis euismod semper. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus
                ac cursus commodo.
              </p>
            </div>
            <div className="col-md-5 order-md-1">
              <img
                className="featurette-image img-fluid mx-auto"
                src="https://picsum.photos/id/2/500/500"
                alt="Generic placeholder image"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LandingPage;
