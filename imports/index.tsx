import svgPaths from "./svg-lueed5bhxw";
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

function LabelText() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[7px] items-end pl-px relative shrink-0 whitespace-nowrap" data-name="Label text">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px]">Have you smoked, vaped or used any nicotine replacement products in the last 5 years?</p>
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.3] relative shrink-0 text-[#67686b] text-[12px]">Required</p>
    </div>
  );
}

function Options1() {
  return (
    <div className="content-stretch cursor-pointer flex flex-col gap-[9px] items-start relative shrink-0 w-full" data-name="Options">
      <button className="relative shrink-0 w-full" data-name="Option 1">
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
          <p className="[word-break:break-word] flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[1.25] min-w-px not-italic relative text-[#231f20] text-[16px] text-left">Yes, provide details</p>
        </div>
      </button>
      <button className="relative shrink-0 w-full" data-name="Option 2">
        <div className="content-stretch flex gap-[8px] items-start relative size-full">
          <div className="h-[18px] relative shrink-0 w-[15px]">
            <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 15 18" width="15">
              <g id="Frame 248">
                <circle cx="7.5" cy="10.5" fill="white" id="Ellipse 2" r="7" stroke="#67686B" />
              </g>
            </svg>
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[1.25] min-w-px not-italic relative text-[#231f20] text-[16px] text-left">No</p>
        </div>
      </button>
    </div>
  );
}

function Frame14() {
  return (
    <div className="h-[20px] relative shrink-0 w-[24px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 24 20" width="24">
        <g id="Frame 255">
          <line id="Line 38" stroke="#757575" strokeWidth="2" x2="24" y1="9" y2="9" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="h-[18px] relative shrink-0 w-[15px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 15 18" width="15">
        <g id="Frame 248">
          <circle cx="7.5" cy="10.5" fill="white" id="Ellipse 2" r="7" stroke="#67686B" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full">
      <Options1 />
      <Frame14 />
      <button className="cursor-pointer relative shrink-0" data-name="Option 3">
        <div className="content-stretch flex gap-[8px] items-start relative size-full">
          <Frame7 />
          <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.25] not-italic relative shrink-0 text-[#231f20] text-[16px] text-left whitespace-nowrap">Not selected</p>
        </div>
      </button>
    </div>
  );
}

function Options() {
  return (
    <div className="relative shrink-0 w-full" data-name="Options">
      <div className="content-stretch flex flex-col items-start pl-[2px] relative size-full">
        <Frame6 />
      </div>
    </div>
  );
}

function Box() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Box">
      <div aria-hidden className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[20px] items-start pb-[20px] pt-[30px] px-[20px] relative size-full">
        <div className="relative shrink-0 w-[108px]" data-name="Label">
          <div className="content-stretch flex items-start relative size-full">
            <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative">
              <div className="h-[8px] relative shrink-0 w-px" />
              <div className="flex-[1_0_0] min-w-px relative" data-name="Label text">
                <div className="flex flex-row items-end size-full">
                  <div className="content-stretch flex items-end pl-px relative size-full">
                    <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">How many of the following drinks do you have in a typical week?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[44px] relative shrink-0 w-[1471px]">
          <div className="absolute left-0 top-0 w-[1471px]" data-name="Hint text">
            <div className="content-stretch flex items-start relative size-full">
              <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#67686b] text-[14px] w-[809px]">A glass of wine is approximately 2 units, a pint of beer is approximately 2-3 units, and a measure of spirit is approximately 1 unit. Exceeding 14 units per week regularly is considered high risk by the NHS. Alcohol consumption may affect insurance premiums.</p>
            </div>
          </div>
        </div>
        <div className="relative shrink-0 w-[154px]" data-name="Number input">
          <div className="content-stretch flex flex-col gap-[6px] items-start relative size-full">
            <div className="h-[19px] relative shrink-0 w-full" data-name="Label">
              <div className="content-stretch flex items-start relative size-full">
                <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative">
                  <div className="h-[8px] relative shrink-0 w-px" />
                  <div className="flex-[1_0_0] min-w-px relative" data-name="Label text">
                    <div className="flex flex-row items-end size-full">
                      <div className="content-stretch flex items-end pl-px relative size-full">
                        <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">Glass of wine</p>
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
                                <path d="M18.415 0.415H0.415" id="Vector" stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.83" />
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
                                <path d={svgPaths.p2f5e1780} id="Vector" stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.83" />
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
        <div className="relative shrink-0 w-[254px]" data-name="Number input">
          <div className="content-stretch flex flex-col gap-[6px] items-start relative size-full">
            <div className="h-[19px] relative shrink-0 w-full" data-name="Label">
              <div className="content-stretch flex items-start relative size-full">
                <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative">
                  <div className="h-[8px] relative shrink-0 w-px">
                    <div className="absolute left-[-12px] size-[9px] top-0" data-name="Required icon">
                      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex items-center justify-center relative size-full" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-[1_0_0] min-w-px relative" data-name="Label text">
                    <div className="flex flex-row items-end size-full">
                      <div className="content-stretch flex items-end pl-px relative size-full">
                        <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">Pint of beer or cider</p>
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
                                <path d="M18.415 0.415H0.415" id="Vector" stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.83" />
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
                                <path d={svgPaths.p2f5e1780} id="Vector" stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.83" />
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
        <div className="relative shrink-0 w-[154px]" data-name="Number input">
          <div className="content-stretch flex flex-col gap-[6px] items-start relative size-full">
            <div className="h-[19px] relative shrink-0 w-full" data-name="Label">
              <div className="content-stretch flex items-start relative size-full">
                <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative">
                  <div className="h-[8px] relative shrink-0 w-px">
                    <div className="absolute left-[-12px] size-[9px] top-0" data-name="Required icon">
                      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex items-center justify-center relative size-full" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-[1_0_0] min-w-px relative" data-name="Label text">
                    <div className="flex flex-row items-end size-full">
                      <div className="content-stretch flex items-end pl-px relative size-full">
                        <p className="[word-break:break-word] font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">Measure of spirit</p>
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
                                <path d="M18.415 0.415H0.415" id="Vector" stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.83" />
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
                                <path d={svgPaths.p2f5e1780} id="Vector" stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.83" />
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
        <div className="relative shrink-0 w-[154px]" data-name="Number input">
          <div className="content-stretch flex flex-col gap-[6px] items-start relative size-full">
            <div className="h-[19px] relative shrink-0 w-full" data-name="Label">
              <div className="content-stretch flex items-start relative size-full">
                <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative">
                  <div className="h-[8px] relative shrink-0 w-px" />
                  <div className="flex-[1_0_0] min-w-px relative" data-name="Label text">
                    <div className="flex flex-row items-end size-full">
                      <div className="content-stretch flex items-end pl-px relative size-full">
                        <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">Other alcoholic drink</p>
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
                                <path d="M18.415 0.415H0.415" id="Vector" stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.83" />
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
                                <path d={svgPaths.p2f5e1780} id="Vector" stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.83" />
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
      </div>
    </div>
  );
}

