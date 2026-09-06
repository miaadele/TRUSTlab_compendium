import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function Robust() {
    return(
        <div>

      <p className="mt-4 text-sm leading-7 text-slate-600">
        If each task <i>i</i> is evaluated under perturbations <i>m</i>=1 with outcomes <span className="inline-math">
          <InlineMath
            math={String.raw`s_{i,m}`}
          /></span> (Xu et al., 2026):
      </p>
      <BlockMath
        math={String.raw`
          RobustSucc=\frac{1}{NM}
          \sum_{i=1}^N
          \sum_{m=1}^M
          s_{i,m}, \quad
          WorstSucc=\frac{1}{N}
          \sum_{i=1}^N
          \min s_{i,m}
        `}
      />
      <br></br>
      <h4 className="text-xl font-bold text-slate-900">
        Sumamary of Proposed Benchmarks to Evaluate Adversarial Robustiness
      </h4>
      <table>
        <thead>
          <tr>
            <td><b>Benchmark</b></td>
            <td><b>Use Case</b></td>
            <td><b>Robustness Metrics</b></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              AgentDojo, (Debenedetti et al., 2024)
            </td>
            <td>
              Evaluate the utility-security tradeoff of AI agent design during prompt injection attacks
            </td>
            <td>
              Benign utility, Utility under attack, Targeted attack success rate
            </td>
          </tr>

          <tr>
            <td>
              HarmBench (Mazeika et al., 2024)
            </td>
            <td>
              Evaluate automated red teaming and robust refusal; semantic and functional categorization of harmful behavior
            </td>
            <td>
              Attack success rate, Agreement rate of a classifier
            </td>
          </tr>

          <tr>
            <td>
              AdvBench (Uddin et al., 2025)
            </td>
            <td>
              Evaluate adversarial attacks on audio deepfake detection methods
            </td>
            <td>
              Accuracy, Area under the receiver operating characteristic curve, Equal error rate, Mean square error, Perceptual evaluation speech quality, Short-time objective intelligibility
            </td>
          </tr>

          <tr>
            <td>
              JailbreakBench (Chao et al., 2024)
            </td>
            <td>
              Reference the repository of jailbreak artifacts and the standardized pipeline for red-teaming LLMs
            </td>
            <td>
              Agreement rate of a classifier, false positive rate of a classifier, False negative rate of a classifier
            </td>
          </tr>

          <tr>
            <td>
              CyberSecEval (Wan et al., 2024)
            </td>
            <td>
              Evaluate 3rd party risks of offensive cyber operations and application risks of adversarial attacks
            </td>
            <td>
              Overall success attack rate
            </td>
          </tr>
        </tbody>
      </table>

      <br></br>
      <h4 className="text-xl font-bold text-slate-900">
        Equations for Fault, Environment, and Prompt Robustness Metrics
      </h4>
      <table>
        <thead>
          <tr>
            <td><b>Equation</b></td>
            <td><b>Measurement Protocol</b></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span class="inline-math">
                <InlineMath
                  math={String.raw`
                    R_{fault}=\min \left(
                      \frac{
                        Acc_{fault}
                      }{
                        Acc_0
                      }, 1
                    \right)
                  `}
                />
              </span>
            </td>
            <td>Run all tasks under baseline conditions to get 
                <span className="inline-math">
                <InlineMath
                  math={String.raw`
                    Acc_0=\frac{1}{N}\sum_iy_i^{(0)}
                  `}
                />. </span>Re-run under fault injection to get <span className="inline-math">
                  <InlineMath
                    math={String.raw`Acc_{fault}`}
                  />. Compute clamped ratio.
              </span>
            </td>
          </tr>

          <tr>
            <td>
              <span className="inline-math">
                <InlineMath
                  math={String.raw`
                    R_{envt}=\min \left(
                      \frac{
                        Acc_{pert}
                      }{
                       Acc_0
                      }, 1
                    \right)
                  `}
                />
              </span>
            </td>
            <td> Run all tasks under baseline conditions to obtain
                <span className="inline-math">
                <InlineMath
                  math={String.raw`
                    Acc_0
                  `}
                />
              </span>. Re-run with environment perturbations to obtain <span className="inline-math">
                <InlineMath
                  math={String.raw`
                    Acc_{pert}
                  `}
                />. Compute clamped ratio.
              </span>
            </td>
          </tr>

          <tr>
            <td>
              <span className="inline-math">
                <InlineMath
                  math={String.raw`
                    R_{prompt}=\min \left(
                      \frac{
                        Acc_{para}
                      }{
                        Acc_0
                      }, 1
                    \right)
                  `}
                />
              </span>
            </td>
            <td> Run all tasks under baseline conditions to obtain
                <span className="inline-math">
                <InlineMath
                  math={String.raw`
                    Acc_0
                  `}
                />
              </span>. Re-run with semantically equivalent prompt paraphrases to obtain
                <span className="inline-math">
                <InlineMath
                  math={String.raw`
                    Acc_{para}
                  `}
                />
              </span>. Compute clamped ratio.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    );
}