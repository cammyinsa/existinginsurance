import svgPaths from "./svg-gn4w842wtg";

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
    <div className="content-stretch flex gap-[7px] items-end pl-px relative shrink-0" data-name="Label text">
      <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[16px] whitespace-nowrap">Add property and mortgage details</p>
    </div>
  );
}

function HelpText() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Help text">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[1.55] min-w-px not-italic relative text-[#67686b] text-[14px]">Select an option to add details from a previous case, add new property or mortgage, or proceed without a mortgage or property for protection only cases.</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[-23px] top-[0.5px]">
      <div className="relative shrink-0 size-[15px]" data-name="Icons">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center relative size-full">
            <div className="aspect-[19/19] flex-[1_0_0] min-w-px relative" data-name="Information">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center p-[0.5px] relative size-full">
                  <div className="aspect-[18/18] flex-[1_0_0] min-w-px relative" data-name="Vector">
                    <div className="absolute inset-[-2.25%]">
                      <svg className="block size-full" fill="none" height="14.63" preserveAspectRatio="none" viewBox="0 0 14.63 14.63" width="14.63">
                        <path d={svgPaths.p10de2280} id="Vector" stroke="#C61310" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.63" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Lato:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#c61310] text-[12px] whitespace-nowrap">Error message goes here</p>
    </div>
  );
}

function ErrorText() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Error text">
      <Frame />
    </div>
  );
}

function SelectInner() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[15px] items-center min-w-px relative" data-name="Select inner">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[1.55] min-w-px not-italic relative text-[#757575] text-[16px]">Please select…</p>
      <IconChildChevronDownSmallNo className="relative shrink-0 w-[15px]" />
    </div>
  );
}

function Input() {
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

function Icon() {
  return <div className="relative shrink-0 size-[15px]" data-name="Icon" />;
}

export default function InputField() {
  return (
    <div className="relative size-full" data-name="Input field">
      <div className="content-stretch flex flex-col gap-[6px] items-start relative size-full">
        <div className="h-[19px] relative shrink-0" data-name="Label">
          <div className="content-stretch flex items-start relative size-full">
            <LabelText />
          </div>
        </div>
        <div className="relative shrink-0 w-full" data-name="Help and error text">
          <div className="flex flex-col items-end size-full">
            <div className="content-stretch flex flex-col gap-[5px] items-end pb-[5px] pl-px relative size-full">
              <HelpText />
              <ErrorText />
            </div>
          </div>
        </div>
        <div className="relative shrink-0 w-full" data-name="Select">
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