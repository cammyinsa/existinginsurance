type ButtonBrandedProps = {
  className?: string;
  buttonText?: string;
  icon?: "False";
  small?: "False";
  state?: "Default";
  type?: "Primary";
};

function ButtonBranded({ className, buttonText = "Primary", icon = "False", small = "False", state = "Default", type = "Primary" }: ButtonBrandedProps) {
  return (
    <div className={className || "bg-[#00154d] relative rounded-[1000px]"}>
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[20px] py-[12px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[15px] text-white whitespace-nowrap">
            <p className="leading-[16px]">{buttonText}</p>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border-4 border-[#00154d] border-solid inset-0 pointer-events-none rounded-[1000px]" />
    </div>
  );
}

export default function ButtonBranded1() {
  return <ButtonBranded className="bg-[#00154d] relative rounded-[1000px] size-full" />;
}