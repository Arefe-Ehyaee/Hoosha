import Navbar from "../Navbar";
import ContactUs from "../ContactUs";
import TitleCard from "./TitleCard";
import grany from "../../assets/Images/grandma.png";
import music from "../../assets/Images/music.png";
import task from "../../assets/Images/task.png";
import q from "../../assets/Images/askk.png";

const WhyHoosha: React.FC = () => {
  return (
    <div className="bg-[#dcf1f7]">
      <Navbar brandName={"Hoosha"}></Navbar>
      <div className="bg-[#F9FAFF] py-[160px]">
      <div className="text-center mb-[50px] font-KalamehBold text-5xl text-[#0a1127]">
         چرا هوشا؟
      </div>
      <div className="flex flex-col gap-[80px]">
      <TitleCard
          img={grany}
          imgAlt={"listen"}
          backgroundColor_left={"bg-green-200"}
          imgPosition={"right"}
          text={
            "امروزه با مشغله‌های روزافزون، داشتن یک دستیار شخصی می‌تواند تغییر چشم‌گیری در کیفیت زندگی ما ایجاد کند. هوشا می‌تواند به عنوان یک دستیار تمام‌وقت در کنار شما باشد و یادآوری‌های مهم، تنظیم تقویم کاری، و حتی اطلاعات آب و هوا را در اختیار شما بگذارد. مثلا، می‌توانید از هوشا بخواهید تا برنامه‌ریزی روزانه شما را یادآوری کند یا هنگام نیاز به جلسه‌ای مهم یادآوری دهد. همچنین، با تنظیم یادآورهایی برای مصرف داروها یا انجام ورزش‌های روزانه، می‌توانید به سلامت و نظم بیشتری در زندگی خود دست پیدا کنید."
          }
          title={"کی با مامان جون حرف بزنه وقتی که تنهاست؟"}
        ></TitleCard>
        <TitleCard
          img={music}
          imgAlt={"kitcheb"}
          backgroundColor_right={"bg-green-200"}
          imgPosition={"left"}
          text={
            "هوشا می‌تواند با امکانات پیشرفته‌ای که دارد، تجربه‌ی آشپزی شما را به سطح جدیدی ببرد. این دستیار هوشمند می‌تواند در تهیه لیست خرید، پیشنهاد دستورپخت‌های سالم و ساده، و همچنین یادآوری زمان پخت و پز به شما کمک کند. مثلا، با گفتن «هوشا، یک دستور پخت برای سوپ گوجه بده» می‌توانید به سرعت به دستورپخت‌های متنوعی دسترسی پیدا کنید."
          }
          title={"سازگار با سلیقه شما: موزیک‌هایی برای هر حال"}
        ></TitleCard>
        <TitleCard
          img={task}
          imgAlt={"listen"}
          backgroundColor_left={"bg-green-200"}
          imgPosition={"right"}
          text={"هوشا این قابلیت را دارد که با صدای کاربر، لیست کارها و وظایف روزانه را ثبت و اولویت‌بندی کند. این لیست‌ها می‌توانند به طور خودکار در دسترس کاربر باشند و او می‌تواند با درخواست از هوشا، لیست کارهای روزانه یا هفتگی خود را مرور کند. این امکان به کاربران کمک می‌کند که کارهای خود را سازمان‌دهی کرده و زمان خود را به بهترین شکل مدیریت کنند.برای کارهایی که اهمیت ویژه‌ای دارند یا نیاز به پیگیری دارند، هوشا می‌تواند به کاربر کمک کند تا کارهای مهم را به شکلی بهتر پیگیری کند. به طور مثال، هوشا می‌تواند یادآور ملاقات‌های مهم کاری، زمان برگزاری کلاس‌ها و کنفرانس‌ها، و یا حتی زمان پایان مهلت پروژه‌ها باشد."}
          title={"مدیریت کارهای روزمره با صدا"}
        ></TitleCard>
                <TitleCard
          img={q}
          imgAlt={"listen"}
          backgroundColor_left={"bg-green-200"}
          imgPosition={"right"}
          text={"پاسخ دادن به سوالات بی‌پایان کودکان یکی از چالش‌های روزانه بسیاری از والدین است. کودکان به‌طور طبیعی کنجکاو هستند و دوست دارند درباره دنیا و هرآنچه در آن وجود دارد بیشتر بدانند. هوشا نه تنها می‌تواند به سوالات پاسخ دهد، بلکه می‌تواند اطلاعات را به شکلی سرگرم‌کننده و جذاب ارائه دهد. با استفاده از داستان‌ها، بازی‌های تعاملی و حتی معماها، هوشا می‌تواند تجربه‌ای یادگیری و سرگرمی ایجاد کند. والدین می‌توانند با استفاده از هوشا، زمانی را برای خود داشته باشند و با انرژی و حوصله بیشتری با فرزندان خود ارتباط برقرار کنند."}
          title={"پاسخگوی سوالات بی‌پایان بچه‌ها"}
        ></TitleCard>
      </div>
    </div>
      <ContactUs></ContactUs>
    </div>
  );
};

export default WhyHoosha;