import { Link } from "react-router-dom";
import firstItemImage from "../assets/home/image-gran-espresso.png";
import secondItemImage from "../assets/home/image-planalto.png";
import thirdItemImage from "../assets/home/image-piccollo.png";
import fourthItemImage from "../assets/home/image-danche.png";
import coffeeBeanIcon from "../assets/home/icon-coffee-bean.svg";
import giftIcon from "../assets/home/icon-gift.svg";
import truckIcon from "../assets/home/icon-truck.svg";

function Home() {
  return (
    <>
      <section className="article">
        <h2 className="heading">
          Great coffee
          <br /> made simple.
        </h2>
        <p className="text">
          Start your mornings with the world's best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <Link className="btn" to="plan">
          Create your plan
        </Link>
      </section>

      <section className="collection">
        <div className="item">
          <img src={firstItemImage} alt="item-image" />
          <h3 className="name">Gran Espresso</h3>
          <p className="text">
            Light and flavorful blend with cocoa and black pepper for an intense
            experience
          </p>
        </div>
        <div className="item">
          <img src={secondItemImage} alt="item-image" />
          <h3 className="name">Planalto</h3>
          <p className="text">
            Brazilian dark roast with rich and velvety body, and hints of fruits
            and nuts
          </p>
        </div>
        <div className="item">
          <img src={thirdItemImage} alt="item-image" />
          <h3 className="name">Piccollo</h3>
          <p className="text">
            Mild and smooth blend featuring notes of toasted almond and dried
            cherry
          </p>
        </div>
        <div className="item">
          <img src={fourthItemImage} alt="item-image" />
          <h3 className="name">Danche</h3>
          <p className="text">
            Ethiopian hand-harvested blend densely packed with vibrant fruit
            notes
          </p>
        </div>
      </section>

      <section className="why">
        <h2 className="heading">Why choose us?</h2>
        <p className="text">
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>

        <div className="row">
          <div className="item">
            <img src={coffeeBeanIcon} alt="item-image" />
            <div>
              <h3 className="name">Best quality</h3>
              <p className="text">
                Discover an endless variety of the world’s best artisan coffee
                from each of our roasters.
              </p>
            </div>
          </div>
          <div className="item">
            <img src={giftIcon} alt="item-image" />
            <div>
              <h3 className="name">Exclusive benefits</h3>
              <p className="text">
                Special offers and swag when you subscribe, including 30% off
                your first shipment.
              </p>
            </div>
          </div>
          <div className="item">
            <img src={truckIcon} alt="item-image" />
            <div>
              <h3 className="name">Free shipping</h3>
              <p className="text">
                We cover the cost and coffee is delivered fast. Peak freshness:
                guaranteed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="how">
        <h2 className="heading">How it works</h2>
        <div className="circles">
          <div className="circle active"></div>
          <div className="circle active"></div>
          <div className="circle"></div>
        </div>
        <div className="row">
          <div className="item">
            <h4 className="number">01</h4>
            <h3 className="name">Pick your coffee</h3>
            <p className="text">
              Select from our evolving range of artisan coffees. Our beans are
              ethically sourced and we pay fair prices for them. There are new
              coffees in all profiles every month for you to try out.
            </p>
          </div>
          <div className="item">
            <h4 className="number">02</h4>
            <h3 className="name">Choose the frequency</h3>
            <p className="text">
              Customize your order frequency, quantity, even your roast style
              and grind type. Pause, skip or cancel your subscription with no
              commitment through our online portal.
            </p>
          </div>
          <div className="item">
            <h4 className="number">03</h4>
            <h3 className="name">Receive and enjoy!</h3>
            <p className="text">
              We ship your package within 48 hours, freshly roasted. Sit back
              and enjoy award-winning world-class coffees curated to provide a
              distinct tasting experience.
            </p>
          </div>
        </div>
        <Link className="btn" to="plan">
          Create your plan
        </Link>
      </section>
    </>
  );
}

export default Home;
