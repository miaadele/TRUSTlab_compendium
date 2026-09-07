
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function Hysteresis() {
    return(
        <div>
          <p>
            McCants (2026) proposed monitoring AI systems’ hysteresis to detect coherence drift. A system without coherence drift has high hysteresis, because it resists change and requires significant force to move beyond its anchors’ bounds. A drifting system has low hysteresis, because its anchors have failed. Therefore, a reduction in hysteresis indicates that an AI system’s context anchoring is failing, and the system is entering coherent drift. The hysteresis index (H) is defined below, with low H implying hypersensitivity and anchor degradation
          </p>
      <p className="mt-4 text-sm leading-7 text-slate-600">
        Let {"\n"}<span className="inline-math"><InlineMath
          math={String.raw`s_i^{(x)}`}
        /></span>{"\n"} 
        be the state resulting from a standardized probe input <i>x</i> applied at step <i>i</i>:
      </p>
      <BlockMath
        math={String.raw`
          H=\mathbb{E}\left[\lVert s_i^{(x)}-s_{i-k}^{(x)} \rVert_2\right]
          `}
      />
    </div>
    );
}