import commitmentImage from "../assets/about/image-commitment.jpg";
import qualityImage from "../assets/about/image-quality.jpg";
import unitedKingdomIcon from "../assets/about/illustration-uk.svg";
import canadaIcon from "../assets/about/illustration-canada.svg";
import australiaIcon from "../assets/about/illustration-australia.svg";

function About() {
  return (
    <>
      <section className="article second">
        <h2 className="heading">About us</h2>
        <p className="text">
          Coffeeroasters began its journey of exotic discovery in 1999,
          highlighting stories of coffee from around the world. We have since
          been dedicated to bring the perfect cup - from bean to brew - in every
          shipment.
        </p>
      </section>

      <section className="commitment">
        <img src={commitmentImage} alt="commitment-image" />
        <div className="content">
          <h2 className="heading">Our commitment</h2>
          <p className="text">
            We're built on a simple mission and a commitment to doing good along
            the way. We want to make it easy for you to discover and brew the
            world's best coffee at home. It all starts at the source. To locate
            the specific lots we want to purchase, we travel nearly 60 days a
            year trying to understand the challenges and opportunities in each
            of these places. We collaborate with exceptional coffee growers and
            empower a global community of farmers through with well above
            fair-trade benchmarks. We also offer training, support farm
            community initiatives, and invest in coffee plant science. Curating
            only the finest blends, we roast each lot to highlight tasting
            profiles distinctive to their native growing region.
          </p>
        </div>
      </section>

      <section className="commitment second">
        <img src={qualityImage} alt="commitment-image" />
        <div className="content">
          <h2 className="heading">Uncompromising quality</h2>
          <p className="text">
            Although we work with growers who pay close attention to all stages
            of harvest and processing, we employ, on our end, a rigorous quality
            control program to avoid over-roasting or baking the coffee dry.
            Every bag of coffee is tagged with a roast date and batch number.
            Our goal is to roast consistent, user-friendly coffee, so that
            brewing is easy and enjoyable.
          </p>
        </div>
      </section>

      <section className="headquarters">
        <h2 className="heading">Our headquarters</h2>
        <div className="row">
          <div className="item">
            <img src={unitedKingdomIcon} alt="united-kingdom" />
            <h3 className="name">United Kingdom</h3>
            <p className="text">
              68 Asfordby Rd
              <br />
              Alcaston
              <br />
              SY6 1YA
              <br />
              +44 1241 918425
            </p>
          </div>
          <div className="item">
            <img src={canadaIcon} alt="canada" />
            <h3 className="name">Canada</h3>
            <p className="text">
              1528 Eglinton Avenue
              <br />
              Toronto
              <br />
              Ontario M4P 1A6
              <br />
              +1 416 485 2997
            </p>
          </div>
          <div className="item">
            <img src={australiaIcon} alt="australia" />
            <h3 className="name">Australia</h3>
            <p className="text">
              36 Swanston Street
              <br />
              Kewell
              <br />
              Victoria
              <br />
              +61 4 9928 3629
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
