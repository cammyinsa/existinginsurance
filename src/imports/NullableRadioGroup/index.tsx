function LabelText() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[7px] items-end pl-px relative shrink-0 whitespace-nowrap" data-name="Label text">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px]">Have you smoked, vaped or used any nicotine replacement products in the last 5 years?</p>
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.3] relative shrink-0 text-[#67686b] text-[12px]">Required</p>
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

function Frame2() {
  return (
    <div className="content-stretch flex items-center pt-[2px] relative shrink-0">
      <Group />
    </div>
  );
}

function Frame1() {
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

function Options1() {
  return (
    <div className="content-stretch cursor-pointer flex flex-col gap-[9px] items-start relative shrink-0 w-full" data-name="Options">
      <button className="relative shrink-0 w-full" data-name="Option 1">
        <div className="content-stretch flex gap-[8px] items-start relative size-full">
          <Frame2 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[1.25] min-w-px not-italic relative text-[#231f20] text-[16px] text-left">Yes, provide details</p>
        </div>
      </button>
      <button className="relative shrink-0 w-full" data-name="Option 2">
        <div className="content-stretch flex gap-[8px] items-start relative size-full">
          <Frame1 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[1.25] min-w-px not-italic relative text-[#231f20] text-[16px] text-left">No</p>
        </div>
      </button>
    </div>
  );
}

function Frame4() {
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

function Frame3() {
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

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full">
      <Options1 />
      <Frame4 />
      <button className="cursor-pointer relative shrink-0" data-name="Option 3">
        <div className="content-stretch flex gap-[8px] items-start relative size-full">
          <Frame3 />
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
        <Frame />
      </div>
    </div>
  );
}

export default function NullableRadioGroup() {
  return (
    <div className="relative size-full" data-name="Nullable radio group">
      <div className="content-stretch flex flex-col gap-[6px] items-start relative size-full">
        <div className="relative shrink-0" data-name="Label">
          <div className="content-stretch flex items-start relative size-full">
            <LabelText />
          </div>
        </div>
        <Options />
      </div>
    </div>
  );
}