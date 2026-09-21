type AutocompleteDropdownProps = {
  className?: string;
  options?: React.ReactNode | null;
  optionType?: "Default";
};

function AutocompleteDropdown({ className, options = null, optionType = "Default" }: AutocompleteDropdownProps) {
  return (
    <div className={className || "bg-white relative rounded-[6px] w-[400px]"}>
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center py-[5px] relative size-full">
          <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Options">
            {options || (
              <>
                <div className="bg-white relative shrink-0 w-full" data-name="Autocomplete option">
                  <div aria-hidden className="absolute border-[#c2c3c4] border-b border-solid inset-0 pointer-events-none" />
                  <div className="content-stretch flex gap-[10px] items-start px-[15px] py-[10px] relative size-full">
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative">
                      <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Names">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="First item">
                          <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[14px] whitespace-nowrap">Brooke Financial Group Ltd.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white relative shrink-0 w-full" data-name="Autocomplete option">
                  <div aria-hidden className="absolute border-[#c2c3c4] border-b border-solid inset-0 pointer-events-none" />
                  <div className="content-stretch flex gap-[10px] items-start px-[15px] py-[10px] relative size-full">
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative">
                      <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Names">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="First item">
                          <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[14px] whitespace-nowrap">Brooke FS - Leicester</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white relative shrink-0 w-full" data-name="Autocomplete option">
                  <div aria-hidden className="absolute border-[#c2c3c4] border-b border-solid inset-0 pointer-events-none" />
                  <div className="content-stretch flex gap-[10px] items-start px-[15px] py-[10px] relative size-full">
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative">
                      <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Names">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="First item">
                          <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[14px] whitespace-nowrap">Brooke Financial Services (trading style)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white relative shrink-0 w-full" data-name="Autocomplete option">
                  <div aria-hidden className="absolute border-[#c2c3c4] border-b border-solid inset-0 pointer-events-none" />
                  <div className="content-stretch flex gap-[10px] items-start px-[15px] py-[10px] relative size-full">
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative">
                      <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Names">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="First item">
                          <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[14px] whitespace-nowrap">Callum’s Mortgages Ltd.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white relative shrink-0 w-full" data-name="Last autocomplete option">
                  <div className="content-stretch flex gap-[10px] items-start px-[15px] py-[10px] relative size-full">
                    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative">
                      <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Names">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="First item">
                          <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#231f20] text-[14px] whitespace-nowrap">Cool Financial Services Ltd.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#c2c3c4] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_0px_4px_2px_rgba(36,123,161,0.5)]" />
    </div>
  );
}

export default function AutocompleteDropdown1() {
  return <AutocompleteDropdown className="bg-white relative rounded-[6px] size-full" />;
}