import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */
export const categories = [
  {
    _id: uuid(),
    categoryName: "Yoga",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1220&q=80",
    description:
      "Watch how yoga can totally transform your life by providing overall health benefits",
  },
  {
    _id: uuid(),
    categoryName: "Martial Arts",
    image: "https://images.unsplash.com/photo-1526889588514-2e695856df85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80",
    description:
      "Watch world's best martial arts teachers and learn amazing techniques to build a stronger mind and body",
  },
  {
    _id: uuid(),
    categoryName: "Cardio",
    image: "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1205&q=80",
    description:
      "Do you want to loose weight and build stamina the cool way? Go ahead and learn some cool exercises!",
  },
  {
    _id: uuid(),
    categoryName: "Healing",
    image: "https://images.unsplash.com/photo-1496008889433-9b938d8ac880?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
    description:
      "Healing is a important part of making sure we live a peaceful and flexible life. Watch how you can heal your body with these ancient and modern techniques!",
  },
  {
    _id: uuid(),
    categoryName: "Diet",
    image: "https://images.unsplash.com/photo-1561043433-aaf687c4cf04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description:
      "If your Gut is happy you are protected. Keeping the stomach fit is the ultimate way to be a fitness ninja. Watch Diet Videos and take charge of your life",
  },
  {
    _id: uuid(),
    categoryName: "Mental Health",
    image: "https://images.unsplash.com/photo-1620302044615-3883082d075a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description:
      "Watch amazing videos on mental health and understand the nitty gritty's of your brain!",
  },
];
