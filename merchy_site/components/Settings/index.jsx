import React from "react";
import { Link } from "react-router-dom";
import Group9 from "../Group9";
import Group33 from "../Group33";
import Group31 from "../Group31";
import Progress from "../Progress";
import "./Settings.sass";

function Settings(props) {
  const {
    image1,
    text99,
    image6,
    number,
    vector2,
    vector3,
    text98,
    elw7Yyohxn42,
    read1,
    text92,
    background1,
    background2,
    address,
    text96,
    read2,
    text97,
    text102,
    english,
    text103,
    exit,
    settings,
    group9Props,
    group33Props,
    group31Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="settings-6 screen">
        <img className="image-1-7" src={image1} />
        <div className="flex-row-10">
          <div className="flex-col-11">
            <Group9 className={group9Props.className} />
            <div className="text-99 inter-bold-licorice-28-8px">{text99}</div>
          </div>
          <img className="image-6-12" src={image6} />
          <div className="overlap-group2-16">
            <div className="number-9 inter-semi-bold-black-22-1px">{number}</div>
            <div className="vector-container-6">
              <img className="vector-20" src="/img/vector@2x.png" />
              <img className="vector-21" src={vector2} />
              <img className="vector-22" src={vector3} />
            </div>
          </div>
          <div className="text-98 inter-bold-licorice-28-8px">{text98}</div>
          <img className="elw7y-yoh-xn4-2-7" src={elw7Yyohxn42} />
        </div>
        <div className="flex-row-11">
          <div className="flex-col-12">
            <Group33 {...group33Props} />
            <img className="read-14" src={read1} />
          </div>
          <div className="overlap-group8-1">
            <div className="text-92 inter-bold-licorice-24px">{text92}</div>
            <div className="group-container-4">
              <Group31 className={group31Props.className} />
              <div className="overlap-group1-10">
                <img className="background-24" src={background1} />
                <img className="background-25" src={background2} />
                <Progress />
                <div className="address-14 inter-semi-bold-white-16px">{address}</div>
                <div className="text-96 inter-semi-bold-white-18px">{text96}</div>
                <img className="read-15" src={read2} />
                <div className="text-97 inter-bold-white-28px">{text97}</div>
              </div>
              <div className="overlap-group6-6">
                <div className="group-22-1">
                  <div className="toys-2">
                    <div className="group-50">
                      <div className="overlap-group-35">
                        <div className="text-102">{text102}</div>
                        <div className="english">{english}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-103">{text103}</div>
                <Link to="/user-panel">
                  <img className="exit-3" src={exit} />
                </Link>
              </div>
            </div>
          </div>
          <img className="settings-7" src={settings} />
        </div>
      </div>
    </div>
  );
}

export default Settings;
