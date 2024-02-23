import "../../recommend/recommend.scss";

const Kiki = () => {
  return (
    <div className="recommendWrapper">
      <div className="top">
        <img src="./assets/lm.jpg" alt="top" />
      </div>
      <div className="down">
        <div className="left">
          <h3 className="subtitle">
            Recommended Cartoon -《 Kiki's Delivery 》
          </h3>

          <div className="leftContent">
            <div className="leftImg">
              <img src="./assets/mnzjb-1.jpg" alt="lef" />
            </div>
            <div className="rightContent">
              <div className="wrapper">
                <img src="./assets/mnzjb-2.jpg" alt="rig" />
              </div>
              <div className="content">
                <p>
                  <strong>"Kiki's Delivery Service" ("魔女の宅急便")</strong> is
                  an animated film produced by Studio Ghibli, adapted from the
                  eponymous novel by Eiko Kadono. Directed by Hayao Miyazaki,
                  the film stars Minami Takayama, Rei Sakuma, Kappei Yamaguchi,
                  Keiko Toda, and Mieko Nobusawa. The movie narrates the story
                  of a young witch, Kiki, and her journey of independent
                  training away from home, portraying the challenges faced by
                  typical Japanese adolescent girls striving for independence
                  and self-reliance.
                  <br />
                  <br />
                  Upon reaching the age of 13, witches must leave their homes
                  for a year of independent training. Kiki, accompanied by her
                  black cat Jiji, arrives in a seaside city. After earning the
                  favor of a bakery owner by delivering a lost item, Kiki starts
                  a delivery service using her flying magic. She adapts to her
                  new environment, her business thrives, and she makes many new
                  friends, including a boy passionate about airplanes, nicknamed
                  "Tombo." Kiki's magical powers weaken after helping an elderly
                  woman, but her friend Ursula helps restore her confidence.
                  Kiki heroically saves "Tombo" during a flight test, using her
                  broomstick.
                  <br />
                  <br />
                  "Kiki's Delivery Service" is a charming coming-of-age story
                  that brings solace and dispels the melancholy and gloom in the
                  hearts of its viewers. The strong-willed little witch Kiki
                  imparts immense strength and inspiration. Hayao Miyazaki's
                  fondness for female protagonists is evident in his films, with
                  most stories revolving around girls. This film features an
                  innocent and pure-hearted girl as the protagonist, presenting
                  a poignant "elegy about flying."
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
            <img src="./assets/mnzjb-3.jpg" alt="Kiki" />
            <span>Kiki</span>
          </li>
          <li className="character">
            <img src="./assets/mnzjb-4.jpg" alt="Tombo " />
            <span>Tombo</span>
          </li>
          <li className="character">
            <img src="./assets/mn5.jpg" alt="Ursula " />
            <span>Ursula</span>
          </li>
          <li className="character">
            <img src="./assets/mn6.jpg" alt="Jiji " />
            <span>Jiji</span>
          </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Kiki;
