export default function Complexity() {
    return(
        <div>
          <p>
            Kasirzadeh and Gabriel (2025) propose a five-level gradation of goal complexity.
          </p>
          <br></br>
          <table>
            <thead>
              <tr>
                <th>Level</th>
                <th>Description</th>
                <th>Computational Space</th>
                <th>Systems Theory</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1: Minimal</td>
                <td>
                  The agent is able to pursue a single unified goal in a fairly direct manner.
                </td>
                <td>
                  Goals typically correspond to problems within the P complexity class, where solutions can be identified in polynomial time using deterministic algorithms.
                </td>
                <td>
                  Goals are identified via their characteristic simple feedback loops, with minimal cross-component interactions, and tendency to exhibit highly predictable and deterministic response patterns.
                </td>
              </tr>
              <tr>
                <td>2: Low</td>
                <td>
                  The agent is able to pursue a single unified goal, but this involves a more complex sequence of action.
                </td>
                <td>
                  Goals typically correspond to problems within the P complexity class, where solutions can be identified in polynomial time using deterministic algorithms.
                </td>
                <td>
                  Goals are identified via their characteristic simple feedback loops, with minimal cross-component interactions, and tendency to exhibit highly predictable and deterministic response patterns.
                </td>
              </tr>
              <tr>
                <td>3: Intermediate</td>
                <td>
                  The agent is able to break down a complex goal into subgoals and pursue them in a fairly direct manner.
                </td>
                <td>
                  Goals often correspond to problems within the NP complexity class. The agent must explore a substantially expanded solution space with multiple potential pathways, frequently requiring heuristic approaches to navigate efficiently.
                </td>
                <td>
                  Goals exhibit moderate feedback loop density with non-trivial interactions between subcomponents, creating more nuanced and less predictable behavioural patterns that demonstrate incipient emergent properties.
                </td>
              </tr>
              <tr>
                <td>4: High</td>
                <td>
                  The agent is able to break down a complex goal into many different subgoals, where success depends upon balancing and sequencing subgoals, which may themselves be challenging to fulfill.
                </td>
                <td>
                  Goals frequently correspond to NP complexity classes, with very high computational resources for both planning and execution phases.
                </td>
                <td>
                  Goals have dense networks of interconnected feedback loops with significant cross-scale interactions and dependencies.
                </td>
              </tr>
              <tr>
                <td>5: Unbounded</td>
                <td>
                  The agent can achieve all of the preceding steps. It can also generate its own goal structures in an unbounded way and interpret underspecified objectives.
                </td>
                <td>
                  Capabilities correspond to problems that reach beyond traditional complexity classifications, such as undecidable problems
                </td>
                <td>
                  Capabilities exhibit emergence properties across multiple scales with autopoietic characteristics---the goal system becomes self-modifying and self-generating rather than merely self-organizing.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    );
}