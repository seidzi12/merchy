import React from "react";
import { Link } from "react-router-dom";
import "./Favourites.sass";

function Favourites(props) {
  const {
    image1,
    text73,
    text74,
    text76,
    text77,
    group1,
    image61,
    image2,
    macbookPro13500,
    group2,
    image62,
    x81RebiyaamoRemovebgPreview11,
    x1,
    group3,
    image63,
    image18,
    ubay9IuafwoRemovebgPreview1,
    image25,
    image26,
    image27,
    text75,
    image64,
    number,
    vector2,
    vector3,
    elw7Yyohxn42,
    settings,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="favourites screen">
        <img className="image-1-5" src={image1} />
        <div className="flex-row-5">
          <div className="flex-col-5">
            <div className="text-73 inter-semi-bold-pink-swan-17-1px">{text73}</div>
            <div className="text-74 inter-bold-licorice-44px">{text74}</div>
            <div className="text-76 inter-bold-licorice-27-9px">{text76}</div>
            <div className="overlap-group3-9">
              <div className="frame-5">
                <div className="flex-col-6">
                  <Link to="/goodie-card">
                    <div className="iphone-1">
                      <div className="overlap-group-30">
                        <div className="rectangle-39"></div>
                        <div className="text-77">{text77}</div>
                        <img className="group-21" src={group1} />
                        <img className="image-6-8" src={image61} />
                        <img className="image-2-1" src={image2} />
                      </div>
                    </div>
                  </Link>
                  <Link to="/goodie-card">
                    <div className="macbook-1">
                      <div className="overlap-group1-8">
                        <div className="rectangle-40"></div>
                        <div className="mac-book-pro-13-500-1">{macbookPro13500}</div>
                        <img className="group-22" src={group2} />
                        <img className="image-6-9" src={image62} />
                        <img className="x81-r-ebi-yaa-mo-removebg-preview-1-1-2" src={x81RebiyaamoRemovebgPreview11} />
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="overlap-group2-14">
                  <Link to="/goodie-card">
                    <div className="group-43"></div>
                  </Link>
                  <div className="x1-1">{x1}</div>
                  <img className="group-26" src={group3} />
                  <img className="image-6-10" src={image63} />
                  <img className="image-18-5" src={image18} />
                  <img className="uba-y9iua-f-wo-removebg-preview-1-1" src={ubay9IuafwoRemovebgPreview1} />
                </div>
              </div>
              <img className="image-25" src={image25} />
              <img className="image-26" src={image26} />
              <img className="image-27" src={image27} />
            </div>
            <Link to="/user-panel">
              <div className="text-75 inter-bold-licorice-20-9px">{text75}</div>
            </Link>
          </div>
          <img className="image-6-11" src={image64} />
          <div className="overlap-group-31">
            <div className="number-5 inter-semi-bold-black-22-1px">{number}</div>
            <div className="vector-container-5">
              <img className="vector-15" src="/img/vector@2x.png" />
              <img className="vector-16" src={vector2} />
              <img className="vector-17" src={vector3} />
            </div>
          </div>
          <div className="flex-col-7">
            <Link to="/user-profile">
              <img className="elw7y-yoh-xn4-2-5" src={elw7Yyohxn42} />
            </Link>
            <img className="settings-4" src={settings} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Favourites;
