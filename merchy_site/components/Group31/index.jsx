import React from "react";
import Progress2 from "../Progress2";
import "./Group31.sass";

function Group31(props) {
  const { className } = props;

  return (
    <div className={`group-31-2 ${className || ""}`}>
      <div className="group-10">
        <div className="overlap-group-9">
          <img className="background-8" src="/img/background-2@1x.png" />
          <img className="background-9" src="/img/background-3@1x.png" />
          <Progress2 />
          <div className="address-4 inter-semi-bold-white-16px">35 дней осталось</div>
          <div className="text-35 inter-semi-bold-white-18px">
            Февраль - Март
            <br />
            ТЗ: Улучшенное меню настроек корпоративного приложения с сохранением особенностей дизайна и функционала
            <br />
            <br />
            19 дней с начала
          </div>
          <img className="read-4" src="/img/read-2@2x.png" />
          <div className="text-36 inter-bold-white-28px">Для разработчиков</div>
        </div>
      </div>
    </div>
  );
}

export default Group31;
