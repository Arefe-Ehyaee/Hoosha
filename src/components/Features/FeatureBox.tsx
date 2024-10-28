import React from "react";

interface FeatureBoxProps {
    title: string;
    description: string;
}
const FeatureBox: React.FC<FeatureBoxProps> = ({
    title,
    description
}) => {
  return (
    <div className="bg-[#F8F8F8] h-[240px] w-[280px] rounded-[14px] mr-8 drop-shadow-xl">
        <div className="font-bold text-[#0a1127] text-center mt-4 text-2xl">{title}</div>
        <div className="p-10 text-center font-bold">
          {description}
        </div>
    </div>
  );
};

export default FeatureBox;
