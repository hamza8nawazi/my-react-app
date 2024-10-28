import Navbar from "../../layout/navbar";
import "./Home.css";
import Button from "../../components/button";
import List from "../../components/lists";
import { useState } from "react";
const Home = () => {
  const [isActiveFirstItem, setIsActiveFirstItem] = useState(true);
  const [isActiveSecondItem, setIsActiveSecondItem] = useState(false);
  const [isActiveThirdItem, setIsActiveThirdItem] = useState(true);
  const [isActiveFourthItem, setIsActiveFourthItem] = useState(false);

  const myitems = [
    { title: "item 1", ischecked: isActiveFirstItem },
    { title: "item 2", ischecked: isActiveSecondItem },
    { title: "item 3", ischecked: isActiveThirdItem },
    { title: "item 4", ischecked: isActiveFourthItem },
  ];

  const reverse = () => {
    setIsActiveFirstItem(!isActiveFirstItem);
    setIsActiveSecondItem(!isActiveSecondItem);
    setIsActiveThirdItem(!isActiveThirdItem);
    setIsActiveFourthItem(!isActiveFourthItem);
  };
  return (
    <>
      <Navbar />
      <Button label="Click Me" onClick={reverse} />
      <List items={myitems} />
    </>
  );
};

export default Home;
