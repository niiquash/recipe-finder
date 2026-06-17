import "./AboutPage.css";
import OurMissionImage from "/image-about-our-mission-small.webp";
import BulletPoint from "../../assets/icon-bullet-point.svg";
import BeyondThePlateImage from "/image-about-beyond-the-plate-small.webp";
import BrowseRecipes from "../../components/browse-recipes/BrowseRecipes";

const AboutPage = () => {
  return (
    <div className="about-page-container">
      <section>
        <article>
          <p>Our mission</p>
          <h1>Help more people cook nourishing meals, more often.</h1>
          <p>
            Healthy Recipe Finder was created to prove that healthy eating can
            be convenient, affordable, and genuinely delicious.
          </p>
          <p>
            We showcase quick, whole-food dishes that anyone can master&#8212;no
            fancy equipment, no ultra-processed shortcuts&#8212;just honest
            ingredients and straightforward steps.
          </p>
        </article>
        <div>
          <img src={OurMissionImage} alt="A woman chopping carrots" />
        </div>
      </section>
      <section>
        <h2>Why we exist</h2>
        <div>
          <div>
            <img src={BulletPoint} alt="Right arrow" />
            <article>
              <h3>Cut through the noise.</h3>
              <p>
                The internet is bursting with recipes, yet most busy cooks still
                default to take-away or packaged foods. We curate a tight
                collection of fool-proof dishes so you can skip the scrolling
                and start cooking.
              </p>
            </article>
          </div>
          <div>
            <img src={BulletPoint} alt="Right arrow" />
            <article>
              <h3>Empower home kitchens.</h3>
              <p>
                When you control what goes into your meals, you control how you
                feel. Every recipe is built around unrefined ingredients and
                ready in about half an hour of active prep.
              </p>
            </article>
          </div>
          <div>
            <img src={BulletPoint} alt="Right arrow" />
            <article>
              <h3>Make healthy look good.</h3>
              <p>
                High-resolution imagery shows you exactly what success looks
                like—because we eat with our eyes first, and confidence matters.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section>
        <h2>Our food philosophy</h2>
        <div>
          <div>
            <img src={BulletPoint} alt="Right arrow" />
            <article>
              <h3>Whole ingredients first.</h3>
              <p>
                Fresh produce, grains, legumes, herbs, and quality fats form the
                backbone of every recipe.
              </p>
            </article>
          </div>
          <div>
            <img src={BulletPoint} alt="Right arrow" />
            <article>
              <h3>Flavor without compromise.</h3>
              <p>
                Spices, citrus, and natural sweetness replace excess salt,
                sugar, and additives.
              </p>
            </article>
          </div>
          <div>
            <img src={BulletPoint} alt="Right arrow" />
            <article>
              <h3>Respect for time.</h3>
              <p>
                Weeknight meals should slot into real schedules; weekend cooking
                can be leisurely but never wasteful.
              </p>
            </article>
          </div>
          <div>
            <img src={BulletPoint} alt="Right arrow" />
            <article>
              <h3>Sustainable choices.</h3>
              <p>
                Short ingredient lists cut down on food waste and carbon
                footprint, while plant-forward dishes keep things
                planet-friendly.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section>
        <article>
          <h2>Beyond the plate</h2>
          <p>
            We believe food is a catalyst for community and well-being. By
            sharing approachable recipes, we hope to:
          </p>
          <ul>
            <li>Encourage family dinners and social cooking.</li>
            <li>Reduce reliance on single-use packaging and delivery waste.</li>
            <li>
              Spark curiosity about seasonal produce and local agriculture.
            </li>
          </ul>
        </article>
        <div>
          <img src={BeyondThePlateImage} alt="A happy family in the kitchen." />
        </div>
      </section>
      <BrowseRecipes />
    </div>
  );
};

export default AboutPage;
