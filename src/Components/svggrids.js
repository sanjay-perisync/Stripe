import React from 'react';


const OpenAILogo = () => (
  <img src='openai.svg' alt=''></img>
);
const AmazonLogo = () => (
  <img src='amazon.svg' alt='' ></img>);
const GoogleLogo = () => (
  <img src='Google.svg' alt='' ></img>);
const AnthropicLogo = () => (
  <img src='Anthro.svg' alt=''></img>);
const MarriotLogo = () => (
  <img src='Marrio.svg' alt='' ></img>);
const ShopifyLogo = () => (
  <img src='Shopify.svg' alt='' ></img>);
const AirbnbLogo = () => (
  <img src='Airbnb.svg' alt='' ></img>
);
const UrbnLogo = () => (
  <img src='Urbn.svg' alt='' ></img>
);

function SvgGrids() {
  return (
    <div className="relative">
      <div className="grid grid-cols-4 gap-10 mx-auto max-w-screen-xl px-5 py-10">
        {/* Top row of logos */}
        <div className="flex justify-center items-center">
          <OpenAILogo />
        </div>
        <div className="flex justify-center items-center">
          <AmazonLogo />
        </div>
        <div className="flex justify-center items-center">
          <GoogleLogo />
        </div>
        <div className="flex justify-center items-center">
          <AnthropicLogo />
        </div>

        {/* Bottom row of logos */}
        <div className="flex justify-center items-center">
          <MarriotLogo />
        </div>
        <div className="flex justify-center items-center">
          <ShopifyLogo />
        </div>
        <div className="flex justify-center items-center">
          <AirbnbLogo />
        </div>
        <div className="flex justify-center items-center">
          <UrbnLogo />
        </div>
      </div>
    </div>
  );
}

export default SvgGrids;
