import React from "react";
import { Link } from "react-router-dom";
import Progress from "../Progress";
import Progress2 from "../Progress2";
import "./AdminPanel.sass";

function AdminPanel(props) {
  const {
    image1,
    text20,
    text21,
    image33,
    text22,
    uovpruyekdkRemovebgPreview2,
    text28,
    text27,
    x1581325382150189389RemovebgPreview,
    i6NhB598YgRemovebgPreview1,
    merch,
    xgal3Kkcwl0RemovebgPreview1,
    text26,
    x81RebiyaamoRemovebgPreview1,
    text25,
    orig1,
    text24,
    read,
    text23,
    elw7Yyohxn42,
    background1,
    background2,
    address1,
    text29,
    text30,
    image31,
    background3,
    background4,
    address2,
    text31,
    text32,
    image32,
    text19,
    frame9,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="admin-panel screen">
        <img className="image-1-1" src={image1} />
        <div className="flex-row-2">
          <div className="flex-col-2">
            <div className="overlap-group6-1">
              <div className="group-9-9">
                <div className="text-20 inter-semi-bold-pink-swan-18-3px">{text20}</div>
                <div className="text-21 inter-bold-licorice-46-9px">{text21}</div>
              </div>
              <img className="image-33-1" src={image33} />
            </div>
            <div className="text-22 inter-bold-licorice-28-8px">{text22}</div>
            <Link to="/gadgets-menu">
              <div className="group-33-1">
                <div className="overlap-group-container-3">
                  <div className="overlap-group4-1">
                    <div className="rectangle-6"></div>
                    <img className="u-ov-pruy-ekdk-removebg-preview-2-1" src={uovpruyekdkRemovebgPreview2} />
                    <div className="text-28 inter-semi-bold-licorice-17-1px">{text28}</div>
                  </div>
                  <div className="overlap-group3-1">
                    <div className="text-27 inter-semi-bold-licorice-18px">{text27}</div>
                    <img
                      className="x1581325382150189389-removebg-preview-1-1"
                      src={x1581325382150189389RemovebgPreview}
                    />
                  </div>
                </div>
                <div className="overlap-group-container-4">
                  <div className="overlap-group-5">
                    <div className="rectangle-5"></div>
                    <img className="i6n-h-b598yg-removebg-preview-1-1" src={i6NhB598YgRemovebgPreview1} />
                    <div className="merch-1 inter-semi-bold-licorice-18px">{merch}</div>
                  </div>
                  <div className="overlap-group2-3">
                    <div className="rectangle-7"></div>
                    <img className="x-gal3k-kcwl0-removebg-preview-1-1" src={xgal3Kkcwl0RemovebgPreview1} />
                    <div className="text-26 inter-semi-bold-licorice-18px">{text26}</div>
                  </div>
                </div>
                <div className="overlap-group-container-5">
                  <div className="overlap-group-5">
                    <div className="rectangle-5"></div>
                    <img className="x81-r-ebi-yaa-mo-removebg-preview-1-1" src={x81RebiyaamoRemovebgPreview1} />
                    <div className="text-25 inter-semi-bold-licorice-18px">{text25}</div>
                  </div>
                  <div className="overlap-group-7">
                    <div className="rectangle-8"></div>
                    <img className="orig-1-1" src={orig1} />
                    <div className="text-24 inter-semi-bold-licorice-20-4px">{text24}</div>
                  </div>
                </div>
              </div>
            </Link>
            <img className="read-2" src={read} />
          </div>
          <div className="flex-col-3">
            <div className="flex-row-3">
              <div className="text-23 inter-bold-licorice-28-8px">{text23}</div>
              <img className="elw7y-yoh-xn4-2-1" src={elw7Yyohxn42} />
            </div>
            <div className="flex-row-4">
              <div className="flex-col-4">
                <div className="frame-7">
                  <div className="group-5">
                    <div className="overlap-group1-1">
                      <Link to="/contest">
                        <div className="group-2">
                          <div className="overlap-group-6">
                            <img className="background-4" src={background1} />
                            <img className="background-5" src={background2} />
                            <Progress />
                            <div className="address-2 inter-semi-bold-white-16px">{address1}</div>
                            <div className="text inter-semi-bold-white-18px">{text29}</div>
                            <div className="text-3-1 inter-bold-white-28px">{text30}</div>
                          </div>
                        </div>
                      </Link>
                      <img className="image-31" src={image31} />
                    </div>
                  </div>
                </div>
                <div className="frame-8">
                  <div className="group-5">
                    <div className="overlap-group1-2">
                      <Link to="/contest">
                        <div className="group-31-1">
                          <div className="group-3">
                            <div className="overlap-group-6">
                              <img className="background-4" src={background3} />
                              <img className="background-5" src={background4} />
                              <Progress2 />
                              <div className="address-2 inter-semi-bold-white-16px">{address2}</div>
                              <div className="text inter-semi-bold-white-18px">{text31}</div>
                              <div className="text-3-1 inter-bold-white-28px">{text32}</div>
                            </div>
                          </div>
                        </div>
                      </Link>
                      <img className="image-32" src={image32} />
                    </div>
                  </div>
                </div>
                <div className="text-19 inter-bold-licorice-24px">{text19}</div>
              </div>
              <Link to="/auth-1" className="align-self-flex-end">
                <div className="frame-9-1" style={{ backgroundImage: `url(${frame9})` }}></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