function Frame1() {
  return <div className="h-[8px] relative shrink-0 w-px" />;
}

function LabelText1() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Label text">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end pl-px relative size-full">
          <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">During the last 10 years have you used any of the following?</p>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative">
      <Frame1 />
      <LabelText1 />
    </div>
  );
}

function HelpText() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Help text">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[1.55] min-w-px not-italic relative text-[#231f20] text-[14px]">Recreational drug use may significantly affect insurance premiums and eligibility.</p>
    </div>
  );
}

function OptionsRequired() {
  return (
    <div className="relative shrink-0 w-full" data-name="Options (required)">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch cursor-pointer flex flex-col gap-[9px] items-start pl-[2px] relative size-full">
          <button className="relative shrink-0" data-name="Checkbox option">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[8px] items-center relative size-full">
                <div className="content-stretch flex items-start pt-[2px] relative shrink-0" data-name="Checkbox">
                  <div className="relative shrink-0 size-[15px]">
                    <div className="absolute bg-white border border-[#67686b] border-solid left-0 size-[15px] top-0" />
                  </div>
                </div>
                <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#231f20] text-[16px] text-left whitespace-nowrap">Cocaine, ecstasy or amphetamines</p>
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
                <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#231f20] text-[16px] text-left whitespace-nowrap">Heroin or methadone</p>
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
                <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#231f20] text-[16px] text-left whitespace-nowrap">Anabolic steroids not prescribed by a doctor</p>
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
                <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#231f20] text-[16px] text-left whitespace-nowrap">Cannabis or any other recreational drugs</p>
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
                <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#231f20] text-[16px] text-left whitespace-nowrap">Other</p>
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
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="relative shrink-0 w-[849px]" data-name="Checkbox list">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full">
          <div className="relative shrink-0 w-full" data-name="Label">
            <div className="content-stretch flex items-start relative size-full">
              <Frame />
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="Help and error text">
            <div className="flex flex-col items-end size-full">
              <div className="content-stretch flex flex-col gap-[5px] items-end pb-[5px] pl-px relative size-full">
                <HelpText />
              </div>
            </div>
          </div>
          <OptionsRequired />
        </div>
      </div>
    </div>
  );
}

function LabelText2() {
  return (
    <div className="content-stretch flex gap-[7px] items-end pl-px relative shrink-0" data-name="Label text">
      <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">Are you still using this?</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="h-[18px] relative shrink-0 w-[15px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 15 18" width="15">
        <g id="Frame 248">
          <circle cx="7.5" cy="10.5" fill="white" id="Ellipse 2" r="7" stroke="#67686B" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="relative shrink-0 size-[15px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
        <g id="Group 109">
          <circle cx="7.5" cy="7.5" fill="white" id="Ellipse 3" r="6.5" stroke="#231F20" strokeWidth="2" />
          <circle cx="7.5" cy="7.5" fill="#F26A2C" id="Ellipse 4" r="2.5" stroke="#F26A2C" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center pt-[2px] relative shrink-0">
      <Group />
    </div>
  );
}

function Options2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Options2">
      <div className="content-stretch cursor-pointer flex flex-col gap-[9px] items-start pl-[2px] relative size-full">
        <button className="relative shrink-0" data-name="Option 1">
          <div className="content-stretch flex gap-[8px] items-start relative size-full">
            <Frame8 />
            <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.25] not-italic relative shrink-0 text-[#231f20] text-[16px] text-left whitespace-nowrap">Yes</p>
          </div>
        </button>
        <button className="relative shrink-0" data-name="Option 2">
          <div className="content-stretch flex gap-[8px] items-start relative size-full">
            <Frame9 />
            <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.25] not-italic relative shrink-0 text-[#231f20] text-[16px] text-left whitespace-nowrap">No</p>
          </div>
        </button>
      </div>
    </div>
  );
}

function Frame3() {
  return <div className="h-[8px] relative shrink-0 w-px" />;
}

function LabelText3() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Label text">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end pl-px relative size-full">
          <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">{`When did you last use this? `}</p>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative">
      <Frame3 />
      <LabelText3 />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[6px]" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start pb-[10px] pt-[9px] px-[15px] relative size-full">
          <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#757575] text-[16px] whitespace-nowrap">Select timeframe</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#67686b] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Icon() {
  return <div className="relative shrink-0 size-[15px]" data-name="Icon" />;
}

function Frame5() {
  return <div className="h-[8px] relative shrink-0 w-px" />;
}

function LabelText4() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Label text">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end pl-px relative size-full">
          <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">How frequently are you using this?</p>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative">
      <Frame5 />
      <LabelText4 />
    </div>
  );
}

function SelectInner() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[15px] items-center min-w-px relative" data-name="Select inner">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[1.55] min-w-px not-italic relative text-[#757575] text-[16px]">Select frequency</p>
      <IconChildChevronDownSmallNo className="relative shrink-0 w-[15px]" />
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[6px]" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[15px] py-[7px] relative size-full">
          <SelectInner />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#67686b] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Icon1() {
  return <div className="relative shrink-0 size-[15px]" data-name="Icon" />;
}

function Frame18() {
  return (
    <div className="gap-x-px gap-y-[20px] grid grid-cols-[__10px_minmax(0,1fr)] grid-rows-[repeat(3,fit-content(100%))] relative shrink-0 w-[809px]">
      <div className="col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Input field">
        <div className="content-stretch flex flex-col gap-[6px] items-start px-[16px] relative size-full">
          <div className="relative shrink-0 w-[108px]" data-name="Label">
            <div className="content-stretch flex items-start relative size-full">
              <Frame2 />
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="Input">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center pl-[2px] py-[2px] relative size-full">
                <Input />
                <Icon />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-2 justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Input field">
        <div className="content-stretch flex flex-col gap-[6px] items-start px-[16px] relative size-full">
          <div className="relative shrink-0 w-[108px]" data-name="Label">
            <div className="content-stretch flex items-start relative size-full">
              <Frame4 />
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="Select">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center pl-[2px] py-[2px] relative size-full">
                <Input1 />
                <Icon1 />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-1 justify-self-stretch relative row-[1/span_3] self-stretch shrink-0" data-name="Nested field separator">
        <div className="content-stretch flex items-start pr-[20px] relative size-full">
          <div className="bg-[#c2c3c4] h-full relative shrink-0 w-[5px]" />
        </div>
      </div>
    </div>
  );
}

