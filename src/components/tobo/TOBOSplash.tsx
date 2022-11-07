import TOBOButton from "./TOBOButton";
import "./toboSplash.css";

/* SplashModule4 */

function SplashModule4() {
  return (
    <div className="toboSplashModule" id="toboSplashModule4">
      <div className="splashModuleColumn splashModuleColumnL">
        <h3>FROM ARTISTS WHO UNDERSTAND</h3>
        <p>
          "Some people might navigate workload and pressure more efficiently
          than others, but once the breaking point is reached, we all end up in
          the same place.
        </p>
        <p>
          We're happy to support initiatives that acknowledge caring individuals
          that are subject to experiencing burnout.”
        </p>
        <p>
          -&nbsp;
          <a
            href="https://twitter.com/ArtOnBlockchain?s=20&t=1a6ek0BPuap8dwKJtBGhuQ"
            target="_blank"
            rel="noreferrer"
          >
            Erick Calderon, Artblocks CEO
          </a>
        </p>
      </div>

      <div className="splashModuleColumn splashModuleColumnR">
        <img
          src="https://endaoment-gallery-for-good---flex-goerli.s3.amazonaws.com/8.png"
          alt=""
        />
        <div className="splashModule4Circle" id="splashModule4Circle1"></div>
        <div className="splashModule4Circle" id="splashModule4Circle2"></div>
      </div>

      <div className="clear"></div>
    </div>
  );
}

/* SplashModule3 */

function SplashModule3() {
  const postClick = () => {
    window.open(
      "http://twitter.com/intent/tweet?text=Join%20me%20November%2015th%20for%20the%20%23TurnoutForBurnout!%20Mint%20generative%20art%20to%20fund%20wellness%20programs%20for%20healthcare%20workers.%20%0A%0ALearn%20more%20at%3A&url=http%3A%2F%2Fwww.turnoutforburnout.com%0A%0ABrought%20to%20you%20by%20your%20friends%20at%0A%40EndaomentDotOrg%20%40Sostento%20and%20%40Artblocks_io%20"
    );
  };

  return (
    <div className="toboSplashModule" id="toboSplashModule3">
      <div className="splashModuleColumn splashModuleColumnL">
        <img src="img/tobo/splash/module-3-hero.png" alt="" />
      </div>

      <div className="splashModuleColumn splashModuleColumnR">
        <h3>FIGHTING BURNOUT</h3>
        <p>
          <a href="https://sostento.org" target="_blank" rel="noreferrer">
            Sostento
          </a>
          &nbsp;is a tax-exempt 501c3 charitable organization. Proceeds will
          directly support programs that reduce burnout among frontline
          healthcare workers who provide services to families living in poverty.
        </p>

        <div id="splashModule3Social">
          <span>TWEET YOUR SUPPORT</span>
          <TOBOButton text="Post Now" action={postClick} />
        </div>
      </div>

      <div className="clear"></div>
    </div>
  );
}
/* SplashModule2 */

function SplashModule2() {
  return (
    <div className="toboSplashModule" id="toboSplashModule2">
      <div className="splashModuleColumn splashModuleColumnL">
        <h3>"THE COLORS THAT HEAL"</h3>
        <p>
          Our marquee generative art collection is a box of memories,a garden of
          hope,and a beacon of encouragement from generative artist Ryan Green.
        </p>
        <div id="splashModule2Mint">
          <TOBOButton text="Generate Artwork" disabled={true} />
          <span>Minting begins 11/15/22</span>
        </div>
        <p>
          "Having someone that will say 'I see you, let me go with you' is a
          simple gesture that is profoundly encouraging.” -&nbsp;
          <a
            href="https://twitter.com/ryangreen8"
            target="_blank"
            rel="noreferrer"
          >
            Ryan Green
          </a>
        </p>
      </div>

      <div className="splashModuleColumn splashModuleColumnR">
        <img
          src="https://endaoment-gallery-for-good---flex-goerli.s3.amazonaws.com/20.png"
          alt=""
        />
        <div className="splashModule2Circle" id="splashModule2Circle1"></div>
        <div className="splashModule2Circle" id="splashModule2Circle2"></div>
      </div>

      <div className="clear"></div>
    </div>
  );
}

/* SplashModule1 */

function SplashModule1() {
  const nftClick = () => {
    window.open("https://opensea.io/endaoment");
  };

  const cryptoClick = () => {
    window.open("https://app.endaoment.org/orgs/843739888");
  };

  const spaceClick = () => {
    window.open("https://twitter.com/i/spaces/1nAJErlaQabxL");
  };

  return (
    <div className="toboSplashModule" id="toboSplashModule1">
      <img
        src="img/tobo/splash/module-1-shape.png"
        alt=""
        id="splashModule1Shape"
      />

      <div className="splashModuleColumn splashModuleColumnL">
        <img src="img/tobo/splash/module-1-hero.jpg" alt="" />
        <div id="splashModule1Circle"></div>
      </div>

      <div className="splashModuleColumn splashModuleColumnR">
        <img
          src="img/tobo/splash/module-1-logo.svg"
          alt="TURNOUT FOR BURNOUT"
          id="splashModule1Logo"
        />
        <p>
          Face it — we're all a bit burnt out. Let's raise funds to reduce
          burnout amongst healthcare workers through a generative art event
          &amp; auction.
        </p>
        <TOBOButton text="Donate NFTs" viaEndaoment={false} action={nftClick} />
        <TOBOButton
          text="Donate Crypto"
          viaEndaoment={true}
          action={cryptoClick}
        />

        <div id="splashModule1Mint">
          <TOBOButton text="Listen: Twitter Space" action={spaceClick} />
          <span>Space begins 4pm ET today</span>
        </div>
      </div>

      <div className="clear"></div>
      <div id="splashModule1Banner">
        Generative Art + <span>&nbsp;Charity Fundraiser</span>
      </div>
    </div>
  );
}

/* SplashHeader */

function SplashHeader() {
  return (
    <div id="toboSplashHeader">
      <img src="img/tobo/splash/header.jpg" alt="" id="splashHeaderBg" />
      <div id="splashHeaderBgOverlay"></div>
      <div className="splashHeaderLine" id="splashHeaderLineXL"></div>
      <div className="splashHeaderLine" id="splashHeaderLineXR"></div>
      <div className="splashHeaderLine" id="splashHeaderLineYT"></div>
      <div className="splashHeaderLine" id="splashHeaderLineYB"></div>

      <h2>
        Wellness through
        <br />
        Collective Action
      </h2>
      <div id="splashHeaderLogos">
        <span>POWERED BY</span>
        <a href="https://sostento.org/" target="_blank" rel="noreferrer">
          <img src="img/tobo/logo-sostento.png" alt="Sostento" />
        </a>
        <a href="https://endaoment.org/" target="_blank" rel="noreferrer">
          <img src="img/tobo/logo-endaoment.png" alt="Endaoment" />
        </a>
        <a href="https://www.artblocks.io/" target="_blank" rel="noreferrer">
          <img src="img/tobo/logo-artblocks.png" alt="ArtBlocks" />
        </a>
      </div>
    </div>
  );
}

/* TOBOSplash */

const TOBOSplash = () => {
  return (
    <div className="splashContainer">
      <SplashHeader />
      <SplashModule1 />
      <SplashModule2 />
      <SplashModule3 />
      <SplashModule4 />
    </div>
  );
};

export default TOBOSplash;
