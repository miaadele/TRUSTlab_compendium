import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function Resilience() {
    return(
        <div>
      <h4 className="text-xl font-bold text-slate-900">
        Resilience and Adaptation Metrics
      </h4>

      <table>
        <thead>
          <tr>
            <th>Metric</th>
            <th>Description</th>
            <th style={{width:"40%"}}>Equation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Multi-step Task Resilience (MTR)</td>
            <td>
              The percentage of multi-step tasks where the agent autonomously and successfully recovers from initial errors or ambiguities
            </td>
            <td>
              <BlockMath
                math={String.raw`
                  MTR=\dfrac{\text{\# of Tasks with Successful Self-Recovery}}{\text{Total Multi-Step Tasks}}\times 100
                `}
              />
            </td>
          </tr>
          <tr>
            <td>Chain Robustness Score (CRS)</td>
            <td>
              The percentage of times where the agent maintains logical consistency across multi-hop workflows
            </td>
            <td>
              <BlockMath
                math={String.raw`
                  CRS=\dfrac{\sum \text{Successful Chains } (n\geq 3 \text{ steps})}{\text{Total Chains with } n\geq 3 \text{ steps}}\times 100
                `}
              />
            </td>
          </tr>
          <tr>
            <td>Adaptability Delta (AD)</td>
            <td>
              Quantifies the agent’s learning capacity and ability to adapt to new domains and schemas
            </td>
            <td>
              <BlockMath
                math={String.raw`
                  AD=Performance_{\text{few-shot}}-Performance_{\text{zero-shot}}
                `}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    );
}