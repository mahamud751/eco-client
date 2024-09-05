"use client";
import { useState, useEffect, useRef } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Drawer,
  Badge,
  Button,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { FiUser } from "react-icons/fi";
import { BsFillCaretDownFill } from "react-icons/bs";
import Link from "next/link";
import { CategoryMenu } from "@/components/templates/shared/CategoryMenu";

export default function Navbar() {
  const [cartOpen, setCartOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  const toggleCart = () => setCartOpen(!cartOpen);
  const toggleCategories = () => setCategoriesOpen(!categoriesOpen);

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement | null;

    if (target && !target.closest(".category-dropdown")) {
      setCategoriesOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <AppBar position="static" className="bg-white text-black shadow-md">
      <Toolbar className="flex justify-between">
        {/* Company Name */}
        <Link href="/" className="text-xl font-bold">
          KorboJoy
        </Link>

        {/* Search Bar */}
        <div className="hidden sm:flex w-1/2 items-center bg-gray-100 p-2 rounded">
          <InputBase
            placeholder="Search products..."
            fullWidth
            className="text-black"
          />
        </div>

        {/* Cart Icon */}
        <IconButton color="inherit" onClick={toggleCart}>
          <Badge badgeContent={2} color="primary">
            <ShoppingCart />
          </Badge>
        </IconButton>

        {/* Cart Modal */}
        <Drawer anchor="right" open={cartOpen} onClose={toggleCart}>
          <div className="w-80 p-4">
            <h2 className="text-lg font-bold">Your Cart</h2>
            {/* Cart items */}
            <div className="mt-4">
              <div className="flex justify-between items-center">
                <div>
                  <p>Product Name</p>
                  <p>$50</p>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <Button variant="contained" color="primary" fullWidth>
                Checkout
              </Button>
            </div>
          </div>
        </Drawer>

        {/* Sign Up Button */}
        <Link href="/signup">
          <Button variant="outlined" color="inherit" startIcon={<FiUser />}>
            Sign Up
          </Button>
        </Link>
      </Toolbar>

      {/* Second Row for Categories */}
      <Toolbar className="bg-gray-100">
        {/* Category Dropdown */}
        <div className="relative category-dropdown">
          <Button onClick={toggleCategories} endIcon={<BsFillCaretDownFill />}>
            Categories
          </Button>
          {categoriesOpen && <CategoryMenu />}
        </div>

        {/* Static Links */}
        <div className="ml-auto flex space-x-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/checkout">Checkout</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
