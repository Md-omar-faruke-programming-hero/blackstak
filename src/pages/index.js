/* eslint-disable @next/next/no-img-element */
import Candlestick from "@/Component/Candlestick";
import Image from "next/image";
import React, { useState } from "react";
import { BiSolidDashboard } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";

function SidebarAndContent() {
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [btn1, setBtn1] = useState("USTD");
  const [btn2, setBtn2] = useState("BTC");

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };

  const closeDropdown1 = () => {
    setIsOpen1(false);
  };
  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };

  const closeDropdown2 = () => {
    setIsOpen2(false);
  };

  return (
    <div className="flex">
      {/* Mobile Sidebar Toggle Button */}

      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:block transform transition-transform duration-300 ease-in-out sm:bg-[#F0F8FF] 
        md:bg-[#fff] lg:w-[255px] sm:w-full  fixed top-0 left-0 overflow-y-auto z-50 py-[41px] border-[#C0C5CB5E] border-[1px] pl-[25px] h-auto`}
      >
        {/* ... Sidebar content (same as before) */}

        <div className="text-left cursor-pointer ">
          <div className="flex sm:justify-between sm:pr-[20px]">
            <img src="img/logo.png" alt="" className="w-[201px] h-[32px]  " />
            <button className="lg:hidden " onClick={toggleSidebar}>
              <AiFillCloseCircle></AiFillCloseCircle>
            </button>
          </div>

          <div className="bg-[#D5E6FB] pl-[29px]  flex items-center  w-[208px] h-[49px] rounded-[9px] md:mt-[77px] sm:mt-[40px] mb-[24px]">
            <img src="img/id.png" className="w-[28px] h-[28px] mr-[7px]" alt="" />
            <p className=" text-[17px] text-[#0060FF] font-medium">Dashboard</p>
          </div>
          <div className="hover:bg-[#D5E6FB] hover:text-[#0060FF] pl-[29px] flex items-center   w-[208px] h-[49px] rounded-[9px] mb-[24px]">
            <img src="img/m.png" className="w-[28px] h-[28px] mr-[7px] " alt="" />
            <p className=" text-[black] hover:text-[#0060FF] text-[17px] font-medium">Markets</p>
          </div>
          <div className="hover:bg-[#D5E6FB] hover:text-[#0060FF] pl-[29px] flex items-center  w-[208px] h-[49px] rounded-[9px] mb-[24px]">
            <img src="img/ti.png" className="w-[28px] h-[28px] mr-[7px] " alt="" />
            <p className=" text-[black] hover:text-[#0060FF] text-[17px] font-medium">
              Transactions
            </p>
          </div>
          <div className="hover:bg-[#D5E6FB] hover:text-[#0060FF]  pl-[29px] flex items-center  w-[208px] h-[49px] rounded-[9px] mb-[24px]">
            <img src="img/ui.png" className="w-[28px] h-[28px] mr-[7px] " alt="" />
            <p className=" text-[black] hover:text-[#0060FF] text-[17px] font-medium">Profile</p>
          </div>
          <div className="hover:bg-[#D5E6FB] hover:text-[#0060FF] pl-[29px] flex items-center   w-[208px] h-[49px] rounded-[9px] mb-[24px]">
            <img src="img/si.png" className="w-[28px] h-[28px] mr-[7px] " alt="" />
            <p className=" text-[black] hover:text-[#0060FF] text-[17px] font-medium">Setting</p>
          </div>
          <div className="pr-[25px] md:mt-[50px] md:mb-[50px] sm:my-[25px]">
            <div className="bg-[#E8EAECC7] h-[1.5px]  "></div>
          </div>
          <div className="hover:bg-[#D5E6FB] hover:text-[#0060FF] pl-[29px] flex items-center   w-[208px] h-[49px] rounded-[9px] mb-[24px]">
            <img src="img/h.png" className="w-[28px] h-[28px] mr-[7px] " alt="" />
            <p className=" text-[black] hover:text-[#0060FF] text-[17px] font-medium">Help</p>
          </div>
          <div className="hover:bg-[#D5E6FB] hover:text-[#0060FF] pl-[29px] flex items-center   w-[208px] h-[49px] rounded-[9px] mb-[24px]">
            <img src="img/lg.png" className="w-[28px] h-[28px] mr-[7px] " alt="" />
            <p className=" text-[black] hover:text-[#0060FF] text-[17px] font-medium">Log Out</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={`${
          isSidebarOpen && "md:ml-[255px]"
        } flex-1 bg-gray-100  transition-margin duration-300 ease-in-out  min-h-screen md:ml-[255px] `}
      >
        {/* ... Main content (same as before) */}
        <>
          <div className="h-[98px] bg-[#fff] md:px-[28px] sm:px-[10px] py-[28px]  ">
            <div className="flex justify-between   ">
              <button className="lg:hidden   " onClick={toggleSidebar}>
                <BiSolidDashboard className="w-[22px] h-[22px]"></BiSolidDashboard>
              </button>
              <div className="relative">
                <input
                  type="search"
                  name=""
                  id=""
                  placeholder="Search..."
                  className="md:w-[626px] sm:w-[200px] h-[50px] sm:hidden md:block border-[#C4CACD] border-[1px] rounded-[30px] p-[20px] focus:outline-0 "
                />

                <img
                  src="img/search.png"
                  alt=""
                  className="w-[18px] h-[18px] absolute top-[18px] md:left-[580px] sm:left-[166px]"
                />
              </div>
              <div className="flex items-center">
                <div className="md:mr-[30px] sm:mr-[10px]">
                  <img
                    src="img/noti.png"
                    alt=""
                    className="md:w-[26px] md:h-[28px] sm:w-[22px] sm:h-[26px] cursor-pointer"
                  />
                </div>
                <div>
                  <div className="sm:w-[157px] md:w-[265px] h-[59px] bg-[#F2F8FF] rounded-[13px] px-[10px] py-[5px] flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="mr-[10px]">
                        <img
                          src="img/pro.png"
                          alt=""
                          className="sm:w-[27px] sm:h-[27px] md:w-[45px] md:h-[45px] cursor-pointer"
                        />
                      </div>
                      <div className="line">
                        <p className="text-[#1F1F1F] font-semibold md:text-[13.47px] sm:text-[13px]">
                          Andy Warhol
                        </p>
                        <p className="md:text-[11px] sm:text-[8px] text-[#5E6E78] font-medium">
                          andywarhol@gmail.com
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <img
                        src="img/threedot.png"
                        alt=""
                        className="md:w-[4px] md:h-[19px] sm:h-[8px] sm:w-[2px] cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pl-[28px] py-[28px] h-auto bg-[#F0F8FF]">
            <div className="flex md:flex-row sm:flex-col items-center sm:justify-center mb-[27px]">
              <div className="w-[302px] h-[auto] bg-[#fff] pt-[23px] pb-[18px] pl-[23px] rounded-[12px] sm:mb-[25px] md:mb-0 sm:mr-0 md:mr-[25px]">
                <div className="flex items-center mb-[22px]">
                  <div className="mr-[16px]">
                    {" "}
                    <img
                      src="img/balance.png"
                      alt=""
                      className="w-[44px] h-[43px] cursor-pointer"
                    />
                  </div>
                  <div className="mr-[25px]">
                    <p className="text-[16px] font-semibold">Estimated Balance</p>
                  </div>
                  <div>
                    {" "}
                    <img src="img/eye.png" alt="" className="w-[19px] h-[14px] cursor-pointer" />
                  </div>
                </div>
                <div className="mb-[16px]">
                  <p className="text-[30px] font-semibold ">$123,987</p>
                </div>
                <div className="flex items-center">
                  <p className="text-[13px] font-medium text-[#626D7D] mr-[18px]">Monthly Profit</p>
                  <p className="text-[13px] font-semibold text-[#219653] mr-[18px]">+$2560.78</p>
                  <p className="text-[11px] font-semibold bg-[#21965333] leading-[22px] text-[#219653] rounded-[60px] px-[8px] mr-[18px]">
                    +$2560.78
                  </p>
                </div>
              </div>
              <div className="w-[325px] h-[auto] bg-[#fff] pt-[23px] pb-[18px] pl-[23px] rounded-[12px] sm:mb-[25px] md:mb-0 sm:mr-0 md:mr-[25px]">
                <div className="flex items-center mb-[22px]">
                  <div className="mr-[16px]">
                    {" "}
                    <img src="img/b.png" alt="" className="w-[44px] h-[43px] cursor-pointer" />
                  </div>
                  <div className="mr-[25px]">
                    <p className="text-[16px] font-semibold">BTCUSDT</p>
                    <p className="text-[13px] text-[#626D7D] font-medium">Bticoin</p>
                  </div>
                </div>
                <div className="mb-[16px] flex items-baseline">
                  <p className="text-[20px] font-semibold mr-[42px] ">$23,738</p>
                  <img src="img/bg.png" className="w-[137px] h-[50px]" alt="" />
                </div>
                <div className="flex items-center">
                  <p className="text-[13px] font-medium text-[#626D7D] mr-[40px]">PNL Daily</p>
                  <p className="text-[13px] font-semibold text-[#EB5757] mr-[40px]">-$16.78</p>
                  <p className="text-[11px] font-semibold bg-[#21965333] leading-[22px] text-[#219653] rounded-[60px] px-[8px] mr-[18px]">
                    +14.67%
                  </p>
                </div>
              </div>
              <div className="w-[325px] h-[auto] bg-[#fff] pt-[23px] pb-[18px] pl-[23px] rounded-[12px] sm:mb-[25px] md:mb-0 sm:mr-0 md:mr-[25px]">
                <div className="flex items-center mb-[22px]">
                  <div className="mr-[16px]">
                    {" "}
                    <img src="img/et.png" alt="" className="w-[44px] h-[43px] cursor-pointer" />
                  </div>
                  <div className="mr-[25px]">
                    <p className="text-[16px] font-semibold">ETHUSDT</p>
                    <p className="text-[13px] text-[#626D7D] font-medium">Ethereum</p>
                  </div>
                </div>
                <div className="mb-[16px] flex items-baseline">
                  <p className="text-[20px] font-semibold mr-[42px] ">$23,738</p>
                  <img src="img/eg.png" className="w-[137px] h-[50px]" alt="" />
                </div>
                <div className="flex items-center">
                  <p className="text-[13px] font-medium text-[#626D7D] mr-[40px]">PNL Daily</p>
                  <p className="text-[13px] font-semibold text-[#219653] mr-[40px]">+$189.91</p>
                  <p className="text-[11px] font-semibold bg-[#21965333] leading-[22px] text-[#219653] rounded-[60px] px-[8px] mr-[18px]">
                    +24.68%
                  </p>
                </div>
              </div>
              <div className="w-[325px] h-[auto] bg-[#fff] pt-[23px] pb-[18px] pl-[23px] rounded-[12px] sm:mb-[25px] md:mb-0 sm:mr-0 md:mr-[25px]">
                <div className="flex items-center mb-[22px]">
                  <div className="mr-[16px]">
                    {" "}
                    <img src="img/so.png" alt="" className="w-[44px] h-[43px] cursor-pointer" />
                  </div>
                  <div className="mr-[25px]">
                    <p className="text-[16px] font-semibold">SOLUSDT</p>
                    <p className="text-[13px] text-[#626D7D] font-medium">Solana</p>
                  </div>
                </div>
                <div className="mb-[16px] flex items-baseline">
                  <p className="text-[20px] font-semibold mr-[42px] ">$23,738</p>
                  <img src="img/sg.png" className="w-[137px] h-[50px]" alt="" />
                </div>
                <div className="flex items-center">
                  <p className="text-[13px] font-medium text-[#626D7D] mr-[40px]">PNL Daily</p>
                  <p className="text-[13px] font-semibold text-[#EB5757] mr-[40px]">+$556.14</p>
                  <p className="text-[11px] font-semibold bg-[#21965333] leading-[22px] text-[#219653] rounded-[60px] px-[8px] mr-[18px]">
                    +64.11%
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center md:flex-row sm:flex-col">
              <div className="md:w-[851px] sm:w-[auto] sm:px-[10px] sm:justify-center  h-[auto] bg-[#fff] rounded-[12px] py-[35px] px-[43px] mr-[25px]">
                <div className="flex md:flex-row sm:flex-col justify-between items-start mb-[14px]">
                  <div className="w-[334px] rounded-[12px] h-[auto] py-[14px] px-[20px] bg-[#F9F9FA8F]">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[20px] font-semibold">BTCUSDT</p>
                        <p className="text-[13px] font-medium text-[#626D7D]"> Bitcoin</p>
                      </div>
                      <div className="flex items-center">
                        <div className="mr-[12px]">
                          {" "}
                          <p className="text-[18px] font-semibold">$23,738</p>
                          <p className="text-[10px] ml-[12px] leading-[22px] font-semibold bg-[#21965333] text-[#219653] rounded-[60px] px-[8px]">
                            +23,6%
                          </p>
                        </div>
                        <div>
                          {" "}
                          <img src="img/drp.png" className="w-[19px] h-[20px]" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center ">
                    <button className="px-[12px] py-[2px] text-[#0060FF] bg-[#F2F8FF] rounded-[7px] cursor-pointer mr-[10px]">
                      1H
                    </button>
                    <button className="px-[12px] py-[2px] hover:text-[#0060FF] text-[black] hover:bg-[#F2F8FF] bg-[#DDE1E438] rounded-[7px] cursor-pointer mr-[10px]">
                      3H
                    </button>
                    <button className="px-[12px] py-[2px]  hover:text-[#0060FF] text-[black] hover:bg-[#F2F8FF] bg-[#DDE1E438]  rounded-[7px] cursor-pointer mr-[10px]">
                      5H
                    </button>
                    <button className="px-[12px] py-[2px]  hover:text-[#0060FF] text-[black] hover:bg-[#F2F8FF] bg-[#DDE1E438]  rounded-[7px] cursor-pointer mr-[10px]">
                      1D
                    </button>
                    <button className="px-[12px] py-[2px]  hover:text-[#0060FF] text-[black] hover:bg-[#F2F8FF] bg-[#DDE1E438]  rounded-[7px] cursor-pointer mr-[10px]">
                      1W
                    </button>
                    <button className="px-[12px] py-[2px]  hover:text-[#0060FF] text-[black] hover:bg-[#F2F8FF] bg-[#DDE1E438]  rounded-[7px] cursor-pointer ">
                      1M
                    </button>
                  </div>
                </div>
                <div>
                 
                
                  <img src="img/Chart.png" alt="" className="w-[100%] h-[auto] cursor-pointer" />
                </div>
              </div>
              <div className="md:w-[478px] sm:justify-center sm:w-[400px] sm:mt-[10px] md:mt-0 h-[428px] bg-[#fff] rounded-[12px] py-[37px] px-[33px] mr-[25px] scrollable-div overflow-y-scroll cursor-move relative">
                <div className="flex items-center sm:flex-col md:flex-row mb-[28px]">
                  <div className="md:mr-[12px]">
                    <p className="text-[20px] font-semibold sm:mb-[10px] md:mb-0">Markets</p>
                  </div>
                  <div>
                    {" "}
                    <div className="flex items-center  text-[10px]">
                      <button className="px-[12px] py-[2px] text-[#0060FF] bg-[#F2F8FF] rounded-[7px] cursor-pointer mr-[10px]">
                        All
                      </button>
                      <button className="px-[12px] py-[2px] hover:text-[#0060FF] text-[black] hover:bg-[#F2F8FF] bg-[#DDE1E438] rounded-[7px] cursor-pointer mr-[10px]">
                        Metaverse
                      </button>
                      <button className="px-[12px] py-[2px]  hover:text-[#0060FF] text-[black] hover:bg-[#F2F8FF] bg-[#DDE1E438]  rounded-[7px] cursor-pointer mr-[10px]">
                        Gaming
                      </button>
                      <button className="px-[12px] py-[2px]  hover:text-[#0060FF] text-[black] hover:bg-[#F2F8FF] bg-[#DDE1E438]  rounded-[7px] cursor-pointer mr-[10px]">
                        Defi
                      </button>
                      <button className="px-[12px] py-[2px]  hover:text-[#0060FF] text-[black] hover:bg-[#F2F8FF] bg-[#DDE1E438]  rounded-[7px] cursor-pointer mr-[10px]">
                        NFT
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <table className="">
                    <tbody>
                      <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                      </tr>
                      <tr className="leading-[28px] border-b-[1px] h-[50px]">
                        <td className="text-[12px] font-semibold md:pr-[40px] sm:pr-[40px] text-left">
                          BTCUSDT
                        </td>
                        <td className="text-[#5E6E78] text-[12px] font-semibold md:pr-[40px] sm:pr-[40px] text-left ">
                          Bitcoin{" "}
                        </td>
                        <td className="text-[#5E6E78] text-[12px] font-semibold md:pr-[40px] sm:pr-[40px] text-right ">
                          $23,495{" "}
                        </td>
                        <td className="text-[#5E6E78] text-[12px] font-semibold  text-left ">
                          {" "}
                          <p className="text-[11px] font-semibold bg-[#21965333] leading-[22px] text-[#219653] rounded-[60px] px-[8px] mr-[18px]">
                            +64.11%
                          </p>{" "}
                        </td>
                      </tr>
                      <tr className="leading-[28px] border-b-[1px] h-[50px]">
                        <td className="text-[12px] font-semibold md:pr-[40px] sm:pr-[40px] text-left">
                          AXSUSDT
                        </td>
                        <td className="text-[#5E6E78] text-[12px] font-semibold md:pr-[40px] sm:pr-[40px] text-left ">
                          Axie Infinity{" "}
                        </td>
                        <td className="text-[#5E6E78] text-[12px] font-semibold md:pr-[40px] sm:pr-[40px] text-right ">
                          $15.9{" "}
                        </td>
                        <td className="text-[#5E6E78] text-[12px] font-semibold  text-left ">
                          {" "}
                          <p className="text-[11px] font-semibold bg-[#EB575733] leading-[22px] text-[#EB5757] rounded-[60px] px-[8px] mr-[18px]">
                            +64.11%
                          </p>{" "}
                        </td>
                      </tr>
                      <tr className="leading-[28px] border-b-[1px] h-[50px]">
                        <td className="text-[12px] font-semibold md:pr-[40px] sm:pr-[40px] text-left">
                          ETHUSDT
                        </td>
                        <td className="text-[#5E6E78] text-[12px] font-semibold md:pr-[40px] sm:pr-[40px]text-left ">
                          Ethereum{" "}
                        </td>
                        <td className="text-[#5E6E78] text-[12px] font-semibold md:pr-[40px] sm:pr-[40px] text-right ">
                          $23,495{" "}
                        </td>
                        <td className="text-[#5E6E78] text-[12px] font-semibold  text-left ">
                          {" "}
                          <p className="text-[11px] font-semibold bg-[#21965333] leading-[22px] text-[#219653] rounded-[60px] px-[8px] mr-[18px]">
                            +64.11%
                          </p>{" "}
                        </td>
                      </tr>
                      <tr className="leading-[28px] border-b-[1px] h-[50px]">
                        <td className="text-[12px] font-semibold md:pr-[65px] sm:pr-[40px] text-left">
                          SOLUSDT
                        </td>
                        <td className="text-[#5E6E78] text-[12px] font-semibold md:pr-[40px] sm:pr-[40px] text-left ">
                          Solana{" "}
                        </td>
                        <td className="text-[#5E6E78] text-[12px] font-semibold md:pr-[40px] sm:pr-[40px] text-right ">
                          $15.9{" "}
                        </td>
                        <td className="text-[#5E6E78] text-[12px] font-semibold  text-left ">
                          {" "}
                          <p className="text-[11px] font-semibold bg-[#EB575733] leading-[22px] text-[#EB5757] rounded-[60px] px-[8px] mr-[18px]">
                            +64.11%
                          </p>{" "}
                        </td>
                      </tr>
                      <tr className="leading-[28px] border-b-[1px] h-[50px]">
                        <td className="text-[12px] font-semibold md:pr-[40px] sm:pr-[40px] text-left">
                          BNBUSDT
                        </td>
                        <td className="text-[#5E6E78] text-[12px] font-semibold md:pr-[40px] sm:pr-[40px] text-left ">
                          Binance{" "}
                        </td>
                        <td className="text-[#5E6E78] text-[12px] font-semibold md:pr-[40px] sm:pr-[40px] text-right ">
                          $15.9{" "}
                        </td>
                        <td className="text-[#5E6E78] text-[12px] font-semibold  text-left ">
                          {" "}
                          <p className="text-[11px] font-semibold bg-[#21965333] leading-[22px] text-[#219653] rounded-[60px] px-[8px] mr-[18px]">
                            +64.11%
                          </p>{" "}
                        </td>
                      </tr>
                      <tr className="leading-[28px] border-b-[1px] h-[50px]">
                        <td className="text-[12px] font-semibold md:pr-[40px] sm:pr-[40px] text-left">
                          ADAUSDT
                        </td>
                        <td className="text-[#5E6E78] text-[12px] font-semibold md:pr-[40px] sm:pr-[40px] text-left ">
                          Cardano{" "}
                        </td>
                        <td className="text-[#5E6E78] text-[12px] font-semibold md:pr-[40px] sm:pr-[40px] text-right ">
                          $15.9{" "}
                        </td>
                        <td className="text-[#5E6E78] text-[12px] font-semibold  text-left ">
                          {" "}
                          <p className="text-[11px] font-semibold bg-[#EB575733] leading-[22px] text-[#EB5757] rounded-[60px] px-[8px] mr-[18px]">
                            +64.11%
                          </p>{" "}
                        </td>
                      </tr>
                      <tr className="leading-[28px] border-b-[1px] h-[50px]">
                        <td className="text-[12px] font-semibold md:pr-[40px] sm:pr-[40px] text-left">
                          BTCUSDT
                        </td>
                        <td className="text-[#5E6E78] text-[12px] font-semibold md:pr-[40px] sm:pr-[40px] text-left ">
                          Bitcoin{" "}
                        </td>
                        <td className="text-[#5E6E78] text-[12px] font-semibold md:pr-[40px] sm:pr-[40px] text-right ">
                          $23,495{" "}
                        </td>
                        <td className="text-[#5E6E78] text-[12px] font-semibold  text-left ">
                          {" "}
                          <p className="text-[11px] font-semibold bg-[#21965333] leading-[22px] text-[#219653] rounded-[60px] px-[8px] mr-[18px]">
                            +64.11%
                          </p>{" "}
                        </td>
                      </tr>
                      <tr className="leading-[28px] border-b-[1px] h-[50px]">
                        <td className="text-[12px] font-semibold md:pr-[40px] sm:pr-[40px] text-left">
                          AXSUSDT
                        </td>
                        <td className="text-[#5E6E78] text-[12px] font-semibold md:pr-[40px] sm:pr-[40px] text-left ">
                          Axie Infinity{" "}
                        </td>
                        <td className="text-[#5E6E78] text-[12px] font-semibold md:pr-[40px] sm:pr-[40px] text-right ">
                          $15.9{" "}
                        </td>
                        <td className="text-[#5E6E78] text-[12px] font-semibold  text-left ">
                          {" "}
                          <p className="text-[11px] font-semibold bg-[#EB575733] leading-[22px] text-[#EB5757] rounded-[60px] px-[8px] mr-[18px]">
                            +64.11%
                          </p>{" "}
                        </td>
                      </tr>
                      <tr className="leading-[28px] border-b-[1px] h-[50px]">
                        <td className="text-[12px] font-semibold md:pr-[40px] sm:pr-[40px] text-left">
                          ETHUSDT
                        </td>
                        <td className="text-[#5E6E78] text-[12px] font-semibold md:pr-[40px] sm:pr-[40px]text-left ">
                          Ethereum{" "}
                        </td>
                        <td className="text-[#5E6E78] text-[12px] font-semibold md:pr-[40px] sm:pr-[40px] text-right ">
                          $23,495{" "}
                        </td>
                        <td className="text-[#5E6E78] text-[12px] font-semibold  text-left ">
                          {" "}
                          <p className="text-[11px] font-semibold bg-[#21965333] leading-[22px] text-[#219653] rounded-[60px] px-[8px] mr-[18px]">
                            +64.11%
                          </p>{" "}
                        </td>
                      </tr>
                      <tr className="leading-[28px] border-b-[1px] h-[50px]">
                        <td className="text-[12px] font-semibold md:pr-[65px] sm:pr-[40px] text-left">
                          SOLUSDT
                        </td>
                        <td className="text-[#5E6E78] text-[12px] font-semibold md:pr-[40px] sm:pr-[40px] text-left ">
                          Solana{" "}
                        </td>
                        <td className="text-[#5E6E78] text-[12px] font-semibold md:pr-[40px] sm:pr-[40px] text-right ">
                          $15.9{" "}
                        </td>
                        <td className="text-[#5E6E78] text-[12px] font-semibold  text-left ">
                          {" "}
                          <p className="text-[11px] font-semibold bg-[#EB575733] leading-[22px] text-[#EB5757] rounded-[60px] px-[8px] mr-[18px]">
                            +64.11%
                          </p>{" "}
                        </td>
                      </tr>
                      <tr className="leading-[28px] border-b-[1px] h-[50px]">
                        <td className="text-[12px] font-semibold md:pr-[40px] sm:pr-[40px] text-left">
                          BNBUSDT
                        </td>
                        <td className="text-[#5E6E78] text-[12px] font-semibold md:pr-[40px] sm:pr-[40px] text-left ">
                          Binance{" "}
                        </td>
                        <td className="text-[#5E6E78] text-[12px] font-semibold md:pr-[40px] sm:pr-[40px] text-right ">
                          $15.9{" "}
                        </td>
                        <td className="text-[#5E6E78] text-[12px] font-semibold  text-left ">
                          {" "}
                          <p className="text-[11px] font-semibold bg-[#21965333] leading-[22px] text-[#219653] rounded-[60px] px-[8px] mr-[18px]">
                            +64.11%
                          </p>{" "}
                        </td>
                      </tr>
                      <tr className="leading-[28px] border-b-[1px] h-[50px]">
                        <td className="text-[12px] font-semibold md:pr-[40px] sm:pr-[40px] text-left">
                          ADAUSDT
                        </td>
                        <td className="text-[#5E6E78] text-[12px] font-semibold md:pr-[40px] sm:pr-[40px] text-left ">
                          Cardano{" "}
                        </td>
                        <td className="text-[#5E6E78] text-[12px] font-semibold md:pr-[40px] sm:pr-[40px] text-right ">
                          $15.9{" "}
                        </td>
                        <td className="text-[#5E6E78] text-[12px] font-semibold  text-left ">
                          {" "}
                          <p className="text-[11px] font-semibold bg-[#EB575733] leading-[22px] text-[#EB5757] rounded-[60px] px-[8px] mr-[18px]">
                            +64.11%
                          </p>{" "}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="mt-[25px] flex md:flex-row justify-center sm:flex-col items-center">
              <div className="w-[315px] h-[301px] bg-[#fff] rounded-[15px] px-[30px] py-[21px] md:mr-[25px] sm:mb-[10px]">
                <p className="text-[20px] leading-[28px] font-semibold ">Assets </p>
                <div className="mt-[-28px] cursor-pointer">
                  <img src="img/cir.png" alt="" />
                </div>
                <div className="mt-[-28px] cursor-pointer">
                  <img src="img/cirbtn.png" alt="" />
                </div>
              </div>

              <div className="w-[366px] h-[301px] bg-[#fff] rounded-[15px] md:mr-[25px] sm:mb-[10px] py-[21px] px-[30px]">
                <div className="flex justify-between items-center mb-[16px]">
                  <p className="text-[20px] font-semibold">Convert</p>
                  <button className="bg-[#FFFFFF38] border-[1px] border-[#0000001A] rounded-[7px] py-[11px] px-[12px] text-[#00000066] text-[10px] font-semibold cursor-pointer">
                    <img
                      src="img/dot.png"
                      alt=""
                      className="md:w-[13px] md:h-[3px] sm:h-[8px] sm:w-[2px]  cursor-pointer"
                    />
                  </button>
                </div>
                <div>
                  <div className="mb-[21px] relative">
                    <input
                      type="number"
                      name=""
                      className="w-[304px] h-[49px] bg-[#F9F9FA] rounded-[7px] px-[7px] py-[2px] focus:outline-none "
                      id=""
                    />
                    <div class="dropdown absolute top-[9px] left-[230px]">
                      <button
                        onClick={toggleDropdown1}
                        className=" dropbtn  w-[62px] h-[31px] rounded-[7px] bg-[#C7E4DB]  px-[12px]  flex items-center justify-center leading-[12px]"
                      >
                        <p className="mr-[5px] text-[12px] text-[#219653] font-semibold">{btn1}</p>

                        <img src="img/drp.png" className="w-[16px] h-[13px]" alt="" />
                      </button>
                      {isOpen1 && (
                        <div className="dropdown-content z-10" onClick={closeDropdown1}>
                          <p
                            onClick={() => setBtn1("BTC")}
                            className="bg-[#FCF4DB]  px-[12px] py-[2px] text-center text-[12px] text-[#219653] font-semibold cursor-pointer "
                          >
                            BTC
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="relative z-0 mb-[14px]">
                    <input
                      type="number"
                      name=""
                      className="w-[304px] z-0 h-[49px] bg-[#F9F9FA] rounded-[7px] px-[7px] py-[2px] focus:outline-none "
                      id=""
                    />
                    <div class="dropdown absolute top-[9px] left-[230px]">
                      <button
                        onClick={toggleDropdown2}
                        className=" dropbtn  w-[62px] h-[31px] rounded-[7px] bg-[#FCF4DB] px-[12px]  flex items-center justify-center leading-[12px]"
                      >
                        <p className="mr-[5px] text-[12px] text-[#219653] font-semibold">{btn2}</p>

                        <img src="img/drp.png" className="w-[16px] h-[13px]" alt="" />
                      </button>
                      {isOpen2 && (
                        <div className="dropdown-content" onClick={closeDropdown2}>
                          <p
                            onClick={() => setBtn2("USTD")}
                            className="bg-[#C7E4DB] px-[12px] py-[2px] text-center text-[12px] text-[#219653] font-semibold  cursor-pointer"
                          >
                            USTD
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="mb-[12px]">
                    <button className="w-[304px] hover:text-[black] bg-[#3380FF] rounded-[7px] h-[47px] text-center text-[#fff] text-[14px] font-semibold leading-[16px]">
                      Convert Now
                    </button>
                  </div>
                  <p className="text-[8px] font-normal leading-[11px] text-[#626D7D]">
                    The ultimate price and output is determined by the amount of tokens in the pool
                    at the time of your swap.
                  </p>
                </div>
              </div>
              <div className="md:w-[622px]  sm:w-[368px] sm:justify-center  h-[auto] bg-[#fff] rounded-[15px] px-[39px] py-[20px] ">
                <div className="flex justify-between items-center mb-[18px]">
                  <p className="text-[20px] font-semibold">History</p>
                  <button className="bg-[#FFFFFF38] border-[1px] border-[#0000001A] rounded-[7px] py-[2px] px-[10px] text-[#00000066] text-[10px] font-semibold cursor-pointer">
                    View All
                  </button>
                </div>
                <div>
                  <table className="">
                    <tbody>
                      <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                      </tr>
                      <tr className="leading-[28px] border-b-[1px] h-[50px]">
                        <td className="text-[12px] font-semibold md:pr-[40px] sm:pr-[20px]  text-left">
                          <img src="img/down.png" className="w-[23px] h-[23px]" alt="" />
                        </td>
                        <td className="text-[12px] font-semibold md:pr-[80px]  leading-[22px] sm:pr-[30px]  text-left">
                          Deposit
                        </td>
                        <td className="text-[#219653] text-[12px] font-semibold md:pr-[87px] sm:pr-[30px]  text-left ">
                          +$23,738{" "}
                        </td>
                        <td className="text-[#000] text-[12px] font-semibold sm:hidden md:table-cell md:pr-[87px]  text-right ">
                          11:34 PM{" "}
                        </td>
                        <td className="text-[#5E6E78] text-[12px] font-semibold   text-left ">
                          {" "}
                          <p className="text-[11px] font-semibold bg-[#F2C94C33] leading-[22px] text-[#F2994A] rounded-[6px] px-[8px]">
                            pending
                          </p>{" "}
                        </td>
                      </tr>
                      <tr className="leading-[28px] border-b-[1px] h-[50px]">
                        <td className="text-[12px] font-semibold md:pr-[40px] sm:pr-[20px] text-left">
                          <img src="img/up.png" className="w-[23px] h-[23px]" alt="" />
                        </td>
                        <td className="text-[12px] font-semibold md:pr-[80px] leading-[22px] sm:pr-[30px] text-left">
                          SANDUSDT
                        </td>
                        <td className="text-[#EB5757] text-[12px] font-semibold md:pr-[87px] sm:pr-[30px]  text-right  ">
                          -$23{" "}
                        </td>
                        <td className="text-[#000] text-[12px] font-semibold sm:hidden md:table-cell  md:pr-[85px]  text-left ">
                          06:01 AM{" "}
                        </td>
                        <td className="text-[#5E6E78] text-[12px] font-semibold    ">
                          {" "}
                          <p className="text-[11px] font-semibold bg-[#21965333] leading-[22px] text-[#219653] rounded-[6px] px-[12px]">
                            done
                          </p>{" "}
                        </td>
                      </tr>
                      <tr className="leading-[28px] border-b-[1px] h-[50px]">
                        <td className="text-[12px] font-semibold md:pr-[40px] sm:pr-[20px] text-left">
                          <img src="img/up.png" className="w-[23px] h-[23px]" alt="" />
                        </td>
                        <td className="text-[12px] font-semibold md:pr-[80px] leading-[22px] sm:pr-[30px]  text-left">
                          FTMUSDT
                        </td>
                        <td className="text-[#EB5757] text-[12px] font-semibold md:pr-[87px] text-right sm:pr-[30px]  ">
                          -$23{" "}
                        </td>
                        <td className="text-[#000] text-[12px] font-semibold sm:hidden md:table-cell  md:pr-[85px] text-left ">
                          06:01 AM{" "}
                        </td>
                        <td className="text-[#5E6E78] text-[12px] font-semibold    ">
                          {" "}
                          <p className="text-[11px] font-semibold bg-[#21965333] leading-[22px] text-[#219653] rounded-[6px] px-[12px]">
                            done
                          </p>{" "}
                        </td>
                      </tr>
                      <tr className="leading-[28px] border-b-[1px] h-[50px]">
                        <td className="text-[12px] font-semibold md:pr-[40px] sm:pr-[20px]  text-left">
                          <img src="img/up.png" className="w-[23px] h-[23px]" alt="" />
                        </td>
                        <td className="text-[12px] font-semibold md:pr-[80px] leading-[22px] sm:pr-[30px]  text-left">
                          DOGEUSDT
                        </td>
                        <td className="text-[#219653] text-[12px] font-semibold md:pr-[87px] text-right sm:pr-[30px]  ">
                          +$3500{" "}
                        </td>
                        <td className="text-[#000] text-[12px] font-semibold sm:hidden md:table-cell  md:pr-[85px] text-left ">
                          06:01 AM{" "}
                        </td>
                        <td className="text-[#5E6E78] text-[12px] font-semibold    ">
                          {" "}
                          <p className="text-[11px] font-semibold bg-[#21965333] leading-[22px] text-[#219653] rounded-[6px] px-[12px]">
                            done
                          </p>{" "}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </>
      </main>
    </div>
  );
}

export default SidebarAndContent;
