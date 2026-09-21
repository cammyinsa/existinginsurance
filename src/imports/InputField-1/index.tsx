import svgPaths from "./svg-wtpn2qqrhf";

function IconChildChevronDownSmallNo({ className }: { className?: string }) {
  return (
    <div className={className || "relative w-[15px]"} data-name="Icon child/Chevron down/Small/No">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[2px] relative size-full">
          <div className="h-[10px] relative shrink-0 w-[18px]" data-name="Vector">
            <div className="absolute inset-[-3.13%_-1.74%]">
              <svg className="block size-full" fill="none" height="10.625" preserveAspectRatio="none" viewBox="0 0 18.625 10.625" width="18.625">
                <path d={svgPaths.pf1298c0} id="Vector" stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.625" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type InputFieldProps = {
  className?: string;
  disabled?: "False";
  iconSide?: "Right";
  optional?: "False";
  showLabel?: "True";
  size?: "Large";
};

function InputField({ className, disabled = "False", iconSide = "Right", optional = "False", showLabel = "True", size = "Large" }: InputFieldProps) {
  return (
    <div className={className || "relative"}>
      <div className="content-stretch flex flex-col gap-[6px] items-start relative size-full">
        <div className="h-[19px] relative shrink-0 w-[425px]" data-name="Label">
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
        <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Dropdown wrapper">
          <div className="relative shrink-0 w-[425px]" data-name="Select">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center pl-[2px] py-[2px] relative size-full">
                <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[6px]" data-name="Input">
                  <div className="overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex items-start px-[15px] py-[7px] relative size-full">
                      <div className="content-stretch flex flex-[1_0_0] gap-[15px] items-center min-w-px relative" data-name="Select inner">
                        <p className="[word-break:break-word] flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[1.55] min-w-px not-italic relative text-[#757575] text-[16px]">Please select…</p>
                        <IconChildChevronDownSmallNo className="relative shrink-0 w-[15px]" />
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
    </div>
  );
}

export default function InputField1() {
  return <InputField className="relative size-full" />;
}