import React from "react";
import { Link } from "react-router-dom";
import Group9 from "../Group9";
import "./Contest.sass";

function Contest(props) {
  const {
    image1,
    text107,
    image18,
    image6,
    number,
    vector2,
    vector3,
    elw7Yyohxn42,
    background1,
    background2,
    address,
    text105,
    read,
    text106,
    image30,
    overlapGroup2,
    text109,
    text108,
    pdf,
    image28,
    image29,
    text110,
    settings,
    group9Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="contest screen">
        <img className="image-1-8" src={image1} />
        <div className="flex-row-12">
          <div className="flex-col-13">
            <Group9 className={group9Props.className} />
            <div className="text-107 inter-bold-licorice-28-8px">{text107}</div>
          </div>
          <img className="image-18-6" src={image18} />
          <img className="image-6-13" src={image6} />
          <div className="overlap-group1-11">
            <div className="number-10 inter-semi-bold-black-22-1px">{number}</div>
            <div className="vector-container-7">
              <img className="vector-23" src="/img/vector@2x.png" />
              <img className="vector-24" src={vector2} />
              <img className="vector-25" src={vector3} />
            </div>
          </div>
          <Link to="/user-profile">
            <img className="elw7y-yoh-xn4-2-8" src={elw7Yyohxn42} />
          </Link>
        </div>
        <div className="flex-row-13">
          <div className="flex-col-14">
            <div className="flex-row-14">
              <div className="overlap-group-36">
                <img className="background-26" src={background1} />
                <img className="background-27" src={background2} />
                <div className="progress-17">
                  <div className="active-17"></div>
                </div>
                <div className="address-15">{address}</div>
                <div className="text-105">{text105}</div>
                <img className="read-16" src={read} />
                <div className="text-106">{text106}</div>
              </div>
              <img className="image-30" src={image30} />
            </div>
            <div className="overlap-group3-11">
              <div className="overlap-group2-17" style={{ backgroundImage: `url(${overlapGroup2})` }}>
                <div className="group-5-2">
                  <div className="text-109 inter-medium-black-26-1px">{text109}</div>
                </div>
                <div className="flex-row-15">
                  <div className="text-108">{text108}</div>
                  <div className="group-6-1">
                    <div className="pdf inter-medium-black-26-1px">{pdf}</div>
                  </div>
                </div>
              </div>
              <img className="image-28" src={image28} />
              <img className="image-29" src={image29} />
            </div>
            <Link to="/user-panel">
              <div className="text-110 inter-bold-licorice-20-9px">{text110}</div>
            </Link>
          </div>
          <img className="settings-8" src={settings} />
        </div>
      </div>
    </div>
  );
}

export default Contest;
