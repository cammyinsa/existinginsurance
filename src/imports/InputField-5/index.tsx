function Frame1() {
  return <div className="h-[8px] relative shrink-0 w-px" />;
}

function LabelText() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Label text">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end pl-px relative size-full">
          <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">Other</p>
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

function Input() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[6px]" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start pb-[10px] pt-[9px] px-[15px] relative size-full">
          <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[#757575] text-[16px] whitespace-nowrap">Add other details</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#67686b] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Icon() {
  return <div className="relative shrink-0 size-[15px]" data-name="Icon" />;
}

export default function InputField() {
  return (
    <div className="relative size-full" data-name="Input field">
      <div className="content-stretch flex flex-col gap-[6px] items-start relative size-full">
        <div className="relative shrink-0 w-[108px]" data-name="Label">
          <div className="content-stretch flex items-start relative size-full">
            <Frame />
          </div>
        </div>
        <div className="relative shrink-0 w-[425px]" data-name="Input">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center pl-[2px] py-[2px] relative size-full">
              <Input />
              <Icon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}