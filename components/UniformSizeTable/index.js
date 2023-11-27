import React from "react";
import styles from "./styles";

const SIZES = [
  {
    usaSize: "XXS",
    inches: "32=34",
    chestSize: "81-96",
  },
  {
    usaSize: "XXS",
    inches: "32=34",
    chestSize: "81-96",
  },
  {
    usaSize: "XXS",
    inches: "32=34",
    chestSize: "81-96",
  },
  {
    usaSize: "XXS",
    inches: "32=34",
    chestSize: "81-96",
  },
  {
    usaSize: "XXS",
    inches: "32=34",
    chestSize: "81-96",
  },
  {
    usaSize: "XXS",
    inches: "32=34",
    chestSize: "81-96",
  },
  {
    usaSize: "XXS",
    inches: "32=34",
    chestSize: "81-96",
  },
];

const TROUSER_SIZE = [
  {
    inchesWaist: "30",
    cmWaist: "74",
  },
  {
    inchesWaist: "30",
    cmWaist: "74",
  },
  {
    inchesWaist: "30",
    cmWaist: "74",
  },
  {
    inchesWaist: "30",
    cmWaist: "74",
  },
];

export default function UniformSizeTable({ trousersOptions }) {
  return (
    <div className="table-container">
      <table className="report">
        <tbody>
          <tr className="title">
            <td colspan="4">
              <p className="center">
                {trousersOptions
                  ? `Boy's Trousers`
                  : "UnderShirts, CardiGans, Vests"}
              </p>
            </td>
          </tr>
          <tr className="new">
            <td className="top-heading">{trousersOptions ? 'inches (waist)' : 'usa size'}</td>
            <td className="top-heading">{trousersOptions ? 'cm (waist)' : 'inches (cm)'}</td>
           {!trousersOptions && <td className="top-heading">
              cm (Chest)
            </td>}
          </tr>
          {!trousersOptions && SIZES.map((item, index) => (
            <tr key={index}>
              <td className="normal">{item.usaSize}</td>
              <td className="normal">{item.inches}</td>
              <td className="normal">
                {item.chestSize}
              </td>
            </tr>
          ))}
           {trousersOptions && TROUSER_SIZE.map((item, index) => (
            <tr key={index}>
              <td className="normal">{item.inchesWaist}</td>
              <td className="normal">{item.cmWaist}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <style jsx>{styles}</style>
    </div>
  );
}
