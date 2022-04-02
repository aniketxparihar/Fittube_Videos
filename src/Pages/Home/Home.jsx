import React, { useEffect, useState } from "react";
import axios from "axios";
import CategoryCard from "../../Components/CategoryCard/CategoryCard";
import Categories from "../../Components/Category/Category";
import "./Home.css";
import { useUserData } from "../../Context/UserData-Context";

const Home = () => {
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() =>{(async () => {
        const response = await axios.get("/api/categories");
        setCategoryList(response.data.categories);
      })()},
    []);

  return (
    <div className="home__container">
      <div className="page__heading">Categories</div>
      <div className="videos__container">
        {categoryList.map((category) => {
          return (
            <div key={category._id} className="category__card">
              <CategoryCard category={category} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
