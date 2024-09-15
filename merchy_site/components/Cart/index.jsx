import React from "react";
import { Link } from "react-router-dom";
import Group9 from "../Group9";
import Group31 from "../Group31";
import Progress from "../Progress";
import Group33 from "../Group33";
import "./Cart.sass";

function Cart(props) {
  const {
    text44,
    read1,
    background1,
    background2,
    address,
    text48,
    read2,
    text49,
    image1,
    elw7Yyohxn42,
    text50,
    text51,
    number1,
    vector2,
    vector3,
    image6,
    rectangle22,
    exit,
    overlapGroup6,
    text54,
    text55,
    text56,
    group1,
    image191,
    image18,
    text57,
    group2,
    image192,
    image21,
    image23,
    image22,
    text58,
    text59,
    number2,
    vector4,
    vector5,
    vector6,
    settings,
    group9Props,
    group31Props,
    group33Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="cart screen">
        <div className="overlap-group10">
          <div className="text-44 inter-bold-licorice-24px">{text44}</div>
          <img className="read-10" src={read1} />
          <Group9 className={group9Props.className} />
          <Group31 className={group31Props.className} />
          <div className="overlap-group1-5">
            <img className="background-20" src={background1} />
            <img className="background-21" src={background2} />
            <Progress />
            <div className="address-10 inter-semi-bold-white-16px">{address}</div>
            <div className="text-48 inter-semi-bold-white-18px">{text48}</div>
            <img className="read-11" src={read2} />
            <div className="text-49 inter-bold-white-28px">{text49}</div>
          </div>
          <img className="image-1-3" src={image1} />
          <img className="elw7y-yoh-xn4-2-3" src={elw7Yyohxn42} />
          <div className="text-50 inter-bold-licorice-28-8px">{text50}</div>
          <div className="text-51 inter-bold-licorice-28-8px">{text51}</div>
          <div className="overlap-group2-12">
            <div className="number-2 inter-semi-bold-black-22-1px">{number1}</div>
            <div className="vector-container-2">
              <img className="vector-6" src="/img/vector@2x.png" />
              <img className="vector-7" src={vector2} />
              <img className="vector-8" src={vector3} />
            </div>
          </div>
          <Group33 {...group33Props} />
          <img className="image-6-6" src={image6} />
          <img className="rectangle-22-1" src={rectangle22} />
          <Link to="/user-panel">
            <img className="exit-1" src={exit} />
          </Link>
          <div className="overlap-group6-3" style={{ backgroundImage: `url(${overlapGroup6})` }}>
            <div className="text-54">{text54}</div>
          </div>
          <div className="text-55 inter-bold-licorice-67px">{text55}</div>
          <Link to="/goodie-card">
            <div className="group-23">
              <div className="overlap-group7-1">
                <div className="overlap-group-27">
                  <div className="text-56">{text56}</div>
                  <img className="group-16" src={group1} />
                </div>
                <img className="image-19-1" src={image191} />
                <img className="image-18-4" src={image18} />
              </div>
            </div>
          </Link>
          <Link to="/goodie-card">
            <div className="group-24">
              <div className="overlap-group8">
                <div className="overlap-group1-6">
                  <div className="overlap-group-28">
                    <div className="text-57">{text57}</div>
                    <img className="group-17" src={group2} />
                  </div>
                  <img className="image-19-2" src={image192} />
                </div>
                <img className="image-21" src={image21} />
              </div>
            </div>
          </Link>
          <img className="image-23" src={image23} />
          <img className="image-22" src={image22} />
          <div className="text-58">{text58}</div>
          <div className="group-19">
            <div className="text-59">{text59}</div>
          </div>
          <div className="overlap-group9-1">
            <div className="number-3">{number2}</div>
            <div className="vector-container-3">
              <img className="vector-9" src={vector4} />
              <img className="vector-10" src={vector5} />
              <img className="vector-11" src={vector6} />
            </div>
          </div>
        </div>
        <img className="settings-2" src={settings} />
      </div>
    </div>
  );
}

export default Cart;
