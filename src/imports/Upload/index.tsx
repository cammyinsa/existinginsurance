import svgPaths from "./svg-so10kp3n8q";

function Upload({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[19px]"} data-name="Upload">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[0.5px] relative size-full">
          <div className="aspect-[18/16] flex-[1_0_0] min-w-px relative" data-name="Vector">
            <div className="absolute inset-[-2.59%_-2.31%]">
              <svg className="block size-full" fill="none" height="16.83" preserveAspectRatio="none" viewBox="0 0 18.83 16.83" width="18.83">
                <path d={svgPaths.p3b785d00} id="Vector" stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.83" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Upload1() {
  return <Upload className="relative size-full" />;
}