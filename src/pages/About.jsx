import React from "react";
import MyImg from "../components/UI/image/myImg";
import MyPotsDiv from "../components/posts/MyPotsDiv";
import './About.css'
import Footer from "../components/Footer";
const About = () => {
  return (
      <div className="about-container text-center">
          <h1>Добро пожаловать в приложение Polis!</h1>

          <p>
              Polis - это место, где вы можете делиться своими мыслями, опытом и
              историями с сообществом. <br/>
              Ваш вклад поможет создать интересные дискуссии и поделиться полезной
              информацией.
          </p>
          <p>
              Основные возможности приложения включают в себя создание и просмотр
              постов,
              <br/>
              управление пользователями, а также фильтрацию и поиск контента.
          </p>
          <hr style={{borderTop: '2px solid #004d40', margin: '0'}}/>
          <MyPotsDiv/>
          <hr style={{borderTop: '2px solid #004d40', margin: '0'}}/>

      </div>

  );
};

export default About;
