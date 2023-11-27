import React from "react";
import Link from "next/link";
import Footer from "../Footer";
import { BiSearchAlt2, BiSolidUser } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { BsFillBagFill } from "react-icons/bs";
import Navbar from "../Navbar";
import styles from "./styles";
import useResponsiveWindow from "@/hooks/useResponsiveWindow";
import MobileFooter from "../MobileFooter";
import classNames from "classnames";
import Image from "next/image";

function BaseLayout({ children, changeHeader }) {
  const isMobile = useResponsiveWindow();

  return (
    <div className="layout">
      <div className="top-header">Free shipping on all orders over $100</div>
      <div
        className={classNames("header-image", {
          "change-background": changeHeader,
        })}
      >
        <Navbar />
        {!changeHeader && (
          <div className="nav-wrapper">
            <div className="right-side">
              <h2>Our Favouite Hoddie</h2>
              <p>
                Free shipping on all orders over $100.Free shipping on all
                orders over $100.Free shipping on all orders over $100
              </p>
              <p>$100.00</p>
              <div className="add-to-bag">
                <div>Add to Bag</div>
                <IoIosArrowForward />
              </div>
            </div>
            <div className="left-side">
              <Image
                src="/static/images/hoddie.jpg"
                alt="hoddie-image"
                width={isMobile ? 200 : 300}
                height={isMobile ? 200 : 300}
                style={{ mixBlendMode: "darken" }}
              />
            </div>
          </div>
        )}
        {changeHeader && (
          <div className="wrapper">
            <h2>School Uniforms</h2>
            <div className="add-to-bag">
              <div>Shop Now</div>
              <IoIosArrowForward />
            </div>
          </div>
        )}
      </div>
      <main>{children}</main>
      {isMobile ? <MobileFooter /> : <Footer />}

      <style jsx>{styles}</style>
    </div>
  );
}

export default BaseLayout;
