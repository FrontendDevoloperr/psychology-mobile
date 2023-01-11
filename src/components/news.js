import React from "react";
import Logo from "../assets/images/Icon.png";

const NewsParagraph = [
  {
    id: 0,
    title: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ab
    reprehenderit ex asperiores aliquid eum libero excepturi optio
    praesentium! Delectus, dolor! Architecto, possimus? Nobis suscipit
    incidunt est ex sunt cupiditate exercitationem dicta. Praesentium non,
    quasi accusantium pariatur blanditiis cumque adipisci quos sunt quae
    voluptates expedita esse eligendi unde quaerat voluptas ullam modi
    quibusdam magni saepe earum possimus delectus doloremque distinctio.
    Modi, soluta nostrum? Dolorem cumque esse error distinctio vel beatae!`,
  },
  {
    id: 1,
    title: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ab
    reprehenderit ex asperiores aliquid eum libero excepturi optio
    praesentium! Delectus, dolor! Architecto, possimus? Nobis suscipit
    incidunt est ex sunt cupiditate exercitationem dicta. Praesentium non,
    quasi accusantium pariatur blanditiis cumque adipisci quos sunt quae
    voluptates expedita esse eligendi unde quaerat voluptas ullam modi
    quibusdam magni saepe earum possimus delectus doloremque distinctio.
    Modi, soluta nostrum? Dolorem cumque esse error distinctio vel beatae!`,
  },
  {
    id: 2,
    title: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ab
    reprehenderit ex asperiores aliquid eum libero excepturi optio
    praesentium! Delectus, dolor! Architecto, possimus? Nobis suscipit
    incidunt est ex sunt cupiditate exercitationem dicta. Praesentium non,
    quasi accusantium pariatur blanditiis cumque adipisci quos sunt quae
    voluptates expedita esse eligendi unde quaerat voluptas ullam modi
    quibusdam magni saepe earum possimus delectus doloremque distinctio.
    Modi, soluta nostrum? Dolorem cumque esse error distinctio vel beatae!`,
  },
];

function News() {
  return (
    <div className="news">
      <div className="news_logo">
        <img src={Logo} alt="" />
        <div className="news_logo_title">
          <h1>Biz haqimizda</h1>
        </div>
      </div>
      <div className="news_paragraph">
        {NewsParagraph.map(({ id, title }) => {
          return <p key={id}>{title}</p>;
        })}
      </div>
    </div>
  );
}

export default News;
