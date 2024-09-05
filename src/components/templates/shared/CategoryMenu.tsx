import { MenuItem, Paper } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { FaTshirt, FaMobileAlt } from "react-icons/fa";

export const CategoryMenu = () => {
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);
  const [hoverCategory, setHoverCategory] = useState<number | null>(null);

  const categories = [
    {
      name: "Clothing",
      icon: <FaTshirt />,
      subcategories: ["Men", "Women", "Kids"],
    },
    {
      name: "Electronics",
      icon: <FaMobileAlt />,
      subcategories: ["Mobile", "Laptop", "Camera"],
    },
  ];

  // Open submenu on click and keep it open
  const handleCategoryClick = (index: number) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  // Handle mouse enter to show the category's submenu
  const handleMouseEnter = (index: number) => {
    setHoverCategory(index);
  };

  // Handle mouse leave, but keep submenu open if clicked
  const handleMouseLeave = () => {
    setHoverCategory(null);
  };

  return (
    <Paper className="absolute top-full mt-1 z-50 w-56 bg-white shadow-lg">
      {categories.map((category, index) => (
        <div
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <MenuItem
            onClick={() => handleCategoryClick(index)}
            className="flex justify-between items-center px-4 py-2 hover:bg-gray-200"
          >
            <span className="flex items-center space-x-2">
              {category.icon} {category.name}
            </span>
          </MenuItem>

          {/* Keep subcategory open if hovered or clicked */}
          {(hoverCategory === index || openSubMenu === index) && (
            <Paper className="absolute left-full top-0 p-2 bg-gray-100 shadow-md w-[800px]">
              <div className="flex">
                <div>
                  {category.subcategories.map((sub, idx) => (
                    <MenuItem key={idx}>{sub}</MenuItem>
                  ))}
                </div>
                <Image
                  src={
                    "https://images.unsplash.com/photo-1700042708193-0ceb82c9bd05?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  alt=""
                  height={300}
                  width={300}
                />
              </div>
            </Paper>
          )}
        </div>
      ))}
    </Paper>
  );
};
