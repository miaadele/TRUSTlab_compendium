import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function Trajectory() {
    return(
      <div>
      <h4 className="text-xl font-bold text-slate-900">
        Plan Formulation
      </h4>

      <p>
        Plan formulation involves task decomposition, which is the process of breaking down one large task into multiple sub-tasks, and execution. Plan adherence is the probability that a sequence of actions will result in task completion. If a reference plan is available <span className="inline-math">
          <InlineMath 
            math={String.raw`P_i=(p_{i,1},...p_{i,M_i})`}
          />
        </span>, then a simple stepwise adherence is (Xu, 2026):
        <BlockMath
          math={String.raw`
            PlanAdh_i=\frac{1}{\min(T_i,M_i)}\sum_{j=1}^{\min(T_i,M_i)}
            \mathbf{1}\{a_{i,j}=p_{i,j}\}
          `}
        />
      </p>

      <h4 className="text-xl font-bold text-slate-900">
        Plan Reflection
      </h4>
      <p>
         After plan formulation, plan reflection occurs to evaluate the merits and shortcomings of the plans. The reflection process may involve insight collection from pre-existing models, engagement with human actors, or environmental feedback (Xi et al., 2025).
      </p>
      <p>
         Action validity is the rate of illegal or invalid actions. <span className="mt-4 leading-7 text-slate-600">
              Let <span className="inline-math"><InlineMath 
                math={String.raw`w_{i,j}\in\{0,1\}`}
              /></span> indicate action <span className="inline-math"><InlineMath
                math={String.raw`a_{i,j}`}
              /></span>is valid in the environment (Xu, 2026):
         </span>
      </p>
      <BlockMath
            math={String.raw`
              ValidActRate=\frac{\sum_{i=1}^N\sum_{j=1}^{T_i}w_{i,j}}{\sum_{i=1}^N T_i}
            `}
         />
      <p>
        Loop rate is the rate of repeated actions or oscillations between states, without progress. Endless loops occur when an agent continually repeats the same actions without completing the task.
      </p>
      <span className="mt-4 leading-7 text-slate-600"><p>
        Let <span className="inline-math">
          <InlineMath
            math={String.raw`uniq(\tau_i)`}
          /> be the number of unique actions/states visited (Xu, 2026):
        </span>
      </p></span>
      <BlockMath
        math={String.raw`
          LoopRate_i=1-\frac{uniq(\tau_i)}{T_i}, \quad
          LoopRate=\frac{1}{N}\sum_{i=1}^N LoopRate_i
        `}
      />
    </div>
    );
}