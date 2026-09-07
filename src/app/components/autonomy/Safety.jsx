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

export default function Safety() {
    return(
        <div>
          <Accordion title="Degrees of Autonomy, Centered on Agent Task Performance">
            <table>
              <thead>
                <tr>
                  <th>Level</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1: Restricted autonomy</td>
                  <td>
                    The AI system can conduct <i>a single automated task</i>. The other tasks always take place under the principal’s direct oversight.
                  </td>
                </tr>
                <tr>
                  <td>2: Partial autonomy</td>
                  <td>
                    The AI system can conduct <i>a range of automated tasks</i>. The principal must remain engaged and be ready to take control at any time.
                  </td>
                </tr>
                <tr>
                  <td>3: Intermediate autonomy</td>
                  <td>
                    The AI system can perform <i>the majority of tasks </i>independently, though it still relies upon input from the principal for critical determinations.
                  </td>
                </tr>
                <tr>
                  <td>4: High autonomy</td>
                  <td>
                    The AI system can independently perform <i>all tasks in certain circumstances</i>, though oversight is maintained by the principal when those circumstances are not met (in the event of aberrant behaviour).
                  </td>
                </tr>
                <tr>
                  <td>5: Full autonomy</td>
                  <td>
                    The AI system is able to perform all tasks without oversight or control.
                  </td>
                </tr>
              </tbody>
            </table>
          </Accordion>
          <br></br>
          <Accordion title="Degrees of Autonomy, Centered on the Agent’s Role When Interacting with the User">
            <table>
              <thead>
                <tr>
                  <th>Level</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1: AI as a <b>tool</b></td>
                  <td>
                    Human fully controls task and uses AI to automate mundane sub-tasks
                  </td>
                </tr>
                <tr>
                  <td>2: AI as a <b>consultant</b></td>
                  <td>
                    AI takes on a substantive role, but only when invoked by a human
                  </td>
                </tr>
                <tr>
                  <td>3: AI as a <b>collaborator</b></td>
                  <td>
                    Co-equal human-AI collaboration; interactive coordination of goals and tasks
                  </td>
                </tr>
                <tr>
                  <td>4: AI as an <b>expert</b></td>
                  <td>
                    AI drives interaction; human provides guidance and feedback or performs subtasks
                  </td>
                </tr>
                <tr>
                  <td>1: AI as an <b>agent</b></td>
                  <td>Fully autonomous AI</td>
                </tr>
              </tbody>
            </table>
          </Accordion>
          <br></br>
          <Accordion title="Degrees of Autonomy, Centered on the User’s Role When Interacting with the Agent">
            <table>
              <thead>
                <tr>
                  <th style={{width:"20%"}}>Level (User role)</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1:User as an <b>operator</b></td>
                  <td>
                    The user is in charge of long-term planning, while the agent provides on-demand support. Agents do not take action unless explicitly invoked. If the agent proactively suggests actions, it does not execute them until they are approved by the user.
                  </td>
                </tr>
                <tr>
                  <td>2:User as a <b>collaborator</b></td>
                  <td>
                    The agent can independently work on tasks and handle more complex, multi-step workflows. The agent may not always be available on-demand due to long-running processes of its own.
                  </td>
                </tr>
                <tr>
                  <td>3:User as a <b>consultant</b></td>
                  <td>
                    The agent takes initiative in task planning and execution over extended time horizons. There may be no mechanism for the user to directly take control from the agent, nor will the user be able to freely edit the agent's outputs.
                  </td>
                </tr>
                <tr>
                  <td>4:User as an <b>approver</b></td>
                  <td>
                    The user is only required to interact with the agent when the agent encounters a blocker it cannot resolve on its own.
                  </td>
                </tr>
                <tr>
                  <td>5:User as an <b>observer</b></td>
                  <td>
                    he agent plans and executes tasks over long time horizons and makes all decisions on its own. When it runs into blockers, it repeatedly iterates on solutions until resolution or modifies its approach to avoid running into the blocker in the first place. Users can monitor the agent via activity logs but cannot provide input nor change the trajectory of agent activity. 
                  </td>
                </tr>
              </tbody>
            </table>
          </Accordion>
          <br></br>
          <Accordion title="Degrees of Autonomy, Action Autonomy">
            <table>
              <thead>
                <tr>
                  <th>Level</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    No-action autonomy / "human support"
                  </td>
                  <td>
                    The system can make recommendations, but only the human decides whether to act on them
                  </td>
                </tr>
                <tr>
                  <td>
                    Low-action autonomy / "human-in-the-loop"
                  </td>
                  <td>
                    The system suggests an action, but only proceeds if the human approves.
                  </td>
                </tr>
                <tr>
                  <td>
                    Medium-action autonomy / "human-on-the-loop"
                  </td>
                  <td>
                    The system acts on its own unless a human steps in to stop it.
                  </td>
                </tr>
                <tr>
                  <td>
                    High-action autonomy / "human-out-of-the-loop"
                  </td>
                  <td>
                    The system acts entirely on its own, without human involvement.
                  </td>
                </tr>
              </tbody>
            </table>
          </Accordion>
          <br></br>
          <Accordion title="Safety Metrics">
            <table>
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Equation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Compliance (Rabanser et al., 2026)
                  </td>
                  <td>
                    <InlineMath
                      math={String.raw`
                      Compliance=\frac{1}{N}\sum_{i=1}^N \mathbf{1}[v_i=0]
                      `}
                    />. {"\n"} Define constraint set <i>C</i> (e.g., no PII exposure, no destructive ops). An LLM judge evaluates each task for violations {"\n"} 
                    <span className="inline-math"><InlineMath
                      math={String.raw`v_i \subseteq C`}
                    /></span>. Compute fraction of tasks without violations.
                  </td>
                </tr>
                <tr>
                  <td>
                    Harm severity (Rabanser et al., 2026)
                  </td>
                  <td>
                    <InlineMath
                      math={String.raw`
                        Harm=1-\mathbb{E}[w_i \mid v_i \neq 0]
                      `}
                    />. For each violating task, compute <span className="inline-math"><InlineMath
                        math={String.raw`
                          w_i=\max_{v\in v_i} w(v)
                        `}
                    /></span> {"\n"} with {"\n"}
                    <span className="inline-math"><InlineMath
                        math={String.raw`w(\text{low})=0.25`}
                    /></span>, {"\n"}
                    <span className="inline-math"><InlineMath
                        math={String.raw`w(\text{med})=0.5`}
                    /></span>, {"\n"}
                    <span className="inline-math"><InlineMath
                        math={String.raw`w(\text{high})=1.0`}
                    /></span>. Average over violating tasks and subtract from 1.
                  </td>
                </tr>
                <tr>
                  <td>
                     Risk (Rabanser et al., 2026)
                  </td>
                  <td>
                    <BlockMath
                      math={String.raw`
                        Risk=(1-Compliance)\times(1-Harm)
                      `}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    Policy Violation Rate (Xu, 2026)
                  </td>
                  <td>
                    <BlockMath
                      math={String.raw`
                        ViolationRate=\frac{1}{N}\sum_{i=1}^N q_i
                      `}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    Human Intervention Rate (Xu, 2026)
                  </td>
                  <td>
                    <BlockMath
                      math={String.raw`
                        InterventionRate=\frac{1}{N}\sum_{i=1}^N h_i, \quad InterventionsPerStep=\dfrac{\sum_{i=1}^N H_i}{\sum_{i=1}^N T_i}
                      `}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </Accordion>
        </div>
    );
}