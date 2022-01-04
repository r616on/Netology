import React from "react";
import { concatStyles } from "../../../helpers/css-modules";

import criticalCSS from "./critical.scss";
import mobileCSS from "./mobile.scss";
import tabletCSS from "./tablet.scss";
import desktopCSS from "./desktop.scss";

import Button from "../../atoms/Button/Button";
import WeaponCard from "../../atoms/WeaponCard/WeaponCard";
import SpecialtiesItem from "../../atoms/SpecialtiesItem/SpecialtiesItem";
import Modal from "../../atoms/Modal/Modal";
import stormtrooper from "../../atoms/SpecialtiesItem/rifleman-shturm.png";
import sniper from "../../atoms/SpecialtiesItem/rifleman-sniper.png";
import medic from "../../atoms/SpecialtiesItem/rifleman-med.png";
import engineer from "../../atoms/SpecialtiesItem/rifleman-injen.png";
import other from "../../atoms/SpecialtiesItem/else.png";
import specialtiesItems from "./specialtiesItems.json";
import weaponCardItems from "./weaponCardItems.json";

const styles = concatStyles([criticalCSS, mobileCSS, tabletCSS, desktopCSS]);
const specialtiesArr: object = {
  stormtrooper: stormtrooper,
  sniper: sniper,
  medic: medic,
  engineer: engineer,
  other: other,
};
const DonateChoice = ({ isOpen, onClose }) => {
  return (
    <Modal
      title={"Выбор доната"}
      isOpen={isOpen}
      onClose={onClose}
      size={"big"}
    >
      <div className={styles.specialties}>
        {...specialtiesItems.map((item: SpecialtiesItem, index: number) => (
          <SpecialtiesItem
            isFirst={index === 0}
            isLast={index === specialtiesItems.length - 1}
            key={index}
            type={item.type}
            status={item.status || false}
          >
            {item.title}
          </SpecialtiesItem>
        ))}
      </div>
      <div className={styles.weapon}>
        {...weaponCardItems.map((item: WeaponCard, index: number) => (
          <WeaponCard key={index} color={item.color} />
        ))}
      </div>

      <div className={styles.footer}>
        <div className={styles.item}>
          <Button
            as={"button"}
            color={"primary"}
            size={"medium"}
            //onClick={onRegister}
            style={{ paddingLeft: "80px", paddingRight: "80px" }}
          >
            Готово !
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DonateChoice;
