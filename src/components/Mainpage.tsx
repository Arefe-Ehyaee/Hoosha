import MainContent from "./MainContent";
import Navbar from "./Navbar";
import device from "../assets/Images/device.webp"
import Features from "./Features/Features";
import FeatureBox from "./Features/FeatureBox";
import ContactUs from "./ContactUs";
import Examples from "./Elaboration/Examples";

const Mainpage: React.FC = () => {
  return (
    <div className="bg-[#F9FAFF]">
      <Navbar></Navbar>
      <MainContent brandName={"هوشا"} deviceImg={device} description={"دوست هوشمند تو"}></MainContent>
        <Features>
            <FeatureBox title={"دانش گسترده"} description={"دسترسی به اطلاعات متنوع و پاسخگویی به سوالات در زمینه‌های گوناگون"}></FeatureBox>
            <FeatureBox title={"جستجوی هوشمند"} description={"جستجوی سریع و دقیق اطلاعات در اینترنت و فایل‌های دستگاه شما"}></FeatureBox>
            <FeatureBox title={"هماهنگ با خانه هوشمند"} description={"کنترل و مدیریت دستگاه‌های هوشمند خانگی از طریق دستورات صوتی"}></FeatureBox>
            <FeatureBox title={"مکالمه روان فارسی"} description={"تعامل طبیعی با درک و پاسخ‌دهی روان به زبان فارسی"}></FeatureBox>
        </Features>
        <Examples></Examples>
        <ContactUs></ContactUs>
    </div>
  );
};

export default Mainpage;
