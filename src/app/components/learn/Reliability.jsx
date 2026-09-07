import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function Reliability() {
    return(
        <div>
      <p>
        In contrast to robustness, which refers to an agent’s success under perturbations, reliability refers to an agent’s consistent performance over time and across repetitions (Shukla, 2025).
      </p>

      <p className="mt-4 leading-7 text-slate-600">
        If for each task we run <i>S</i> seeds with outcomes <span className="inline-math">
          <InlineMath
            math={String.raw`s_{i,s}`}
          />
        </span>, define (Xu, 2026):
      </p>
      <BlockMath  
        math={String.raw`
          \mu_i=\frac{1}{S}\sum_{s=1}^S s_{i,s}, \quad
          Var_i=\frac{1}{S}\sum_{s=1}^S \left(s_{i,s}-\mu_i\right)^2, \quad
          \overline{Var}=\frac{1}{N}\sum_{i=1}^N Var_i
        `}
      />
    </div>
    );
}