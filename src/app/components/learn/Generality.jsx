export default function Generality() {
    return(
        <div>
          <p>
            Morris et al. (2023) and Kasirzadeh and Gabriel (2025) define five gradations of generality. Morris et al. (2023) differentiate the degrees of generality based on the minimum performance threshold across tasks, while Kasirzadeh and Gabriel (2025) focus on the amount and diversity of tasks that an agent masters.
          </p>
          <br></br>
          <h4 className="text-xl font-bold text-slate-900">
            Benchmark for Measuring AI Agents’ Minimum Performance Threshold
          </h4>
          <table>
            <thead>
              <tr>
                <th>Level</th>
                <th>Minimum Performance Threshold</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1: Emerging</td>
                <td>equal to or somewhat better than an unskilled human</td>
              </tr>
              <tr>
                <td>2: Competent</td>
                <td>at least 50th percentile of skilled adults</td>
              </tr>
              <tr>
                <td>3: Expert</td>
                <td>at least 90th percentile of skilled adults</td>
              </tr>
              <tr>
                <td>4: Exceptional</td>
                <td>at least 99th percentile of skilled adults</td>
              </tr>
              <tr>
                <td>Superhuman</td>
                <td>Outperforms 100% of humans</td>
              </tr>
            </tbody>
          </table>
          <br></br>
          <h4 className="text-xl font-bold text-slate-900">
            Degrees of AI Agent Generality, Based on Task Mastery
          </h4>
          <table>
            <thead>
              <tr>
                <th style={{width:"25%"}}>Level</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Single specialty</td>
                <td>The agent can master one specific task, such as a single game, but cannot transfer its capabilities to even closely related domains.</td>
              </tr>
              <tr>
                <td>Task domain mastery</td>
                <td>The agent demonstrates mastery across a closely related set of tasks, such as playing board games, that share a common structure and type of objective.</td>
              </tr>
              <tr>
                <td>Multiple task domain mastery</td>
                <td>The agent can operate successfully across different task domains involving different cognitive capabilities, for example, those that involve linguistic, logical, and creative elements.</td>
              </tr>
              <tr>
                <td>Majority task domain mastery</td>
                <td>The agent can successfully operate across the majority of human cognitive task domains</td>
              </tr>
              <tr>
                <td>Fully general AI system</td>
                <td>The agent can fulfil the entire suite of human cognitive tasks across all domains.</td>
              </tr>
            </tbody>
          </table>
    </div>
    );
}