import "./Home.scss";
import Imagessilder from "./imagesSilder/Imagessilder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarsIcon from "@mui/icons-material/Stars";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import Quotes from "./quotes/Quotes";
import Moment from "./moment/Moment";

const Home = () => {
  return (
    <div className="homeWrapper">
      <Imagessilder></Imagessilder>
      <div className="content">
        <div className="box top">
          <div className="benefit">
            <div className="benicon">
              <FavoriteIcon fontSize="large" style={{ color: "#3e95b0" }} />
            </div>
            <div className="bentitle">Warm and Touching</div>
            <div className="bencontent">
              <p>
                Hayao Miyazaki's anime features delicate and intricate
                animation, the character development is also very appropriate,
                and each of his anime contains a wealth of profound life
                philosophies.
              </p>
            </div>
          </div>
          <div className="benefit">
            <div className="benicon">
              <StarsIcon fontSize="large" style={{ color: "#3e95b0" }} />
            </div>
            <div className="bentitle">Looking Towards the Future</div>
            <div className="bencontent">
              <p>
                It is Hayao Miyazaki's own concern, and through his works, we
                can see his care for the fate and future of humanity.
              </p>
            </div>
          </div>
          <div className="benefit">
            <div className="benicon">
              <EmojiObjectsIcon fontSize="large" style={{ color: "#3e95b0" }} />
            </div>
            <div className="bentitle">Unbridled Imagination</div>
            <div className="bencontent">
              <p>
                Hayao Miyazaki integrates humans, nature, and modern technology
                into his anime, creating works of unbridled imagination. He once
                said that he hopes to save the falling souls of humanity.
              </p>
            </div>
          </div>
        </div>

        <Quotes></Quotes>

        <Moment></Moment>
      </div>
    </div>
  );
};

export default Home;
