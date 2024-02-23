import "../../recommend/recommend.scss";

const Howl = () => {
  return (
    <div className="recommendWrapper">
      <div className="top">
        <img src="./assets/lm.jpg" alt="top img" />
      </div>
      <div className="down">
        <div className="left">
          <h3 className="subtitle">
            Recommended Cartoon -《 Howl's Moving Castle 》
          </h3>

          <div className="leftContent">
            <div className="leftImg">
              <img src="./assets/hedydcb-1.jpg" alt="left" />
            </div>
            <div className="rightContent">
              <div className="wrapper">
                <img src="./assets/hedydcb-2.jpg" alt="right wrapper" />
              </div>
              <div className="content">
                <p>
                  <strong>"Howl's Moving Castle"</strong> is an animated film
                  adapted from Diana Wynne Jones's novel "Howl's Moving Castle."
                  Produced by Studio Ghibli and directed by Hayao Miyazaki, it
                  features voice acting by Chieko Baisho, Takuya Kimura, Akihiro
                  Miwa, and Tatsuya Gashuin. The film was released in Japan on
                  November 20, 2004. The story follows young Sophie, cursed by
                  the Witch of the Waste to become an old woman, who finds
                  herself in the magical moving castle of the wizard Howl.
                  <br />
                  <br />
                  Set in a world where magic and science coexist in late 19th
                  century Europe, Sophie, an 18-year-old girl, works in a hat
                  shop inherited from her father. Her life changes after meeting
                  the handsome but infamous wizard Howl. That night, the Witch
                  of the Waste curses Sophie, transforming her into a
                  90-year-old woman. Sophie embarks on an adventure in Howl's
                  castle, meeting the fire demon Calcifer, young Markl, and
                  discovering the inner world of Howl. The film explores themes
                  of love, responsibility, and the impact of war, encapsulating
                  Miyazaki's anti-war message and his deep reflections on
                  paternal love.
                  <br />
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <ul>
            <li className="character">
              <img src="./assets/hedydcb-3.jpg" alt="Howl" />
              <span>Howl</span>
            </li>
            <li className="character">
              <img src="./assets/hedydcb-4.jpg" alt="Sophie" />
              <span>Sophie</span>
            </li>
            <li className="character">
              <img src="./assets/her5.jpg" alt="Markl" />
              <span>Markl</span>
            </li>
            <li className="character">
              <img src="./assets/her6.jpg" alt="Scarecrow Prince" />
              <span>Scarecrow Prince</span>
            </li>
            <li className="character">
              <img src="./assets/her7.jpg" alt="Witch of the Waste" />
              <span>Witch of the Waste</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Howl;
