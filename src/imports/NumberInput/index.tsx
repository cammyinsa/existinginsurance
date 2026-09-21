import svgPaths from "./svg-ios5xgvmc1";
type NumberInputProps = {
  className?: string;
  disabled?: "False";
  optional?: "False";
  size?: "Small";
};

function NumberInput({ className, disabled = "False", optional = "False", size = "Small" }: NumberInputProps) {
  return (
    <div className={className || "relative w-[154px]"}>
      <div className="content-stretch flex flex-col gap-[6px] items-start relative size-full">
        <div className="h-[19px] relative shrink-0 w-full" data-name="Label">
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
        <div className="content-stretch flex flex-col items-start p-[2px] relative shrink-0" data-name="Input">
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
            <div className="bg-white border border-[#67686b] border-solid col-1 h-[40px] ml-0 mt-0 relative rounded-[6px] row-1 w-[150px]" data-name="Input" />
            <div className="bg-[#00154d] col-1 ml-0 mt-0 relative rounded-bl-[6px] rounded-tl-[6px] row-1 size-[40px]" data-name="Button">
              <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[8px] py-[9px] relative rounded-[inherit] size-full">
                <div className="relative shrink-0 size-[19px]" data-name="Icon child (DEPRICATED)">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center p-[0.5px] relative size-full">
                      <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="Vector">
                        <div className="absolute inset-[-0.41px_-2.31%]">
                          <svg className="block size-full" fill="none" height="0.83" preserveAspectRatio="none" viewBox="0 0 18.83 0.83" width="18.83">
                            <path d="M18.415 0.415H0.415" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.83" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div aria-hidden className="absolute border border-[#00154d] border-solid inset-0 pointer-events-none rounded-bl-[6px] rounded-tl-[6px]" />
            </div>
            <div className="bg-[#00154d] col-1 ml-[110px] mt-0 relative rounded-br-[6px] rounded-tr-[6px] row-1 size-[40px]" data-name="Button">
              <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[8px] py-[9px] relative rounded-[inherit] size-full">
                <div className="relative shrink-0 size-[19px]" data-name="Icon child (DEPRICATED)">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center p-[0.5px] relative size-full">
                      <div className="aspect-[18/18] flex-[1_0_0] min-w-px relative" data-name="Vector">
                        <div className="absolute inset-[-2.31%]">
                          <svg className="block size-full" fill="none" height="18.83" preserveAspectRatio="none" viewBox="0 0 18.83 18.83" width="18.83">
                            <path d={svgPaths.p2f5e1780} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.83" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div aria-hidden className="absolute border border-[#00154d] border-solid inset-0 pointer-events-none rounded-br-[6px] rounded-tr-[6px]" />
            </div>
            <p className="[word-break:break-word] col-1 font-['Lato:Regular',sans-serif] leading-[1.55] ml-[49px] mt-[8px] not-italic relative row-1 text-[#231f20] text-[16px] w-[47px]">1.0%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function NumberInput1() {
  return <NumberInput className="relative size-full" />;
}