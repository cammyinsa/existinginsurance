import svgPaths from "./svg-91a57p6wm6";

function Currency({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[19px]"} data-name="Currency">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[0.5px] relative size-full">
          <div className="aspect-[13.301214218139648/18] h-full relative shrink-0" data-name="Vector">
            <div className="absolute inset-[-2.31%_-3.12%]">
              <svg className="block size-full" fill="none" height="18.83" preserveAspectRatio="none" viewBox="0 0 14.1312 18.83" width="14.1312">
                <path d={svgPaths.p2fde2300} id="Vector" stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.83" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Currency1() {
  return <Currency className="relative size-full" />;
}