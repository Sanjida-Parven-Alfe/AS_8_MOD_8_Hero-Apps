import React from "react";
import Navbar from "../../components/Header/Navbar";
import { Outlet } from "react-router";
import Footer from "../../components/Footer/Footer";
import { useNavigation } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const Root = () => {
   const navigation = useNavigation();
  return (
    <div>
      {navigation.state === "loading" && <Loader />}
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
