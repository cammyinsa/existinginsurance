import svgPaths from "./svg-k2yt9u1hg7";

function ArtificalIntelligence({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[19px]"} data-name="Artifical intelligence">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[0.5px] relative size-full">
          <div className="aspect-[16/15.999699592590332] flex-[1_0_0] min-w-px relative" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" height="17.9997" preserveAspectRatio="none" viewBox="0 0 18 17.9997" width="18">
              <g id="Vector">
                <mask fill="white" id="path-1-inside-1_0_5">
                  <path d={svgPaths.p2eab0700} />
                  <path d={svgPaths.p24c2c280} />
                </mask>
                <path d={svgPaths.p1b630080} fill="#231F20" mask="url(#path-1-inside-1_0_5)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ArtificalIntelligence1() {
  return <ArtificalIntelligence className="relative size-full" />;
}