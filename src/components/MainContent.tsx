import React from "react";
import Lottie from "lottie-react";
import call from "../assets/lotties/call.json";
import music from "../assets/lotties/music.json";
import blueQ from "../assets/lotties/blueQ.json";
import myDevice from "../assets/Images/13.png";
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
    <div className="2xl:mx-[280px] mx-[280px] mt-[250px] 2xl:h-[760px] relative">
      <div className="flex justify-between gap-2 2xl:gap-0">
        <div className="ml-[100px]">
          <img src={myDevice} alt="deviceImg" className="h-[500px] w-[400px]" />
          <Lottie
            animationData={call}
            loop={true}
            autoplay={true}
            style={{
              height: 200,
              width: 200,
              position: "absolute",
              top: 0,
              left: "30%",
              transform: "translateY(-50%)",
            }}
          />
          <Lottie
            animationData={music}
            loop={true}
            autoplay={true}
            style={{
              height: 180,
              width: 180,
              position: "absolute",
              top: 0,
              left: "20%",
              transform: "translateY(-100%)",
            }}
          />
          <Lottie
            animationData={blueQ}
            loop={true}
            autoplay={true}
            style={{
              height: 80,
              width: 80,
              position: "absolute",
              top: 0,
              left: "6%",
              transform: "translateY(-50%)",
            }}
          />
        </div>

        <div className="pt-[80px] w-[450px]">
          <div className="text-[#0a1127] font-bold text-7xl text-right">
            {brandName}
          </div>
          <div className="text-[#0a1127] font-bold text-xl mt-4 text-right">
            {description}
          </div>
          <div className="text-justify mt-8 font-bold">
            هوشا یک دستیار هوشمند فارسی‌زبان است که به‌طور اختصاصی برای کاربران
            فارسی‌زبان طراحی شده است. این دستیار هوشمند می‌تواند با استفاده از
            هوش مصنوعی و پردازش زبان طبیعی، نیازهای روزمره شما را برآورده کند و
            تجربه‌ای راحت‌تر و هوشمندانه‌تر را در زندگی شما به ارمغان بیاورد. با
            هوشا، از ساده‌ترین تا پیچیده‌ترین وظایف روزانه خود را می‌توانید به
            راحتی و با استفاده از صدای خودتان مدیریت کنید
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
