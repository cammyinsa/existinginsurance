type FieldsetProps = {
  className?: string;
  box?: React.ReactNode | null;
  nested?: boolean;
  title?: React.ReactNode | null;
};

export default function Fieldset({ className, box = null, nested = false, title = null }: FieldsetProps) {
  const isNested = nested;
  const isNotNested = !nested;
  return (
    <div className={className || "relative w-[1431px]"}>
      <div className="content-stretch flex flex-col items-start pt-[10px] relative size-full">
        {isNotNested && (
          <>
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
          </>
        )}
        {isNested && (
          <>
            <div className="relative rounded-[12px] shrink-0 w-full" data-name="Box">
              {box || (
                <>
                  <div aria-hidden className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[12px]" />
                  <div className="content-stretch flex flex-col items-start pb-[20px] pt-[30px] px-[20px] relative size-full">
                    <div className="relative shrink-0 w-full" data-name="Nested fieldset">
                      <div className="content-stretch flex flex-col items-start pt-[10px] relative size-full">
                        <div className="h-[76px] relative shrink-0 w-full" data-name="Box">
                          {box || (
                            <>
                              <div aria-hidden className="absolute border-[#e1e1e1] border-solid border-t inset-0 pointer-events-none" />
                              <div className="relative size-full" />
                            </>
                          )}
                        </div>
                        <div className="absolute bg-white content-stretch flex items-center left-[14px] px-[5px] py-[2px] top-[-3px]" data-name="Title">
                          {title || <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[1.6] relative shrink-0 text-[14px] text-black tracking-[-0.5px] whitespace-nowrap">Nested fieldset title</p>}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="absolute bg-white content-stretch flex items-center left-[14px] px-[5px] py-[2px] top-[-3px]" data-name="Title">
              {title || <p className="[word-break:break-word] font-['Montserrat:Bold',sans-serif] font-bold leading-[1.6] relative shrink-0 text-[14px] text-black tracking-[-0.5px] whitespace-nowrap">Fieldset title</p>}
            </div>
          </>
        )}
      </div>
    </div>
  );
}