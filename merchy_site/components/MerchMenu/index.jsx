import React from "react";
import { Link } from "react-router-dom";
import Group9 from "../Group9";
import Group31 from "../Group31";
import Group33 from "../Group33";
import Progress from "../Progress";
import "./MerchMenu.sass";

function MerchMenu(props) {
  const {
    text141,
    settings,
    text151,
    group1,
    image61,
    image19,
    text152,
    group2,
    image181,
    image62,
    x250,
    group3,
    image63,
    image182,
    text153,
    group4,
    image64,
    image183,
    background1,
    background2,
    address,
    text145,
    read,
    text146,
    image1,
    elw7Yyohxn42,
    text147,
    text148,
    number,
    vector2,
    vector3,
    image65,
    rectangle23,
    exit,
    text154,
    image36,
    image37,
    image38,
    i6NhB598YgRemovebgPreview1,
    group9Props,
    group31Props,
    group33Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="merch-menu screen">
        <div className="overlap-group8-4">
          <div className="text-141 inter-bold-licorice-24px">{text141}</div>
          <img className="settings-11" src={settings} />
          <Group9 className={group9Props.className} />
          <div className="group-container-6">
            <Group31 className={group31Props.className} />
            <Group33 {...group33Props} />
            <div className="group-25-2">
              <div className="overlap-group6-8">
                <Link to="/goodie-card">
                  <div className="iphone-3">
                    <div className="overlap-group-45">
                      <div className="text-151 inter-semi-bold-licorice-26-4px">{text151}</div>
                      <img className="group-39" src={group1} />
                      <img className="image-6-19" src={image61} />
                    </div>
                  </div>
                </Link>
                <Link to="/goodie-card">
                  <div className="macbook-3">
                    <img className="image-19-4" src={image19} />
                    <div className="overlap-group1-15">
                      <div className="overlap-group-46">
                        <div className="text-152 inter-semi-bold-licorice-25-2px">{text152}</div>
                        <img className="group-41" src={group2} />
                      </div>
                      <div className="image-container-2">
                        <img className="image-18-10" src={image181} />
                        <img className="image-6-20" src={image62} />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="flex-col-19">
                <Link to="/goodie-card">
                  <div className="laptop-case-2">
                    <div className="overlap-group-44">
                      <div className="x250 inter-semi-bold-licorice-25-3px">{x250}</div>
                      <img className="group-51" src={group3} />
                      <img className="image-6-18" src={image63} />
                      <img className="image-18-11" src={image182} />
                    </div>
                  </div>
                </Link>
                <Link to="/goodie-card">
                  <div className="powerbank-2">
                    <div className="overlap-group-44">
                      <div className="text-153 inter-semi-bold-licorice-25-3px">{text153}</div>
                      <img className="group-52" src={group4} />
                      <img className="image-6-18" src={image64} />
                      <img className="image-18-12" src={image183} />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="overlap-group1-16">
            <img className="background-30" src={background1} />
            <img className="background-31" src={background2} />
            <Progress />
            <div className="address-19 inter-semi-bold-white-16px">{address}</div>
            <div className="text-145 inter-semi-bold-white-18px">{text145}</div>
            <img className="read-18" src={read} />
            <div className="text-146 inter-bold-white-28px">{text146}</div>
          </div>
          <img className="image-1-11" src={image1} />
          <img className="elw7y-yoh-xn4-2-11" src={elw7Yyohxn42} />
          <div className="text-147 inter-bold-licorice-28-8px">{text147}</div>
          <div className="text-148 inter-bold-licorice-28-8px">{text148}</div>
          <div className="overlap-group2-20">
            <div className="number-15 inter-semi-bold-black-22-1px">{number}</div>
            <div className="vector-container-9">
              <img className="vector-31" src="/img/vector@2x.png" />
              <img className="vector-32" src={vector2} />
              <img className="vector-33" src={vector3} />
            </div>
          </div>
          <img className="image-6-21" src={image65} />
          <img className="rectangle-23-2" src={rectangle23} />
          <Link to="/user-panel">
            <img className="exit-5" src={exit} />
          </Link>
          <div className="text-154 inter-bold-licorice-67px">{text154}</div>
          <img className="image-36" src={image36} />
          <img className="image-37" src={image37} />
          <img className="image-38" src={image38} />
          <img className="i6n-h-b598yg-removebg-preview-1-8" src={i6NhB598YgRemovebgPreview1} />
        </div>
      </div>
    </div>
  );
}

export default MerchMenu;
