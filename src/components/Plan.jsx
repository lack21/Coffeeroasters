import { Link } from "react-router-dom";
import arrowIcon from "../assets/plan/icon-arrow.svg";
import { useState } from "react";

function Plan() {
  const [preferenceText, setPreferenceText] = useState("_____");
  const [beanTypeText, setBeanTypeText] = useState("_____");
  const [quantityText, setQuantityText] = useState("_____");
  const [grindOptionText, setGrindOptionText] = useState("_____");
  const [deliveryText, setDeliveryText] = useState("_____");
  const [isOrderSummaryActive, setIsOrderSummaryActive] = useState(false);

  function TogglePlanButton(e) {
    e.target.classList.toggle("active");
  }

  function ActiveOrderSummary() {
    if (
      [
        preferenceText,
        beanTypeText,
        quantityText,
        grindOptionText,
        deliveryText,
      ].includes("_____")
    ) {
      return alert("Please fill out the summary!");
    }
    setIsOrderSummaryActive(true);
  }

  function GetFirstData(e) {
    document
      .querySelectorAll(".row.first .choice-item")
      .forEach((item) => item.classList.remove("active"));
    e.target.classList.add("active");
    setPreferenceText(e.target.getAttribute("data"));
  }

  function GetSecondData(e) {
    document
      .querySelectorAll(".row.second .choice-item")
      .forEach((item) => item.classList.remove("active"));
    e.target.classList.add("active");
    setBeanTypeText(e.target.getAttribute("data"));
  }

  function GetThirdData(e) {
    document
      .querySelectorAll(".row.third .choice-item")
      .forEach((item) => item.classList.remove("active"));
    e.target.classList.add("active");
    setQuantityText(e.target.getAttribute("data"));
  }

  function GetFourthData(e) {
    document
      .querySelectorAll(".row.fourth .choice-item")
      .forEach((item) => item.classList.remove("active"));
    e.target.classList.add("active");
    setGrindOptionText(e.target.getAttribute("data"));
  }

  function GetFifthData(e) {
    document
      .querySelectorAll(".row.fifth .choice-item")
      .forEach((item) => item.classList.remove("active"));
    e.target.classList.add("active");
    setDeliveryText(e.target.getAttribute("data"));
  }

  return (
    <>
      <section className="article third">
        <h2 className="heading">Create a plan</h2>
        <p className="text">
          Build a subscription plan that best fits your needs. We offer an
          assortment of the best artisan coffees from around the globe delivered
          fresh to your door.
        </p>
      </section>

      <section className="how second">
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
      </section>

      <section className="choices">
        <div className="left-side">
          <button className="preference-btn">
            <span>01</span>
            Preferences
          </button>
          <button className="preference-btn">
            <span>02</span>
            Bean type
          </button>
          <button className="preference-btn">
            <span>03</span>
            Quantity
          </button>
          <button className="preference-btn">
            <span>04</span>
            Grind option
          </button>
          <button className="preference-btn">
            <span>05</span>
            Deliveries
          </button>
        </div>
        <div className="right-side">
          <div className="right-item">
            <button className="choice-btn" onClick={TogglePlanButton}>
              How do you drink your coffee?
              <img src={arrowIcon} alt="arrow-icon" />
            </button>
            <div className="row first">
              <div
                className="choice-item"
                data="Capsules"
                onClick={GetFirstData}
              >
                <h3 className="name">Capsule</h3>
                <p className="text">
                  Compatible with Nespresso systems and similar brewers
                </p>
              </div>
              <div className="choice-item" data="Filter" onClick={GetFirstData}>
                <h3 className="name">Filter</h3>
                <p className="text">
                  For pour over or drip methods like Aeropress, Chemex, and V60
                </p>
              </div>
              <div
                className="choice-item"
                data="Espresso"
                onClick={GetFirstData}
              >
                <h3 className="name">Espresso</h3>
                <p className="text">
                  Dense and finely ground beans for an intense, flavorful
                  experience
                </p>
              </div>
            </div>
          </div>
          <div className="right-item">
            <button className="choice-btn" onClick={TogglePlanButton}>
              What type of coffee? <img src={arrowIcon} alt="arrow-icon" />
            </button>
            <div className="row second">
              <div
                className="choice-item"
                data="Single Origin"
                onClick={GetSecondData}
              >
                <h3 className="name">Single origin</h3>
                <p className="text">
                  Distinct, high quality coffee from a specific family-owned
                  farm
                </p>
              </div>
              <div className="choice-item" data="Decaf" onClick={GetSecondData}>
                <h3 className="name">Decaf</h3>
                <p className="text">
                  Just like regular coffee, except the caffeine has been removed
                </p>
              </div>
              <div
                className="choice-item"
                data="Blended"
                onClick={GetSecondData}
              >
                <h3 className="name">Blended</h3>
                <p className="text">
                  Combination of two or three dark roasted beans of organic
                  coffees
                </p>
              </div>
            </div>
          </div>
          <div className="right-item">
            <button className="choice-btn" onClick={TogglePlanButton}>
              How much would you like? <img src={arrowIcon} alt="arrow-icon" />
            </button>
            <div className="row third">
              <div className="choice-item" data="250g" onClick={GetThirdData}>
                <h3 className="name">250g</h3>
                <p className="text">
                  Perfect for the solo drinker. Yields about 12 delicious cups.
                </p>
              </div>
              <div className="choice-item" data="500g" onClick={GetThirdData}>
                <h3 className="name">500g</h3>
                <p className="text">
                  Perfect option for a couple. Yields about 40 delectable cups.
                </p>
              </div>
              <div className="choice-item" data="1000g" onClick={GetThirdData}>
                <h3 className="name">1000g</h3>
                <p className="text">
                  Perfect for offices and events. Yields about 90 delightful
                  cups.
                </p>
              </div>
            </div>
          </div>
          <div className="right-item">
            <button className="choice-btn" onClick={TogglePlanButton}>
              Want us to grind them? <img src={arrowIcon} alt="arrow-icon" />
            </button>
            <div className="row fourth">
              <div
                className="choice-item"
                data="Wholebean"
                onClick={GetFourthData}
              >
                <h3 className="name">Wholebean</h3>
                <p className="text">
                  Best choice if you cherish the full sensory experience
                </p>
              </div>
              <div
                className="choice-item"
                data="Filter"
                onClick={GetFourthData}
              >
                <h3 className="name">Filter</h3>
                <p className="text">
                  For drip or pour-over coffee methods such as V60 or Aeropress
                </p>
              </div>
              <div
                className="choice-item"
                data="Cafetiére"
                onClick={GetFourthData}
              >
                <h3 className="name">Cafetiére</h3>
                <p className="text">
                  Coarse ground beans specially suited for french press coffee
                </p>
              </div>
            </div>
          </div>
          <div className="right-item">
            <button className="choice-btn" onClick={TogglePlanButton}>
              How often should we deliver?
              <img src={arrowIcon} alt="arrow-icon" />
            </button>
            <div className="row fifth">
              <div
                className="choice-item"
                data="Every Week"
                onClick={GetFifthData}
              >
                <h3 className="name">Every week</h3>
                <p className="text">
                  $22.00 per shipment. Includes free first-class shipping.
                </p>
              </div>
              <div
                className="choice-item"
                data="Every 2 Weeks"
                onClick={GetFifthData}
              >
                <h3 className="name">Every 2 weeks</h3>
                <p className="text">
                  $32.00 per shipment. Includes free priority shipping.
                </p>
              </div>
              <div
                className="choice-item"
                data="Every Month"
                onClick={GetFifthData}
              >
                <h3 className="name">Every month</h3>
                <p className="text">
                  $42.00 per shipment. Includes free priority shipping.
                </p>
              </div>
            </div>
          </div>
          <div className="summary">
            <h3 className="name">order summary</h3>
            <p className="text">
              “I drink my coffee as <span>{preferenceText}</span>, with a
              <span> {beanTypeText}</span> type of bean.
              <span> {quantityText}</span> ground ala
              <span> {grindOptionText}</span>, sent to me
              <span> {deliveryText}</span>.”
            </p>
          </div>
          <button className="btn" onClick={ActiveOrderSummary}>
            Create my plan!
          </button>
        </div>
      </section>

      <section
        className={`order-summary ${isOrderSummaryActive ? "active" : ""}`}
      >
        <div className="container">
          <h2 className="heading">Order Summary</h2>
          <p className="order-text">
            “I drink my coffee as <span>{preferenceText}</span>, with a
            <span> {beanTypeText}</span> type of bean.
            <span> {quantityText}</span> ground ala
            <span> {grindOptionText}</span>, sent to me
            <span> {deliveryText}</span>.”
          </p>
          <p className="text">
            Is this correct? You can proceed to checkout or go back to plan
            selection if something is off. Subscription discount codes can also
            be redeemed at the checkout.
          </p>
          <div className="bottom-section">
            <h3 className="price">$49.00 / mo</h3>
            <Link to="/Coffeeroasters" className="btn">
              Checkout <span className="order-btn">$35.00 / mo</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Plan;
