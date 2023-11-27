import React from "react";
import styles from "./styles";
import { PiMapPinThin } from "react-icons/pi";
import { BsTelephone } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import useResponsiveWindow from "@/hooks/useResponsiveWindow";

export default function ContactUs() {

  const isMobile = useResponsiveWindow();
  return (
    <>
    <div className="form-main-container">
      <div className="form-right-side">
        <div className="address-block">
          <PiMapPinThin
            style={{ width: "50px", height: "50px", marginRight: "20px" }}
          />
          <div>#1, Street City, Cuntry</div>
        </div>
        <div className="address-block">
          <BsTelephone
            style={{ width: "50px", height: "50px", marginRight: "20px" }}
          />
          <div>123, 456, 791</div>
        </div>
        <div className="address-block">
          <TfiEmail
            style={{ width: "50px", height: "50px", marginRight: "20px" }}
          />
          <div>example@gmail.com</div>
        </div>
      </div>
      <div className="form-left-side">
        <div class="form-container">
          <form action="action_page.php" style={{padding: isMobile && '15px'}}>
            <div className="help-field">
              <input
                type="text"
                id="help"
                name="help"
                placeholder="I need help with ...."
              />
            </div>
            <div className="form-fields">
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
              />
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Last Name"
              />
              <input
                type="number"
                id="phone"
                name="phone"
                placeholder="Phone"
              />
              <input type="email" id="email" name="email" placeholder="Email" />
              <input
                type="text"
                id="childFirstName"
                name="childFirstName"
                placeholder="Child First Name"
              />
              <input
                type="text"
                id="childlname"
                name="childlastname"
                placeholder="Child Last Name"
              />
            </div>
            <div className="submit-button">
              <button>Email Us</button>
            </div>
          </form>
        </div>
      </div>
      
    </div>
    <div className="hr-divider">
        <div  className="form-line"/>
      </div>
      <style jsx>{styles}</style>
    </>
  );
}
