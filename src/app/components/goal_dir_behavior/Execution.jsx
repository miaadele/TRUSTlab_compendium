import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function Execution() {
    return(
        <div>
          <h4 className="text-xl font-bold text-slate-900">
            Task-Based Metrics
          </h4>
          <p>
            The goal completion rate (GCR) is the percentage of tasks for which the AI agent successfully achieves the intended goal (AlShikh et al., 2025).
          </p>
          <BlockMath
            math={String.raw`
              GCR=\frac{\text{Number of Successfully Completed Tasks}}{\text{Total Number of Tasks}}\times 100
            `}
          />
          <br></br>
          <p>
            The decision turnaround time (DTT) is the time from task initiation to task completion. The DTT measures how quickly an agent delivers value and is a critical metric for time-sensitive tasks (AlShikh et al., 2025).
          </p>
          <BlockMath
            math={String.raw`
              DTT=T_{end}-T_{start}
            `}
          />
          <h4 className="text-xl font-bold text-slate-900">
            Resource-Based Metrics
          </h4>
          <p>
            The cognitive efficiency score (CES) measures the number of tokens and tool calls per successfully completed task. A low CES is imperative for resource management and environmental sustainability (AlShikh et al., 2025).
          </p>
          <BlockMath
            math={String.raw`
               CES=\frac{\text{Total Tokens Generated}+\text{Tool/API Calls}\times\text{Token Equivalent}}{\text{Number of Successfully Completed Tasks}}
            `}
          />
          <br></br>
          <p>
            Collaboration quality index (CQI) measures an agent’s collaborative abilities across dimensions like communication clarity, responsiveness, and contextual awareness (AlShikh et al., 2025). Consider a set of three medical diagnoses that require clinician-agent collaboration.
          </p>
          <BlockMath
            math={String.raw`
               CQI=\frac{\sum \text{Interaction Quality Scores}}{\text{Total Collaborative Tasks}}
            `}
          />
          <br></br>
          <p>
            Finally, the Tool Dexterity Index (TDI) assesses an agent’s ability to select the optimal tool for each situation. The potential tool use scores are +1 for "optimal use,"" -1 for "misuse," and -0.5 for "ignored better tool" (AlShikh et al., 2025).
          </p>
          <BlockMath
            math={String.raw`
               TDI=\frac{\Sigma \text{ Tool Use Scores}}{\text{Total Opportunities to Use Tools}}
            `}
          />
    </div>
    );
}