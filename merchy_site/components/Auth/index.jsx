import React from "react";
import { Link } from "react-router-dom";
import Group9 from "../Group9";
import Group55 from "../Group55";
import "./Auth.sass";

function Auth(props) {
  const {
    overlapGroup2,
    rectangle22,
    image33,
    overlapGroup,
    text1,
    text2,
    me,
    spanText1,
    spanText2,
    group551Props,
    group552Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="auth-1 screen">
        <div className="overlap-group2" style={{ backgroundImage: `url(${overlapGroup2})` }}>
          <img className="rectangle-22" src={rectangle22} />
          <Link to="/admin-panel">
            <img className="image-33" src={image33} />
          </Link>
          <Link to="/user-panel">
            <div className="group-42">
              <div className="group-18">
                <div className="group-59">
                  <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup})` }}>
                    <div className="text-1">{text1}</div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <div className="group-58">
            <div className="group-18-1">
              <div className="text-2 inter-medium-white-26px">{text2}</div>
            </div>
          </div>
          <div className="group-57 inter-medium-licorice-30px">
            <Group9 />
            <div className="me">{me}</div>
            <div className="toys">
              <Group55>{group551Props.children}</Group55>
              <Group55 className={group552Props.className}>{group552Props.children}</Group55>
            </div>
            <div className="text-4">
              <span className="span0 inter-medium-licorice-30px">{spanText1}</span>
              <span className="span1 inter-medium-licorice-30px">{spanText2}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
