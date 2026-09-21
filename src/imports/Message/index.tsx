import svgPaths from "./svg-2rzh8u1j2n";
type IconChildDepricatedProps = {
  className?: string;
  type?: "Close" | "Chevron";
};

function IconChildDepricated({ className, type = "Close" }: IconChildDepricatedProps) {
  return (
    <div className={className || "relative size-[19px]"}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[0.5px] relative size-full">
          {type === "Close" && (
            <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Vector">
              <div className="absolute inset-[-2.31%]">
                <svg className="block size-full" fill="none" height="18.83" preserveAspectRatio="none" viewBox="0 0 18.83 18.83" width="18.83">
                  <path d={svgPaths.p28dfc800} id="Vector" stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.83" />
                </svg>
              </div>
            </div>
          )}
          {type === "Chevron" && (
            <div className="flex h-full items-center justify-center relative shrink-0 w-[10px]" style={{ containerType: "size" }}>
              <div className="-scale-y-100 flex-none rotate-90 w-[100cqh]">
                <div className="aspect-[18/10] relative size-full" data-name="Vector">
                  <div className="absolute inset-[-4.15%_-2.31%]">
                    <svg className="block size-full" fill="none" height="10.83" preserveAspectRatio="none" viewBox="0 0 18.83 10.83" width="18.83">
                      <path d={svgPaths.p37d7fd90} id="Vector" stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.83" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
type ButtonIconProps = {
  className?: string;
  iconSize?: "Small";
};

function ButtonIcon({ className, iconSize = "Small" }: ButtonIconProps) {
  return (
    <div className={className || "relative"}>
      <div className="content-stretch flex items-start relative size-full">
        <IconChildDepricated className="relative shrink-0 size-[19px]" type="Chevron" />
      </div>
    </div>
  );
}
type MessageProps = {
  className?: string;
  branding?: "Branded";
  includeButton?: "True";
  style?: "Information";
};

function Message({ className, branding = "Branded", includeButton = "True", style = "Information" }: MessageProps) {
  return (
    <div className={className || "bg-[#80c8e6] drop-shadow-[0px_2px_2px_rgba(0,0,0,0.25)] relative rounded-[12px] w-[1126px]"}>
      <div aria-hidden className="absolute border border-[#247ba1] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[10px] items-start p-[20px] relative size-full">
        <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
          <div className="relative shrink-0" data-name="Icon label">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center relative size-full">
                <div className="relative shrink-0 size-[20px]" data-name="Icons">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center p-px relative size-full">
                      <div className="aspect-[19/19] flex-[1_0_0] min-w-px relative" data-name="Information">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center p-[0.5px] relative size-full">
                            <div className="aspect-[18/18] flex-[1_0_0] min-w-px relative" data-name="Vector">
                              <div className="absolute inset-[-2.31%_-2.44%]">
                                <svg className="block size-full" fill="none" height="18.83" preserveAspectRatio="none" viewBox="0 0 17.83 18.83" width="17.83">
                                  <path d={svgPaths.p1474e500} id="Vector" stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.83" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#231f20] text-[18px] whitespace-nowrap">Information message</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 size-[19px]" data-name="Icon child (DEPRICATED)">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center p-[0.5px] relative size-full">
                <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Vector">
                  <div className="absolute inset-[-2.31%]">
                    <svg className="block size-full" fill="none" height="18.83" preserveAspectRatio="none" viewBox="0 0 18.83 18.83" width="18.83">
                      <path d={svgPaths.p28dfc800} id="Vector" stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.83" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[10px] items-start pl-[28px] relative size-full">
            <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] min-w-full not-italic relative shrink-0 text-[#231f20] text-[16px] w-[min-content]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="relative rounded-[1000px] shrink-0" data-name="Button (Branded 2025)">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[9px] relative size-full">
                  <p className="[word-break:break-word] font-['Montserrat:Medium',sans-serif] font-medium leading-[15px] relative shrink-0 text-[#00154d] text-[13px] whitespace-nowrap">Action button</p>
                  <ButtonIcon className="relative shrink-0" />
                </div>
              </div>
              <div aria-hidden className="absolute border-2 border-[#00154d] border-solid inset-0 pointer-events-none rounded-[1000px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Message1() {
  return <Message className="bg-[#80c8e6] drop-shadow-[0px_2px_2px_rgba(0,0,0,0.25)] relative rounded-[12px] size-full" />;
}