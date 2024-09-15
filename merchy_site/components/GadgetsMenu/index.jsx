import React from "react";
import { Link } from "react-router-dom";
import Group9 from "../Group9";
import Group31 from "../Group31";
import Group33 from "../Group33";
import Progress from "../Progress";
import "./GadgetsMenu.sass";

function GadgetsMenu(props) {
  const {
    text33,
    settings,
    iphone133800Midn,
    group1,
    image61,
    scrudmira7KRemovebgPreview1,
    image19,
    macbookPro13500,
    group2,
    image62,
    image181,
    x81RebiyaamoRemovebgPreview11,
    x1,
    group3,
    image63,
    image182,
    ubay9IuafwoRemovebgPreview1,
    x200TypeC,
    group4,
    image64,
    image183,
    jw4Bvieod5QRemovebgPreview1,
    background1,
    background2,
    address,
    text37,
    read,
    text38,
    image1,
    elw7Yyohxn42,
    text39,
    text40,
    number,
    vector2,
    vector3,
    image65,
    rectangle23,
    exit,
    text43,
    group9Props,
    group33Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="gadgets-menu screen">
        <div className="overlap-group9">
          <div className="text-33 inter-bold-licorice-24px">{text33}</div>
          <img className="settings-1" src={settings} />
          <Group9 className={group9Props.className} />
          <div className="group-container-1">
            <Group31 />
            <Group33 {...group33Props} />
            <div className="group-25">
              <div className="overlap-group6-2">
                <Link to="/goodie-card">
                  <div className="iphone">
                    <div className="overlap-group-8">
                      <div className="rectangle-9"></div>
                      <div className="i-phone-13-3800-midn inter-semi-bold-licorice-26-4px">{iphone133800Midn}</div>
                      <img className="group-4" src={group1} />
                      <img className="image-6-1" src={image61} />
                      <img className="scru-dmira7k-removebg-preview-1" src={scrudmira7KRemovebgPreview1} />
                    </div>
                  </div>
                </Link>
                <Link to="/goodie-card">
                  <div className="macbook">
                    <img className="image-19" src={image19} />
                    <div className="overlap-group1-3">
                      <div className="rectangle-10"></div>
                      <div className="mac-book-pro-13-500 inter-semi-bold-licorice-25-2px">{macbookPro13500}</div>
                      <img className="group-6" src={group2} />
                      <img className="image-6-2" src={image62} />
                      <img className="image-18-1" src={image181} />
                      <img className="x81-r-ebi-yaa-mo-removebg-preview-1-1-1" src={x81RebiyaamoRemovebgPreview11} />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="overlap-group7">
                <Link to="/goodie-card">
                  <div className="laptop-case">
                    <div className="overlap-group2-4">
                      <div className="rectangle-11"></div>
                      <div className="x1 inter-semi-bold-licorice-25-3px">{x1}</div>
                      <img className="group-7" src={group3} />
                      <img className="image-6-3" src={image63} />
                      <img className="image-18-2" src={image182} />
                      <img className="uba-y9iua-f-wo-removebg-preview-1" src={ubay9IuafwoRemovebgPreview1} />
                    </div>
                  </div>
                </Link>
                <Link to="/goodie-card">
                  <div className="powerbank">
                    <div className="overlap-group3-2">
                      <div className="rectangle-12"></div>
                      <div className="x200-type-c inter-semi-bold-licorice-25-3px">{x200TypeC}</div>
                      <img className="group-8" src={group4} />
                      <img className="image-6-4" src={image64} />
                      <img className="image-18-3" src={image183} />
                      <img className="jw4-bv-ieod5-q-removebg-preview-1" src={jw4Bvieod5QRemovebgPreview1} />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="overlap-group1-4">
            <img className="background-6" src={background1} />
            <img className="background-7" src={background2} />
            <Progress />
            <div className="address-3 inter-semi-bold-white-16px">{address}</div>
            <div className="text-37 inter-semi-bold-white-18px">{text37}</div>
            <img className="read-3" src={read} />
            <div className="text-38 inter-bold-white-28px">{text38}</div>
          </div>
          <img className="image-1-2" src={image1} />
          <img className="elw7y-yoh-xn4-2-2" src={elw7Yyohxn42} />
          <div className="text-39 inter-bold-licorice-28-8px">{text39}</div>
          <div className="text-40 inter-bold-licorice-28-8px">{text40}</div>
          <div className="overlap-group2-5">
            <div className="number-1 inter-semi-bold-black-22-1px">{number}</div>
            <div className="vector-container-1">
              <img className="vector-3" src="/img/vector@2x.png" />
              <img className="vector-4" src={vector2} />
              <img className="vector-5" src={vector3} />
            </div>
          </div>
          <img className="image-6-5" src={image65} />
          <img className="rectangle-23" src={rectangle23} />
          <Link to="/user-panel">
            <img className="exit" src={exit} />
          </Link>
          <h1 className="text-43 inter-bold-licorice-67px">{text43}</h1>
        </div>
      </div>
    </div>
  );
}

export default GadgetsMenu;
