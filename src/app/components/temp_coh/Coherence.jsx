import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function Coherence() {
    return(
        <div>
      <h4 className="text-xl font-bold text-slate-900">
        Drift and Instability Metrics
      </h4>

      <table>
        <thead>
          <tr>
            <th>Metric</th>
            <th>Description and Equation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>State Vector Representation</td>
            <td>
              Let the system’s internal operational state at inference step <i>i</i> beb represented as a high-dimensional vector {"\n"}
              <span className="inline-math">
                <InlineMath
                  math={String.raw`\mathbf{s}_i \in \mathbb{R}^n`}
                /> {"\n"}</span> where {"\n"}
              <span className="inline-math">
              <InlineMath
                math={String.raw`
                  \mathbf{s}_i
                `} 
              /></span>{"\n"} 
              encodes the active processing window, including attention distributions, anchor weights, and active semantic representations. A fixed reference configuration "Gold Standard" is defined as
              <span className="inline-math">
              <InlineMath
                math={String.raw`
                  \mathbf{s}_0
                `} 
              /></span>{"\n"}  representing the system’s initialized or constitutionally valid state.
            </td>
          </tr>
          <tr>
            <td>Coherence Deviation</td>
            <td> The deviation between the current state and the reference state. 
               <span className="inline-math">
                <InlineMath
                  math={String.raw`D_i=\lVert s_i-s_0 \rVert_2`}
                />
              </span> {"\n"} where <span className="inline-math"><InlineMath
                math={String.raw`\lVert \cdot \rVert_2`}
              /></span> {"\n"}  denotes Euclidean distance. Alternatively, cosine divergence may be used:
              <BlockMath
                math={String.raw`
                  D_i^{cos}=1-\dfrac{s_i \cdot s_0}{\lVert s_i \rVert \lVert s_0 \rVert}
                `}
              />
            </td>
          </tr>
          <tr>
            <td>Drift Velocity</td>
            <td> Used to distinguish benign adaptation from dangerous drift:{"\n"} 
              <span className="inline-math">
                <InlineMath
                  math={String.raw`V_i=\dfrac{D_i-D_{i-1}}{\Delta i}`}
                />
              </span> {"\n"} High drift velocity indicates rapid structural change and reduced hysteresis.
            </td>
          </tr>
          <tr>
            <td>Drift Acceleration</td>
            <td>Persistent instability is detected via second-order change: {"\n"}
              <span className="inline-math">
                <InlineMath
                  math={String.raw`
                    A_i=\dfrac{V_i-V_{i-1}}{\Delta i}`}
                />
              </span> {"\n"} Positive acceleration over sustained intervals is a strong indicator of anchor failure and imminent temporal incoherence.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    );
}