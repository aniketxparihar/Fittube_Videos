import React from 'react'
import "./Category.css"
import { useUserData } from "../../Context/UserData-Context";

const Category = () => {
  const {sortBy,
  sortByHandler
    } = useUserData();

    const categories = [
      "All",
      "Yoga",
      "Martial Arts",
      "Cardio",
      "Healing",
      "Diet",
      "Mental Health",
    ];
  return (

    <div className="categories">
          
              {categories.map((category) => {
                  return (
                    <div className={sortBy===category?'active-category':'category'} key={categories.indexOf(category)}  onClick={()=>sortByHandler(category)}>
                          {category}
                    </div>
                )
            })}
    </div>
  )
}

export default Category