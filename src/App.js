import React from "react";
import { NavBar, TabBar } from "antd-mobile";
import {
  Route,
  Switch,
  useHistory,
  useLocation,
  MemoryRouter as Router,
  Link,
} from "react-router-dom";
import {
  AppOutline,
  BellOutline,
  MessageOutline,
  // UnorderedListOutline,
  UserOutline,
} from "antd-mobile-icons";
import { Content } from "./assets";
import { Users } from "./components/users";
import { HomePage } from "./components/home";
import Screen from "./components/screen";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { useSelector } from "react-redux";
import Login from "./components/login";
import Newses from "./components/news";
import Profile from "./components/profile";
import Logo from "./assets/images/Icon.png";
import MoreInfo from "./components/moreInfo";

const Bottom = () => {
  const history = useHistory();
  const location = useLocation();
  const { pathname } = location;

  const setRouteActive = (value) => {
    history.push(value);
  };

  const tabs = [
    {
      key: "/home",
      title: "",
      icon: <AppOutline />,
    },
    // {
    //   key: "/todo",
    //   title: "",
    //   icon: <UnorderedListOutline />,
    // },
    {
      key: "/message",
      title: "",
      icon: <MessageOutline />,
    },
    {
      key: "/me",
      title: "",
      icon: <UserOutline />,
    },
    {
      key: "/yangiliklar",
      title: "",
      icon: <BellOutline />,
    },
  ];

  return (
    <TabBar
      activeKey={pathname}
      safeArea={true}
      onChange={(value) => setRouteActive(value)}
    >
      {tabs.map((item) => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  );
};

export const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

const Routes = () => {
  const { auth } = useSelector(({ user }) => user);

  return (
    <Router initialEntries={[auth ? "/home" : "/splash"]}>
      {auth ? (
        <Screens />
      ) : (
        <>
          <Route exact path={"/splash"}>
            <Splash />
          </Route>
          <Route exact path={"/login"}>
            <Login />
          </Route>
        </>
      )}
    </Router>
  );
};

const Screens = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className={"app"}>
      <div className={"top"}>
        <Link to="/home">{pathname === "/home" ? "" : <NavBar />}</Link>

        <div className="header_logo">
          <img src={Logo} alt="..." />
        </div>
        <div className="header_profile">
          <div className="header_profile_logo">
            <img src={Logo} alt="" />
          </div>
        </div>
      </div>
      <div className={"body"}>
        <Content>
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/message">
              <Message />
            </Route>
            <Route exact path="/me">
              <PersonalCenter />
            </Route>
            <Route exact path="/yangiliklar">
              <News />
            </Route>
            <Route exact path="/more">
              <MoreInfo />
            </Route>
          </Switch>
        </Content>
      </div>
      <div className={"bottom"}>
        <Bottom />
      </div>
    </div>
  );
};

function Home() {
  return <HomePage />;
}

function Splash() {
  return (
    <div>
      <Screen />
    </div>
  );
}

function Message() {
  return <Users />;
}

function PersonalCenter() {
  return (
    <div>
      <Profile />
    </div>
  );
}

function News() {
  return (
    <div>
      <Newses />
    </div>
  );
}
