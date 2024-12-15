import MainContent from "./MainContent";
import Navbar from "./Navbar";
import Features from "./Features/Features";
import FeatureBox from "./Features/FeatureBox";
import ContactUs from "./ContactUs";
import Examples from "./Elaboration/Examples";
import Card from "./Elaboration/Card";
import control from "../assets/Images/controll.png"
import kitchen from "../assets/Images/kitchen.png"
import listen from "../assets/Images/listen.png"
import maindevice from "../assets/Images/13.png"

const Mainpage: React.FC = () => {
  return (
    <div className="bg-[#dcf1f7]">
      <Navbar brandName={"Hoosha"}></Navbar>
      <MainContent brandName={"هوشا"} deviceImg={maindevice} description={"دوست هوشمند تو"}></MainContent>
        <Features>
            <FeatureBox title={"دانش گسترده"} description={"دسترسی به اطلاعات متنوع و پاسخگویی به سوالات در زمینه‌های گوناگون"}></FeatureBox>
            <FeatureBox title={"جستجوی هوشمند"} description={"جستجوی سریع و دقیق اطلاعات در اینترنت و فایل‌های دستگاه شما"}></FeatureBox>
            <FeatureBox title={"هماهنگ با خانه هوشمند"} description={"کنترل و مدیریت دستگاه‌های هوشمند خانگی از طریق دستورات صوتی"}></FeatureBox>
            <FeatureBox title={"مکالمه روان فارسی"} description={"تعامل طبیعی با درک و پاسخ‌دهی روان به زبان فارسی"}></FeatureBox>
        </Features>
        <Examples>
        <Card
          img={control}
          imgAlt={"listen"}
          backgroundColor_left={"bg-green-200"}
          imgPosition={"right"}
          text={
            "امروزه با مشغله‌های روزافزون، داشتن یک دستیار شخصی می‌تواند تغییر چشم‌گیری در کیفیت زندگی ما ایجاد کند. هوشا می‌تواند به عنوان یک دستیار تمام‌وقت در کنار شما باشد و یادآوری‌های مهم، تنظیم تقویم کاری، و حتی اطلاعات آب و هوا را در اختیار شما بگذارد. مثلا، می‌توانید از هوشا بخواهید تا برنامه‌ریزی روزانه شما را یادآوری کند یا هنگام نیاز به جلسه‌ای مهم یادآوری دهد. همچنین، با تنظیم یادآورهایی برای مصرف داروها یا انجام ورزش‌های روزانه، می‌توانید به سلامت و نظم بیشتری در زندگی خود دست پیدا کنید."
          }
        ></Card>
        <Card
          img={kitchen}
          imgAlt={"kitcheb"}
          backgroundColor_right={"bg-green-200"}
          imgPosition={"left"}
          text={
            "هوشا می‌تواند با امکانات پیشرفته‌ای که دارد، تجربه‌ی آشپزی شما را به سطح جدیدی ببرد. این دستیار هوشمند می‌تواند در تهیه لیست خرید، پیشنهاد دستورپخت‌های سالم و ساده، و همچنین یادآوری زمان پخت و پز به شما کمک کند. مثلا، با گفتن «هوشا، یک دستور پخت برای سوپ گوجه بده» می‌توانید به سرعت به دستورپخت‌های متنوعی دسترسی پیدا کنید."
          }
        ></Card>
        <Card
          img={listen}
          imgAlt={"listen"}
          backgroundColor_left={"bg-green-200"}
          imgPosition={"right"}
          text={"هوشا با قابلیت دسترسی سریع به انواع موسیقی‌، به شما کمک می‌کند تا به راحتی و بدون نیاز به جستجوی طولانی، موسیقی دلخواهتان را بیابید. مثلا، کافی است به هوشا بگویید: «یک موسیقی شاد برای تمرین بگذار» یا «موسیقی آرامش‌بخش برای استراحت پخش کن». هوشا می‌تواند به صورت خودکار فهرست‌های موسیقی مطابق با حال و هوای شما پیشنهاد دهد و همچنین، امکان تنظیم حجم صدا و متوقف کردن موسیقی را به صورت کاملا صوتی فراهم می‌کند."}
        ></Card>
        </Examples>
        <ContactUs></ContactUs>
    </div>
  );
};

export default Mainpage;
