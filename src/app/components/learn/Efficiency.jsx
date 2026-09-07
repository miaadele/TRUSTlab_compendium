import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function Efficiency() {
    return(
        <div>
      <h4 className="text-xl font-bold text-slate-900">
        Cognitive Efficiency Score (CES)
      </h4>

      <p className="mt-4 text-sm leading-7 text-slate-600">
        An agent’s computational efficiency is critical to its performance. The cognitive efficiency score (CES) measures an agent’s cognitive efficiency score as the ratio of resource intensity to agent operations (AlShikh et al., 2025).
      </p>
      <BlockMath  
        math={String.raw`
          CES= \frac
            {\text{Total Tokens Generated + (Tool or API Calls $\times$ Token Equivalent)}}
            {\text{Number of Successfully Completed Tasks}}
        `}
      />
      <h4 className="text-xl font-bold text-slate-900">
        Latency
      </h4>
      <p>
        Additionally, latency and token usage are commonly used to evaluate efficiency and cost (Shukla, 2025; Xu, 2026). Latency is the delay between a request being sent and acknowledged. </p>
        <p className="mt-4 leading-7 text-slate-600">
          For latency percentiles, let
          <span className="inline-math"><InlineMath
          math={String.raw`
            \{t_{(1)},...,t_{(N)}\
          `}
        /></span>
        be the sorted completion times (Xu, 2026):
        </p>
        
      
      <BlockMath
        math={String.raw`Quantile_q(t)=t_{(\lceil qN \rceil)}`}
      />

      <h4 className="text-xl font-bold text-slate-900">
        Token Usage
      </h4>
      <p>
        Token usage is the ratio of input tokens to output tokens, and token cost per task is the estimated token cost per completed task (Xu, 2026).
      </p>
      <BlockMath
        math={String.raw`
          Tokens=\frac{1}{N}\sum_{i=1}^N(x_i+y_i), \quad
          Cost=\frac{1}{N}\sum_{i=1}^N p_{in}x_i+p_{out}y_i
          `}
      />
    </div>
    );
}