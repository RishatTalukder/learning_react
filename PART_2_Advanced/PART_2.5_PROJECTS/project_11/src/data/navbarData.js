import {
  FaApple,
  FaAmazon,
  FaLaptop,
  FaShoePrints,
  FaCouch,
  FaPercent,
  FaTags,
  FaGraduationCap,
} from "react-icons/fa";

export const navbarData = [
  {
    title: "Brands",
    links: [
      { label: "Apple", icon: FaApple, url: "/brands/apple" },
      { label: "Adidas", icon: FaShoePrints, url: "/brands/adidas" },
      { label: "Amazon Basics", icon: FaAmazon, url: "/brands/amazon-basics" },
    ],
  },
  {
    title: "Categories",
    links: [
      { label: "Laptops", icon: FaLaptop, url: "/categories/laptops" },
      { label: "Shoes", icon: FaShoePrints, url: "/categories/shoes" },
      { label: "Furniture", icon: FaCouch, url: "/categories/furniture" },
    ],
  },
  {
    title: "Deals",
    links: [
      { label: "Today's Deals", icon: FaPercent, url: "/deals/today" },
      { label: "Clearance", icon: FaTags, url: "/deals/clearance" },
      {
        label: "Student Discount",
        icon: FaGraduationCap,
        url: "/deals/student",
      },
    ],
  },
];
