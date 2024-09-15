import React from "react";
import { Link } from "react-router-dom";
import Group9 from "../Group9";
import Group31 from "../Group31";
import Progress from "../Progress";
import Group33 from "../Group33";
import "./ToysMenu.sass";

function ToysMenu(props) {
  const {
    text111,
    settings,
    background1,
    background2,
    address,
    text115,
    read,
    text116,
    image1,
    elw7Yyohxn42,
    text117,
    text118,
    number,
    vector2,
    vector3,
    image61,
    rectangle23,
    exit,
    text121,
    group1,
    image62,
    image19,
    text122,
    group2,
    image181,
    image63,
    text123,
    group3,
    image64,
    image182,
    image40,
    text124,
    group4,
    image65,
    image183,
    text125,
    image39,
    uovpruyekdkRemovebgPreview3,
    image41,
    group9Props,
    group31Props,
    group33Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="toys-menu screen">
        <div className="overlap-group8-2">
          <div className="text-111 inter-bold-licorice-24px">{text111}</div>
          <img className="settings-9" src={settings} />
          <Group9 className={group9Props.className} />
          <Group31 className={group31Props.className} />
          <div className="overlap-group1-12">
            <img className="background-28" src={background1} />
            <img className="background-29" src={background2} />
            <Progress />
            <div className="address-16 inter-semi-bold-white-16px">{address}</div>
            <div className="text-115 inter-semi-bold-white-18px">{text115}</div>
            <img className="read-17" src={read} />
            <div className="text-116 inter-bold-white-28px">{text116}</div>
          </div>
          <img className="image-1-9" src={image1} />
          <img className="elw7y-yoh-xn4-2-9" src={elw7Yyohxn42} />
          <div className="text-117 inter-bold-licorice-28-8px">{text117}</div>
          <div className="text-118 inter-bold-licorice-28-8px">{text118}</div>
          <div className="overlap-group2-18">
            <div className="number-11 inter-semi-bold-black-22-1px">{number}</div>
            <div className="vector-container-8">
              <img className="vector-26" src="/img/vector@2x.png" />
              <img className="vector-27" src={vector2} />
              <img className="vector-28" src={vector3} />
            </div>
          </div>
          <Group33 {...group33Props} />
          <img className="image-6-15" src={image61} />
          <img className="rectangle-23-1" src={rectangle23} />
          <Link to="/user-panel">
            <img className="exit-4" src={exit} />
          </Link>
          <div className="group-25-1">
            <div className="overlap-group7-3">
              <Link to="/goodie-card">
                <div className="iphone-2">
                  <div className="overlap-group-38">
                    <div className="text-121 inter-semi-bold-licorice-26-4px">{text121}</div>
                    <img className="group-30" src={group1} />
                    <img className="image-6-16" src={image62} />
                  </div>
                </div>
              </Link>
              <Link to="/goodie-card">
                <div className="macbook-2">
                  <img className="image-19-3" src={image19} />
                  <div className="overlap-group1-13">
                    <div className="overlap-group-39">
                      <div className="text-122 inter-semi-bold-licorice-25-2px">{text122}</div>
                      <img className="group-32" src={group2} />
                    </div>
                    <div className="image-container-1">
                      <img className="image-18-7" src={image181} />
                      <img className="image-6-17" src={image63} />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex-col-15">
              <div className="overlap-group6-7">
                <Link to="/goodie-card">
                  <div className="laptop-case-1">
                    <div className="overlap-group-37">
                      <div className="text-123 inter-semi-bold-licorice-25-3px">{text123}</div>
                      <img className="group-34" src={group3} />
                      <img className="image-6-14" src={image64} />
                      <img className="image-18-8" src={image182} />
                    </div>
                  </div>
                </Link>
                <img className="image-40" src={image40} />
              </div>
              <Link to="/goodie-card">
                <div className="powerbank-1">
                  <div className="overlap-group-37">
                    <div className="text-124 inter-semi-bold-licorice-25-3px">{text124}</div>
                    <img className="group-35" src={group4} />
                    <img className="image-6-14" src={image65} />
                    <img className="image-18-9" src={image183} />
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="text-125 inter-bold-licorice-67px">{text125}</div>
          <img className="image-39" src={image39} />
          <img className="u-ov-pruy-ekdk-removebg-preview-3" src={uovpruyekdkRemovebgPreview3} />
          <img className="image-41" src={image41} />
        </div>
      </div>
    </div>
  );
}

export default ToysMenu;
