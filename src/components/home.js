import { Button, Image, List, Swiper } from "antd-mobile";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Icon.png";
import "../assets/less/style.css";

const users = [
  {
    id: "1",
    avatar:
      "https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    name: "Novalee Spicer",
    description: "Deserunt dolor ea eaque eos",
  },
  {
    id: "2",
    avatar:
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9",
    name: "Sara Koivisto",
    description: "Animi eius expedita, explicabo",
  },
  {
    id: "3",
    avatar:
      "https://images.unsplash.com/photo-1542624937-8d1e9f53c1b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    name: "Marco Gregg",
    description: "Ab animi cumque eveniet ex harum nam odio omnis",
  },
  {
    id: "4",
    avatar:
      "https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    name: "Edith Koenig",
    description: "Commodi earum exercitationem id numquam vitae",
  },
  {
    id: "4",
    avatar:
      "https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    name: "Edith Koenig",
    description: "Commodi earum exercitationem id numquam vitae",
  },
  {
    id: "4",
    avatar:
      "https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    name: "Edith Koenig",
    description: "Commodi earum exercitationem id numquam vitae",
  },
  {
    id: "4",
    avatar:
      "https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    name: "Edith Koenig",
    description: "Commodi earum exercitationem id numquam vitae",
  },
  {
    id: "4",
    avatar:
      "https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    name: "Edith Koenig",
    description: "Commodi earum exercitationem id numquam vitae",
  },
  {
    id: "4",
    avatar:
      "https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    name: "Edith Koenig",
    description: "Commodi earum exercitationem id numquam vitae",
  },
  {
    id: "4",
    avatar:
      "https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    name: "Edith Koenig",
    description: "Commodi earum exercitationem id numquam vitae",
  },
  {
    id: "4",
    avatar:
      "https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    name: "Edith Koenig",
    description: "Commodi earum exercitationem id numquam vitae",
  },
];

const colors = ["#ace0ff", "#bcffbd", "#e4fabd"];

const items = colors.map((color, index) => (
  <Swiper.Item key={index}>
    <div className="slider_content">
      <div className="box_user_left">
        <div className="box_user_paragraph">Eng yangi</div>
        <h3>Bahodir Karimov</h3>
        <Link to="/more">
          <Button>Batafsil</Button>
        </Link>
      </div>
      <Image
        className="sliderContainer"
        src={
          "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/17af17150cc0e6f06b72f62b570a522c61f1a2bb11119590ec02261278af004e._SX1080_.jpg"
        }
        height={150}
        fit="cover"
      />
    </div>
  </Swiper.Item>
));

export const HomePage = () => {
  return (
    <div className="home">
      <h2>Kurslar</h2>
      <div className="home_lessons">
        <div className="home_left">
          <img src={Logo} alt="" />
          <div className="home_left_title">
            <h4>Ma`naviyat va marifa</h4>
            <p>4 ta dars</p>
          </div>
        </div>
        <div className="home_left">
          <img src={Logo} alt="" />
          <div className="home_left_title">
            <h4>Ma`naviyat va marifa</h4>
            <p>4 ta dars</p>
          </div>
        </div>
      </div>
      <div className="lecturers">
        <h2>Lektorlar</h2>
        <div className="lecturers_slide">
          <div className="box_user">
            <Swiper
              style={{
                "--border-radius": "8px",
              }}
              defaultIndex={3}
            >
              {items}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="home_content">
        <List className="users_body" header="">
          {users.map((user, i) => (
            <List.Item
              key={i}
              prefix={
                <Image
                  src={user.avatar}
                  style={{ borderRadius: 20 }}
                  fit="cover"
                  width={40}
                  height={40}
                />
              }
              description={user.description}
            >
              {user.name}
            </List.Item>
          ))}
        </List>
      </div>
    </div>
  );
};
