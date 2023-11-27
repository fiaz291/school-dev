import React, { useEffect, useState } from "react";
import BaseLayout from "../BaseLayout";
import { BiSearchAlt2 } from "react-icons/bi";
import Products from "../Products";
import { AiOutlineClose, AiOutlineRight } from "react-icons/ai";
import styles from "./styles";
import MultiRangeSlider from "../PriceRangeSlider";
import SizeOptions from "../Sizes";
import useResponsiveWindow from "@/hooks/useResponsiveWindow";
import { GiHamburgerMenu } from "react-icons/gi";
import ShopOptions from "../ShopOptions";
import PPRODUCTS_DATA from "../../data/product.json";

const CATEGORIES = [
  {
    name: "all",
  },
  {
    name: "tops",
  },
  {
    name: "bottoms",
  },
  {
    name: "sweater",
  },
  {
    name: "accessories",
  },
  {
    name: "jackets",
  },
  {
    name: "dresses",
  },
  {
    name: "footwear",
  },
];

function Shop() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [products, setProducts] = useState(PPRODUCTS_DATA);
  const [filters, setFilters] = useState({
    categories: null,
    priceMin: null,
    priceMax: null,
    size: null,
    season: null,
  });
  const handleShowNavbar = () => {
    setShowNavbar(true);
  };
console.log({filters})
  useEffect(() => {
    let clonedProducts = [...PPRODUCTS_DATA];
    if (filters.categories) {
      if (filters.categories !== "all") {
        clonedProducts = clonedProducts.filter(
          (product) => product.category === filters.categories
        );
      } else {
        clonedProducts = clonedProducts.filter(
          (product) => product.category !== null
        );
      }
    }
    if (filters.priceMax) {
      clonedProducts =  clonedProducts.filter((product) => product.price <= filters.priceMax);
    }
    if (filters.priceMin) {
      clonedProducts =   clonedProducts.filter((product) => product.price >= filters.priceMin);
    }
    if (filters.season) {
      clonedProducts =  clonedProducts.filter((product) => product.season === filters.season);
    }
    if (filters.size) {
      clonedProducts =  clonedProducts.filter((product) => product.size === filters.size);
    }
    setProducts(clonedProducts);
  }, [filters]);

  const onChange = (value, type) => {
    let clonedFilters = { ...filters };
    if (clonedFilters[type] !== undefined) {
      clonedFilters[type] = value;
      setFilters(clonedFilters);
    }
  };
  const isMobile = useResponsiveWindow();
  return (
    <BaseLayout changeHeader>
      <div className="shop-main-container">
        {!isMobile && (
          <div className="shop-wrapper">
            <h3>{`Men's Uniform`}</h3>
            <div className="options-container">
              <p>Newest</p>
              <p>Mandatory</p>
              <p>Low Price to High</p>
              <p>High Price to Low</p>
            </div>
            <div className="search-container">
              <input type="search" placeholder="search here ...." />
              <BiSearchAlt2 />
            </div>
          </div>
        )}
        {isMobile && (
          <div style={{ position: "relative" }}>
            <h1>{`Men's Uniform`}</h1>
            <div className="menu-container">
              <div className="search-container">
                <input type="search" placeholder="search here ...." />
                <BiSearchAlt2 />
              </div>
              <div className="product-menu" onClick={() => handleShowNavbar()}>
                <GiHamburgerMenu />
                <div className="sort-text">Sort & Filters</div>
              </div>
            </div>
            <div className={`nav-elements  ${showNavbar && "active"}`}>
              <div style={{ padding: 20 }}>
                <div className="slide-dropdown">
                  <div className="heading">Filters</div>
                  <AiOutlineClose onClick={() => setShowNavbar(false)} />
                </div>
                <div className="hr-line" />
                <ShopOptions
                  title="Sort By"
                  list1="Newest"
                  list2="Mandatory"
                  list3="Low Price to High"
                  list4="High Price to Low"
                />
                <ShopOptions title="Categories" categories={CATEGORIES} />
                <ShopOptions title="Price" />
                <ShopOptions title="Sizes" />
                <ShopOptions title="Seasons" />
              </div>
            </div>
          </div>
        )}
        <div className="shop-divider" />
        <div className="inner-section">
          <div className="product-left-side">
            <Products cardWidth products={products} />
          </div>
          {!isMobile && (
            <div className="product-right-side">
              <div className="right-box">
                <div className="title">Categories</div>
                {CATEGORIES.map((item, index) => (
                  <div
                    className="product-option"
                    style={{ cursor: "pointer" }}
                    key={index}
                    onClick={() => {
                      onChange(item.name, "categories");
                    }}
                  >
                    <p>{item.name}</p>
                    <AiOutlineRight />
                  </div>
                ))}
              </div>
              <div className="right-box">
                <div className="title">Price</div>
                <MultiRangeSlider onChange={onChange} />
              </div>
              <div className="right-box">
                <div className="title">Sizes</div>
                <SizeOptions onChange={onChange} type={'size'} />
              </div>
              <div className="right-box">
                <div className="title">Seasons</div>
                <SizeOptions seasons onChange={onChange} type={'season'} />
              </div>
            </div>
          )}
        </div>
      </div>
      <style jsx>{styles}</style>
    </BaseLayout>
  );
}

export default Shop;
