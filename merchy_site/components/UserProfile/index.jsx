import React from "react";
import { Link } from "react-router-dom";
import "./UserProfile.sass";

function UserProfile(props) {
  const {
    image1,
    text78,
    text79,
    text81,
    overlapGroup6,
    text88,
    text89,
    address1,
    address2,
    overlapGroup2,
    text82,
    group1,
    number1,
    group2,
    number2,
    text83,
    vector2,
    group3,
    number3,
    text84,
    text80,
    text85,
    text86,
    ellipse1,
    eMailEgorledyaev1GmailCom,
    ellipse2,
    fintech,
    ellipse4,
    seniorDataScientist,
    elw7Yyohxn42,
    ellipse3,
    text87,
    overlapGroup7,
    text91,
    ellipse5,
    ellipse6,
    ellipse8,
    ellipse10,
    ellipse9,
    ellipse7,
    text90,
    settings,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="user-profile screen">
        <img className="image-1-6" src={image1} />
        <div className="flex-row-6">
          <div className="flex-col-8">
            <div className="text-78 inter-semi-bold-pink-swan-17-1px">{text78}</div>
            <div className="text-79 inter-bold-licorice-44px">{text79}</div>
            <div className="text-81 inter-bold-licorice-27-9px">{text81}</div>
            <div className="overlap-group6-5" style={{ backgroundImage: `url(${overlapGroup6})` }}>
              <div className="overlap-group-32">
                <div className="text-88 inter-bold-white-32-2px">{text88}</div>
                <div className="group-11-1"></div>
                <div className="text-89 inter-semi-bold-white-23px">{text89}</div>
              </div>
              <div className="address-container inter-semi-bold-white-18-4px">
                <div className="address-12">{address1}</div>
                <div className="address-13">{address2}</div>
              </div>
              <div className="progress-16">
                <div className="active-16"></div>
              </div>
            </div>
            <div className="overlap-group2-15" style={{ backgroundImage: `url(${overlapGroup2})` }}>
              <div className="flex-row-7">
                <div className="text-82 inter-semi-bold-white-36-6px">{text82}</div>
                <div className="overlap-group3-10">
                  <img className="group-27" src={group1} />
                  <div className="number-6 inter-semi-bold-white-22px">{number1}</div>
                </div>
              </div>
              <div className="group-container-2">
                <div className="group-2-1">
                  <div className="flex-row-8">
                    <img className="vector-18" src="/img/vector-21@2x.png" />
                    <div className="overlap-group-33">
                      <img className="group-28" src={group2} />
                      <div className="number-7 inter-semi-bold-white-17-1px">{number2}</div>
                    </div>
                  </div>
                  <div className="text-83 inter-semi-bold-white-13-4px">{text83}</div>
                </div>
                <div className="group-3-1">
                  <img className="vector-19" src={vector2} />
                  <div className="overlap-group1-9">
                    <img className="group-29" src={group3} />
                    <div className="number-8 inter-semi-bold-white-17-1px">{number3}</div>
                    <div className="text-84 inter-semi-bold-white-13-4px">{text84}</div>
                  </div>
                </div>
              </div>
            </div>
            <Link to="/user-panel">
              <div className="text-80 inter-bold-licorice-20-9px">{text80}</div>
            </Link>
          </div>
          <div className="flex-col-9">
            <div className="group-40">
              <div className="flex-row-9">
                <div className="flex-col-10">
                  <div className="text-85 inter-bold-licorice-37-5px">{text85}</div>
                  <div className="group-49">
                    <div className="text-86">{text86}</div>
                  </div>
                  <div className="group-48">
                    <img className="ellipse-1-1" src={ellipse1} />
                    <div className="e-mail-egorledyaev1gmailcom inter-medium-black-24-3px">
                      {eMailEgorledyaev1GmailCom}
                    </div>
                  </div>
                  <div className="group-container-3">
                    <div className="group-45">
                      <img className="ellipse-2" src={ellipse2} />
                      <div className="fin-tech inter-medium-black-24-3px">{fintech}</div>
                    </div>
                    <div className="group-46">
                      <img className="ellipse-4" src={ellipse4} />
                      <div className="senior-data-scientist inter-medium-black-24-3px">{seniorDataScientist}</div>
                    </div>
                  </div>
                </div>
                <img className="elw7y-yoh-xn4-2-6" src={elw7Yyohxn42} />
              </div>
              <div className="group-47">
                <img className="ellipse-3" src={ellipse3} />
                <div className="text-87 inter-medium-black-24-3px">{text87}</div>
              </div>
            </div>
            <div className="overlap-group7-2" style={{ backgroundImage: `url(${overlapGroup7})` }}>
              <div className="text-91 inter-semi-bold-white-34-3px">{text91}</div>
              <div className="ellipse-container">
                <img className="ellipse-5" src={ellipse5} />
                <img className="ellipse" src={ellipse6} />
                <img className="ellipse" src={ellipse8} />
                <img className="ellipse-1" src={ellipse10} />
                <img className="ellipse-1" src={ellipse9} />
                <img className="ellipse-7" src={ellipse7} />
              </div>
              <div className="overlap-group-34">
                <div className="text-90 inter-semi-bold-white-18-5px">{text90}</div>
              </div>
            </div>
            <img className="settings-5" src={settings} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
