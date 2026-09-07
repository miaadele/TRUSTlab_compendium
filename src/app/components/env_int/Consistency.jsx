import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { useState } from "react";

/* keep track of each accordion's state */
function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <button
        className="accordion-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <div className="accordion-content">
          {children}
        </div>
      )}
    </div>
  );
}

export default function Consistency() {
    return(
        <div>
          <p>
            There are three facets of consistency: outcome consistency, trajectory consistency, and resource consistency.
          </p><br></br>

          <Accordion title="Outcome Consistency">
                <p>
                  Outcome consistency measures an agent’s success or failure on repeated attempts at the same task. For example, an agent that completes a maze on one attempt but fails the same maze on another attempt exhibits outcome inconsistency.
                </p>
                <br></br>
                <BlockMath
                  math={String.raw`
                    C_{out}=\frac{1}{T}\sum_{t=1}^{T}
                    \left(
                       1-\frac{\hat{\sigma_t}^2}{\hat{p_t}(1-\hat{p_t})+\epsilon}
                    \right)
                  `}
                />
                <p>
                    <i>Measurement Protocol:</i>{"\n"}
                    Run each task <i>t</i> a total of <i>K</i> times, yielding outcomes <span className="inline-math">
                    <InlineMath
                      math={String.raw`
                        y_{t,k}\in \{0,1\}
                      `}
                    /></span>. Compute per-task success rate {"\n"} <span className="inline-math">
                    <InlineMath
                      math={String.raw`
                        \hat{p_t}=\dfrac{1}{K}\sum_ky_{t,k}
                      `}
                    /></span> and sample variance <span className="inline-math">
                    <InlineMath
                      math={String.raw`
                        \hat{\sigma_t}^2=\dfrac{1}{K-1}\sum_k\left(
                          y_{t,k}-\hat{p_t}
                        \right)^2
                      `}
                    /></span>. Normalize by maximum Bernoulli variance (0.25) and average across <i>T</i> tasks.
                </p>
          </Accordion>
          <br></br>
          
          <Accordion title="Trajectory Consistency">
              <p>
                  Trajectory consistency measures the similarity between an agent’s approaches across multiple attempts at solving the same problem. Consider an agent that is tasked with refunding customers for their returns at The Ecommerce Store. To process the return, the agent can perform a combination of action types: confirm receipt of the returned item, restock the returned item, and refund the customer. Trajectory <i>type</i> consistency measures the frequency at which the agent chooses each action type, across multiple attempts. On some attempts, the agent completes all three action types; other times, the agent only refunds the customer. Trajectory <i>sequence</i> consistency measures the order in which the agent performs each action type, across multiple attempts. Different action sequences yield different failure modes if the agent is interrupted mid-execution (Rabanser et al., 2026).

                </p>
                <br></br>
                <h4 className="text-l font-bold text-slate-900">Trajectory Type Consistency</h4>
                <BlockMath
                  math={String.raw`
                    C_{traj}^d=1-\frac{
                      2\sum_t \sum_{i<j} JSD_t ^{(i,j)}
                    } {TK(K-1)}
                  `}
                />
                <p>
                    <i>Measurement Protocol:</i>{"\n"}
                    For task <i>t</i>, collect action sequences from <i>K</i> runs. Convert each sequence to distribution<span className="inline-math">
                    <InlineMath
                      math={String.raw`P_t^{(k)}`}
                    /></span> over action types. Compute <span className="inline-math">
                    <InlineMath
                      math={String.raw`
                        JSD_t ^{(i,j)}=JSD\left(
                         P_t ^{(i)}, P_t ^{(j)}
                          \right)
                      `}
                    /></span> as pairwise Jensen-Shannon divergence. The coefficient <span className="inline-math">
                    <InlineMath
                      math={String.raw`
                        \dfrac{2}{TK(K-1)}
                      `}
                    /></span> averages over <span className="inline-math">
                    <InlineMath
                      math={String.raw`
                        \binom{K}{2}
                      `}
                    /></span> pairs per task and <i>T</i> tasks.
                </p>
                <br></br>
                <h4 className="text-l font-bold text-slate-900">Trajectory Sequence Consistency</h4>
                <BlockMath
                  math={String.raw`
                    C_{traj}^s=1-\frac{
                    2\sum_t \sum_{i<j} \hat{d}_t ^{(i,j)}
                    } {TK(K-1)}
                  `}
                />
                <p>
                    <i>Measurement Protocol:</i>{"\n"}
                    For task <i>t</i>, collect action sequences <span className="inline-math">
                    <InlineMath
                      math={String.raw`
                        a^{(1)},...,a^{(K)}
                      `}
                    /></span> from all <i>K</i> runs. Compute normalized pairwise Levenshtein distance <span className="inline-math">
                    <InlineMath
                      math={String.raw`
                        \hat{d}_t ^{(i,j)}=d_{lev}\left(
                          a_t^{(i)}, a_t^{(j)}
                        \right)/\max\left(
                          \lvert a_t^{(i)} \rvert,
                          \lvert a_t^{(j)} \rvert
                        \right)
                        \in {[0,1]}
                      `}
                    /></span>. Average across all pairs and tasks as above.
                </p>
          </Accordion>

          <br></br>
         <Accordion title="Resource Consistency">
                <p>
                  Resource consistency measures the discrepancies in computation and monetary costs across tasks (Rabanser et al., 2026). Resource usage such as cost, time, and API calls, is influenced by action type and action sequences. Agents that have trajectory consistency, both distributionally and sequentially, will likely have resource consistency.
                </p>
                <br></br>
                <BlockMath
                  math={String.raw`
                    C_{res}=\exp\left(
                    -\frac{1}
                    {\lvert R \rvert}
                    \sum_{r\in R} CV_r
                    \right)
                  `}
                />
                <p>
                    <i>Measurement Protocol:</i>{"\n"}
                    For each task, record resource usage across <i>K</i> runs. Let <i>R</i> be the set of resource types. For each <span className="inline-math">
                    <InlineMath
                      math={String.raw`r \in R`}
                    /></span>, compute coefficient of variation <span className="inline-math">
                    <InlineMath
                      math={String.raw`CV_r=\sigma_r/\mu_r`}
                    /></span>. Average across resource types and apply exponential transform.
                </p>
          </Accordion>
          <br></br>
          <h4 className="text-xl font-bold text-slate-900">Agent Stability Index Framework</h4>
          <p>
            Agent drift is not conducive for consistent behavior. Agent drift is an agent’s progressive deviation from its original behavior, performance, decision-making, or intent (Arike et al., 2025; Rath, 2026). Rath (2026) suggests the Agent Stability Index (ASI) framework to understand and quantify agent drift. He posits twelve dimensions of agent drift, four of which measure consistency: output semantic similarity, decision pathway stability, confidence calibration, and tool sequencing consistency
          </p>
          
          <table>
            <thead>
              <tr>
                <th>Dimension</th>
                <th>Measurement Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                    Output Semantic Similarity
                </td>
                <td>
                    Similarity between two agent outputs
                </td>
              </tr>
              <tr>
                <td>
                    Decision Pathway Stability
                </td>
                <td>
                  Consistency in an agent’s problem-solving approaches
                </td>
              </tr>
              <tr>
                <td>
                    Confidence Calibration
                </td>
                <td>
                  The change in deviation between stated confidence levels and empirical success rates over time
                </td>
              </tr>
              <tr>
                <td>
                    Tool Sequencing Consistency
                </td>
                <td>
                  Changes in operational strategies (trajectory type and sequence)
                </td>
              </tr>
            </tbody>
          </table>
          <p><small><i>Note. </i>Adapted from Rath, 2026.</small></p>
    </div>
    );
}