import React from "react";
import { Link } from "react-router-dom";
import Group9 from "../Group9";
import Progress from "../Progress";
import Progress2 from "../Progress2";
import "./UserPanel.sass";

function UserPanel(props) {
  const {
    image1,
    text12,
    image18,
    image6,
    number,
    vector2,
    vector3,
    text13,
    elw7Yyohxn42,
    uovpruyekdkRemovebgPreview2,
    text18,
    text17,
    x1581325382150189389RemovebgPreview,
    i6NhB598YgRemovebgPreview1,
    merch,
    xgal3Kkcwl0RemovebgPreview1,
    text16,
    x81RebiyaamoRemovebgPreview1,
    text15,
    orig1,
    text14,
    read1,
    background1,
    background2,
    address1,
    text10,
    read2,
    text11,
    background3,
    background4,
    address2,
    text8,
    read3,
    text9,
    text6,
    frame9,
    settings,
    group9Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="user-panel screen">
        <img className="image-1" src={image1} />
        <div className="flex-row">
          <div className="group-container">
            <Group9 className={group9Props.className} />
            <div className="overlap-group6">
              <div className="text-12 inter-bold-licorice-28-8px">{text12}</div>
              <Link to="/favourites">
                <img className="image-18" src={image18} />
              </Link>
            </div>
          </div>
          <Link to="/cart" className="align-self-flex-end">
            <img className="image-6" src={image6} />
          </Link>
          <div className="overlap-group2-1">
            <div className="number inter-semi-bold-black-22-1px">{number}</div>
            <div className="vector-container">
              <img className="vector" src="/img/vector@2x.png" />
              <img className="vector-1" src={vector2} />
              <img className="vector-2" src={vector3} />
            </div>
          </div>
          <div className="text-13 inter-bold-licorice-28-8px">{text13}</div>
          <Link to="/user-profile">
            <img className="elw7y-yoh-xn4-2" src={elw7Yyohxn42} />
          </Link>
        </div>
        <div className="flex-row-1">
          <div className="flex-col">
            <Link to="/gadgets-menu">
              <div className="group-33">
                <div className="overlap-group-container">
                  <div className="overlap-group4">
                    <Link to="/toys-menu">
                      <div className="rectangle"></div>
                    </Link>
                    <img className="u-ov-pruy-ekdk-removebg-preview-2" src={uovpruyekdkRemovebgPreview2} />
                    <div className="text-18 inter-semi-bold-licorice-17-1px">{text18}</div>
                  </div>
                  <div className="overlap-group3">
                    <div className="text-17 inter-semi-bold-licorice-18px">{text17}</div>
                    <img
                      className="x1581325382150189389-removebg-preview-1"
                      src={x1581325382150189389RemovebgPreview}
                    />
                  </div>
                </div>
                <div className="overlap-group-container-1">
                  <div className="overlap-group-2">
                    <Link to="/merch-menu">
                      <div className="rectangle-1"></div>
                    </Link>
                    <img className="i6n-h-b598yg-removebg-preview-1" src={i6NhB598YgRemovebgPreview1} />
                    <div className="merch inter-semi-bold-licorice-18px">{merch}</div>
                  </div>
                  <div className="overlap-group2-2">
                    <div className="rectangle-2"></div>
                    <img className="x-gal3k-kcwl0-removebg-preview-1" src={xgal3Kkcwl0RemovebgPreview1} />
                    <div className="text-16 inter-semi-bold-licorice-18px">{text16}</div>
                  </div>
                </div>
                <div className="overlap-group-container-2">
                  <div className="overlap-group-2">
                    <div className="rectangle-3"></div>
                    <img className="x81-r-ebi-yaa-mo-removebg-preview-1" src={x81RebiyaamoRemovebgPreview1} />
                    <div className="text-15 inter-semi-bold-licorice-18px">{text15}</div>
                  </div>
                  <div className="overlap-group-3">
                    <div className="rectangle-4"></div>
                    <img className="orig-1" src={orig1} />
                    <div className="text-14 inter-semi-bold-licorice-20-4px">{text14}</div>
                  </div>
                </div>
              </div>
            </Link>
            <img className="read-1" src={read1} />
          </div>
          <div className="flex-col-1">
            <Link to="/contest">
              <div className="group">
                <div className="overlap-group1">
                  <img className="background" src={background1} />
                  <img className="background-1" src={background2} />
                  <Progress />
                  <div className="address inter-semi-bold-white-16px">{address1}</div>
                  <div className="text-10 inter-semi-bold-white-18px">{text10}</div>
                  <Link to="/contest">
                    <img className="read" src={read2} />
                  </Link>
                  <div className="text-11 inter-bold-white-28px">{text11}</div>
                </div>
              </div>
            </Link>
            <Link to="/contest">
              <div className="group-31">
                <div className="group-1">
                  <div className="overlap-group-4">
                    <img className="background-2" src={background3} />
                    <img className="background-3" src={background4} />
                    <Progress2 />
                    <div className="address-1 inter-semi-bold-white-16px">{address2}</div>
                    <div className="text-8 inter-semi-bold-white-18px">{text8}</div>
                    <Link to="/contest">
                      <img className="read" src={read3} />
                    </Link>
                    <div className="text-9 inter-bold-white-28px">{text9}</div>
                  </div>
                </div>
              </div>
            </Link>
            <div className="text-6 inter-bold-licorice-24px">{text6}</div>
            <Link to="/auth-1" className="align-self-flex-end">
              <div className="frame-9" style={{ backgroundImage: `url(${frame9})` }}></div>
            </Link>
          </div>
          <Link to="/settings" className="align-self-flex-end">
            <img className="settings" src={settings} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserPanel;
