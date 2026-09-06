export default function AgentArchitecture() {
    return(
        <div>
          <table>
            <thead>
              <tr>
                <th>Architecture Type</th>
                <th>Description</th>
                <th>Strengths</th>
                <th>Weaknesses</th>
              </tr>
            </thead>
            <tbody>
            <tr>
              <td>Deliberative</td>
              <td>Based on the physical-symbol system hypothesis</td>
              <td>Have internal, symbolic representations of their environments and the capacity to reason</td>
              <td>It is difficult to translate the real world into a symbolic representation, and to symbolically represent information about real-world processes.</td>
            </tr>
            <tr>
              <td>Reactive</td>
              <td>Grounded in the claims that intelligence is situated in teh world, and intelligent behavior is acquired from an agent's interaction with its environment</td>
              <td>Generate immediate responses to stimuli, based on their sets of condition-action rules</td>
              <td>Can only act in an environment or world state that was fully considered a priori</td>
            </tr>
            <tr>
              <td>Hybrid</td>
              <td>Combination of deliberative and reactive architecture</td>
              <td>Rapid responses and high-level planning</td>
              <td>More complex and thus more expensive to maintain and secure</td>
            </tr>
            </tbody>
          </table>
        </div>
    );
}