import { Collapse, Tabs } from "antd-mobile";
import React from "react";
import Logo from "../assets/images/Icon.png";

const MoreDate = [
  {
    id: 0,
    title: "Darslar",
    key: "fruits",
    child: [
      {
        id: 0,
        title: "Leksiya",
        description: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum perspiciatis delectus doloremque nisi sapiente,
                    veritatis consequuntur neque molestiae eaque tempore.
        `,
      },
      {
        id: 1,
        title: "Molliya",
        description: `
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Harum perspiciatis delectus doloremque nisi sapiente,
                      veritatis consequuntur neque molestiae eaque tempore.
          `,
      },
      {
        id: 2,
        title: "Molliya",
        description: `
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Harum perspiciatis delectus doloremque nisi sapiente,
                      veritatis consequuntur neque molestiae eaque tempore.
          `,
      },
      {
        id: 3,
        title: "Molliya",
        description: `
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Harum perspiciatis delectus doloremque nisi sapiente,
                      veritatis consequuntur neque molestiae eaque tempore.
          `,
      },
    ],
  },
  {
    id: 1,
    title: "Kurslar",
    key: "vegetables",
    child: [
      {
        id: 0,
        title: "Molliya",
        description: `
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Harum perspiciatis delectus doloremque nisi sapiente,
                      veritatis consequuntur neque molestiae eaque tempore.
          `,
      },
      {
        id: 1,
        title: "Molliya",
        description: `
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Harum perspiciatis delectus doloremque nisi sapiente,
                      veritatis consequuntur neque molestiae eaque tempore.
          `,
      },
      {
        id: 2,
        title: "Molliya",
        description: `
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Harum perspiciatis delectus doloremque nisi sapiente,
                      veritatis consequuntur neque molestiae eaque tempore.
          `,
      },
    ],
  },
  {
    id: 2,
    title: "Direktor",
    key: "animals",
    child: [
      {
        id: 0,
        title: "Leksiya",
        description: `
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Harum perspiciatis delectus doloremque nisi sapiente,
                      veritatis consequuntur neque molestiae eaque tempore.
          `,
      },
      {
        id: 1,
        title: "Molliya",
        description: `
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Harum perspiciatis delectus doloremque nisi sapiente,
                      veritatis consequuntur neque molestiae eaque tempore.
          `,
      },
    ],
  },
];

function MoreInfo() {
  return (
    <div className="more">
      <div className="news_logo">
        <img src={Logo} alt="" />
        <div className="news_logo_title">
          <h1>Madaniyart va marifat</h1>
        </div>
      </div>
      <div className="news_tabs">
        <Tabs>
          {MoreDate.map((res) => {
            return (
              <Tabs.Tab title={res.title} key={res.key}>
                <Collapse>
                  {res.child.map(({ id, title, description }) => {
                    return (
                      <Collapse.Panel key={id} title={title}>
                        {description}
                      </Collapse.Panel>
                    );
                  })}
                </Collapse>
              </Tabs.Tab>
            );
          })}
        </Tabs>
      </div>
    </div>
  );
}

export default MoreInfo;
