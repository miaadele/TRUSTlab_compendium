import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function Predictability() {
    return(
        <div>
     
      <p>
        Predictability consists of calibration, discrimination, and the Brier score. Calibration
        (<span className="inline-math"><InlineMath
          math={String.raw`P_{cal}`}
        /></span>) measures the difference between stated confidence levels and empirical success rates.
        Discrimination (<span className="inline-math"><InlineMath
          math={String.raw`P_{AUROC}`}
        /></span>) measures whether confidence scores successfully separate successes from failures.
        The Brier score (<span className="inline-math"><InlineMath
          math={String.raw`P_{brier}`}
        /></span>) jointly measures calibration and discrimination (Rabanser et al., 2026).
      </p>
      <br></br>
       <h4 className="text-xl font-bold text-slate-900">
        Equations for Predictability Metrics
      </h4>

      <table>
        <thead>
          <tr>
            <th style={{width:"25%"}}>Equation</th>
            <th>Measurement Protocol</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <BlockMath
                math={String.raw`
                  P_{cal}=1-\sum_{b=1}^B \frac{n_b}{N}\left\lvert \bar{y}_b-\bar{c}_b \right\rvert
                `}
              />
            </td>
            <td> Collect confidence {"\n"}
              <InlineMath
                math={String.raw`c_i \in [0,1]`}
              /> {"\n"}
              and outcome {"\n"}
              <InlineMath
                math={String.raw`y_i \in \{0,1\}`}
              />{"\n"}
              per task;
              partition into <i>B</i> bins by confidence.
              For bin <i>b</i> with
             {"\n"} <InlineMath
                math={String.raw`n_b`}
              />{"\n"} samples,
              compute difference between mean confidence
              {"\n"}<InlineMath
                math={String.raw`
                  \bar{c}_b=\frac{1}{n_b}\sum_{i\in b} c_i
                `}
              />{"\n"} and accuracy 
              {"\n"}<InlineMath
                math={String.raw`
                  \bar{y}_b=\frac{1}{n_b}\sum_{i\in b} y_i
                `}
              />{"\n"} (i.e., Expected Calibration Error)
            </td>
          </tr>

          <tr>
            <td>
              <BlockMath
                math={String.raw`
                  P_{AUROC}= \dfrac{\sum_{i:y_i=1}\sum_{j:y_j=0} \mathbf{1}[c_i>c_j]}{n_{succ}\cdot n_{fail}}
                `}
              />
            </td>
            <td> Collect confidence
              {"\n"}<InlineMath
                math={String.raw`c_i`}
              />{"\n"} and outcome 
              {"\n"} <InlineMath
                math={String.raw`y_i`}
              />{"\n"} for each task. 
              Let
              {"\n"}<InlineMath
                math={String.raw`n_{succ}=\sum_i y_i`}
              />{"\n"} and <InlineMath
                  math={String.raw`n_{fail}=N-n_{succ}`}
              />.
              Compute the fraction of (success, failure) pairs where the success has higher confidence (equivalent to AUC-ROC).
            </td>
          </tr>

          <tr>
            <td>
              <BlockMath
                math={String.raw`
                  P_{brier}=1-\frac{1}{T}\sum_{i=1}^T (c_i-y_i)^2
                `}
              />
            </td>
            <td> Collect confidence
              {"\n"}<InlineMath
                math={String.raw`c_i \in [0,1]`}
              />{"\n"} and outcome
              {"\n"}<InlineMath
                math={String.raw`y_i \in \{0,1\}`}
              />{"\n"} for each task 
              {"\n"}<InlineMath
                math={String.raw`i \in \{1,...,T\}`}
              />{"\n"}.
              Compute mean squared error and subtract from 1.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    );
}