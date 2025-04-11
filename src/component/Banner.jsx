import React from "react";

export default function Banner() {
  return (
    <div className="h-8 bg-indigo-950 text-white hidden lg:block">
      <div className="container mx-auto px-5 h-full flex justify-center items-center">
        <div className="w-1/2 text-left text-sm font-thin">
          <p>Free shipping on all orders over $50</p>
        </div>
        <div className="w-1/2 text-sm font-thin">
          <ul className="flex justify-end gap-4">
            <li>
              <select>
                <option value="">Eng</option>
                <option value="">Hindi</option>
                <option value="">Malayalam</option>
              </select>
            </li>
            <li>Faq</li>
            <li>Need Help</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
