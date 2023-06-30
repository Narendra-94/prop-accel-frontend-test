import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div class="items-center flex text-xl justify-center scroll-smooth">
      <div class="items-center flex justify-center px-14 scroll-smooth">
        <div class="bottom-[1.56rem] text-white font-bold left-[10.94rem] absolute right-[70.94rem] scroll-smooth top-[2.25rem]">
          <p class="scroll-smooth">Logo</p>
        </div>
        <div class="items-start bottom-[1.56rem] gap-[6.69rem] flex left-[54.13rem] absolute right-[7.25rem] scroll-smooth top-[2.25rem]">
          <li class="text-white list-item scroll-smooth">About </li>
          <li class="text-white list-item scroll-smooth">Pricing </li>
          <li class="text-white list-item scroll-smooth">Review</li>
        </div>
      </div>
    </div>
  );
};
