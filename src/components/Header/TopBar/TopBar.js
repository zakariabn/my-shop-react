import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faHeart,
  faDownLeftAndUpRightToCenter,
  faShare,
  faGear,
  faRectangleAd,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";

const TopBar = () => {
  return (
    <div className="flex justify-between px-5 py-2 bg-[#f1f1f3] border-b border-gray-400">
      <ul className="flex gap-5">
        <li className="text-gray-500">
          <FontAwesomeIcon icon={faLock} />
          <span className="ml-1 ">Sing in</span>
        </li>
        <li className="text-gray-500">
          <FontAwesomeIcon icon={faHeart} />
          <span className="ml-1 ">Wishlist</span>
        </li>
        <li className="text-gray-500">
          <FontAwesomeIcon icon={faDownLeftAndUpRightToCenter} />
          <span className="ml-1 ">Compar</span>
        </li>
        <li className="text-gray-500">
          <FontAwesomeIcon icon={faShare} />
          <span className="ml-1 ">Checkout</span>
        </li>
      </ul>

      <div className="flex gap-5">
        <div className="flex gap-1.5 items-center p-1 rounded-sm bg-[#009BCB]  text-white">
          <FontAwesomeIcon icon={faGear} className="text-sm"/>
          <span>Language:</span>
          <FontAwesomeIcon icon={faRectangleAd} className="text-sm"/>
          <FontAwesomeIcon icon={faCaretDown} className="text-sm"/>
        </div>
        <div className="flex gap-1.5 items-center p-1 rounded-sm text-gray-500 bg-[#e1e1e1] ">
          <FontAwesomeIcon icon={faGear} className="text-sm"/>
          <span>Currency: $</span>
          <span>USD</span>
          <FontAwesomeIcon icon={faCaretDown} className="text-sm "/>
        </div>
      </div>
    </div>
  );
};

export default TopBar;