function LabelText5() {
  return (
    <div className="content-stretch flex gap-[7px] items-end pl-px relative shrink-0" data-name="Label text">
      <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">If Heroin, did you take this intravenously?</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="relative shrink-0 size-[15px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
        <g id="Group 109">
          <circle cx="7.5" cy="7.5" fill="white" id="Ellipse 3" r="6.5" stroke="#231F20" strokeWidth="2" />
          <circle cx="7.5" cy="7.5" fill="#F26A2C" id="Ellipse 4" r="2.5" stroke="#F26A2C" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center pt-[2px] relative shrink-0">
      <Group1 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="h-[18px] relative shrink-0 w-[15px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 15 18" width="15">
        <g id="Frame 248">
          <circle cx="7.5" cy="10.5" fill="white" id="Ellipse 2" r="7" stroke="#67686B" />
        </g>
      </svg>
    </div>
  );
}

function Options3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Options2">
      <div className="content-stretch cursor-pointer flex flex-col gap-[9px] items-start pl-[2px] relative size-full">
        <button className="relative shrink-0" data-name="Option 1">
          <div className="content-stretch flex gap-[8px] items-start relative size-full">
            <Frame10 />
            <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.25] not-italic relative shrink-0 text-[#231f20] text-[16px] text-left whitespace-nowrap">Yes</p>
          </div>
        </button>
        <button className="relative shrink-0" data-name="Option 2">
          <div className="content-stretch flex gap-[8px] items-start relative size-full">
            <Frame11 />
            <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.25] not-italic relative shrink-0 text-[#231f20] text-[16px] text-left whitespace-nowrap">No</p>
          </div>
        </button>
      </div>
    </div>
  );
}

function LabelText6() {
  return (
    <div className="content-stretch flex gap-[7px] items-end pl-px relative shrink-0" data-name="Label text">
      <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">Have you ever suffered with any mental health issues?</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="relative shrink-0 size-[15px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
        <g id="Group 109">
          <circle cx="7.5" cy="7.5" fill="white" id="Ellipse 3" r="6.5" stroke="#231F20" strokeWidth="2" />
          <circle cx="7.5" cy="7.5" fill="#F26A2C" id="Ellipse 4" r="2.5" stroke="#F26A2C" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center pt-[2px] relative shrink-0">
      <Group2 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="h-[18px] relative shrink-0 w-[15px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 15 18" width="15">
        <g id="Frame 248">
          <circle cx="7.5" cy="10.5" fill="white" id="Ellipse 2" r="7" stroke="#67686B" />
        </g>
      </svg>
    </div>
  );
}

function Options4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Options2">
      <div className="content-stretch cursor-pointer flex flex-col gap-[9px] items-start pl-[2px] relative size-full">
        <button className="relative shrink-0" data-name="Option 1">
          <div className="content-stretch flex gap-[8px] items-start relative size-full">
            <Frame12 />
            <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.25] not-italic relative shrink-0 text-[#231f20] text-[16px] text-left whitespace-nowrap">Yes</p>
          </div>
        </button>
        <button className="relative shrink-0" data-name="Option 2">
          <div className="content-stretch flex gap-[8px] items-start relative size-full">
            <Frame13 />
            <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.25] not-italic relative shrink-0 text-[#231f20] text-[16px] text-left whitespace-nowrap">No</p>
          </div>
        </button>
      </div>
    </div>
  );
}

function LabelText7() {
  return (
    <div className="content-stretch flex gap-[7px] items-end pl-px relative shrink-0" data-name="Label text">
      <div className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">
        <p className="leading-[1.2] mb-0 whitespace-pre">{`Have you been prescribed any medication by your GP or other medical practitioner to help you `}</p>
        <p className="leading-[1.2] whitespace-pre">stop taking this drug i.e Methadone</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="h-[18px] relative shrink-0 w-[15px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 15 18" width="15">
        <g id="Frame 248">
          <circle cx="7.5" cy="10.5" fill="white" id="Ellipse 2" r="7" stroke="#67686B" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="relative shrink-0 size-[15px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
        <g id="Group 109">
          <circle cx="7.5" cy="7.5" fill="white" id="Ellipse 3" r="6.5" stroke="#231F20" strokeWidth="2" />
          <circle cx="7.5" cy="7.5" fill="#F26A2C" id="Ellipse 4" r="2.5" stroke="#F26A2C" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-center pt-[2px] relative shrink-0">
      <Group3 />
    </div>
  );
}

function Options5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Options2">
      <div className="content-stretch cursor-pointer flex flex-col gap-[9px] items-start pl-[2px] relative size-full">
        <button className="relative shrink-0" data-name="Option 1">
          <div className="content-stretch flex gap-[8px] items-start relative size-full">
            <Frame15 />
            <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.25] not-italic relative shrink-0 text-[#231f20] text-[16px] text-left whitespace-nowrap">Yes</p>
          </div>
        </button>
        <button className="relative shrink-0" data-name="Option 2">
          <div className="content-stretch flex gap-[8px] items-start relative size-full">
            <Frame16 />
            <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.25] not-italic relative shrink-0 text-[#231f20] text-[16px] text-left whitespace-nowrap">No</p>
          </div>
        </button>
      </div>
    </div>
  );
}

function Box1() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Box">
      <div aria-hidden className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[20px] items-start pb-[20px] pt-[30px] px-[20px] relative size-full">
        <div className="relative shrink-0 w-full" data-name="Radio list">
          <div className="content-stretch flex flex-col gap-[6px] items-start relative size-full">
            <div className="relative shrink-0 w-full" data-name="Label">
              <div className="content-stretch flex items-start relative size-full">
                <LabelText2 />
              </div>
            </div>
            <Options2 />
          </div>
        </div>
        <Frame18 />
        <div className="relative shrink-0 w-full" data-name="Radio list">
          <div className="content-stretch flex flex-col gap-[6px] items-start relative size-full">
            <div className="relative shrink-0 w-full" data-name="Label">
              <div className="content-stretch flex items-start relative size-full">
                <LabelText5 />
              </div>
            </div>
            <Options3 />
          </div>
        </div>
        <div className="relative shrink-0 w-full" data-name="Radio list">
          <div className="content-stretch flex flex-col gap-[6px] items-start relative size-full">
            <div className="relative shrink-0 w-full" data-name="Label">
              <div className="content-stretch flex items-start relative size-full">
                <LabelText6 />
              </div>
            </div>
            <Options4 />
          </div>
        </div>
        <div className="relative shrink-0 w-full" data-name="Radio list">
          <div className="content-stretch flex flex-col gap-[6px] items-start relative size-full">
            <div className="relative shrink-0 w-full" data-name="Label">
              <div className="content-stretch flex items-start relative size-full">
                <LabelText7 />
              </div>
            </div>
            <Options5 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-[14px] px-[5px] py-[2px] top-[-3px]" data-name="Title">
      <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[1.6] relative shrink-0 text-[14px] text-black tracking-[-0.5px] whitespace-nowrap">Heroin or methadone</p>
    </div>
  );
}

