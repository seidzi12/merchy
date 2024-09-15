import React from "react";
import { Link } from "react-router-dom";
import "./Auth2.sass";

function Auth2(props) {
  const {
    image1,
    text126,
    text127,
    text129,
    overlapGroup7,
    text137,
    text138,
    address1,
    address2,
    overlapGroup2,
    text130,
    group1,
    number1,
    group2,
    number2,
    text131,
    vector2,
    group3,
    number3,
    text132,
    text128,
    text133,
    overlapGroup,
    text136,
    ellipse1,
    phone,
    ellipse2,
    dataScience,
    elw7Yyohxn42,
    ellipse3,
    ellipse4,
    text134,
    text135,
    overlapGroup8,
    text140,
    ellipse5,
    ellipse6,
    ellipse8,
    ellipse10,
    ellipse9,
    ellipse7,
    text139,
    settings,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="auth screen">
        <img className="image-1-10" src={image1} />
        <div className="flex-row-16">
          <div className="flex-col-16">
            <div className="text-126 inter-semi-bold-pink-swan-17-1px">{text126}</div>
            <div className="text-127 inter-bold-licorice-44px">{text127}</div>
            <div className="text-129 inter-bold-licorice-27-9px">{text129}</div>
            <div className="overlap-group7-4" style={{ backgroundImage: `url(${overlapGroup7})` }}>
              <div className="overlap-group-40">
                <div className="text-137 inter-bold-white-32-2px">{text137}</div>
                <div className="group-11-2"></div>
                <div className="text-138 inter-semi-bold-white-23px">{text138}</div>
              </div>
              <div className="address-container-1 inter-semi-bold-white-18-4px">
                <div className="address-17">{address1}</div>
                <div className="address-18">{address2}</div>
              </div>
              <div className="progress-18">
                <div className="active-18"></div>
              </div>
            </div>
            <div className="overlap-group2-19" style={{ backgroundImage: `url(${overlapGroup2})` }}>
              <div className="flex-row-17">
                <div className="text-130 inter-semi-bold-white-36-6px">{text130}</div>
                <div className="overlap-group3-12">
                  <img className="group-36" src={group1} />
                  <div className="number-12 inter-semi-bold-white-22px">{number1}</div>
                </div>
              </div>
              <div className="group-container-5">
                <div className="group-2-2">
                  <div className="flex-row-18">
                    <img className="vector-29" src="/img/vector-21@2x.png" />
                    <div className="overlap-group-41">
                      <img className="group-37" src={group2} />
                      <div className="number-13 inter-semi-bold-white-17-1px">{number2}</div>
                    </div>
                  </div>
                  <div className="text-131 inter-semi-bold-white-13-4px">{text131}</div>
                </div>
                <div className="group-3-2">
                  <img className="vector-30" src={vector2} />
                  <div className="overlap-group1-14">
                    <img className="group-38" src={group3} />
                    <div className="number-14 inter-semi-bold-white-17-1px">{number3}</div>
                    <div className="text-132 inter-semi-bold-white-13-4px">{text132}</div>
                  </div>
                </div>
              </div>
            </div>
            <Link to="/user-panel">
              <div className="text-128 inter-bold-licorice-20-9px">{text128}</div>
            </Link>
          </div>
          <div className="flex-col-17">
            <div className="group-40-1">
              <div className="flex-row-19">
                <div className="flex-col-18">
                  <div className="overlap-group5">
                    <div className="text-133 inter-bold-licorice-37-5px">{text133}</div>
                    <div className="overlap-group-42" style={{ backgroundImage: `url(${overlapGroup})` }}>
                      <div className="text-136">{text136}</div>
                    </div>
                  </div>
                  <div className="flex-row-20">
                    <img className="ellipse-6" src={ellipse1} />
                    <div className="phone inter-medium-black-24-3px">{phone}</div>
                  </div>
                  <div className="flex-row-21">
                    <img className="ellipse-6" src={ellipse2} />
                    <div className="data-science inter-medium-black-24-3px">{dataScience}</div>
                  </div>
                </div>
                <img className="elw7y-yoh-xn4-2-10" src={elw7Yyohxn42} />
              </div>
              <div className="flex-row-22">
                <div className="ellipse-container-1">
                  <img className="ellipse-6" src={ellipse3} />
                  <img className="ellipse-4-1" src={ellipse4} />
                </div>
                <div className="text-container inter-medium-black-24-3px">
                  <div className="text-134">{text134}</div>
                  <div className="text-135">{text135}</div>
                </div>
              </div>
            </div>
            <div className="overlap-group8-3" style={{ backgroundImage: `url(${overlapGroup8})` }}>
              <div className="text-140 inter-semi-bold-white-34-3px">{text140}</div>
              <div className="ellipse-container-2">
                <img className="ellipse-5-1" src={ellipse5} />
                <img className="ellipse-8" src={ellipse6} />
                <img className="ellipse-8" src={ellipse8} />
                <img className="ellipse-9" src={ellipse10} />
                <img className="ellipse-9" src={ellipse9} />
                <img className="ellipse-7-1" src={ellipse7} />
              </div>
              <div className="overlap-group-43">
                <div className="text-139 inter-semi-bold-white-18-5px">{text139}</div>
              </div>
            </div>
            <img className="settings-10" src={settings} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth2;
