import React from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import styles from "./styles";
import FooterDropdownMenu from "../DropDownFooterMenus";
import Image from "next/image";

export default function MobileFooter() {
  return (
    <div className="mobile-footer">
      <div className="mobile-footer-wrapper">
        <h1>Company</h1>
        <div className="footer-social">
          <div className="footer-social-icon">
            <BiLogoFacebook style={{ width: "20px", height: "20px" }} />
          </div>
          <div className="footer-social-icon">
            <AiOutlineInstagram style={{ width: "20px", height: "20px" }} />
          </div>
          <div className="footer-social-icon">
            <AiOutlineTwitter style={{ width: "20px", height: "20px" }} />
          </div>
        </div>
      </div>
      <div style={{ position: "relative", width: "100%" }}>
        <FooterDropdownMenu
          title="Important Links"
          list1="Track Your Oder"
          list2="About Us"
          list3="Terms of Sevices"
        />
        <FooterDropdownMenu
          title="Our Policies"
          list1="Privacy Policy"
          list2="Shipping Policy"
          list3="Refund Policy"
        />
        <FooterDropdownMenu
          title="Contact Us"
          list1="Comapny@gmail.com"
          list2="Redeem code"
          list3="WHOIS lookup"
        />
      </div>
      <div
        style={{
          marginTop: 20,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div className="footer-text">
          <p>Canada (CAD $)</p>{" "}
          <IoIosArrowDown
            color="#fff"
            style={{ width: "15px", height: "15px" }}
          />
        </div>
        <div className="cards-container">
          <Image
            src="/static/images/visa-card.png"
            alt="card-images"
            width={30}
            height={30}
          />
          <Image
            src="/static/images/visa-card.png"
            alt="card-images"
            width={30}
            height={30}
          />
          <Image
            src="/static/images/visa-card.png"
            alt="card-images"
            width={30}
            height={30}
          />
          <Image
            src="/static/images/visa-card.png"
            alt="card-images"
            width={30}
            height={30}
          />
        </div>
        <p style={{ marginTop: 40 }}>@2023 Company. All rights reserved</p>
      </div>
      <style jsx>{styles}</style>
    </div>
  );
}
