import React, { useEffect, useRef, useState } from "react";
import { Button, Space, Swiper } from "antd-mobile";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Avatar from "../assets/images/Icon.png";

const colors = ["#ace0ff", "#bcffbd", "#e4fabd", "#ffcfac"];

const items = colors.map((color, index) => (
  <Swiper.Item key={index} className="users_body">
    <div className="screen_images">
      <img src={Avatar} alt="" />
    </div>
    <div className="screen_text">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et reiciendis
        itaque tempore architecto, atque voluptatibus iusto ut asperiores
        expedita temporibus blanditiis inventore officiis. Autem aut non
        deleniti numquam accusamus ab.
      </p>
    </div>
  </Swiper.Item>
));

function Screen() {
  const { auth } = useSelector(({ user }) => user);
  const ref = useRef(null);
  const history = useHistory();
  const [apply, setApply] = useState(false);
  useEffect(() => {
    auth && history.replace("/home");
  }, [auth, history]);
  return (
    <div className="body_stl">
      <Swiper onIndexChange={(e) => setApply(e === 3)} ref={ref} loop>
        {items}
      </Swiper>
      <Space className="screen_btn">
        <Button onClick={() => history.push("/login")}>
          O`tkazib yuborish
        </Button>
        <Button
          onClick={() => {
            apply ? history.push("/login") : ref.current?.swipeNext();
          }}
        >
          {apply ? "Login" : "Next"}
        </Button>
      </Space>
    </div>
  );
}

export default Screen;
