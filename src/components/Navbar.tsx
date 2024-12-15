import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  brandName: string;
}

const Navbar = ({ brandName }: NavbarProps) => {
  const navigate = useNavigate();
  const [clickedButton, setClickedButton] = useState<string | null>(null);

  const handleButton = (buttonName: string) => {
    setClickedButton(buttonName);
  };

  return (
    <nav
      className="lg:flex lg:w-full lg:justify-between font-bold text-[#0a1127] h-[67px]  md:px-[160px]"
      dir="rtl"
    >
      <div className="text-center align-baseline my-auto font-myComforta text-3xl">
        {brandName}
      </div>

      <div className="hidden lg:flex justify-between gap-8 my-auto text-[22px] font-KalamehBold">
        <button
          onClick={() => {
            handleButton("صفحه اصلی");
            navigate("/");
          }}
          className={`${
            clickedButton === "صفحه اصلی"
              ? "text-[#6ecccc] underline underline-offset-8"
              : ""
          }`}
        >
          <div className="">صفحه اصلی</div>
        </button>
        <button
          onClick={() => {
            handleButton("؟چرا هوشا");
            navigate("/why-hoosha");
          }}
          className={`${
            clickedButton === "؟چرا هوشا"
              ? "text-[#6ecccc] underline underline-offset-8"
              : ""
          }`}
        >
          <div className="">چرا هوشا؟</div>
        </button>
        <button
          onClick={() => {
            handleButton("درباره هوشا");
            navigate("/aboutHoosha");
          }}
          className={`${
            clickedButton === "درباره هوشا"
              ? "text-[#6ecccc] underline underline-offset-8"
              : ""
          }`}
        >
          <div>درباره هوشا</div>
        </button>

        <button
          onClick={() => {
            handleButton("چت");
            navigate("/chat");
          }}
          className={`${
            clickedButton === "چت"
              ? "text-[#6ecccc] underline underline-offset-8"
              : ""
          }`}
        >
          <div className="">چت</div>
        </button>

      </div>

      <div>
        <button className="hidden lg:flex w-[114px] h-[54px] bg-[#6ecccc] text-[22px] mt-2 pt-2 pr-3 rounded-lg ">
          ارتباط با ما
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
