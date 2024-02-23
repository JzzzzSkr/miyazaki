import "../../recommend/recommend.scss";

const Totoro = () => {
  return (
    <div className="recommendWrapper">
      <div className="top">
        <img src="./assets/lm.jpg" alt="" />
      </div>
      <div className="down">
        <div className="left">
          <h3 className="subtitle">
            Recommend carton -《 My Neighbor Totoro 》
          </h3>

          <div className="leftContent">
            <div className="leftImg">
              <img src="./assets/lm-1.jpg" alt="" />
            </div>
            <div className="rightContent">
              <div className="wrapper">
                <img src="./assets/lm-2.jpg" alt="" />
              </div>
              <div className="content">
                <p>
                  <strong>"My Neighbor Totoro"</strong> is an animated film
                  directed by Hayao Miyazaki, with voice acting by Noriko
                  Hidaka, Chika Sakamoto, and Shigesato Itoi. It was released in
                  Japan on April 16, 1988, with a high-definition remastered
                  version released in China on December 14, 2018. The story
                  revolves around the Satsuki and Mei Kusakabe, daughters of
                  Tatsuo Kusakabe. After their mother, Yasuko Kusakabe, falls
                  ill and is hospitalized, the family moves to the countryside.
                  <br />
                  <br />
                  The girls quickly discover that the seemingly ordinary
                  countryside is filled with magical things, such as "soot
                  sprites" that can gather and disperse, forest spirits, the
                  titular character Totoro, and the ever-smiling Catbus. One
                  day, after a quarrel with her sister, Mei runs away to find
                  their hospitalized mother but gets lost. Satsuki, unable to
                  find her, seeks help from Totoro. The kind and gentle Totoro
                  summons the Catbus, which helps Satsuki find her lost sister.
                  Riding on the Totoro's "aircraft," Mei delivers a corn cob she
                  picked herself to her mother, hoping for her swift recovery.
                  Totoro can both fly through the air and make seeds grow into
                  giant trees instantly. He can also call upon the fast-moving
                  Catbus. On starry nights, Totoro can be seen sitting atop the
                  forest, playing a small ocarina. Totoro's magical powers
                  greatly impress and inspire Satsuki and Mei. However, not
                  everyone can see Totoro; only pure-hearted children can meet
                  him.
                  <br />
                  <br />
                  The film's beautiful visuals are filled with the fresh
                  atmosphere of rural countryside, but it does not lack
                  thrilling moments. These scenes, though tense for the
                  audience, contribute to the film's engaging charm. It
                  resonates with viewers of all ages, making it suitable for
                  both children and adults. Under Miyazaki's genius, Totoro is
                  portrayed as a soft and cuddly "pet" worthy of admiration,
                  serving as a bed, a magician, and a companion for picking
                  mountain fruits with Satsuki and Mei. Each scene exudes
                  nature's nurturing care for humanity, preserving the viewers'
                  childhood innocence.
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
              <img src="./assets/lm-3.jpg" alt="" />
              <span>Kusakabe Mei</span>
            </li>
            <li className="character">
              <img src="./assets/lm-4.jpg" alt="" />
              <span>Kusakabe Satsuki</span>
            </li>
            <li className="character">
              <img src="./assets/lm-5.jpg" alt="" />
              <span>Totoro</span>
            </li>
            <li className="character">
              <img src="./assets/lm6.png" alt="" />
              <span>Kusakabe Tatsuo</span>
            </li>
            <li className="character">
              <img src="./assets/lm7.png" alt="" />
              <span>Ogaki Kanta</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Totoro;