function Box2() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Box">
      <div aria-hidden className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[30px] items-start pb-[20px] pt-[30px] px-[20px] relative size-full">
        <div className="relative shrink-0 w-full" data-name="Date field">
          <div className="content-stretch flex flex-col gap-[5px] items-start relative size-full">
            <div className="relative shrink-0 w-[108px]" data-name="Label">
              <div className="content-stretch flex items-start relative size-full">
                <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative">
                  <div className="h-[8px] relative shrink-0 w-px" />
                  <div className="flex-[1_0_0] min-w-px relative" data-name="Label text">
                    <div className="flex flex-row items-end size-full">
                      <div className="content-stretch flex items-end pl-px relative size-full">
                        <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">When were you first diagnosed?</p>
                      </div>
                    </div>
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
                    <div className="relative shrink-0 size-[19px]" data-name="Icon child (DEPRICATED)">
                      <div className="flex flex-row items-center justify-center size-full">
                        <div className="content-stretch flex items-center justify-center p-[0.5px] relative size-full">
                          <div className="aspect-[18/18] flex-[1_0_0] min-w-px relative" data-name="Vector">
                            <div className="absolute inset-[-2.31%]">
                              <svg className="block size-full" fill="none" height="18.83" preserveAspectRatio="none" viewBox="0 0 18.83 18.83" width="18.83">
                                <path d={svgPaths.p2ddbe00} id="Vector" stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.83" />
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
        <div className="relative shrink-0 w-full" data-name="Date field">
          <div className="content-stretch flex flex-col gap-[5px] items-start relative size-full">
            <div className="relative shrink-0 w-[108px]" data-name="Label">
              <div className="content-stretch flex items-start relative size-full">
                <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative">
                  <div className="h-[8px] relative shrink-0 w-px" />
                  <div className="flex-[1_0_0] min-w-px relative" data-name="Label text">
                    <div className="flex flex-row items-end size-full">
                      <div className="content-stretch flex items-end pl-px relative size-full">
                        <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">When was your last episode?</p>
                      </div>
                    </div>
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
                    <div className="relative shrink-0 size-[19px]" data-name="Icon child (DEPRICATED)">
                      <div className="flex flex-row items-center justify-center size-full">
                        <div className="content-stretch flex items-center justify-center p-[0.5px] relative size-full">
                          <div className="aspect-[18/18] flex-[1_0_0] min-w-px relative" data-name="Vector">
                            <div className="absolute inset-[-2.31%]">
                              <svg className="block size-full" fill="none" height="18.83" preserveAspectRatio="none" viewBox="0 0 18.83 18.83" width="18.83">
                                <path d={svgPaths.p2ddbe00} id="Vector" stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.83" />
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
        <div className="relative shrink-0 w-full" data-name="Input field">
          <div className="content-stretch flex flex-col gap-[6px] items-start relative size-full">
            <div className="relative shrink-0 w-[108px]" data-name="Label">
              <div className="content-stretch flex items-start relative size-full">
                <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative">
                  <div className="h-[8px] relative shrink-0 w-px" />
                  <div className="flex-[1_0_0] min-w-px relative" data-name="Label text">
                    <div className="flex flex-row items-end size-full">
                      <div className="content-stretch flex items-end pl-px relative size-full">
                        <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">What treatment are you taking?</p>
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
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[1.55] min-w-px not-italic relative text-[#67686b] text-[14px]">For some mental health conditions the treatment could be more serious such as anti-psychotics, or mood stabilisers such as Lithium</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-[425px]" data-name="Input">
              <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center pl-[2px] py-[2px] relative size-full">
                  <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[6px]" data-name="Input">
                    <div className="overflow-clip rounded-[inherit] size-full">
                      <div className="content-stretch flex items-start pb-[10px] pt-[9px] px-[15px] relative size-full">
                        <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#757575] text-[16px] whitespace-nowrap">Add treatment details e.g Lithium</p>
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
        <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0">
          <div className="relative shrink-0" data-name="Radio list">
            <div className="content-stretch flex flex-col gap-[6px] items-start relative size-full">
              <div className="relative shrink-0 w-full" data-name="Label">
                <div className="content-stretch flex items-start relative size-full">
                  <div className="content-stretch flex gap-[7px] items-end pl-px relative shrink-0" data-name="Label text">
                    <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">Was the condition brought on by a life event?</p>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 w-full" data-name="Help and error text">
                <div className="flex flex-col items-end size-full">
                  <div className="content-stretch flex flex-col gap-[5px] items-end pb-[5px] pl-px relative size-full">
                    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Help text">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[1.55] min-w-px not-italic relative text-[#67686b] text-[14px]">Depression, anxiety, stress can all be brought on by a significant event such as bereavement, work issues, martial breakdown.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 w-full" data-name="Options2">
                <div className="content-stretch cursor-pointer flex flex-col gap-[9px] items-start pl-[2px] relative size-full">
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
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[809px]">
            <div className="flex flex-row items-center self-stretch">
              <div className="h-full relative shrink-0 w-[10px]" data-name="Nested field separator">
                <div className="content-stretch flex items-start pr-[20px] relative size-full">
                  <div className="bg-[#c2c3c4] h-full relative shrink-0 w-[5px]" />
                </div>
              </div>
            </div>
            <div className="flex-[1_0_0] min-w-px relative" data-name="Input field">
              <div className="content-stretch flex flex-col gap-[6px] items-start relative size-full">
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
                            <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#757575] text-[16px] whitespace-nowrap">Enter life event details</p>
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
        </div>
        <div className="relative shrink-0 w-full" data-name="Radio list">
          <div className="content-stretch flex flex-col gap-[6px] items-start relative size-full">
            <div className="relative shrink-0 w-full" data-name="Label">
              <div className="content-stretch flex items-start relative size-full">
                <div className="content-stretch flex gap-[7px] items-end pl-px relative shrink-0" data-name="Label text">
                  <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">Have you had time off work due to your mental health?</p>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full" data-name="Options2">
              <div className="content-stretch cursor-pointer flex flex-col gap-[9px] items-start pl-[2px] relative size-full">
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
        <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
          <div className="relative self-stretch shrink-0 w-[10px]" data-name="Nested field separator">
            <div className="content-stretch flex items-start pr-[20px] relative size-full">
              <div className="bg-[#c2c3c4] h-full relative shrink-0 w-[5px]" />
            </div>
          </div>
          <div className="h-[113px] relative shrink-0 w-[809px]" data-name="Date range">
            <div className="content-stretch flex gap-[30px] items-start relative size-full">
              <div className="relative shrink-0" data-name="Date field">
                <div className="content-stretch flex flex-col gap-[5px] items-start relative size-full">
                  <div className="relative shrink-0" data-name="Label">
                    <div className="content-stretch flex items-start relative size-full">
                      <div className="content-stretch flex gap-[7px] items-end pl-px relative shrink-0" data-name="Label text">
                        <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">Start date</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0" data-name="Help and error text">
                    <div className="flex flex-col items-end size-full">
                      <div className="content-stretch flex flex-col gap-[5px] items-end pb-[5px] pl-px relative size-full">
                        <div className="content-stretch flex items-start relative shrink-0 w-[296px]" data-name="Help text">
                          <p className="[word-break:break-word] flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-none min-w-px not-italic relative text-[#67686b] text-[12px]">Add a date estimate for when you were off work</p>
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
                  </div>
                </div>
              </div>
              <div className="flex h-full items-center justify-center relative shrink-0 w-0" style={{ containerType: "size" }}>
                <div className="flex-none rotate-90 w-[100cqh]">
                  <div className="h-0 relative w-full">
                    <div className="absolute inset-[-1px_0_0_0]">
                      <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 91 1" width="91">
                        <line id="Line 1" stroke="#C2C3C4" x2="91" y1="0.5" y2="0.5" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0" data-name="Date field">
                <div className="content-stretch flex flex-col gap-[5px] items-start relative size-full">
                  <div className="relative shrink-0" data-name="Label">
                    <div className="content-stretch flex items-start relative size-full">
                      <div className="content-stretch flex gap-[7px] items-end pl-px relative shrink-0" data-name="Label text">
                        <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">End date</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-full" data-name="Help and error text">
                    <div className="flex flex-col items-end size-full">
                      <div className="content-stretch flex flex-col gap-[5px] items-end pb-[5px] pl-px relative size-full">
                        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Help text">
                          <p className="[word-break:break-word] flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-none min-w-px not-italic relative text-[#67686b] text-[12px]">Add a date estimate for when you returned to work</p>
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
                                    <svg className="block size-full" fill="none" height="18.83" preserveAspectRatio="none" viewBox="0 0 18.83 18.83" width="18.83">
                                      <path d={svgPaths.p2ddbe00} id="Vector" stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.83" />
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
                                    <svg className="block size-full" fill="none" height="18.83" preserveAspectRatio="none" viewBox="0 0 18.83 18.83" width="18.83">
                                      <path d={svgPaths.p2e18a880} id="Vector" stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.83" />
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
        <div className="relative shrink-0 w-full" data-name="Radio list">
          <div className="content-stretch flex flex-col gap-[6px] items-start relative size-full">
            <div className="relative shrink-0 w-full" data-name="Label">
              <div className="content-stretch flex items-start relative size-full">
                <div className="content-stretch flex gap-[7px] items-end pl-px relative shrink-0" data-name="Label text">
                  <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">Have you ever had thoughts of self harm or tried to take your own life?</p>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full" data-name="Options2">
              <div className="content-stretch cursor-pointer flex flex-col gap-[9px] items-start pl-[2px] relative size-full">
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
                          <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">When did you have these thoughts?</p>
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
                            <p className="[word-break:break-word] flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[1.55] min-w-px not-italic relative text-[#757575] text-[16px]">Enter timeframe</p>
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
          <div className="col-2 justify-self-stretch relative row-2 self-stretch shrink-0" data-name="Input field">
            <div className="content-stretch flex flex-col gap-[6px] items-start px-[16px] relative size-full">
              <div className="relative shrink-0 w-[108px]" data-name="Label">
                <div className="content-stretch flex items-start relative size-full">
                  <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative">
                    <div className="h-[8px] relative shrink-0 w-px" />
                    <div className="flex-[1_0_0] min-w-px relative" data-name="Label text">
                      <div className="flex flex-row items-end size-full">
                        <div className="content-stretch flex items-end pl-px relative size-full">
                          <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">Were these fleeting thoughts, or was there real intent behind them?</p>
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
                          <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#757575] text-[16px] whitespace-nowrap">Enter details</p>
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
          <div className="col-2 justify-self-stretch relative row-3 self-stretch shrink-0" data-name="Input field">
            <div className="content-stretch flex flex-col gap-[6px] items-start px-[16px] relative size-full">
              <div className="relative shrink-0" data-name="Label">
                <div className="content-stretch flex items-start relative size-full">
                  <div className="content-stretch flex items-start relative shrink-0 w-[108px]">
                    <div className="h-[8px] relative shrink-0 w-px" />
                    <div className="flex-[1_0_0] min-w-px relative" data-name="Label text">
                      <div className="flex flex-row items-end size-full">
                        <div className="content-stretch flex items-end pl-px relative size-full">
                          <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">Was this a single incident or have you acted on these before?</p>
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
                          <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#757575] text-[16px] whitespace-nowrap">Enter details</p>
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
          <div className="col-1 justify-self-stretch relative row-[1/span_3] self-stretch shrink-0" data-name="Nested field separator">
            <div className="content-stretch flex items-start pr-[20px] relative size-full">
              <div className="bg-[#c2c3c4] h-full relative shrink-0 w-[5px]" />
            </div>
          </div>
        </div>
        <div className="relative shrink-0 w-full" data-name="Radio list">
          <div className="content-stretch flex flex-col gap-[6px] items-start relative size-full">
            <div className="relative shrink-0 w-full" data-name="Label">
              <div className="content-stretch flex items-start relative size-full">
                <div className="content-stretch flex gap-[7px] items-end pl-px relative shrink-0" data-name="Label text">
                  <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">Have you ever stopped taking your treatment without consulting your GP?</p>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full" data-name="Options2">
              <div className="content-stretch cursor-pointer flex flex-col gap-[9px] items-start pl-[2px] relative size-full">
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
        <div className="relative shrink-0 w-full" data-name="Radio list">
          <div className="content-stretch flex flex-col gap-[6px] items-start relative size-full">
            <div className="relative shrink-0 w-full" data-name="Label">
              <div className="content-stretch flex items-start relative size-full">
                <div className="content-stretch flex gap-[7px] items-end pl-px relative shrink-0" data-name="Label text">
                  <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">Have you ever stopped taking your treatment without consulting your GP?</p>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full" data-name="Options2">
              <div className="content-stretch cursor-pointer flex flex-col gap-[9px] items-start pl-[2px] relative size-full">
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
                        <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">Who are you seeing for support with your mental health?</p>
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
                        <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#67686b] text-[16px] whitespace-nowrap">E.g GP, Practice Nurse, Counsellor, CBT, Psychologist, or Psychiatrist</p>
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
    </div>
  );
}

