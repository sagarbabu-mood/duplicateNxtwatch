import "./index.css";
//import LoginForm from "./component/Login_page";
import { withRouter, Link } from "react-router-dom";

const MainPage = (props) => {
  return (
    <div className="main-page-cont">
      <div className="cont-first3-main-page">
        <Link to="/batchtex">
          <button className="btn-main-page">
            <div className="card1">
              <p className="para1-main-page">Batch Tex</p>
              <img
                src="http://s3-ap-southeast-1.amazonaws.com/tuningfork-static-file-server/images/transcripts_w.png"
                width="100px"
                height="100px"
                alt="img"
              />
            </div>
          </button>
        </Link>
        <button className="btn-main-page">
          <div className="card2">
            <p className="para1-main-page">LP Diffusion</p>
            <img
              src="https://s3-ap-southeast-1.amazonaws.com/tuningfork-static-file-server/images/myprograms_w.png"
              width="100px"
              height="100px"
              alt="img"
            />
          </div>
        </button>
        <Link to="/lp">
          <button className="btn-main-page">
            <div className="card3">
              <p className="para1-main-page">LDSE</p>
              <img
                src="https://s3-ap-southeast-1.amazonaws.com/tuningfork-static-file-server/images/ebooks_w.png"
                width="100px"
                height="100px"
                alt="img"
              />
            </div>
          </button>
        </Link>
      </div>

      <div className="cont-first3-main-page">
        <Link to="/etch">
          <button className="btn-main-page">
            <div className="card4">
              <p className="para1-main-page">ETCH Process</p>
              <img
                src="https://s3-ap-southeast-1.amazonaws.com/tuningfork-static-file-server/images/feedback_w.png"
                width="100px"
                height="100px"
                alt="img"
              />
            </div>
          </button>
        </Link>
        <button className="btn-main-page">
          <div className="card5">
            <p className="para1-main-page">Annealing</p>
            <img
              src="https://s3-ap-southeast-1.amazonaws.com/tuningfork-static-file-server/images/elearing_w.png"
              width="100px"
              height="100px"
              alt="img"
            />
          </div>
        </button>
        <Link to="/backcoating">
          <button className="btn-main-page">
            <div className="card6">
              <p className="para1-main-page">Back Coating</p>
              <img
                src="https://s3-ap-southeast-1.amazonaws.com/tuningfork-static-file-server/images/onlinetest_w.png"
                width="100px"
                height="100px"
                alt="img"
              />
            </div>
          </button>
        </Link>
      </div>

      <div className="cont-first3-main-page">
        <Link to="/pecvd">
          <button className="btn-main-page">
            <div className="card7">
              <p className="para1-main-page">PECVD Process</p>
              <img
                src="	https://s3-ap-southeast-1.amazonaws.com/tuningfork-static-file-server/images/publication_w.png"
                width="100px"
                height="100px"
                alt="img"
              />
            </div>
          </button>
        </Link>
        <Link to="/lco">
          <button className="btn-main-page">
            <div className="card8">
              <p className="para1-main-page">LCO Process</p>
              <img
                src="https://s3-ap-southeast-1.amazonaws.com/tuningfork-static-file-server/images/streamingvideos_w.png"
                width="100px"
                height="100px"
                alt="img"
              />
            </div>
          </button>
        </Link>
        <Link to="">
          <button className="btn-main-page">
            <div className="card9">
              <p className="para1-main-page">Baccini Printing</p>
              <img
                src="https://s3-ap-southeast-1.amazonaws.com/tuningfork-static-file-server/images/thumbs-up_w.png"
                width="100px"
                height="100px"
                alt="img"
              />
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};
export default withRouter(MainPage);
