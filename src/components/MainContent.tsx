import React from "react";
import Lottie from "lottie-react";
import call from "../assets/lotties/call.json";
import music from "../assets/lotties/music.json";
import blueQ from "../assets/lotties/blueQ.json";

interface MainContentProps {
  brandName: string;
  deviceImg: string;
  description: string;
}

const MainContent: React.FC<MainContentProps> = ({
  brandName,
  deviceImg,
  description,
}) => {
  return (
    <div className="2xl:mx-[280px] mx-auto mt-[180px] 2xl:h-[760px] relative">
      <div className="flex flex-col lg:flex-row justify-center gap-2 items-center xl:gap-24">
        <div className="md:mt-[100px]">
          <img src={deviceImg} alt="deviceImg" className="h-[500px] w-[300px]" />

          <Lottie
            animationData={call}
            loop={true}
            autoplay={true}
            className="hidden lg:block" // Hide on mobile, show on large screens
            style={{
              position: "absolute",
              top: "10%",
              left: "30%",
              width: "15vw",
              maxWidth: "200px",
              height: "auto",
            }}
          />
          <Lottie
            animationData={call}
            loop={true}
            autoplay={true}
            className="lg:hidden" // Show on mobile
            style={{
              position: "absolute",
              top: "-5%",
              left: "65%",
              width: "55vw",
              maxWidth: "150px",
              height: "auto",
            }}
          />

          <Lottie
            animationData={music}
            loop={true}
            autoplay={true}
            className="hidden lg:block" // Hide on mobile, show on large screens
            style={{
              position: "absolute",
              top: "10%",
              left: "15%",
              width: "12vw",
              maxWidth: "180px",
              height: "auto",
            }}
          />
          <Lottie
            animationData={music}
            loop={true}
            autoplay={true}
            className="lg:hidden" // Show on mobile
            style={{
              position: "absolute",
              top: "-5%",
              left: "35%",
              width: "50vw",
              maxWidth: "120px",
              height: "auto",
            }}
          />

          <Lottie
            animationData={blueQ}
            loop={true}
            autoplay={true}
            className="hidden lg:block" // Hide on mobile, show on large screens
            style={{
              position: "absolute",
              top: "10%",
              left: "3%",
              width: "8vw",
              maxWidth: "80px",
              height: "auto",
            }}
          />
          <Lottie
            animationData={blueQ}
            loop={true}
            autoplay={true}
            className="lg:hidden" // Show on mobile
            style={{
              position: "absolute",
              top: "-1%",
              left: "10%",
              width: "15vw",
              maxWidth: "80px",
              height: "auto",
            }}
          />
        </div>

        <div className="pt-[10px] px-10 md:w-[750px]">
          <div className="text-[#0a1127] font-KalamehRegular text-xl mb-12 text-right">
            دستیار هوشمند فارسی برای زندگی بهتر
          </div>
          <div className="text-[#0a1127] font-bold font-KalamehBlack text-7xl text-right">
            {brandName}
          </div>
          <div className="text-[#0a1127] font-bold font-KalamehBold text-xl mt-4 text-right">
            {description}
          </div>
          <div
            className="text-justify font-KalamehRegular mt-8 text-lg"
            dir="rtl"
          >
            هوشا یک دستیار هوشمند فارسی‌زبان است که به‌طور اختصاصی برای کاربران
            فارسی‌زبان طراحی شده است. این دستیار هوشمند می‌تواند با استفاده از
            هوش مصنوعی و پردازش زبان طبیعی، نیازهای روزمره شما را برآورده کند و
            تجربه‌ای راحت‌تر و هوشمندانه‌تر را در زندگی شما به ارمغان بیاورد. با
            هوشا، از ساده‌ترین تا پیچیده‌ترین وظایف روزانه خود را می‌توانید به
            راحتی و با استفاده از صدای خودتان مدیریت کنید
          </div>
          <div className="flex flex-col lg:flex-row justify-end gap-6 mt-[46px] ">
            <button className="h-[54px] font-KalamehBold text-[22px] rounded-lg">
              <div className="relative group cursor-pointer">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-center">
                  <p>اطلاعات بیشتر</p>
                </div>
              </div>
            </button>
            <button className="h-[54px] bg-[#6ecccc] font-KalamehBold text-[22px] rounded-lg">
              <div className="relative group cursor-pointer">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-center">
                  <p>چرا هوشا؟</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