function Title1() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-[14px] px-[5px] py-[2px] top-[-3px]" data-name="Title">
      <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[1.6] relative shrink-0 text-[14px] text-black tracking-[-0.5px] whitespace-nowrap">Mental health</p>
    </div>
  );
}

function ProtectionCaseContentsHealthAndLifestyleDetails() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[30px] items-start p-[24px] relative rounded-[12px] shrink-0 w-[897px]" data-name="Protection case contents/Health and lifestyle details">
      <div aria-hidden className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[1.3] min-w-full not-italic relative shrink-0 text-[#231f20] text-[24px] tracking-[-0.5px] w-[min-content]">Lifestyle</p>
      <div className="relative shrink-0" data-name="Nullable radio group">
        <div className="content-stretch flex flex-col gap-[6px] items-start relative size-full">
          <div className="relative shrink-0" data-name="Label">
            <div className="content-stretch flex items-start relative size-full">
              <LabelText />
            </div>
          </div>
          <Options />
        </div>
      </div>
      <Fieldset
        box={
          <>
            <div aria-hidden className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[12px]" />
            <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-full">
              <div className="relative shrink-0 w-full" data-name="Input field">
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
                              <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">{`When was the last time you used these products? `}</p>
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
                          <div className="[word-break:break-word] flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[0] min-w-px not-italic relative text-[#67686b] text-[14px] whitespace-pre-wrap">
                            <p className="leading-[1.55] mb-0">{`Smoking and nicotine use significantly affects insurance premiums. `}</p>
                            <p className="leading-[1.55]">Being smoke-free for 12+ months typically qualifies for better rates.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-[425px]" data-name="Select">
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
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <div className="relative shrink-0" data-name="Checkbox list">
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
                                <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">What products have you used? (select all that apply)</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch cursor-pointer flex flex-col gap-[9px] items-start overflow-clip pl-[2px] relative shrink-0" data-name="Options (required)">
                      <button className="relative shrink-0" data-name="Option 1a">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex gap-[8px] items-center relative size-full">
                            <div className="content-stretch flex items-start pt-[2px] relative shrink-0" data-name="Checkbox">
                              <div className="relative shrink-0 size-[15px]">
                                <div className="absolute bg-white border border-[#67686b] border-solid left-0 size-[15px] top-0" />
                              </div>
                            </div>
                            <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#231f20] text-[16px] text-left whitespace-nowrap">Cigarettes</p>
                          </div>
                        </div>
                      </button>
                      <button className="relative shrink-0" data-name="Option 1a">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex gap-[8px] items-center relative size-full">
                            <div className="content-stretch flex items-start pt-[2px] relative shrink-0" data-name="Checkbox">
                              <div className="relative shrink-0 size-[15px]">
                                <div className="absolute bg-white border border-[#67686b] border-solid left-0 size-[15px] top-0" />
                              </div>
                            </div>
                            <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#231f20] text-[16px] text-left whitespace-nowrap">Vape without nicotine</p>
                          </div>
                        </div>
                      </button>
                      <button className="relative shrink-0" data-name="Option 1a">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex gap-[8px] items-center relative size-full">
                            <div className="content-stretch flex items-start pt-[2px] relative shrink-0" data-name="Checkbox">
                              <div className="relative shrink-0 size-[15px]">
                                <div className="absolute bg-white border border-[#67686b] border-solid left-0 size-[15px] top-0" />
                              </div>
                            </div>
                            <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#231f20] text-[16px] text-left whitespace-nowrap">Vape with nicotine</p>
                          </div>
                        </div>
                      </button>
                      <button className="relative shrink-0" data-name="Option 1a">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex gap-[8px] items-center relative size-full">
                            <div className="content-stretch flex items-start pt-[2px] relative shrink-0" data-name="Checkbox">
                              <div className="relative shrink-0 size-[15px]">
                                <div className="absolute bg-white border border-[#67686b] border-solid left-0 size-[15px] top-0" />
                              </div>
                            </div>
                            <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#231f20] text-[16px] text-left whitespace-nowrap">E-cigarettes</p>
                          </div>
                        </div>
                      </button>
                      <button className="relative shrink-0" data-name="Option 1a">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex gap-[8px] items-center relative size-full">
                            <div className="content-stretch flex items-start pt-[2px] relative shrink-0" data-name="Checkbox">
                              <div className="relative shrink-0 size-[15px]">
                                <div className="absolute bg-white border border-[#67686b] border-solid left-0 size-[15px] top-0" />
                              </div>
                            </div>
                            <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#231f20] text-[16px] text-left whitespace-nowrap">Cigars</p>
                          </div>
                        </div>
                      </button>
                      <button className="relative shrink-0" data-name="Option 1a">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex gap-[8px] items-center relative size-full">
                            <div className="content-stretch flex items-start pt-[2px] relative shrink-0" data-name="Checkbox">
                              <div className="relative shrink-0 size-[15px]">
                                <div className="absolute bg-white border border-[#67686b] border-solid left-0 size-[15px] top-0" />
                              </div>
                            </div>
                            <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#231f20] text-[16px] text-left whitespace-nowrap">Pipe</p>
                          </div>
                        </div>
                      </button>
                      <button className="relative shrink-0" data-name="Option 1a">
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex gap-[8px] items-center relative size-full">
                            <div className="content-stretch flex items-start pt-[2px] relative shrink-0" data-name="Checkbox">
                              <div className="relative shrink-0 size-[15px]">
                                <div className="absolute bg-white border border-[#67686b] border-solid left-0 size-[15px] top-0" />
                              </div>
                            </div>
                            <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#231f20] text-[16px] text-left whitespace-nowrap">Nicotine replacement therapy (patches, gum, etc)</p>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 w-full" data-name="Number input">
                <div className="content-stretch flex flex-col gap-[6px] items-start relative size-full">
                  <div className="relative shrink-0 w-full" data-name="Label">
                    <div className="content-stretch flex items-start relative size-full">
                      <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative">
                        <div className="flex-[1_0_0] min-w-px relative" data-name="Label text">
                          <div className="flex flex-row items-end size-full">
                            <div className="content-stretch flex items-end pl-px relative size-full">
                              <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">On average, how many cigarettes (or equivalent) per day?</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-full" data-name="Help and error text">
                    <div className="content-stretch flex flex-col gap-[5px] items-start pb-[5px] pl-px relative size-full">
                      <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Help text">
                        <p className="[word-break:break-word] flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[1.55] min-w-px not-italic relative text-[#67686b] text-[14px]">For vaping, estimate cigarette equivalent</p>
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
            </div>
          </>
        }
        className="relative shrink-0 w-full"
        title={<p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[1.6] relative shrink-0 text-[14px] text-black tracking-[-0.5px] whitespace-nowrap">Smoking, vaping or nicotine replacement</p>}
      />
      <div className="relative shrink-0 w-full" data-name="Fieldset">
        <div className="content-stretch flex flex-col items-start pt-[10px] relative size-full">
          <Box />
        </div>
      </div>
      <Frame17 />
      <Fieldset
        box={
          <>
            <div aria-hidden className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[12px]" />
            <div className="relative shrink-0 w-full" data-name="Radio list">
              <div className="content-stretch flex flex-col gap-[6px] items-start relative size-full">
                <div className="relative shrink-0 w-full" data-name="Label">
                  <div className="content-stretch flex items-start relative size-full">
                    <div className="content-stretch flex gap-[7px] items-end pl-px relative shrink-0" data-name="Label text">
                      <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">Are you still using this?</p>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 w-full" data-name="Options2">
                  <div className="content-stretch cursor-pointer flex flex-col gap-[9px] items-start pl-[2px] relative size-full">
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
            <div className="gap-x-px gap-y-[20px] grid grid-cols-[__10px_minmax(0,1fr)] grid-rows-[___73px_68px_0px] relative shrink-0 w-[809px]">
              <div className="col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Input field">
                <div className="content-stretch flex flex-col gap-[6px] items-start px-[16px] relative size-full">
                  <div className="relative shrink-0 w-[108px]" data-name="Label">
                    <div className="content-stretch flex items-start relative size-full">
                      <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative">
                        <div className="h-[8px] relative shrink-0 w-px" />
                        <div className="flex-[1_0_0] min-w-px relative" data-name="Label text">
                          <div className="flex flex-row items-end size-full">
                            <div className="content-stretch flex items-end pl-px relative size-full">
                              <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">{`When did you last use this? `}</p>
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
                              <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#757575] text-[16px] whitespace-nowrap">Select timeframe</p>
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
                              <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">How frequently are you using this?</p>
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
                                <p className="[word-break:break-word] flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[1.55] min-w-px not-italic relative text-[#757575] text-[16px]">Select frequency</p>
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
              <div className="col-1 justify-self-stretch relative row-[1/span_3] self-stretch shrink-0" data-name="Nested field separator">
                <div className="content-stretch flex items-start pr-[20px] relative size-full">
                  <div className="bg-[#c2c3c4] h-full relative shrink-0 w-[5px]" />
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full" data-name="Radio list">
              <div className="content-stretch flex flex-col gap-[6px] items-start relative size-full">
                <div className="relative shrink-0 w-full" data-name="Label">
                  <div className="content-stretch flex items-start relative size-full">
                    <div className="content-stretch flex gap-[7px] items-end pl-px relative shrink-0" data-name="Label text">
                      <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">Have you ever suffered with any mental health issues?</p>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 w-full" data-name="Options2">
                  <div className="content-stretch cursor-pointer flex flex-col gap-[9px] items-start pl-[2px] relative size-full">
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
            <div className="relative shrink-0 w-full" data-name="Radio list">
              <div className="content-stretch flex flex-col gap-[6px] items-start relative size-full">
                <div className="relative shrink-0 w-full" data-name="Label">
                  <div className="content-stretch flex items-start relative size-full">
                    <div className="content-stretch flex gap-[7px] items-end pl-px relative shrink-0" data-name="Label text">
                      <div className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">
                        <p className="leading-[1.2] mb-0 whitespace-pre">{`Have you been prescribed any medication by your GP or other medical practitioner to help you `}</p>
                        <p className="leading-[1.2] whitespace-pre">stop taking this drug i.e Methadone</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 w-full" data-name="Options2">
                  <div className="content-stretch cursor-pointer flex flex-col gap-[9px] items-start pl-[2px] relative size-full">
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
          </>
        }
        className="relative shrink-0 w-full"
        title={<p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[1.6] relative shrink-0 text-[14px] text-black tracking-[-0.5px] whitespace-nowrap">Cocaine, ecstasy or amphetamines</p>}
      />
      <div className="relative shrink-0 w-full" data-name="Fieldset">
        <div className="content-stretch flex flex-col items-start pt-[10px] relative size-full">
          <Box1 />
          <Title />
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Fieldset">
        <div className="content-stretch flex flex-col items-start pt-[10px] relative size-full">
          <Box2 />
          <Title1 />
        </div>
      </div>
      <Fieldset
        box={
          <>
            <div aria-hidden className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[12px]" />
            <div className="relative shrink-0 w-full" data-name="Radio list">
              <div className="content-stretch flex flex-col gap-[6px] items-start relative size-full">
                <div className="relative shrink-0 w-full" data-name="Label">
                  <div className="content-stretch flex items-start relative size-full">
                    <div className="content-stretch flex gap-[7px] items-end pl-px relative shrink-0" data-name="Label text">
                      <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">Are you still using this?</p>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 w-full" data-name="Options2">
                  <div className="content-stretch cursor-pointer flex flex-col gap-[9px] items-start pl-[2px] relative size-full">
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
            <div className="gap-x-px gap-y-[20px] grid grid-cols-[__10px_minmax(0,1fr)] grid-rows-[___73px_68px_0px] relative shrink-0 w-[809px]">
              <div className="col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Input field">
                <div className="content-stretch flex flex-col gap-[6px] items-start px-[16px] relative size-full">
                  <div className="relative shrink-0 w-[108px]" data-name="Label">
                    <div className="content-stretch flex items-start relative size-full">
                      <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative">
                        <div className="h-[8px] relative shrink-0 w-px" />
                        <div className="flex-[1_0_0] min-w-px relative" data-name="Label text">
                          <div className="flex flex-row items-end size-full">
                            <div className="content-stretch flex items-end pl-px relative size-full">
                              <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">{`When did you last use this? `}</p>
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
                              <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#757575] text-[16px] whitespace-nowrap">Select timeframe</p>
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
                              <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">How frequently are you using this?</p>
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
                                <p className="[word-break:break-word] flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[1.55] min-w-px not-italic relative text-[#757575] text-[16px]">Select frequency</p>
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
              <div className="col-1 justify-self-stretch relative row-[1/span_3] self-stretch shrink-0" data-name="Nested field separator">
                <div className="content-stretch flex items-start pr-[20px] relative size-full">
                  <div className="bg-[#c2c3c4] h-full relative shrink-0 w-[5px]" />
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full" data-name="Radio list">
              <div className="content-stretch flex flex-col gap-[6px] items-start relative size-full">
                <div className="relative shrink-0 w-full" data-name="Label">
                  <div className="content-stretch flex items-start relative size-full">
                    <div className="content-stretch flex gap-[7px] items-end pl-px relative shrink-0" data-name="Label text">
                      <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">Have you ever suffered with any mental health issues?</p>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 w-full" data-name="Options2">
                  <div className="content-stretch cursor-pointer flex flex-col gap-[9px] items-start pl-[2px] relative size-full">
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
            <div className="relative shrink-0 w-full" data-name="Radio list">
              <div className="content-stretch flex flex-col gap-[6px] items-start relative size-full">
                <div className="relative shrink-0 w-full" data-name="Label">
                  <div className="content-stretch flex items-start relative size-full">
                    <div className="content-stretch flex gap-[7px] items-end pl-px relative shrink-0" data-name="Label text">
                      <div className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">
                        <p className="leading-[1.2] mb-0 whitespace-pre">{`Have you been prescribed any medication by your GP or other medical practitioner to help you `}</p>
                        <p className="leading-[1.2] whitespace-pre">stop taking this drug?</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 w-full" data-name="Options2">
                  <div className="content-stretch cursor-pointer flex flex-col gap-[9px] items-start pl-[2px] relative size-full">
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
          </>
        }
        className="relative shrink-0 w-full"
        title={<p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[1.6] relative shrink-0 text-[14px] text-black tracking-[-0.5px] whitespace-nowrap">Anabolic steroids</p>}
      />
      <Fieldset
        box={
          <>
            <div aria-hidden className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[12px]" />
            <div className="relative shrink-0 w-full" data-name="Input field">
              <div className="content-stretch flex flex-col gap-[6px] items-start relative size-full">
                <div className="relative shrink-0 w-[108px]" data-name="Label">
                  <div className="content-stretch flex items-start relative size-full">
                    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative">
                      <div className="h-[8px] relative shrink-0 w-px" />
                      <div className="flex-[1_0_0] min-w-px relative" data-name="Label text">
                        <div className="flex flex-row items-end size-full">
                          <div className="content-stretch flex items-end pl-px relative size-full">
                            <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">What drugs are you taking?</p>
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
                            <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#757575] text-[16px] whitespace-nowrap">Add drug details</p>
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
            <div className="relative shrink-0 w-full" data-name="Radio list">
              <div className="content-stretch flex flex-col gap-[6px] items-start relative size-full">
                <div className="relative shrink-0 w-full" data-name="Label">
                  <div className="content-stretch flex items-start relative size-full">
                    <div className="content-stretch flex gap-[7px] items-end pl-px relative shrink-0" data-name="Label text">
                      <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">Are you still using this?</p>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 w-full" data-name="Options2">
                  <div className="content-stretch cursor-pointer flex flex-col gap-[9px] items-start pl-[2px] relative size-full">
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
            <div className="gap-x-px gap-y-[20px] grid grid-cols-[__10px_minmax(0,1fr)] grid-rows-[___73px_68px_0px] relative shrink-0 w-[809px]">
              <div className="col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Input field">
                <div className="content-stretch flex flex-col gap-[6px] items-start px-[16px] relative size-full">
                  <div className="relative shrink-0 w-[108px]" data-name="Label">
                    <div className="content-stretch flex items-start relative size-full">
                      <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative">
                        <div className="h-[8px] relative shrink-0 w-px" />
                        <div className="flex-[1_0_0] min-w-px relative" data-name="Label text">
                          <div className="flex flex-row items-end size-full">
                            <div className="content-stretch flex items-end pl-px relative size-full">
                              <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">{`When did you last use this? `}</p>
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
                              <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#757575] text-[16px] whitespace-nowrap">Select timeframe</p>
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
                              <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">How frequently are you using this?</p>
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
                                <p className="[word-break:break-word] flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[1.55] min-w-px not-italic relative text-[#757575] text-[16px]">Select frequency</p>
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
              <div className="col-1 justify-self-stretch relative row-[1/span_3] self-stretch shrink-0" data-name="Nested field separator">
                <div className="content-stretch flex items-start pr-[20px] relative size-full">
                  <div className="bg-[#c2c3c4] h-full relative shrink-0 w-[5px]" />
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full" data-name="Radio list">
              <div className="content-stretch flex flex-col gap-[6px] items-start relative size-full">
                <div className="relative shrink-0 w-full" data-name="Label">
                  <div className="content-stretch flex items-start relative size-full">
                    <div className="content-stretch flex gap-[7px] items-end pl-px relative shrink-0" data-name="Label text">
                      <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">Have you ever suffered with any mental health issues?</p>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 w-full" data-name="Options2">
                  <div className="content-stretch cursor-pointer flex flex-col gap-[9px] items-start pl-[2px] relative size-full">
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
            <div className="relative shrink-0 w-full" data-name="Radio list">
              <div className="content-stretch flex flex-col gap-[6px] items-start relative size-full">
                <div className="relative shrink-0 w-full" data-name="Label">
                  <div className="content-stretch flex items-start relative size-full">
                    <div className="content-stretch flex gap-[7px] items-end pl-px relative shrink-0" data-name="Label text">
                      <div className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">
                        <p className="leading-[1.2] mb-0 whitespace-pre">{`Have you been prescribed any medication by your GP or other medical practitioner to help you `}</p>
                        <p className="leading-[1.2] whitespace-pre">stop taking this drug?</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 w-full" data-name="Options2">
                  <div className="content-stretch cursor-pointer flex flex-col gap-[9px] items-start pl-[2px] relative size-full">
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
          </>
        }
        className="relative shrink-0 w-full"
        title={<p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[1.6] relative shrink-0 text-[14px] text-black tracking-[-0.5px] whitespace-nowrap">Other</p>}
      />
    </div>
  );
}

export default function ProtectionCaseContents() {
  return (
    <div className="bg-white relative size-full" data-name="Protection case contents">
      <div className="content-stretch flex flex-col gap-[30px] items-start relative size-full">
        <ProtectionCaseContentsHealthAndLifestyleDetails />
      </div>
    </div>
  );
}