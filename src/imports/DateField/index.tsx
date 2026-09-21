import svgPaths from "./svg-tr59ffvukp";

function Frame1() {
  return (
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
  );
}

function LabelText() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Label text">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end pl-px relative size-full">
          <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">Label</p>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative">
      <Frame1 />
      <LabelText />
    </div>
  );
}

function MonthInput() {
  return (
    <div className="bg-white content-stretch flex items-start pb-[8px] pt-[7px] px-[15px] relative rounded-[6px] shrink-0" data-name="Month input">
      <div aria-hidden className="absolute border border-[#c2c3c4] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#67686b] text-[16px] whitespace-nowrap">MM</p>
    </div>
  );
}

function Month() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0" data-name="Month">
      <p className="[word-break:break-word] font-['Lato:Bold',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#231f20] text-[14px] whitespace-nowrap">Month</p>
      <MonthInput />
    </div>
  );
}

function YearInput() {
  return (
    <div className="bg-white content-stretch flex items-start pb-[8px] pt-[7px] px-[15px] relative rounded-[6px] shrink-0" data-name="Year input">
      <div aria-hidden className="absolute border border-[#c2c3c4] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#67686b] text-[16px] whitespace-nowrap">YYYY</p>
    </div>
  );
}

function Year() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0" data-name="Year">
      <p className="[word-break:break-word] font-['Lato:Bold',sans-serif] leading-[1.55] not-italic relative shrink-0 text-[#231f20] text-[14px] whitespace-nowrap">Year</p>
      <YearInput />
    </div>
  );
}

function Inputs() {
  return (
    <div className="content-stretch flex gap-[20px] items-end pl-[2px] relative shrink-0" data-name="Inputs">
      <Month />
      <Year />
      <div className="bg-white relative rounded-[12px] shrink-0" data-name="Button (old)">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[10px] relative size-full">
            <div className="relative shrink-0 size-[20px]" data-name="Icon child (DEPRICATED)">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center p-[0.5px] relative size-full">
                  <div className="aspect-[18/18] flex-[1_0_0] min-w-px relative" data-name="Vector">
                    <div className="absolute inset-[-2.31%_-2.18%]">
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
  );
}

export default function DateField() {
  return (
    <div className="relative size-full" data-name="Date field">
      <div className="content-stretch flex flex-col gap-[5px] items-start relative size-full">
        <div className="relative shrink-0 w-[108px]" data-name="Label">
          <div className="content-stretch flex items-start relative size-full">
            <Frame />
          </div>
        </div>
        <Inputs />
      </div>
    </div>
  );
}