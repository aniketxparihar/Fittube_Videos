import React, { useState } from 'react';
import { useUserData } from '../../Context/UserData-Context';
import "./CategoryCard.css";
import { Link } from 'react-router-dom';
import { useAuth } from '../../Context/Auth-Context';

const CategoryCard = (props) => {
  const [showOptions, setShowOptions] = useState("none");
  const {  categoryHandler } = useUserData();

  return (
    <div className="card__wrapper box-shadow flex flex-col m-8 bg--main-white relative">
      <div className="card__header flex flex-col ">
        <Link to="/videos" onClick={() => categoryHandler(props.category.categoryName)}>
          <img
            className="card__image pointer"
            src={props.category.image}
            alt=""
          />
        </Link>
         
        <div className="flex flex-row relative">
          <div className="card__headings p-4">
            <div className="card__heading txt-2xl txt-bold txt-gray-200">
              {props.category.categoryName}
            </div>
            <div className="card__sub__heading txt-2xl bold txt-gray-400 p-4">
              {props.category.description}
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default CategoryCard