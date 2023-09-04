import "./Skills.scss";
import { skillsText } from "../../data/text";

function Skills({ isTheme, isLanguage }) {
  return (
    <>
      <h4 className={`title-hard ${isTheme ? "" : "title-hard-dark"}`}>
        Технические навыки
      </h4>
      <h4 className={`title-soft ${isTheme ? "" : "title-soft-dark"}`}>
        Личностные навыки
      </h4>
      <ul className={`hardskills ${isTheme ? "" : "hardskills-dark"}`}>
        <li className="point">React</li>
        <li className="point">HTML, BEM</li>
        <li className="point">CSS, SCSS</li>
        <li className="point">Canvas</li>
        <li className="point">NodeJS, ExpressJs</li>
        <li className="point">RESTful API</li>
        <li className="point">GIT</li>
        <li className="point">Eslint, Prettier</li>
      </ul>
      <h4 className={`title-soft-low ${isTheme ? "" : "title-soft-low-dark"}`}>
        Личностные навыки
      </h4>
      <ul className={`softskills ${isTheme ? "" : "softskills-dark"}`}>
        <li className="point">
          {isLanguage ? skillsText.firstskillRu : skillsText.firstskillEn}
        </li>
        <li className="point">
          {isLanguage ? skillsText.secondSkillRu : skillsText.secondSkillEn}
        </li>
        <li className="point">
          {isLanguage ? skillsText.thirdSkillRu : skillsText.thirdSkillEn}
        </li>
        <li className="point">
          {isLanguage ? skillsText.fourSkillRu : skillsText.fourSkillEn}
        </li>
        <li className="point">
          {isLanguage ? skillsText.fiveSkillRu : skillsText.fiveSkillEn}
        </li>
        <li className="point">
          {isLanguage ? skillsText.sixSkillRu : skillsText.sixSkillEn}
        </li>
        <li className="point">
          {isLanguage ? skillsText.sevenSkillRu : skillsText.sevenSkillEn}
        </li>
      </ul>
    </>
  );
}

export default Skills;
