import React from "react";
import { Link } from "react-router-dom";
import Group9 from "../Group9";
import Group31 from "../Group31";
import Progress from "../Progress";
import Group33 from "../Group33";
import "./GoodieCard.sass";

function GoodieCard(props) {
  const {
    text60,
    read1,
    settings,
    background1,
    background2,
    address,
    text64,
    read2,
    text65,
    image1,
    elw7Yyohxn42,
    text66,
    text67,
    number,
    vector2,
    vector3,
    image6,
    rectangle22,
    overlapGroup,
    text68,
    group,
    text69,
    text70,
    group15,
    image3,
    image5,
    group16,
    text71,
    image12,
    image13,
    image10,
    image2,
    exit,
    image24,
    text72,
    group9Props,
    group31Props,
    group33Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="goodie-card screen">
        <div className="overlap-group6-4">
          <div className="text-60 inter-bold-licorice-24px">{text60}</div>
          <img className="read-12" src={read1} />
          <img className="settings-3" src={settings} />
          <Group9 className={group9Props.className} />
          <Group31 className={group31Props.className} />
          <div className="overlap-group1-7">
            <img className="background-22" src={background1} />
            <img className="background-23" src={background2} />
            <Progress />
            <div className="address-11 inter-semi-bold-white-16px">{address}</div>
            <div className="text-64 inter-semi-bold-white-18px">{text64}</div>
            <img className="read-13" src={read2} />
            <div className="text-65 inter-bold-white-28px">{text65}</div>
          </div>
          <img className="image-1-4" src={image1} />
          <img className="elw7y-yoh-xn4-2-4" src={elw7Yyohxn42} />
          <div className="text-66 inter-bold-licorice-28-8px">{text66}</div>
          <div className="text-67 inter-bold-licorice-28-8px">{text67}</div>
          <div className="overlap-group2-13">
            <div className="number-4 inter-semi-bold-black-22-1px">{number}</div>
            <div className="vector-container-4">
              <img className="vector-12" src="/img/vector@2x.png" />
              <img className="vector-13" src={vector2} />
              <img className="vector-14" src={vector3} />
            </div>
          </div>
          <Group33 {...group33Props} />
          <img className="image-6-7" src={image6} />
          <img className="rectangle-22-2" src={rectangle22} />
          <Link to="/cart">
            <div className="group-42-1">
              <div className="group-18-2">
                <div className="overlap-group-29" style={{ backgroundImage: `url(${overlapGroup})` }}>
                  <div className="text-68 inter-medium-white-26px">{text68}</div>
                  <img className="group-20" src={group} />
                </div>
              </div>
            </div>
          </Link>
          <div className="text-69">{text69}</div>
          <div className="group-5-1">
            <div className="text-70 inter-medium-black-26-1px">{text70}</div>
          </div>
          <div className="group-17-1">
            <img className="group-15-1" src={group15} />
            <img className="image-3" src={image3} />
            <img className="image-5" src={image5} />
            <img className="group-16-1" src={group16} />
          </div>
          <div className="group-44">
            <div className="text-71 inter-bold-licorice-24px">{text71}</div>
            <div className="image-container">
              <img className="image-12" src={image12} />
              <img className="image-13" src={image13} />
              <img className="image-10" src={image10} />
            </div>
          </div>
          <img className="image-2" src={image2} />
          <Link to="/user-panel">
            <img className="exit-2" src={exit} />
          </Link>
          <Link to="/toys-menu">
            <img className="image-24" src={image24} />
          </Link>
          <div className="text-72">{text72}</div>
        </div>
      </div>
    </div>
  );
}

export default GoodieCard;
