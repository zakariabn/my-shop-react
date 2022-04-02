import React from "react";
import MainHeader from "./MainHeader/MainHeader";
import Navigation from "./Navigaiton/Navigation";
import TopBar from "./TopBar/TopBar";

const Header = () => {
  return (
    <div className="w-full max-w-screen-xl flex justify-center w-inherit ">
      <div className="w-full flex flex-col items-center">
        <TopBar></TopBar>
        <MainHeader></MainHeader>
        <Navigation></Navigation>
      </div>
    </div>
  );
};

export default Header;
