interface CardProps {
  img: string;
  imgAlt: string;
  backgroundColor_left?: string;
  backgroundColor_right?: string;
  imgPosition: "left" | "right";
  text: string;
}

const Card = ({
  img,
  imgAlt,
  backgroundColor_left,
  backgroundColor_right,
  imgPosition,
  text,
}: CardProps) => {
  return (
    <div className="flex justify-center drop-shadow-xl">
      <div
        className={`bg-white ${backgroundColor_left} h-[496px] w-[524px] rounded-l-3xl`}
      >
        {imgPosition === "left" && <img src={img} alt={imgAlt} />}
        {imgPosition === "right" && (
          <div
            className="px-20 text-justify mt-[50px] leading-10 font-bold"
            dir="rtl"
          >
            {text}
          </div>
        )}
      </div>
      <div
        className={`bg-white ${backgroundColor_right} h-[496px] w-[524px] rounded-r-3xl`}
      >
        {imgPosition === "right" && <img src={img} alt={imgAlt} />}
        {imgPosition === "left" && (
          <div
            className="px-20 text-justify mt-[100px] leading-10 font-bold"
            dir="rtl"
          >
            {text}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
