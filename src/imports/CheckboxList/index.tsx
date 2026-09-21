import svgPaths from "./svg-lrduahvtvy";
type CheckboxOptionProps = {
  className?: string;
  checked?: "false" | "self-branded" | "true";
};

function CheckboxOption({ className, checked = "false" }: CheckboxOptionProps) {
  if (checked === "true") {
    return (
      <button className={className || "cursor-pointer relative"} data-name="Checked=true">
        <div className="content-stretch flex gap-[8px] items-start relative size-full">
          <div className="content-stretch flex items-start pt-[6px] relative shrink-0" data-name="Checkbox padding">
            <div className="relative shrink-0 size-[15px]">
              <div className="absolute bg-white border-2 border-[#231f20] border-solid left-0 size-[15px] top-0" />
              <div className="absolute contents inset-[-26.67%_-29.17%_30.83%_33.33%]">
                <div className="absolute inset-[-26.67%_-29.17%_30.83%_33.33%]" data-name="Group">
                  <div className="absolute inset-[-17.39%]">
                    <svg className="block size-full" fill="none" height="19.3752" preserveAspectRatio="none" viewBox="0 0 19.3752 19.3752" width="19.3752">
                      <g id="Group">
                        <path d={svgPaths.p28a5a000} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" />
                        <path d={svgPaths.p28a5a000} id="Vector_2" stroke="#F26A2C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#231f20] text-[16px] text-left whitespace-nowrap">Option 1</p>
        </div>
      </button>
    );
  }
  if (checked === "self-branded") {
    return (
      <div className={className || "relative"} data-name="Checked=self-branded">
        <div className="content-stretch flex gap-[8px] items-start relative size-full">
          <div className="content-stretch flex items-start pt-[6px] relative shrink-0" data-name="Checkbox padding">
            <div className="relative shrink-0 size-[15px]">
              <div className="absolute bg-white border-2 border-[#231f20] border-solid left-0 size-[15px] top-0" />
              <div className="absolute inset-[-26.67%_-29.17%_30.83%_33.33%]" data-name="Vector">
                <div className="absolute inset-[-17.39%]">
                  <svg className="block size-full" fill="none" height="19.3752" preserveAspectRatio="none" viewBox="0 0 19.3752 19.3752" width="19.3752">
                    <path d={svgPaths.p28a5a000} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" />
                  </svg>
                </div>
              </div>
              <div className="absolute left-[5px] size-[15px] top-[-4px]" data-name="Icons">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-center p-px relative size-full">
                    <div className="aspect-[18.999998092651367/18.999998092651367] flex-[1_0_0] min-w-px relative" data-name="Check">
                      <div className="flex flex-row items-center justify-center size-full">
                        <div className="content-stretch flex items-center justify-center p-[0.5px] relative size-full">
                          <div className="aspect-[17.999998092651367/17.999998092651367] h-full relative shrink-0" data-name="Vector">
                            <div className="absolute inset-[-3.46%]">
                              <svg className="block size-full" fill="none" height="12.83" preserveAspectRatio="none" viewBox="0 0 12.83 12.83" width="12.83">
                                <path d={svgPaths.p3ed0e080} id="Vector" stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.83" />
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
          </div>
          <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">Option 1</p>
        </div>
      </div>
    );
  }
  return (
    <button className={className || "cursor-pointer relative"} data-name="Checked=false">
      <div className="content-stretch flex gap-[8px] items-start relative size-full">
        <div className="content-stretch flex items-start pt-[6px] relative shrink-0" data-name="Checkbox">
          <div className="relative shrink-0 size-[15px]">
            <div className="absolute bg-white border border-[#67686b] border-solid left-0 size-[15px] top-0" />
          </div>
        </div>
        <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#231f20] text-[16px] text-left whitespace-nowrap">Option 1</p>
      </div>
    </button>
  );
}
type CheckboxListProps = {
  className?: string;
  optional?: "False";
  optionsRequired?: React.ReactNode | null;
};

function CheckboxList({ className, optional = "False", optionsRequired = null }: CheckboxListProps) {
  return (
    <div className={className || "relative w-[108px]"}>
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
        <div className="relative shrink-0 w-full" data-name="Options (required)">
          {optionsRequired || (
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col gap-[9px] items-start pl-[2px] relative size-full">
                <CheckboxOption className="cursor-pointer relative shrink-0" />
                <button className="cursor-pointer relative shrink-0" data-name="Option 2a">
                  <div className="content-stretch flex gap-[8px] items-start relative size-full">
                    <div className="content-stretch flex items-start pt-[6px] relative shrink-0" data-name="Checkbox padding">
                      <div className="relative shrink-0 size-[15px]">
                        <div className="absolute bg-white border-2 border-[#231f20] border-solid left-0 size-[15px] top-0" />
                        <div className="absolute contents inset-[-26.67%_-29.17%_30.83%_33.33%]">
                          <div className="absolute inset-[-26.67%_-29.17%_30.83%_33.33%]" data-name="Group">
                            <div className="absolute inset-[-17.39%]">
                              <svg className="block size-full" fill="none" height="19.3752" preserveAspectRatio="none" viewBox="0 0 19.3752 19.3752" width="19.3752">
                                <g id="Group">
                                  <path d={svgPaths.p28a5a000} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" />
                                  <path d={svgPaths.p28a5a000} id="Vector_2" stroke="#F26A2C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08" />
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#231f20] text-[16px] text-left whitespace-nowrap">Option 2</p>
                  </div>
                </button>
                <div className="relative shrink-0" data-name="Option 3a">
                  <div className="content-stretch flex gap-[8px] items-start relative size-full">
                    <div className="content-stretch flex items-start pt-[6px] relative shrink-0" data-name="Checkbox padding">
                      <div className="relative shrink-0 size-[15px]">
                        <div className="absolute bg-white border-2 border-[#231f20] border-solid left-0 size-[15px] top-0" />
                        <div className="absolute inset-[-26.67%_-29.17%_30.83%_33.33%]" data-name="Vector">
                          <div className="absolute inset-[-17.39%]">
                            <svg className="block size-full" fill="none" height="19.3752" preserveAspectRatio="none" viewBox="0 0 19.3752 19.3752" width="19.3752">
                              <path d={svgPaths.p28a5a000} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute left-[5px] size-[15px] top-[-4px]" data-name="Icons">
                          <div className="flex flex-row items-center justify-center size-full">
                            <div className="content-stretch flex items-center justify-center p-px relative size-full">
                              <div className="aspect-[18.999998092651367/18.999998092651367] flex-[1_0_0] min-w-px relative" data-name="Check">
                                <div className="flex flex-row items-center justify-center size-full">
                                  <div className="content-stretch flex items-center justify-center p-[0.5px] relative size-full">
                                    <div className="aspect-[17.999998092651367/17.999998092651367] h-full relative shrink-0" data-name="Vector">
                                      <div className="absolute inset-[-3.46%]">
                                        <svg className="block size-full" fill="none" height="12.83" preserveAspectRatio="none" viewBox="0 0 12.83 12.83" width="12.83">
                                          <path d={svgPaths.p3ed0e080} id="Vector" stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.83" />
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
                    </div>
                    <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">Option 3</p>
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

export default function CheckboxList1() {
  return <CheckboxList className="relative size-full" />;
}