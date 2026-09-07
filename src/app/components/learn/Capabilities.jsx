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

  export default function Capabilities() {
    return(
        <div>
      <h4 className="text-xl font-bold text-slate-900">
        Measurement Frameworks
      </h4>

      <Accordion title="Hierarchy of Agentic Capabilities">
        <p>
          Ritchie et al. (2026) developed a hierarchy of agentic capabilities to evaluate the amount of economically useful work that AI agents can perform.
        </p>
        <table>
          <thead>
            <tr>
              <th>
                Level
              </th>
              <th>
                Minimum Performance Threshold
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Tool Use
              </td>
              <td>
                Correct invocation of tools with appropriate arguments, parsing responses, and incorporating results into reasoning.
              </td>
            </tr>
            <tr>
              <td>
                2: Planning and Goal Formation
              </td>
              <td>
                Decomposing complex tasks into subtasks, forming intermediate goals, and executing multi-step plans.
              </td>
            </tr>
            <tr>
              <td>
                3: Adaptability
              </td>
              <td>
                Recognizing when initial approaches fail and dynamically adjusting strategies based on environmental feedback.
              </td>
            </tr>
            <tr>
              <td>
                4: Groundedness
              </td>
              <td>
                Remaining anchored to the current context without hallucinating information or losing track of state across extended interactions.
              </td>
            </tr>
            <tr>
              <td>
                5: Common-Sense Reasoning
              </td>
              <td>
                Making contextually appropriate inferences beyond explicit instructions and applying world knowledge to ambiguous situations.
              </td>
            </tr>
          </tbody>
        </table>
      </Accordion>
      <br></br>
      <Accordion title="Levels of Task Complexity">
        <p>
          Meshkov (2026) proposed a scale of task complexity to determine how an AI agent should decompose tasks
        </p>
        <table>
          <thead>
            <tr>
              <th>
                Level
              </th>
              <th>
                Task Type
              </th>
              <th>
                Task Decomposition Description
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Simple atomic</td>
              <td>
                There should be minimal or no decomposition when the task needs to be executed directly.
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Sequential</td>
              <td>
                Require actions to be performed in a specific order, where the result of the previous step is necessary for the next.
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Parallel</td>
              <td>Contain independent subtasks that can be executed simultaneously.</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Mixed</td>
              <td>
                Combine parallel and serial components and require data manipulation and computation.
              </td>
            </tr>
          </tbody>
        </table>
      </Accordion>
      <br></br>
      <Accordion title="Task Decomposition Metrics">
        <table>
          <thead>
            <tr>
              <th>Metric</th>
              <th>Equation</th>
              <th>Proposed Success Criteria</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Granularity Score
              </td>
              <td>
                <span className="inline-math"><InlineMath
                  math={String.raw`
                    GS=1-\dfrac{\lvert \text{Agent steps}-\text{Reference steps} \rvert}{\max(\text{Agent steps},\ \text{Reference steps})}
                  `}
                /></span>
              </td>
              <td> GS
                <span className="inline-math"><InlineMath
                  math={String.raw`
                    \geq
                  `}
                /></span> 0.75
              </td>
            </tr>
            <tr>
              <td>
                Efficiency ratio
              </td>
              <td>
                <span className="inline-math"><InlineMath
                  math={String.raw`
                    ER=\dfrac{\text{Minimum necessary actions}}{\text{Actual agent actions}}
                  `}
                /></span>
              </td>
              <td> ER
                <span className="inline-math"><InlineMath
                  math={String.raw`
                    \geq
                  `}
                /></span> 0.80
              </td>
            </tr>
            <tr>
              <td>
                Goal Alignment
              </td>
              <td>
                <span className="inline-math"><InlineMath
                  math={String.raw`
                    \mathrm{cos\_sim}\big(\mathrm{embedding}(\text{Original task}),
                    \mathrm{embedding}(\text{Final plan})\big)
                  `}
                /></span>
              </td>
              <td>
                <span className="inline-math"><InlineMath
                  math={String.raw`
                    \mathrm{cos\_sim} \geq 0.85
                  `}
                /></span>
              </td>
            </tr>
            <tr>
              <td>
                Logical Correctness
              </td>
              <td>
                <i>LC</i> = Binary assessment of dependency correctness between subtasks
              </td>
              <td>
                LC = 1.0
              </td>
            </tr>
          </tbody>
        </table>
      </Accordion>
      <br></br>
      <Accordion title="Multi-Step Tasks to Test Context Preservation in AI Agents">
        <table>
          <thead>
            <tr>
            <th>
              Level
            </th>
            <th style={{width:"20%"}}>
              Test Type
            </th>
            <th>
              Test Description
            </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Short Range (2-3 steps)</td>
              <td>
                Testing basic context preservation. For example, "Find Mike’s email, after that send him an email..." In this case, the second step requires obtaining the result of the first.
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Middle Range (4-7 steps)</td>
              <td>
                Require actions to be performed in a specific order, where the result of the previous step is necessary for the next.
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Long Range (8+ steps)</td>
              <td>
                Extended sequences where information from the first steps is critical to the last ones.
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Source Tracking</td>
              <td>Maintaining connections between facts and their sources throughout execution. For each step that should use the previous context, we check whether this happens correctly.</td>
            </tr>
          </tbody>
        </table>
        <p><small><i>Note. </i>Adapted from Meshkov, 2026</small></p>
      </Accordion>
      <br></br>
      <Accordion title="Context Preservation Metrics">
        <table style={{width:"70%"}}>
          <thead>
            <tr>
              <th>Metric</th>
              <th>Equation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Context Retention Accuracy</td>
              <td>
                <span className="inline-math"><InlineMath
                  math={String.raw`
                    CRA=\dfrac{\text{Steps with correct context usage}}{\text{Steps requiring context}},
                    CRA(d)=\dfrac{\text{Correct usage at distance } d}{\text{Required usage at distance } d}
                  `}
                /></span>
              </td>
            </tr>
            <tr>
              <td>Source Tracking Accuracy</td>
              <td>
                <span className="inline-math"><InlineMath
                  math={String.raw`
                    SRA=\dfrac{\text{Facts with correct attribution}}{\text{Total facts from external sources}}
                  `}
                /></span>
              </td>
            </tr>
            <tr>
              <td>Context Decay</td>
              <td>
                <span className="inline-math"><InlineMath
                  math={String.raw`
                    C(d)=\alpha e^{-\beta d}+(1-\alpha)\dfrac{1}{1+\gamma d^2}
                  `}
                /></span>
                <ul>
                  <li>Let {"\n"}
                    <span className="inline-math"><InlineMath
                      math={String.raw`
                        \alpha
                      `}
                    /></span> be the weight of short-term memory behavior (initial rapid decay)
                  </li>
                  <li> Let {"\n"}
                    <span className="inline-math"><InlineMath
                      math={String.raw`
                        \beta
                      `}
                    /></span> be the rate of exponential decay for short-range context
                  </li>
                  <li>Let {"\n"}
                    <span className="inline-math"><InlineMath
                      math={String.raw`
                        \gamma
                      `}
                    /></span> be the rate of long-term degradation following a polynomial pattern
                  </li>
                  <li>Let {"\n"}
                    <span className="inline-math"><InlineMath
                      math={String.raw`
                        d
                      `}
                    /></span> be the number of steps between producing a fact and using it
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        <br></br>
        <table style={{width:"70%"}}>
          <caption>Proposed Success Criteria for Context Preservation Metrics</caption>
          <thead>
            <tr>
              <th>Test Type</th>
              <th>CRA</th>
              <th>STA</th>
              <th>C(d)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Short Range</td>
              <td><InlineMath
                math={String.raw`\geq 0.95`}
              /></td>
              <td><InlineMath
                math={String.raw`\geq 0.90`}
              /></td>
              <td><InlineMath
                math={String.raw`\geq 0.85`}
              />, {"\n"} d = 1-3</td>
            </tr>
            <tr>
              <td>Middle Range</td>
              <td><InlineMath
                math={String.raw`\geq 0.85`}
              /></td>
              <td><InlineMath
                math={String.raw`\geq 0.90`}
              /></td>
              <td><InlineMath
                math={String.raw`\geq 0.70`}
              />, {"\n"} d = 4-7</td>
            </tr>
            <tr>
              <td>Long Range</td>
              <td><InlineMath
                math={String.raw`\geq 0.70`}
              /></td>
              <td><InlineMath
                math={String.raw`\geq 0.90`}
              /></td>
              <td><InlineMath
                math={String.raw`\geq 0.70`}
              />, {"\n"} d <InlineMath
                math={String.raw`\geq`} 
              /> 8</td>
            </tr>
          </tbody>
        </table>
        <p><small><i>Note. </i>Adapted from Meshkov, 2026</small></p>
      </Accordion>
      
    </div>
    );
}