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

export default function Fieldset1() {
  return (
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
      className="relative size-full"
      title={<p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[1.6] relative shrink-0 text-[14px] text-black tracking-[-0.5px] whitespace-nowrap">Raised blood pressure</p>}
    />
  );
}