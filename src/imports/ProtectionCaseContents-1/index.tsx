import svgPaths from "./svg-c2cpwak6do";
type FieldsetProps = {
  className?: string;
  box?: React.ReactNode | null;
  nested?: "False";
  title?: React.ReactNode | null;
};

function Fieldset({ className, box = null, nested = "False", title = null }: FieldsetProps) {
  return (
    <div className={className || "relative w-[1431px]"}>
      <div className="content-stretch flex flex-col items-start pt-[10px] relative size-full">
        <div className="h-[76px] relative rounded-[12px] shrink-0 w-full" data-name="Box">
          {box || (
            <>
              <div aria-hidden className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[12px]" />
              <div className="relative size-full" />
            </>
          )}
        </div>
        <div className="absolute bg-white content-stretch flex items-center left-[14px] px-[5px] py-[2px] top-[-3px]" data-name="Title">
          {title || <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[1.6] relative shrink-0 text-[14px] text-black tracking-[-0.5px] whitespace-nowrap">Fieldset title</p>}
        </div>
      </div>
    </div>
  );
}
type ProtectionCaseContentsProps = {
  className?: string;
  property1?: "In the last 5 years";
};

function ProtectionCaseContents({ className, property1 = "In the last 5 years" }: ProtectionCaseContentsProps) {
  return (
    <div className={className || "bg-white relative"}>
      <div className="content-stretch flex flex-col items-start relative size-full">
        <div className="relative rounded-[12px] shrink-0 w-full">
          <div aria-hidden className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[12px]" />
          <div className="content-stretch flex flex-col gap-[30px] items-start p-[20px] relative size-full">
            <div className="h-[31px] relative shrink-0" data-name="H1 page title">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center relative size-full">
                  <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[24px] text-black tracking-[-0.5px] whitespace-nowrap">In the last 5 years</p>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-[869px]" data-name="Checkbox list">
              <div className="content-stretch flex flex-col gap-[6px] items-start relative size-full">
                <div className="relative shrink-0 w-[108px]" data-name="Label">
                  <div className="content-stretch flex items-start relative size-full">
                    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative">
                      <div className="h-[8px] relative shrink-0 w-px" />
                      <div className="flex-[1_0_0] min-w-px relative" data-name="Label text">
                        <div className="flex flex-row items-end size-full">
                          <div className="content-stretch flex items-end pl-px relative size-full">
                            <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">In the last 5 years have you been diagnosed or suffered with</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 w-full" data-name="Options (required)">
                  <div className="overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch cursor-pointer flex flex-col gap-[9px] items-start pl-[2px] relative size-full">
                      <button className="relative shrink-0" data-name="Checkbox option">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex gap-[8px] items-center relative size-full">
                            <div className="content-stretch flex items-start pt-[2px] relative shrink-0" data-name="Checkbox padding">
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
                            <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#231f20] text-[16px] text-left whitespace-nowrap">Raised blood pressure</p>
                          </div>
                        </div>
                      </button>
                      <button className="relative shrink-0" data-name="Option 2a">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex gap-[8px] items-center relative size-full">
                            <div className="content-stretch flex items-start pt-[2px] relative shrink-0" data-name="Checkbox padding">
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
                            <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#231f20] text-[16px] text-left whitespace-nowrap">Asthma</p>
                          </div>
                        </div>
                      </button>
                      <button className="relative shrink-0" data-name="Option 2a">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex gap-[8px] items-center relative size-full">
                            <div className="content-stretch flex items-start pt-[2px] relative shrink-0" data-name="Checkbox padding">
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
                            <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#231f20] text-[16px] text-left whitespace-nowrap">Depression, anxiety, stress or any other mental health condition</p>
                          </div>
                        </div>
                      </button>
                      <button className="relative shrink-0" data-name="Checkbox option">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex gap-[8px] items-center relative size-full">
                            <div className="content-stretch flex items-start pt-[2px] relative shrink-0" data-name="Checkbox padding">
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
                            <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#231f20] text-[16px] text-left whitespace-nowrap">Any lumps, bumps, moles that you need investigating</p>
                          </div>
                        </div>
                      </button>
                      <button className="relative shrink-0" data-name="Checkbox option">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex gap-[8px] items-center relative size-full">
                            <div className="content-stretch flex items-start pt-[2px] relative shrink-0" data-name="Checkbox">
                              <div className="relative shrink-0 size-[15px]">
                                <div className="absolute bg-white border border-[#67686b] border-solid left-0 size-[15px] top-0" />
                              </div>
                            </div>
                            <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#231f20] text-[16px] text-left whitespace-nowrap">No, none of these</p>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Fieldset
              box={
                <>
                  <div aria-hidden className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[12px]" />
                  <div className="relative shrink-0" data-name="Date field">
                    <div className="content-stretch flex flex-col gap-[5px] items-start relative size-full">
                      <div className="relative shrink-0 w-[108px]" data-name="Label">
                        <div className="content-stretch flex items-start relative size-full">
                          <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative">
                            <div className="h-[8px] relative shrink-0 w-px" />
                            <div className="flex-[1_0_0] min-w-px relative" data-name="Label text">
                              <div className="flex flex-row items-end size-full">
                                <div className="content-stretch flex items-end pl-px relative size-full">
                                  <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">When were you first diagnosed with raised blood pressure?</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[20px] items-end pl-[2px] relative shrink-0" data-name="Inputs">
                        <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0" data-name="Month">
                          <p className="[word-break:break-word] font-['Lato:Bold',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#231f20] text-[14px] whitespace-nowrap">Month</p>
                          <div className="bg-white content-stretch flex items-start pb-[8px] pt-[7px] px-[15px] relative rounded-[6px] shrink-0" data-name="Month input">
                            <div aria-hidden className="absolute border border-[#c2c3c4] border-solid inset-0 pointer-events-none rounded-[6px]" />
                            <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#67686b] text-[16px] whitespace-nowrap">MM</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0" data-name="Year">
                          <p className="[word-break:break-word] font-['Lato:Bold',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#231f20] text-[14px] whitespace-nowrap">Year</p>
                          <div className="bg-white content-stretch flex items-start pb-[8px] pt-[7px] px-[15px] relative rounded-[6px] shrink-0" data-name="Year input">
                            <div aria-hidden className="absolute border border-[#c2c3c4] border-solid inset-0 pointer-events-none rounded-[6px]" />
                            <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#67686b] text-[16px] whitespace-nowrap">YYYY</p>
                          </div>
                        </div>
                        <div className="bg-white relative rounded-[12px] shrink-0" data-name="Button (old)">
                          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                            <div className="content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[10px] relative size-full">
                              <div className="relative shrink-0 size-[20px]" data-name="Icon child (DEPRICATED)">
                                <div className="flex flex-row items-center justify-center size-full">
                                  <div className="content-stretch flex items-center justify-center p-[0.5px] relative size-full">
                                    <div className="aspect-[18/18] flex-[1_0_0] min-w-px relative" data-name="Vector">
                                      <div className="absolute inset-[-2.31%]">
                                        <svg className="block size-full" fill="none" height="18.83" preserveAspectRatio="none" viewBox="0 0 19.83 18.83" width="19.83">
                                          <path d={svgPaths.p27e900} id="Vector" stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.83" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div aria-hidden className="absolute border border-[#231f20] border-solid inset-0 pointer-events-none rounded-[12px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0" data-name="Input field">
                    <div className="content-stretch flex flex-col gap-[6px] items-start relative size-full">
                      <div className="relative shrink-0" data-name="Label">
                        <div className="content-stretch flex items-start relative size-full">
                          <div className="content-stretch flex items-start relative shrink-0 w-[108px]">
                            <div className="h-[8px] relative shrink-0 w-px" />
                            <div className="flex-[1_0_0] min-w-px relative" data-name="Label text">
                              <div className="flex flex-row items-end size-full">
                                <div className="content-stretch flex items-end pl-px relative size-full">
                                  <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">How frequently are you monitored by your GP?</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative shrink-0 w-full" data-name="Select">
                        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex gap-[8px] items-center justify-center pl-[2px] py-[2px] relative size-full">
                            <div className="bg-white relative rounded-[6px] shrink-0 w-[269px]" data-name="Input">
                              <div className="content-stretch flex items-start overflow-clip px-[15px] py-[7px] relative rounded-[inherit] size-full">
                                <div className="content-stretch flex flex-[1_0_0] gap-[15px] items-center min-w-px relative" data-name="Select inner">
                                  <p className="[word-break:break-word] flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[1.55] min-w-px not-italic relative text-[#757575] text-[16px]">Please select frequency…</p>
                                  <div className="relative shrink-0 w-[15px]" data-name="Icon child/Chevron down/Small/No">
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
                  <div className="relative shrink-0" data-name="Radio list">
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full">
                      <div className="relative shrink-0 w-full" data-name="Label">
                        <div className="content-stretch flex items-start relative size-full">
                          <div className="content-stretch flex items-start relative shrink-0 w-[108px]">
                            <div className="h-[8px] relative shrink-0 w-px" />
                            <div className="flex-[1_0_0] min-w-px relative" data-name="Label text">
                              <div className="flex flex-row items-end size-full">
                                <div className="content-stretch flex items-end pl-px relative size-full">
                                  <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">At your last review, were you advised to attend another review any sooner?</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative shrink-0 w-full" data-name="Options">
                        <div className="content-stretch cursor-pointer flex flex-col gap-[10px] items-start pl-[2px] relative size-full">
                          <button className="relative shrink-0" data-name="Option 1">
                            <div className="content-stretch flex gap-[8px] items-start relative size-full">
                              <div className="h-[18px] relative shrink-0 w-[15px]">
                                <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 15 18" width="15">
                                  <g id="Frame 248">
                                    <circle cx="7.5" cy="10.5" fill="white" id="Ellipse 2" r="7" stroke="#67686B" />
                                  </g>
                                </svg>
                              </div>
                              <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.25] not-italic relative shrink-0 text-[#231f20] text-[16px] text-left whitespace-nowrap">Yes</p>
                            </div>
                          </button>
                          <button className="relative shrink-0" data-name="Option 2">
                            <div className="content-stretch flex gap-[8px] items-start relative size-full">
                              <div className="content-stretch flex items-center pt-[2px] relative shrink-0">
                                <div className="relative shrink-0 size-[15px]">
                                  <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
                                    <g id="Group 109">
                                      <circle cx="7.5" cy="7.5" fill="white" id="Ellipse 3" r="6.5" stroke="#231F20" strokeWidth="2" />
                                      <circle cx="7.5" cy="7.5" fill="#F26A2C" id="Ellipse 4" r="2.5" stroke="#F26A2C" strokeWidth="2" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                              <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.25] not-italic relative shrink-0 text-[#231f20] text-[16px] text-left whitespace-nowrap">No</p>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-full" data-name="Input field">
                    <div className="content-stretch flex flex-col gap-[6px] items-start relative size-full">
                      <div className="relative shrink-0 w-[108px]" data-name="Label">
                        <div className="content-stretch flex items-start relative size-full">
                          <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative">
                            <div className="h-[8px] relative shrink-0 w-px" />
                            <div className="flex-[1_0_0] min-w-px relative" data-name="Label text">
                              <div className="flex flex-row items-end size-full">
                                <div className="content-stretch flex items-end pl-px relative size-full">
                                  <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">What treatment are you taking for your blood pressure?</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative shrink-0 w-full" data-name="Input">
                        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex gap-[8px] items-center justify-center pl-[2px] py-[2px] relative size-full">
                            <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[6px]" data-name="Input">
                              <div className="overflow-clip rounded-[inherit] size-full">
                                <div className="content-stretch flex items-start pb-[10px] pt-[9px] px-[15px] relative size-full">
                                  <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[#757575] text-[16px] whitespace-nowrap">e.g. Amlodipine, Ramipril</p>
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
                  <div className="relative shrink-0 w-[175px]" data-name="Number input">
                    <div className="content-stretch flex flex-col gap-[6px] items-start relative size-full">
                      <div className="h-[19px] relative shrink-0 w-full" data-name="Label">
                        <div className="content-stretch flex items-start relative size-full">
                          <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative">
                            <div className="h-[8px] relative shrink-0 w-px" />
                            <div className="flex-[1_0_0] min-w-px relative" data-name="Label text">
                              <div className="flex flex-row items-end size-full">
                                <div className="content-stretch flex items-end pl-px relative size-full">
                                  <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">How many different medications are you taking to control the condition?</p>
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
                          <p className="[word-break:break-word] col-1 font-['Lato:Regular',sans-serif] leading-[1.55] ml-[49px] mt-[8px] not-italic relative row-1 text-[#231f20] text-[16px] w-[47px]">0</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0" data-name="Input field">
                    <div className="content-stretch flex flex-col gap-[6px] items-start relative size-full">
                      <div className="relative shrink-0" data-name="Label">
                        <div className="content-stretch flex items-start relative size-full">
                          <div className="content-stretch flex items-start relative shrink-0 w-[108px]">
                            <div className="h-[8px] relative shrink-0 w-px" />
                            <div className="flex-[1_0_0] min-w-px relative" data-name="Label text">
                              <div className="flex flex-row items-end size-full">
                                <div className="content-stretch flex items-end pl-px relative size-full">
                                  <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">What was your last blood pressure reading?</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative shrink-0 w-[175px]" data-name="Input">
                        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex gap-[8px] items-center justify-center pl-[2px] py-[2px] relative size-full">
                            <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[6px]" data-name="Input">
                              <div className="overflow-clip rounded-[inherit] size-full">
                                <div className="content-stretch flex items-start pb-[10px] pt-[9px] px-[15px] relative size-full">
                                  <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[#757575] text-[16px] whitespace-nowrap">e.g. 120/80</p>
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
                  <div className="gap-x-px grid grid-cols-[__10px_minmax(0,1fr)] grid-rows-[repeat(1,fit-content(100%))] relative shrink-0 w-[809px]">
                    <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Nested field separator">
                      <div className="content-stretch flex items-start pr-[20px] relative size-full">
                        <div className="bg-[#c2c3c4] h-full relative shrink-0 w-[5px]" />
                      </div>
                    </div>
                    <div className="col-2 justify-self-stretch relative row-1 self-start shrink-0" data-name="Date field">
                      <div className="content-stretch flex flex-col gap-[5px] items-start pl-[20px] relative size-full">
                        <div className="relative shrink-0 w-[108px]" data-name="Label">
                          <div className="content-stretch flex items-start relative size-full">
                            <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative">
                              <div className="h-[8px] relative shrink-0 w-px" />
                              <div className="flex-[1_0_0] min-w-px relative" data-name="Label text">
                                <div className="flex flex-row items-end size-full">
                                  <div className="content-stretch flex items-end pl-px relative size-full">
                                    <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">When was that last taken?</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="relative shrink-0 w-full" data-name="Help and error text">
                          <div className="flex flex-col items-end size-full">
                            <div className="content-stretch flex flex-col gap-[5px] items-end pb-[5px] pl-px relative size-full">
                              <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Help text">
                                <p className="[word-break:break-word] flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-none min-w-px not-italic relative text-[#67686b] text-[12px]">If the exact date is not known, estimate to the closest month and year</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[20px] items-end pl-[2px] relative shrink-0" data-name="Inputs">
                          <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0" data-name="Day">
                            <p className="[word-break:break-word] font-['Lato:Bold',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#231f20] text-[14px] whitespace-nowrap">Day</p>
                            <div className="bg-white content-stretch flex items-start pb-[8px] pt-[7px] px-[15px] relative rounded-[6px] shrink-0" data-name="Day input">
                              <div aria-hidden className="absolute border border-[#c2c3c4] border-solid inset-0 pointer-events-none rounded-[6px]" />
                              <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#67686b] text-[16px] whitespace-nowrap">DD</p>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0" data-name="Month">
                            <p className="[word-break:break-word] font-['Lato:Bold',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#231f20] text-[14px] whitespace-nowrap">Month</p>
                            <div className="bg-white content-stretch flex items-start pb-[8px] pt-[7px] px-[15px] relative rounded-[6px] shrink-0" data-name="Month input">
                              <div aria-hidden className="absolute border border-[#c2c3c4] border-solid inset-0 pointer-events-none rounded-[6px]" />
                              <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#67686b] text-[16px] whitespace-nowrap">MM</p>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0" data-name="Year">
                            <p className="[word-break:break-word] font-['Lato:Bold',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#231f20] text-[14px] whitespace-nowrap">Year</p>
                            <div className="bg-white content-stretch flex items-start pb-[8px] pt-[7px] px-[15px] relative rounded-[6px] shrink-0" data-name="Year input">
                              <div aria-hidden className="absolute border border-[#c2c3c4] border-solid inset-0 pointer-events-none rounded-[6px]" />
                              <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#67686b] text-[16px] whitespace-nowrap">YYYY</p>
                            </div>
                          </div>
                          <div className="bg-white relative rounded-[12px] shrink-0" data-name="Button (old)">
                            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                              <div className="content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[10px] relative size-full">
                                <div className="relative shrink-0 size-[20px]" data-name="Icon child (DEPRICATED)">
                                  <div className="flex flex-row items-center justify-center size-full">
                                    <div className="content-stretch flex items-center justify-center p-[0.5px] relative size-full">
                                      <div className="aspect-[18/18] flex-[1_0_0] min-w-px relative" data-name="Vector">
                                        <div className="absolute inset-[-2.31%]">
                                          <svg className="block size-full" fill="none" height="18.83" preserveAspectRatio="none" viewBox="0 0 19.83 18.83" width="19.83">
                                            <path d={svgPaths.p27e900} id="Vector" stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.83" />
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div aria-hidden className="absolute border border-[#231f20] border-solid inset-0 pointer-events-none rounded-[12px]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              }
              className="relative shrink-0 w-[869px]"
              title={<p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[1.6] relative shrink-0 text-[14px] text-black tracking-[-0.5px] whitespace-nowrap">Raised blood pressure</p>}
            />
            <Fieldset
              box={
                <>
                  <div aria-hidden className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[12px]" />
                  <div className="relative shrink-0" data-name="Date field">
                    <div className="content-stretch flex flex-col gap-[5px] items-start relative size-full">
                      <div className="relative shrink-0 w-[108px]" data-name="Label">
                        <div className="content-stretch flex items-start relative size-full">
                          <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative">
                            <div className="h-[8px] relative shrink-0 w-px" />
                            <div className="flex-[1_0_0] min-w-px relative" data-name="Label text">
                              <div className="flex flex-row items-end size-full">
                                <div className="content-stretch flex items-end pl-px relative size-full">
                                  <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">When were you first diagnosed with asthma?</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[20px] items-end pl-[2px] relative shrink-0" data-name="Inputs">
                        <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0" data-name="Month">
                          <p className="[word-break:break-word] font-['Lato:Bold',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#231f20] text-[14px] whitespace-nowrap">Month</p>
                          <div className="bg-white content-stretch flex items-start pb-[8px] pt-[7px] px-[15px] relative rounded-[6px] shrink-0" data-name="Month input">
                            <div aria-hidden className="absolute border border-[#c2c3c4] border-solid inset-0 pointer-events-none rounded-[6px]" />
                            <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#67686b] text-[16px] whitespace-nowrap">MM</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0" data-name="Year">
                          <p className="[word-break:break-word] font-['Lato:Bold',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#231f20] text-[14px] whitespace-nowrap">Year</p>
                          <div className="bg-white content-stretch flex items-start pb-[8px] pt-[7px] px-[15px] relative rounded-[6px] shrink-0" data-name="Year input">
                            <div aria-hidden className="absolute border border-[#c2c3c4] border-solid inset-0 pointer-events-none rounded-[6px]" />
                            <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#67686b] text-[16px] whitespace-nowrap">YYYY</p>
                          </div>
                        </div>
                        <div className="bg-white relative rounded-[12px] shrink-0" data-name="Button (old)">
                          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                            <div className="content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[10px] relative size-full">
                              <div className="relative shrink-0 size-[20px]" data-name="Icon child (DEPRICATED)">
                                <div className="flex flex-row items-center justify-center size-full">
                                  <div className="content-stretch flex items-center justify-center p-[0.5px] relative size-full">
                                    <div className="aspect-[18/18] flex-[1_0_0] min-w-px relative" data-name="Vector">
                                      <div className="absolute inset-[-2.31%]">
                                        <svg className="block size-full" fill="none" height="18.83" preserveAspectRatio="none" viewBox="0 0 19.83 18.83" width="19.83">
                                          <path d={svgPaths.p27e900} id="Vector" stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.83" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div aria-hidden className="absolute border border-[#231f20] border-solid inset-0 pointer-events-none rounded-[12px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0">
                    <div className="relative shrink-0 w-[869px]" data-name="Checkbox list">
                      <div className="content-stretch flex flex-col gap-[6px] items-start relative size-full">
                        <div className="relative shrink-0 w-[108px]" data-name="Label">
                          <div className="content-stretch flex items-start relative size-full">
                            <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative">
                              <div className="h-[8px] relative shrink-0 w-px" />
                              <div className="flex-[1_0_0] min-w-px relative" data-name="Label text">
                                <div className="flex flex-row items-end size-full">
                                  <div className="content-stretch flex items-end pl-px relative size-full">
                                    <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">What treatment do you take?</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="relative shrink-0 w-full" data-name="Options (required)">
                          <div className="overflow-clip rounded-[inherit] size-full">
                            <div className="content-stretch cursor-pointer flex flex-col gap-[9px] items-start pl-[2px] relative size-full">
                              <button className="relative shrink-0" data-name="Checkbox option">
                                <div className="flex flex-row items-center size-full">
                                  <div className="content-stretch flex gap-[8px] items-center relative size-full">
                                    <div className="content-stretch flex items-start pt-[2px] relative shrink-0" data-name="Checkbox padding">
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
                                    <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#231f20] text-[16px] text-left whitespace-nowrap">Salbutamol reliever inhaler (e.g blue reliever inhaler)</p>
                                  </div>
                                </div>
                              </button>
                              <button className="relative shrink-0" data-name="Option 2a">
                                <div className="flex flex-row items-center size-full">
                                  <div className="content-stretch flex gap-[8px] items-center relative size-full">
                                    <div className="content-stretch flex items-start pt-[2px] relative shrink-0" data-name="Checkbox">
                                      <div className="relative shrink-0 size-[15px]">
                                        <div className="absolute bg-white border border-[#67686b] border-solid left-0 size-[15px] top-0" />
                                      </div>
                                    </div>
                                    <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#231f20] text-[16px] text-left whitespace-nowrap">Inhaled corticosteroid (e.g brown preventer inhaler)</p>
                                  </div>
                                </div>
                              </button>
                              <button className="relative shrink-0" data-name="Option 2a">
                                <div className="flex flex-row items-center size-full">
                                  <div className="content-stretch flex gap-[8px] items-center relative size-full">
                                    <div className="content-stretch flex items-start pt-[2px] relative shrink-0" data-name="Checkbox">
                                      <div className="relative shrink-0 size-[15px]">
                                        <div className="absolute bg-white border border-[#67686b] border-solid left-0 size-[15px] top-0" />
                                      </div>
                                    </div>
                                    <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#231f20] text-[16px] text-left whitespace-nowrap">Combination inhaler (e.g. Seretide, Fostair, Symbicort)</p>
                                  </div>
                                </div>
                              </button>
                              <button className="relative shrink-0" data-name="Option 2a">
                                <div className="flex flex-row items-center size-full">
                                  <div className="content-stretch flex gap-[8px] items-center relative size-full">
                                    <div className="content-stretch flex items-start pt-[2px] relative shrink-0" data-name="Checkbox">
                                      <div className="relative shrink-0 size-[15px]">
                                        <div className="absolute bg-white border border-[#67686b] border-solid left-0 size-[15px] top-0" />
                                      </div>
                                    </div>
                                    <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#231f20] text-[16px] text-left whitespace-nowrap">Oral steroids (e.g prednisolone)</p>
                                  </div>
                                </div>
                              </button>
                              <button className="relative shrink-0" data-name="Option 2a">
                                <div className="flex flex-row items-center size-full">
                                  <div className="content-stretch flex gap-[8px] items-center relative size-full">
                                    <div className="content-stretch flex items-start pt-[2px] relative shrink-0" data-name="Checkbox">
                                      <div className="relative shrink-0 size-[15px]">
                                        <div className="absolute bg-white border border-[#67686b] border-solid left-0 size-[15px] top-0" />
                                      </div>
                                    </div>
                                    <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#231f20] text-[16px] text-left whitespace-nowrap">Other</p>
                                  </div>
                                </div>
                              </button>
                              <button className="relative shrink-0" data-name="Option 2a">
                                <div className="flex flex-row items-center size-full">
                                  <div className="content-stretch flex gap-[8px] items-center relative size-full">
                                    <div className="content-stretch flex items-start pt-[2px] relative shrink-0" data-name="Checkbox">
                                      <div className="relative shrink-0 size-[15px]">
                                        <div className="absolute bg-white border border-[#67686b] border-solid left-0 size-[15px] top-0" />
                                      </div>
                                    </div>
                                    <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#231f20] text-[16px] text-left whitespace-nowrap">No, none of these</p>
                                  </div>
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="gap-x-px gap-y-[20px] grid grid-cols-[__10px_minmax(0,1fr)] grid-rows-[repeat(1,fit-content(100%))] relative shrink-0 w-[809px]">
                    <div className="col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Input field">
                      <div className="content-stretch flex flex-col gap-[6px] items-start px-[16px] relative size-full">
                        <div className="relative shrink-0 w-[108px]" data-name="Label">
                          <div className="content-stretch flex items-start relative size-full">
                            <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative">
                              <div className="h-[8px] relative shrink-0 w-px" />
                              <div className="flex-[1_0_0] min-w-px relative" data-name="Label text">
                                <div className="flex flex-row items-end size-full">
                                  <div className="content-stretch flex items-end pl-px relative size-full">
                                    <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">How often do you use your reliever inhaler?</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-0 justify-self-stretch relative row-0 self-start shrink-0" data-name="Select">
                      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex gap-[8px] items-center justify-center pl-[2px] py-[2px] relative size-full">
                          <div className="bg-white relative rounded-[6px] shrink-0 w-[269px]" data-name="Input">
                            <div className="content-stretch flex items-start overflow-clip px-[15px] py-[7px] relative rounded-[inherit] size-full">
                              <div className="content-stretch flex flex-[1_0_0] gap-[15px] items-center min-w-px relative" data-name="Select inner">
                                <p className="[word-break:break-word] flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[1.55] min-w-px not-italic relative text-[#757575] text-[16px]">Please select frequency…</p>
                                <div className="relative shrink-0 w-[15px]" data-name="Icon child/Chevron down/Small/No">
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
                              </div>
                            </div>
                            <div aria-hidden className="absolute border border-[#67686b] border-solid inset-0 pointer-events-none rounded-[6px]" />
                          </div>
                          <div className="relative shrink-0 size-[15px]" data-name="Icon" />
                        </div>
                      </div>
                    </div>
                    <div className="col-1 h-[71px] justify-self-stretch relative row-1 shrink-0" data-name="Nested field separator">
                      <div className="content-stretch flex items-start pr-[20px] relative size-full">
                        <div className="bg-[#c2c3c4] h-full relative shrink-0 w-[5px]" />
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0" data-name="Input field">
                    <div className="content-stretch flex flex-col gap-[6px] items-start relative size-full">
                      <div className="relative shrink-0" data-name="Label">
                        <div className="content-stretch flex items-start relative size-full">
                          <div className="content-stretch flex items-start relative shrink-0 w-[108px]">
                            <div className="h-[8px] relative shrink-0 w-px" />
                            <div className="flex-[1_0_0] min-w-px relative" data-name="Label text">
                              <div className="flex flex-row items-end size-full">
                                <div className="content-stretch flex items-end pl-px relative size-full">
                                  <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">When was the last time you had an asthma attack?</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative shrink-0 w-full" data-name="Select">
                        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex gap-[8px] items-center justify-center pl-[2px] py-[2px] relative size-full">
                            <div className="bg-white relative rounded-[6px] shrink-0 w-[269px]" data-name="Input">
                              <div className="content-stretch flex items-start overflow-clip px-[15px] py-[7px] relative rounded-[inherit] size-full">
                                <div className="content-stretch flex flex-[1_0_0] gap-[15px] items-center min-w-px relative" data-name="Select inner">
                                  <p className="[word-break:break-word] flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[1.55] min-w-px not-italic relative text-[#757575] text-[16px]">Please select…</p>
                                  <div className="relative shrink-0 w-[15px]" data-name="Icon child/Chevron down/Small/No">
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
                  <div className="relative shrink-0" data-name="Radio list">
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full">
                      <div className="relative shrink-0 w-full" data-name="Label">
                        <div className="content-stretch flex items-start relative size-full">
                          <div className="content-stretch flex items-start relative shrink-0 w-[108px]">
                            <div className="h-[8px] relative shrink-0 w-px" />
                            <div className="flex-[1_0_0] min-w-px relative" data-name="Label text">
                              <div className="flex flex-row items-end size-full">
                                <div className="content-stretch flex items-end pl-px relative size-full">
                                  <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">Have you ever been hospitalised due to your asthma?</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative shrink-0 w-full" data-name="Options">
                        <div className="content-stretch cursor-pointer flex flex-col gap-[10px] items-start pl-[2px] relative size-full">
                          <button className="relative shrink-0" data-name="Option 1">
                            <div className="content-stretch flex gap-[8px] items-start relative size-full">
                              <div className="content-stretch flex items-center pt-[2px] relative shrink-0">
                                <div className="relative shrink-0 size-[15px]">
                                  <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
                                    <g id="Group 109">
                                      <circle cx="7.5" cy="7.5" fill="white" id="Ellipse 3" r="6.5" stroke="#231F20" strokeWidth="2" />
                                      <circle cx="7.5" cy="7.5" fill="#F26A2C" id="Ellipse 4" r="2.5" stroke="#F26A2C" strokeWidth="2" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                              <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.25] not-italic relative shrink-0 text-[#231f20] text-[16px] text-left whitespace-nowrap">Yes</p>
                            </div>
                          </button>
                          <button className="relative shrink-0" data-name="Option 2">
                            <div className="content-stretch flex gap-[8px] items-start relative size-full">
                              <div className="h-[18px] relative shrink-0 w-[15px]">
                                <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 15 18" width="15">
                                  <g id="Frame 248">
                                    <circle cx="7.5" cy="10.5" fill="white" id="Ellipse 2" r="7" stroke="#67686B" />
                                  </g>
                                </svg>
                              </div>
                              <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.25] not-italic relative shrink-0 text-[#231f20] text-[16px] text-left whitespace-nowrap">No</p>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="gap-x-px gap-y-[20px] grid grid-cols-[__10px_minmax(0,1fr)] grid-rows-[repeat(3,fit-content(100%))] relative shrink-0 w-[809px]">
                    <div className="col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Input field">
                      <div className="content-stretch flex flex-col gap-[6px] items-start px-[16px] relative size-full">
                        <div className="relative shrink-0 w-[108px]" data-name="Label">
                          <div className="content-stretch flex items-start relative size-full">
                            <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative">
                              <div className="h-[8px] relative shrink-0 w-px" />
                              <div className="flex-[1_0_0] min-w-px relative" data-name="Label text">
                                <div className="flex flex-row items-end size-full">
                                  <div className="content-stretch flex items-end pl-px relative size-full">
                                    <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">How long were you hospitalised for?</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="relative shrink-0 w-full" data-name="Select">
                          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[2px] py-[2px] relative size-full">
                              <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[6px]" data-name="Input">
                                <div className="overflow-clip rounded-[inherit] size-full">
                                  <div className="content-stretch flex items-start px-[15px] py-[7px] relative size-full">
                                    <div className="content-stretch flex flex-[1_0_0] gap-[15px] items-center min-w-px relative" data-name="Select inner">
                                      <p className="[word-break:break-word] flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[1.55] min-w-px not-italic relative text-[#757575] text-[16px]">Select timeframe</p>
                                      <div className="relative shrink-0 w-[15px]" data-name="Icon child/Chevron down/Small/No">
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
                    <div className="col-2 justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Date field">
                      <div className="content-stretch flex flex-col gap-[5px] items-start px-[16px] relative size-full">
                        <div className="relative shrink-0 w-[108px]" data-name="Label">
                          <div className="content-stretch flex items-start relative size-full">
                            <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative">
                              <div className="h-[8px] relative shrink-0 w-px" />
                              <div className="flex-[1_0_0] min-w-px relative" data-name="Label text">
                                <div className="flex flex-row items-end size-full">
                                  <div className="content-stretch flex items-end pl-px relative size-full">
                                    <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">When were you last hospitalised?</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="relative shrink-0 w-full" data-name="Help and error text">
                          <div className="flex flex-col items-end size-full">
                            <div className="content-stretch flex flex-col gap-[5px] items-end pb-[5px] pl-px relative size-full">
                              <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Help text">
                                <p className="[word-break:break-word] flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[1.55] min-w-px not-italic relative text-[#67686b] text-[14px]">If the exact date is not know, estimate to the closest month and year</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[20px] items-end pl-[2px] relative shrink-0" data-name="Inputs">
                          <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0" data-name="Month">
                            <p className="[word-break:break-word] font-['Lato:Bold',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#231f20] text-[14px] whitespace-nowrap">Month</p>
                            <div className="bg-white content-stretch flex items-start pb-[8px] pt-[7px] px-[15px] relative rounded-[6px] shrink-0" data-name="Month input">
                              <div aria-hidden className="absolute border border-[#c2c3c4] border-solid inset-0 pointer-events-none rounded-[6px]" />
                              <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#67686b] text-[16px] whitespace-nowrap">MM</p>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0" data-name="Year">
                            <p className="[word-break:break-word] font-['Lato:Bold',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#231f20] text-[14px] whitespace-nowrap">Year</p>
                            <div className="bg-white content-stretch flex items-start pb-[8px] pt-[7px] px-[15px] relative rounded-[6px] shrink-0" data-name="Year input">
                              <div aria-hidden className="absolute border border-[#c2c3c4] border-solid inset-0 pointer-events-none rounded-[6px]" />
                              <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#67686b] text-[16px] whitespace-nowrap">YYYY</p>
                            </div>
                          </div>
                          <div className="bg-white relative rounded-[12px] shrink-0" data-name="Button (old)">
                            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                              <div className="content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[10px] relative size-full">
                                <div className="relative shrink-0 size-[20px]" data-name="Icon child (DEPRICATED)">
                                  <div className="flex flex-row items-center justify-center size-full">
                                    <div className="content-stretch flex items-center justify-center p-[0.5px] relative size-full">
                                      <div className="aspect-[18/18] flex-[1_0_0] min-w-px relative" data-name="Vector">
                                        <div className="absolute inset-[-2.31%]">
                                          <svg className="block size-full" fill="none" height="18.83" preserveAspectRatio="none" viewBox="0 0 19.83 18.83" width="19.83">
                                            <path d={svgPaths.p27e900} id="Vector" stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.83" />
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div aria-hidden className="absolute border border-[#231f20] border-solid inset-0 pointer-events-none rounded-[12px]" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-1 h-[231px] justify-self-stretch relative row-[1/span_3] shrink-0" data-name="Nested field separator">
                      <div className="content-stretch flex items-start pr-[20px] relative size-full">
                        <div className="bg-[#c2c3c4] h-full relative shrink-0 w-[5px]" />
                      </div>
                    </div>
                  </div>
                </>
              }
              className="relative shrink-0 w-[869px]"
              title={<p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[1.6] relative shrink-0 text-[14px] text-black tracking-[-0.5px] whitespace-nowrap">Asthma</p>}
            />
            <Fieldset
              box={
                <>
                  <div aria-hidden className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[12px]" />
                  <div className="relative shrink-0" data-name="Date field">
                    <div className="content-stretch flex flex-col gap-[5px] items-start relative size-full">
                      <div className="relative shrink-0 w-[108px]" data-name="Label">
                        <div className="content-stretch flex items-start relative size-full">
                          <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative">
                            <div className="h-[8px] relative shrink-0 w-px" />
                            <div className="flex-[1_0_0] min-w-px relative" data-name="Label text">
                              <div className="flex flex-row items-end size-full">
                                <div className="content-stretch flex items-end pl-px relative size-full">
                                  <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">{`When were you first diagnosed with a mental health condition? `}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[20px] items-end pl-[2px] relative shrink-0" data-name="Inputs">
                        <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0" data-name="Month">
                          <p className="[word-break:break-word] font-['Lato:Bold',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#231f20] text-[14px] whitespace-nowrap">Month</p>
                          <div className="bg-white content-stretch flex items-start pb-[8px] pt-[7px] px-[15px] relative rounded-[6px] shrink-0" data-name="Month input">
                            <div aria-hidden className="absolute border border-[#c2c3c4] border-solid inset-0 pointer-events-none rounded-[6px]" />
                            <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#67686b] text-[16px] whitespace-nowrap">MM</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0" data-name="Year">
                          <p className="[word-break:break-word] font-['Lato:Bold',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#231f20] text-[14px] whitespace-nowrap">Year</p>
                          <div className="bg-white content-stretch flex items-start pb-[8px] pt-[7px] px-[15px] relative rounded-[6px] shrink-0" data-name="Year input">
                            <div aria-hidden className="absolute border border-[#c2c3c4] border-solid inset-0 pointer-events-none rounded-[6px]" />
                            <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#67686b] text-[16px] whitespace-nowrap">YYYY</p>
                          </div>
                        </div>
                        <div className="bg-white relative rounded-[12px] shrink-0" data-name="Button (old)">
                          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                            <div className="content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[10px] relative size-full">
                              <div className="relative shrink-0 size-[20px]" data-name="Icon child (DEPRICATED)">
                                <div className="flex flex-row items-center justify-center size-full">
                                  <div className="content-stretch flex items-center justify-center p-[0.5px] relative size-full">
                                    <div className="aspect-[18/18] flex-[1_0_0] min-w-px relative" data-name="Vector">
                                      <div className="absolute inset-[-2.31%]">
                                        <svg className="block size-full" fill="none" height="18.83" preserveAspectRatio="none" viewBox="0 0 19.83 18.83" width="19.83">
                                          <path d={svgPaths.p27e900} id="Vector" stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.83" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div aria-hidden className="absolute border border-[#231f20] border-solid inset-0 pointer-events-none rounded-[12px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
                    <div className="h-[81px] relative shrink-0 w-[869px]" data-name="Checkbox list">
                      <div className="content-stretch flex flex-col gap-[6px] items-start relative size-full">
                        <div className="relative shrink-0 w-[108px]" data-name="Label">
                          <div className="content-stretch flex items-start relative size-full">
                            <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative">
                              <div className="h-[8px] relative shrink-0 w-px" />
                              <div className="flex-[1_0_0] min-w-px relative" data-name="Label text">
                                <div className="flex flex-row items-end size-full">
                                  <div className="content-stretch flex items-end pl-px relative size-full">
                                    <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">What type of mental health condition do you have?</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="relative shrink-0 w-full" data-name="Options (required)">
                          <div className="overflow-clip rounded-[inherit] size-full">
                            <div className="content-stretch cursor-pointer flex flex-col gap-[9px] items-start pl-[2px] relative size-full">
                              <button className="relative shrink-0" data-name="Checkbox option">
                                <div className="flex flex-row items-center size-full">
                                  <div className="content-stretch flex gap-[8px] items-center relative size-full">
                                    <div className="content-stretch flex items-start pt-[2px] relative shrink-0" data-name="Checkbox padding">
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
                                    <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#231f20] text-[16px] text-left whitespace-nowrap">Depression</p>
                                  </div>
                                </div>
                              </button>
                              <button className="relative shrink-0" data-name="Option 2a">
                                <div className="flex flex-row items-center size-full">
                                  <div className="content-stretch flex gap-[8px] items-center relative size-full">
                                    <div className="content-stretch flex items-start pt-[2px] relative shrink-0" data-name="Checkbox padding">
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
                                    <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#231f20] text-[16px] text-left whitespace-nowrap">Anxiety</p>
                                  </div>
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch cursor-pointer flex flex-col gap-[10px] items-start relative shrink-0">
                      <button className="relative shrink-0" data-name="Option 2">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex gap-[8px] items-center relative size-full">
                            <div className="content-stretch flex items-start pt-[2px] relative shrink-0" data-name="Checkbox padding">
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
                            <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#231f20] text-[16px] text-left whitespace-nowrap">Stress</p>
                          </div>
                        </div>
                      </button>
                      <button className="relative shrink-0" data-name="Option 3">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex gap-[8px] items-center relative size-full">
                            <div className="content-stretch flex items-start pt-[2px] relative shrink-0" data-name="Checkbox padding">
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
                            <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#231f20] text-[16px] text-left whitespace-nowrap">PTSD</p>
                          </div>
                        </div>
                      </button>
                      <button className="relative shrink-0" data-name="Option 6">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex gap-[8px] items-center relative size-full">
                            <div className="content-stretch flex items-start pt-[2px] relative shrink-0" data-name="Checkbox padding">
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
                            <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#231f20] text-[16px] text-left whitespace-nowrap">Bipolar</p>
                          </div>
                        </div>
                      </button>
                      <button className="relative shrink-0" data-name="Option 5">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex gap-[8px] items-center relative size-full">
                            <div className="content-stretch flex items-start pt-[2px] relative shrink-0" data-name="Checkbox padding">
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
                            <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#231f20] text-[16px] text-left whitespace-nowrap">Other</p>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-[274px]" data-name="Radio list">
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full">
                      <div className="relative shrink-0 w-full" data-name="Label">
                        <div className="content-stretch flex items-start relative size-full">
                          <div className="content-stretch flex items-start relative shrink-0 w-[108px]">
                            <div className="h-[8px] relative shrink-0 w-px" />
                            <div className="flex-[1_0_0] min-w-px relative" data-name="Label text">
                              <div className="flex flex-row items-end size-full">
                                <div className="content-stretch flex items-end pl-px relative size-full">
                                  <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">Have you ever taken medication?</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative shrink-0 w-full" data-name="Options">
                        <div className="content-stretch cursor-pointer flex flex-col gap-[10px] items-start pl-[2px] relative size-full">
                          <button className="relative shrink-0" data-name="Option 1">
                            <div className="content-stretch flex gap-[8px] items-start relative size-full">
                              <div className="content-stretch flex items-center pt-[2px] relative shrink-0">
                                <div className="relative shrink-0 size-[15px]">
                                  <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
                                    <g id="Group 109">
                                      <circle cx="7.5" cy="7.5" fill="white" id="Ellipse 3" r="6.5" stroke="#231F20" strokeWidth="2" />
                                      <circle cx="7.5" cy="7.5" fill="#F26A2C" id="Ellipse 4" r="2.5" stroke="#F26A2C" strokeWidth="2" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                              <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.25] not-italic relative shrink-0 text-[#231f20] text-[16px] text-left whitespace-nowrap">Yes</p>
                            </div>
                          </button>
                          <button className="relative shrink-0" data-name="Option 2">
                            <div className="content-stretch flex gap-[8px] items-start relative size-full">
                              <div className="h-[18px] relative shrink-0 w-[15px]">
                                <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 15 18" width="15">
                                  <g id="Frame 248">
                                    <circle cx="7.5" cy="10.5" fill="white" id="Ellipse 2" r="7" stroke="#67686B" />
                                  </g>
                                </svg>
                              </div>
                              <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.25] not-italic relative shrink-0 text-[#231f20] text-[16px] text-left whitespace-nowrap">No</p>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-[274px]" data-name="Radio list">
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full">
                      <div className="relative shrink-0 w-full" data-name="Label">
                        <div className="content-stretch flex items-start relative size-full">
                          <div className="content-stretch flex items-start relative shrink-0 w-[108px]">
                            <div className="h-[8px] relative shrink-0 w-px" />
                            <div className="flex-[1_0_0] min-w-px relative" data-name="Label text">
                              <div className="flex flex-row items-end size-full">
                                <div className="content-stretch flex items-end pl-px relative size-full">
                                  <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">Have you ever received counselling or therapy?</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative shrink-0 w-full" data-name="Options">
                        <div className="content-stretch cursor-pointer flex flex-col gap-[10px] items-start pl-[2px] relative size-full">
                          <button className="relative shrink-0" data-name="Option 1">
                            <div className="content-stretch flex gap-[8px] items-start relative size-full">
                              <div className="content-stretch flex items-center pt-[2px] relative shrink-0">
                                <div className="relative shrink-0 size-[15px]">
                                  <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
                                    <g id="Group 109">
                                      <circle cx="7.5" cy="7.5" fill="white" id="Ellipse 3" r="6.5" stroke="#231F20" strokeWidth="2" />
                                      <circle cx="7.5" cy="7.5" fill="#F26A2C" id="Ellipse 4" r="2.5" stroke="#F26A2C" strokeWidth="2" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                              <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.25] not-italic relative shrink-0 text-[#231f20] text-[16px] text-left whitespace-nowrap">Yes</p>
                            </div>
                          </button>
                          <button className="relative shrink-0" data-name="Option 2">
                            <div className="content-stretch flex gap-[8px] items-start relative size-full">
                              <div className="h-[18px] relative shrink-0 w-[15px]">
                                <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 15 18" width="15">
                                  <g id="Frame 248">
                                    <circle cx="7.5" cy="10.5" fill="white" id="Ellipse 2" r="7" stroke="#67686B" />
                                  </g>
                                </svg>
                              </div>
                              <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.25] not-italic relative shrink-0 text-[#231f20] text-[16px] text-left whitespace-nowrap">No</p>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-[274px]" data-name="Radio list">
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full">
                      <div className="relative shrink-0 w-full" data-name="Label">
                        <div className="content-stretch flex items-start relative size-full">
                          <div className="content-stretch flex items-start relative shrink-0 w-[108px]">
                            <div className="h-[8px] relative shrink-0 w-px" />
                            <div className="flex-[1_0_0] min-w-px relative" data-name="Label text">
                              <div className="flex flex-row items-end size-full">
                                <div className="content-stretch flex items-end pl-px relative size-full">
                                  <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">Have you ever had any time off work due to your mental health?</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative shrink-0 w-full" data-name="Options">
                        <div className="content-stretch cursor-pointer flex flex-col gap-[10px] items-start pl-[2px] relative size-full">
                          <button className="relative shrink-0" data-name="Option 1">
                            <div className="content-stretch flex gap-[8px] items-start relative size-full">
                              <div className="content-stretch flex items-center pt-[2px] relative shrink-0">
                                <div className="relative shrink-0 size-[15px]">
                                  <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
                                    <g id="Group 109">
                                      <circle cx="7.5" cy="7.5" fill="white" id="Ellipse 3" r="6.5" stroke="#231F20" strokeWidth="2" />
                                      <circle cx="7.5" cy="7.5" fill="#F26A2C" id="Ellipse 4" r="2.5" stroke="#F26A2C" strokeWidth="2" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                              <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.25] not-italic relative shrink-0 text-[#231f20] text-[16px] text-left whitespace-nowrap">Yes</p>
                            </div>
                          </button>
                          <button className="relative shrink-0" data-name="Option 2">
                            <div className="content-stretch flex gap-[8px] items-start relative size-full">
                              <div className="h-[18px] relative shrink-0 w-[15px]">
                                <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 15 18" width="15">
                                  <g id="Frame 248">
                                    <circle cx="7.5" cy="10.5" fill="white" id="Ellipse 2" r="7" stroke="#67686B" />
                                  </g>
                                </svg>
                              </div>
                              <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.25] not-italic relative shrink-0 text-[#231f20] text-[16px] text-left whitespace-nowrap">No</p>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="gap-x-px gap-y-[20px] grid grid-cols-[__10px_minmax(0,1fr)] grid-rows-[repeat(3,fit-content(100%))] relative shrink-0 w-[809px]">
                    <div className="col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Input field">
                      <div className="content-stretch flex flex-col gap-[6px] items-start px-[16px] relative size-full">
                        <div className="relative shrink-0 w-[108px]" data-name="Label">
                          <div className="content-stretch flex items-start relative size-full">
                            <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative">
                              <div className="h-[8px] relative shrink-0 w-px" />
                              <div className="flex-[1_0_0] min-w-px relative" data-name="Label text">
                                <div className="flex flex-row items-end size-full">
                                  <div className="content-stretch flex items-end pl-px relative size-full">
                                    <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">How long were you hospitalised for?</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="relative shrink-0 w-full" data-name="Select">
                          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[2px] py-[2px] relative size-full">
                              <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[6px]" data-name="Input">
                                <div className="overflow-clip rounded-[inherit] size-full">
                                  <div className="content-stretch flex items-start px-[15px] py-[7px] relative size-full">
                                    <div className="content-stretch flex flex-[1_0_0] gap-[15px] items-center min-w-px relative" data-name="Select inner">
                                      <p className="[word-break:break-word] flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[1.55] min-w-px not-italic relative text-[#757575] text-[16px]">Select timeframe</p>
                                      <div className="relative shrink-0 w-[15px]" data-name="Icon child/Chevron down/Small/No">
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
                    <div className="col-2 justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Date field">
                      <div className="content-stretch flex flex-col gap-[5px] items-start px-[16px] relative size-full">
                        <div className="relative shrink-0 w-[108px]" data-name="Label">
                          <div className="content-stretch flex items-start relative size-full">
                            <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative">
                              <div className="h-[8px] relative shrink-0 w-px" />
                              <div className="flex-[1_0_0] min-w-px relative" data-name="Label text">
                                <div className="flex flex-row items-end size-full">
                                  <div className="content-stretch flex items-end pl-px relative size-full">
                                    <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">When were you last hospitalised?</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="relative shrink-0 w-full" data-name="Help and error text">
                          <div className="flex flex-col items-end size-full">
                            <div className="content-stretch flex flex-col gap-[5px] items-end pb-[5px] pl-px relative size-full">
                              <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Help text">
                                <p className="[word-break:break-word] flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[1.55] min-w-px not-italic relative text-[#67686b] text-[14px]">If the exact date is not know, estimate to the closest month and year</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[20px] items-end pl-[2px] relative shrink-0" data-name="Inputs">
                          <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0" data-name="Month">
                            <p className="[word-break:break-word] font-['Lato:Bold',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#231f20] text-[14px] whitespace-nowrap">Month</p>
                            <div className="bg-white content-stretch flex items-start pb-[8px] pt-[7px] px-[15px] relative rounded-[6px] shrink-0" data-name="Month input">
                              <div aria-hidden className="absolute border border-[#c2c3c4] border-solid inset-0 pointer-events-none rounded-[6px]" />
                              <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#67686b] text-[16px] whitespace-nowrap">MM</p>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0" data-name="Year">
                            <p className="[word-break:break-word] font-['Lato:Bold',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#231f20] text-[14px] whitespace-nowrap">Year</p>
                            <div className="bg-white content-stretch flex items-start pb-[8px] pt-[7px] px-[15px] relative rounded-[6px] shrink-0" data-name="Year input">
                              <div aria-hidden className="absolute border border-[#c2c3c4] border-solid inset-0 pointer-events-none rounded-[6px]" />
                              <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#67686b] text-[16px] whitespace-nowrap">YYYY</p>
                            </div>
                          </div>
                          <div className="bg-white relative rounded-[12px] shrink-0" data-name="Button (old)">
                            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                              <div className="content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[10px] relative size-full">
                                <div className="relative shrink-0 size-[20px]" data-name="Icon child (DEPRICATED)">
                                  <div className="flex flex-row items-center justify-center size-full">
                                    <div className="content-stretch flex items-center justify-center p-[0.5px] relative size-full">
                                      <div className="aspect-[18/18] flex-[1_0_0] min-w-px relative" data-name="Vector">
                                        <div className="absolute inset-[-2.31%]">
                                          <svg className="block size-full" fill="none" height="18.83" preserveAspectRatio="none" viewBox="0 0 19.83 18.83" width="19.83">
                                            <path d={svgPaths.p27e900} id="Vector" stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.83" />
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div aria-hidden className="absolute border border-[#231f20] border-solid inset-0 pointer-events-none rounded-[12px]" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-1 h-[231px] justify-self-stretch relative row-[1/span_3] shrink-0" data-name="Nested field separator">
                      <div className="content-stretch flex items-start pr-[20px] relative size-full">
                        <div className="bg-[#c2c3c4] h-full relative shrink-0 w-[5px]" />
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#ffdf67] drop-shadow-[0px_2px_2px_rgba(0,0,0,0.25)] relative rounded-[12px] shrink-0 w-full" data-name="Message">
                    <div aria-hidden className="absolute border border-[#bfa33b] border-solid inset-0 pointer-events-none rounded-[12px]" />
                    <div className="content-stretch flex flex-col gap-[10px] items-start p-[20px] relative size-full">
                      <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
                        <div className="relative shrink-0" data-name="Icon label">
                          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                            <div className="content-stretch flex gap-[8px] items-center justify-center relative size-full">
                              <div className="relative shrink-0 size-[20px]" data-name="Icons">
                                <div className="flex flex-row items-center justify-center size-full">
                                  <div className="content-stretch flex items-center justify-center p-px relative size-full">
                                    <div className="aspect-[19/19] flex-[1_0_0] min-w-px relative" data-name="Warning">
                                      <div className="flex flex-row items-center justify-center size-full">
                                        <div className="content-stretch flex items-center justify-center p-[0.5px] relative size-full">
                                          <div className="aspect-[18/18] flex-[1_0_0] min-w-px relative" data-name="Vector">
                                            <div className="absolute inset-[-2.31%]">
                                              <svg className="block size-full" fill="none" height="18.83" preserveAspectRatio="none" viewBox="0 0 17.83 18.83" width="17.83">
                                                <path d={svgPaths.p5a91010} id="Vector" stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.83" />
                                              </svg>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <p className="[word-break:break-word] font-['Lato:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#231f20] text-[18px] tracking-[0.18px] whitespace-nowrap">Sensitive question</p>
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
                        <div className="content-stretch flex flex-col items-start pl-[28px] relative size-full">
                          <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#231f20] text-[16px] w-full">{`The following question concerns sensitive subjects that involve self-harm. `}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-[274px]" data-name="Radio list">
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full">
                      <div className="relative shrink-0 w-full" data-name="Label">
                        <div className="content-stretch flex items-start relative size-full">
                          <div className="content-stretch flex items-start relative shrink-0 w-[108px]">
                            <div className="h-[8px] relative shrink-0 w-px" />
                            <div className="flex-[1_0_0] min-w-px relative" data-name="Label text">
                              <div className="flex flex-row items-end size-full">
                                <div className="content-stretch flex items-end pl-px relative size-full">
                                  <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">Have you ever experienced thoughts of self-harm or suicide?</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative shrink-0 w-full" data-name="Options">
                        <div className="content-stretch cursor-pointer flex flex-col gap-[10px] items-start pl-[2px] relative size-full">
                          <button className="relative shrink-0" data-name="Option 1">
                            <div className="content-stretch flex gap-[8px] items-start relative size-full">
                              <div className="content-stretch flex items-center pt-[2px] relative shrink-0">
                                <div className="relative shrink-0 size-[15px]">
                                  <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
                                    <g id="Group 109">
                                      <circle cx="7.5" cy="7.5" fill="white" id="Ellipse 3" r="6.5" stroke="#231F20" strokeWidth="2" />
                                      <circle cx="7.5" cy="7.5" fill="#F26A2C" id="Ellipse 4" r="2.5" stroke="#F26A2C" strokeWidth="2" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                              <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.25] not-italic relative shrink-0 text-[#231f20] text-[16px] text-left whitespace-nowrap">Yes</p>
                            </div>
                          </button>
                          <button className="relative shrink-0" data-name="Option 2">
                            <div className="content-stretch flex gap-[8px] items-start relative size-full">
                              <div className="h-[18px] relative shrink-0 w-[15px]">
                                <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 15 18" width="15">
                                  <g id="Frame 248">
                                    <circle cx="7.5" cy="10.5" fill="white" id="Ellipse 2" r="7" stroke="#67686B" />
                                  </g>
                                </svg>
                              </div>
                              <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.25] not-italic relative shrink-0 text-[#231f20] text-[16px] text-left whitespace-nowrap">No</p>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="gap-x-px gap-y-[20px] grid grid-cols-[__10px_minmax(0,1fr)] grid-rows-[repeat(1,minmax(0,1fr))] h-[80px] relative shrink-0 w-[809px]">
                    <div className="col-2 justify-self-stretch relative row-1 self-start shrink-0" data-name="Input field">
                      <div className="content-stretch flex flex-col gap-[6px] items-start px-[16px] relative size-full">
                        <div className="relative shrink-0 w-[108px]" data-name="Label">
                          <div className="content-stretch flex items-start relative size-full">
                            <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative">
                              <div className="h-[8px] relative shrink-0 w-px" />
                              <div className="flex-[1_0_0] min-w-px relative" data-name="Label text">
                                <div className="flex flex-row items-end size-full">
                                  <div className="content-stretch flex items-end pl-px relative size-full">
                                    <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">Please provide details</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="relative shrink-0 w-full" data-name="Input">
                          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[2px] py-[2px] relative size-full">
                              <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[6px]" data-name="Input">
                                <div className="overflow-clip rounded-[inherit] size-full">
                                  <div className="content-stretch flex items-start pb-[10px] pt-[9px] px-[15px] relative size-full">
                                    <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#67686b] text-[16px] whitespace-nowrap">When and what support did you receive</p>
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
                    <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Nested field separator">
                      <div className="content-stretch flex items-start pr-[20px] relative size-full">
                        <div className="bg-[#c2c3c4] h-full relative shrink-0 w-[5px]" />
                      </div>
                    </div>
                  </div>
                </>
              }
              className="relative shrink-0 w-[869px]"
              title={<p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[1.6] relative shrink-0 text-[14px] text-black tracking-[-0.5px] whitespace-nowrap">Depression, anxiety, stress or any other mental health condition</p>}
            />
            <Fieldset
              box={
                <>
                  <div aria-hidden className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[12px]" />
                  <div className="relative shrink-0" data-name="Radio list">
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full">
                      <div className="relative shrink-0 w-full" data-name="Label">
                        <div className="content-stretch flex items-start relative size-full">
                          <div className="content-stretch flex items-start relative shrink-0 w-[108px]">
                            <div className="flex-[1_0_0] min-w-px relative" data-name="Label text">
                              <div className="flex flex-row items-end size-full">
                                <div className="content-stretch flex items-end pl-px relative size-full">
                                  <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">Have you ever had a mole that has changed colour, size, appearance in general or bled?</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative shrink-0 w-full" data-name="Options">
                        <div className="content-stretch cursor-pointer flex flex-col gap-[10px] items-start pl-[2px] relative size-full">
                          <button className="relative shrink-0" data-name="Option 1">
                            <div className="content-stretch flex gap-[8px] items-start relative size-full">
                              <div className="content-stretch flex items-center pt-[2px] relative shrink-0">
                                <div className="relative shrink-0 size-[15px]">
                                  <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
                                    <g id="Group 109">
                                      <circle cx="7.5" cy="7.5" fill="white" id="Ellipse 3" r="6.5" stroke="#231F20" strokeWidth="2" />
                                      <circle cx="7.5" cy="7.5" fill="#F26A2C" id="Ellipse 4" r="2.5" stroke="#F26A2C" strokeWidth="2" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                              <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.25] not-italic relative shrink-0 text-[#231f20] text-[16px] text-left whitespace-nowrap">Yes</p>
                            </div>
                          </button>
                          <button className="relative shrink-0" data-name="Option 2">
                            <div className="content-stretch flex gap-[8px] items-start relative size-full">
                              <div className="h-[18px] relative shrink-0 w-[15px]">
                                <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 15 18" width="15">
                                  <g id="Frame 248">
                                    <circle cx="7.5" cy="10.5" fill="white" id="Ellipse 2" r="7" stroke="#67686B" />
                                  </g>
                                </svg>
                              </div>
                              <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.25] not-italic relative shrink-0 text-[#231f20] text-[16px] text-left whitespace-nowrap">No</p>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="gap-x-px gap-y-[20px] grid grid-cols-[__10px_minmax(0,1fr)] grid-rows-[_79px] relative shrink-0 w-[809px]">
                    <div className="col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Input field">
                      <div className="content-stretch flex flex-col gap-[6px] items-start pb-[10px] px-[16px] relative size-full">
                        <div className="relative shrink-0 w-[108px]" data-name="Label">
                          <div className="content-stretch flex items-start relative size-full">
                            <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative">
                              <div className="h-[8px] relative shrink-0 w-px" />
                              <div className="flex-[1_0_0] min-w-px relative" data-name="Label text">
                                <div className="flex flex-row items-end size-full">
                                  <div className="content-stretch flex items-end pl-px relative size-full">
                                    <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">Please provide details</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="relative shrink-0 w-full" data-name="Input">
                          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[2px] py-[2px] relative size-full">
                              <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[6px]" data-name="Input">
                                <div className="overflow-clip rounded-[inherit] size-full">
                                  <div className="content-stretch flex items-start pb-[10px] pt-[9px] px-[15px] relative size-full">
                                    <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[#757575] text-[16px] whitespace-nowrap">Please describe the changes to the mole</p>
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
                    <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Nested field separator">
                      <div className="content-stretch flex items-start pr-[20px] relative size-full">
                        <div className="bg-[#c2c3c4] h-full relative shrink-0 w-[5px]" />
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0" data-name="Radio list">
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full">
                      <div className="relative shrink-0 w-full" data-name="Label">
                        <div className="content-stretch flex items-start relative size-full">
                          <div className="content-stretch flex items-start relative shrink-0 w-[108px]">
                            <div className="h-[8px] relative shrink-0 w-px" />
                            <div className="flex-[1_0_0] min-w-px relative" data-name="Label text">
                              <div className="flex flex-row items-end size-full">
                                <div className="content-stretch flex items-end pl-px relative size-full">
                                  <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">Have you had a lump/growth or mole investigated or removed in the last 5 years?</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative shrink-0 w-full" data-name="Options">
                        <div className="content-stretch cursor-pointer flex flex-col gap-[10px] items-start pl-[2px] relative size-full">
                          <button className="relative shrink-0" data-name="Option 1">
                            <div className="content-stretch flex gap-[8px] items-start relative size-full">
                              <div className="content-stretch flex items-center pt-[2px] relative shrink-0">
                                <div className="relative shrink-0 size-[15px]">
                                  <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
                                    <g id="Group 109">
                                      <circle cx="7.5" cy="7.5" fill="white" id="Ellipse 3" r="6.5" stroke="#231F20" strokeWidth="2" />
                                      <circle cx="7.5" cy="7.5" fill="#F26A2C" id="Ellipse 4" r="2.5" stroke="#F26A2C" strokeWidth="2" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                              <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.25] not-italic relative shrink-0 text-[#231f20] text-[16px] text-left whitespace-nowrap">Yes</p>
                            </div>
                          </button>
                          <button className="relative shrink-0" data-name="Option 2">
                            <div className="content-stretch flex gap-[8px] items-start relative size-full">
                              <div className="h-[18px] relative shrink-0 w-[15px]">
                                <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 15 18" width="15">
                                  <g id="Frame 248">
                                    <circle cx="7.5" cy="10.5" fill="white" id="Ellipse 2" r="7" stroke="#67686B" />
                                  </g>
                                </svg>
                              </div>
                              <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.25] not-italic relative shrink-0 text-[#231f20] text-[16px] text-left whitespace-nowrap">No</p>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="gap-x-px gap-y-[20px] grid grid-cols-[__10px_minmax(0,1fr)] grid-rows-[__73px_73px] relative shrink-0 w-[809px]">
                    <div className="col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Input field">
                      <div className="content-stretch flex flex-col gap-[6px] items-start px-[16px] relative size-full">
                        <div className="relative shrink-0 w-[108px]" data-name="Label">
                          <div className="content-stretch flex items-start relative size-full">
                            <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative">
                              <div className="h-[8px] relative shrink-0 w-px" />
                              <div className="flex-[1_0_0] min-w-px relative" data-name="Label text">
                                <div className="flex flex-row items-end size-full">
                                  <div className="content-stretch flex items-end pl-px relative size-full">
                                    <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">Please provide details</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="relative shrink-0 w-full" data-name="Input">
                          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[2px] py-[2px] relative size-full">
                              <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[6px]" data-name="Input">
                                <div className="overflow-clip rounded-[inherit] size-full">
                                  <div className="content-stretch flex items-start pb-[10px] pt-[9px] px-[15px] relative size-full">
                                    <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#757575] text-[16px] whitespace-nowrap">When, where on body, what tests</p>
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
                    <div className="col-2 justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Input field">
                      <div className="content-stretch flex flex-col gap-[6px] items-start px-[16px] relative size-full">
                        <div className="relative shrink-0 w-[108px]" data-name="Label">
                          <div className="content-stretch flex items-start relative size-full">
                            <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative">
                              <div className="h-[8px] relative shrink-0 w-px" />
                              <div className="flex-[1_0_0] min-w-px relative" data-name="Label text">
                                <div className="flex flex-row items-end size-full">
                                  <div className="content-stretch flex items-end pl-px relative size-full">
                                    <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">What was the outcome?</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="relative shrink-0 w-full" data-name="Input">
                          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[2px] py-[2px] relative size-full">
                              <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[6px]" data-name="Input">
                                <div className="overflow-clip rounded-[inherit] size-full">
                                  <div className="content-stretch flex items-start pb-[10px] pt-[9px] px-[15px] relative size-full">
                                    <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#757575] text-[16px] whitespace-nowrap">e.g. benign, removed, monitoring</p>
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
                    <div className="col-1 justify-self-stretch relative row-[1/span_2] self-stretch shrink-0" data-name="Nested field separator">
                      <div className="content-stretch flex items-start pr-[20px] relative size-full">
                        <div className="bg-[#c2c3c4] h-full relative shrink-0 w-[5px]" />
                      </div>
                    </div>
                  </div>
                </>
              }
              className="relative shrink-0 w-[869px]"
              title={<p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[1.6] relative shrink-0 text-[14px] text-black tracking-[-0.5px] whitespace-nowrap">Lumps, bumps, moles</p>}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProtectionCaseContents1() {
  return <ProtectionCaseContents className="bg-white relative size-full" />;
}