import svgPaths from "./svg-5wxrvnx1uj";
type InputFieldProps = {
  className?: string;
  disabled?: "False";
  iconSide?: "Left";
  optional?: "False";
  showLabel?: "True";
  size?: "Small";
};

function InputField({ className, disabled = "False", iconSide = "Left", optional = "False", showLabel = "True", size = "Small" }: InputFieldProps) {
  return (
    <div className={className || "relative"}>
      <div className="content-stretch flex flex-col gap-[6px] items-start relative size-full">
        <div className="relative shrink-0 w-[108px]" data-name="Label">
          <div className="content-stretch flex items-start relative size-full">
            <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative">
              <div className="h-[8px] relative shrink-0 w-px">
                <div className="absolute left-[-12px] size-[9px] top-0" data-name="Required icon">
                  <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex items-center justify-center relative size-full">
                      <div className="aspect-[19/19] flex-[1_0_0] min-w-px relative" data-name="Asterisk">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center p-[0.5px] relative size-full">
                            <div className="aspect-[18/18] flex-[1_0_0] min-w-px relative" data-name="Vector">
                              <div className="absolute inset-[-3.94%]">
                                <svg className="block size-full" fill="none" height="8.63" preserveAspectRatio="none" viewBox="0 0 8.63 8.63" width="8.63">
                                  <path d={svgPaths.p26be2bc0} id="Vector" stroke="#C61310" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.63" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-[1_0_0] min-w-px relative" data-name="Label text">
                <div className="flex flex-row items-end size-full">
                  <div className="content-stretch flex items-end pl-px relative size-full">
                    <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">Label</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative shrink-0 w-[175px]" data-name="Input group">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[2px] py-[2px] relative size-full">
              <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[6px]" data-name="Input">
                <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
                  <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Input group">
                    <div className="bg-[#f0f0f0] content-stretch flex items-start px-[8px] py-[12.5px] relative shrink-0" data-name="Icon container">
                      <div className="relative shrink-0 size-[15px]" data-name="Icons">
                        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex items-center justify-center relative size-full">
                            <div className="aspect-[19/19] flex-[1_0_0] min-w-px relative" data-name="Currency">
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center p-[0.5px] relative size-full">
                                  <div className="aspect-[13.301214218139648/18] h-full relative shrink-0" data-name="Vector">
                                    <div className="absolute inset-[-2.25%_-3.04%]">
                                      <svg className="block size-full" fill="none" height="14.63" preserveAspectRatio="none" viewBox="0 0 10.9754 14.63" width="10.9754">
                                        <path d={svgPaths.p2fc1e300} id="Vector" stroke="#67686B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.63" />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center self-stretch">
                      <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ containerType: "size" }}>
                        <div className="-rotate-90 flex-none w-[100cqh]">
                          <div className="h-0 relative w-full" data-name="Dividing keyline">
                            <div className="absolute inset-[-1px_0_0_0]">
                              <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 40 1" width="40">
                                <line id="Dividing keyline" stroke="#C2C3C4" x2="40" y1="0.5" y2="0.5" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-[1_0_0] min-w-px relative">
                      <div className="content-stretch flex items-start px-[15px] relative size-full">
                        <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#757575] text-[16px] whitespace-nowrap">Placeholder</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden className="absolute border border-[#67686b] border-solid inset-0 pointer-events-none rounded-[6px]" />
              </div>
              <div className="relative shrink-0 size-[15px]" data-name="Icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function InputField1() {
  return <InputField className="relative size-full" />;
}