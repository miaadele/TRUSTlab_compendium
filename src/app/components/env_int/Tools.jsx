import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function Tools() {
    return(
        <div>

      <p>
        Tools represent functions that an AI agent can call. Tool-use characterizes a tool-using agent’s understanding of object affordances and function calling
      </p>
      <div>
        AlShikh et al. (2025)  proposes the Tool Dexterity Index (TDI) to assess agents’ abilities to intelligently use available tools. The potential tool use scores are +1 for “optimal use,” -1 for “misuse,” and -0.5 for “ignored better tool.”
        <BlockMath 
          math={String.raw
            `TDI= \dfrac{\Sigma\text{ Tool Use Scores}}{\text{Total Opportunities to Use Tools}}`
          }
        />
      </div>

      <p>
        MultiCAT-Bench is an open-source benchmark that provides a detailed categorization of ten tool-use agent evaluations
      </p>
      <br></br>
      <h4 className="text-xl font-bold text-slate-900">
        MultiCAT-Bench Evaluations
      </h4>

      <table>
        <thead>
          <tr>
            <td><b>Measure</b></td>
            <td colSpan="2"><b>Definition (Defn.) and Equation (Eq.)</b></td>
          </tr>
        </thead>
        <tbody>

          <tr style={{backgroundColor: "#f0f9ff"}}>
            <td rowSpan="2">
              Accuracy
            </td>
            <td><b>
              Defn.
            </b></td>
            <td>
              Percentage of fully correct tool calls
            </td>
          </tr>
          <tr style={{backgroundColor: "#f0f9ff"}}>
            <td><b>
              Eq.
            </b></td>
            <td> <span className="inline-math">
              <InlineMath 
                math={
                  String.raw`
                  Acc = \dfrac{N_{corr}}{N_{tasks}}
                  `
                }
              /></span>, where <span className="inline-math">
              <InlineMath
                math={
                  String.raw`N_{corr}`
                }
              /> </span> is the number of fully correct responses and <span className="inline-math">
              <InlineMath 
                math={
                  String.raw`N_{tasks}`
                }
              /></span> is the total number of tasks.
            </td>
          </tr>

          <tr>
            <td rowSpan="2">
              Overall Recall
            </td>
            <td><b>
              Defn.
            </b></td>
            <td>
              Average fraction of fully correct tool calls according to the ground truth
            </td>
          </tr>
          <tr>
            <td><b>
              Eq.
            </b></td>
            <td><span className="inline-math">
              <InlineMath 
                math={
                  String.raw`
                  Rec_o=
                  \dfrac{1}
                  {N_{tasks}}
                  \sum_{t\in T}
                  \dfrac{N_{corr\_tools}^t}
                  {N_{gt\_tools}^t}
                  `
                }
              /></span>, where <i>t</i> is a task chosen from the set of tasks <i>T</i> of length <span className="inline-math">
              <InlineMath
                math={String.raw`N_{tasks}`}
              /></span>, <span className="inline-math">
              <InlineMath
                math={String.raw`N_{gt\_tools}^t`}
              /></span> is the number of tools that need to be called in task <i>t</i>, and <span className="inline-math">
              <InlineMath
                math={String.raw`N_{corr\_tools}^t`}
              /></span> is the number of correctly called tools.
            </td>
          </tr>

          <tr style={{backgroundColor: "#f0f9ff"}}>
            <td rowSpan="2">
              Overall Precision
            </td>
            <td><b>
              Defn.
            </b></td>
            <td>
              Average fraction of fully correct tool calls among the called tools
            </td>
          </tr>
          <tr style={{backgroundColor: "#f0f9ff"}}>
            <td><b>
              Eq.
            </b></td>
            <td><span className="inline-math">
                <InlineMath 
                  math={
                    String.raw`
                    Pre_o=\dfrac{1}{N_{tasks}}\sum_{t\in T}\dfrac{N_{corr\_tools}^t}{N_{llm\_tools}^t}
                    `
                  }
                /></span>, where <span className="inline-math">
              <InlineMath
                math={
                  String.raw`
                    N_{llm\_tools}^t
                  `
                }
              /></span> is the number of tools called by the LLM.
            </td>
          </tr>

          <tr>
            <td rowSpan="2">
              Overall F1
            </td>
            <td><b>
              Defn.
            </b></td>
            <td>
              Average F1 score for fully correct tool calls
            </td>
          </tr>
          <tr>
            <td><b>
              Eq.
            </b></td>
            <td><span className="inline-math">
                <InlineMath 
                math={
                  String.raw`
                    F1_o=
                    \dfrac{1}
                      {N_{tasks}}
                    \sum_{t\in T}
                    \dfrac{2\cdot Rec_o^t\cdot Pre_o^t}
                      {Rec_o^t + Pre_o^t}
                  `
                }
              /></span>, where <span className="inline-math">
              <InlineMath
                math={
                  String.raw`Rec_o^t`
                }
              /></span> and <span className="inline-math">
              <InlineMath
                math={
                  String.raw`Pre_o^t`
                }
              /></span> are the Overall Recall and Overall Precision values computed for task <i>t</i>. If both recall and precision are equal to 0, the F1 score for the task is defined as 0.
            </td>
          </tr>

          <tr style={{backgroundColor: "#f0f9ff"}}>
            <td rowSpan="2">
              ToolNameRecall
            </td>
            <td><b>
              Defn.
            </b></td>
            <td>
              Average fraction of correctly identified tool names according to the ground truth
            </td>
          </tr>
          <tr style={{backgroundColor: "#f0f9ff"}}>
            <td><b>
              Eq.
            </b></td>
            <td><span className="inline-math">
                <InlineMath 
                math={
                  String.raw`
                    Rec_{tn}=
                    \dfrac{1}
                      {N_{tasks}}
                    \sum_{t\in T}
                    \dfrac{N_{corr\_tool\_names}^t}
                      {N_{gt\_tools}^t}
                  `
                }
                /></span>, where <span className="inline-math">
                <InlineMath
                  math={String.raw`N_{corr\_tool\_names}^t`}
                /></span> is the number of correctly identified tool names. If the model made no calls when they were required, the metric value is 0.
            </td>
          </tr>

          <tr>
            <td rowSpan="2">
              ToolName Precision
            </td>
            <td><b>
              Defn.
            </b></td>
            <td>
              Average fraction of correctly identified tool names among the called tools
            </td>
          </tr>
          <tr>
            <td><b>
              Eq.
            </b></td>
            <td><span className="inline-math">
                <InlineMath 
                math={
                  String.raw`
                    Pre_{tn}=
                    \dfrac{1}
                      {N_{tasks}}
                    \sum_{t\in T}
                    \dfrac{N_{corr\_tools}^t}
                      {N_{llm\_tools}^t}
                  `
                }
              /></span>
            </td>
          </tr>

          <tr style={{backgroundColor: "#f0f9ff"}}>
            <td rowSpan="2">
              ToolName F1
            </td>
            <td><b>
              Defn.
            </b></td>
            <td>
              Average F1 score for correctly identified tool names
            </td>
          </tr>
          <tr style={{backgroundColor: "#f0f9ff"}}>
            <td><b>
              Eq.
            </b></td>
            <td><span className="inline-math">
                <InlineMath 
                math={
                  String.raw`
                    F1_{tn}=
                    \dfrac{1}
                      {N_{tasks}}
                    \sum_{t\in T}
                    \dfrac{2\cdot Rec_{tn}^t\cdot Pre_{tn}^t}
                      {Rec_{tn}^t + Pre_{tn}^t}
                  `
                }
              /></span>, where <span className="inline-math">
              <InlineMath
                math={String.raw`Rec_{tn}^t`}
              /></span> and <span className="inline-math">
              <InlineMath
                math={String.raw`Pre_{tn}^t`}
              /></span> are the ToolName Recall and ToolName Precision values computed for task <i>t</i>. If both recall and precision are equal to 0, the F1 score for the task is defined as 0.
            </td>
          </tr>

          <tr>
            <td rowSpan="2">
              Arguments Recall
            </td>
            <td><b>
              Defn.
            </b></td>
            <td>
              dfraction of correctly extracted arguments from the ground truth
            </td>
          </tr>
          <tr>
            <td><b>
              Eq.
            </b></td>
            <td><span className="inline-math">
                <InlineMath 
                math={
                  String.raw`
                    Rec_{\mathrm{args}}=
                      \dfrac{1}{N_{\mathrm{tasks}}}
                      \sum_{t\in T}
                       \left(
                          \dfrac{1}
                              {N_{\mathrm{matched}}^t}
                          \sum_{c\in C_{\mathrm{matched}}}
                          \dfrac{N_{\mathrm{corr\_args}}^{t,c}}
                              {N_{\mathrm{gt\_args}}^{t,c}}
                        \right)
                  `
                }
              /></span>
            </td>
          </tr>

          <tr style={{backgroundColor: "#f0f9ff"}}>
            <td rowSpan="2">
              Arguments Precision
            </td>
            <td><b>
              Defn.
            </b></td>
            <td>
              Fraction of correctly extracted arguments from the model’s output
            </td>
          </tr>
          <tr style={{backgroundColor: "#f0f9ff"}}>
            <td><b>
              Eq.
            </b></td>
            <td><span className="inline-math">
                <InlineMath 
                math={
                  String.raw`
                    Pre_{\mathrm{args}}=
                      \dfrac{1}{N_{\mathrm{tasks}}}
                      \sum_{t\in T}
                      \left(
                        \dfrac{1}
                          {N_{\mathrm{matched}}^t}
                        \sum_{c\in C_{\mathrm{matched}}}
                        \dfrac{N_{\mathrm{right\_args}}^{t,c}}
                          {N_{\mathrm{llm\_args}}^{t,c}}
                      \right)
                  `
                }
              /></span>
            </td>
          </tr>

          <tr>
            <td rowSpan="2">
              Arguments F1
            </td>
            <td><b>
              Defn.
            </b></td>
            <td>
              Average F1 score for correctly extracted arguments with respect to correctly identified tools
            </td>
          </tr>
          <tr>
            <td><b>
              Eq.
            </b></td>
            <td><span className="inline-math">
                <InlineMath 
                  math={
                  String.raw`
                    F1_{args}=
                      \dfrac{1}
                          {N_{tasks}}
                      \sum_{t\in T}
                      \dfrac{2\cdot Rec_{args}^t\cdot Pre_{args}^t}
                        {Rec_{args}^t + Pre_{args}^t}
                  `
                  }
                /></span>, where <span className="inline-math">
              <InlineMath 
                math={String.raw`Rec_{args}^t`}
              /></span> and <span className="inline-math">
              <InlineMath 
                math={String.raw`Pre{args}^t`}
              /></span> are the Arguments Recall and Arguments Precision values computed for task <i>t</i>. If both recall and precision are equal to 0, the F1 score for the task is defined as 0.
            </td>
          </tr>

        </tbody>
      </table>
      <p><small><i>Note. </i>Adapted from Vyatkin et al., 2026.</small></p>
    </div>
    );
}