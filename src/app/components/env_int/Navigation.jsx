import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

export default function Navigation() {
    return(
        <div>
      <h4 className="text-xl font-bold text-slate-900">Episodic Success</h4>
      <p>
        Navigation benchmarks typically include the agent’s episodic success, normalized by inverse path length (SPL).
      </p>
      <BlockMath 
        math={String.raw`
        SPL = \frac{1}{N}\sum_{i=1}^{N}
        S_i \frac{\ell_i}{\max(p_i,\ell_i)}
      `}
      />
      <p>
        where <i>N</i> is the number of test episodes. Equipped with a binary definition of episodic success, the agent is tasked with navigating to a goal in each of the <i>N</i> episodes. Let <InlineMath math="\ell_i"/> be the shortest-path distance from the agent’s starting position to the goal in episode <i>i</i>, and let <InlineMath math="p_i"/> be the length of the path actually taken by the agent in this episode. Let <InlineMath math="S_i"/> be a binary indicator of success for episode <i>i</i>.
      </p>
      <br></br>

      <h4 className="text-xl font-bold text-slate-900">
        Agent Navigation Visual-Language Models
      </h4>

      <table>
        <thead>
          <tr>
            <th>Navigation Type</th>
            <th>Model</th>
            <th>Unique Features</th>
          </tr>
        </thead>

        <tbody>
          <tr style={{backgroundColor: "#f0f9ff"}}>
            <td>Point-Goal</td>
            <td>Decentralized Distributed Proximal Policy Optimization {"\n"}
              <b>
                (DD-PPO)
              </b>, {"\n"} 
              <a href="https://arxiv.org/abs/1911.00357">
                   (Wijmans et al., 2020)
              </a>
            </td>
            <td>Near-linear scaling in an unseen environment</td>
          </tr>

          <tr>
            <td rowSpan="3">Object-Goal</td>
            <td>Zero-Shot Object-Goal Navigation {"\n"}
              <b>
                (ZSON)
              </b>, {"\n"}
              <a href="https://github.com/gunagg/zson">
                   (Majumdar et al., 2022)
              </a>
            </td>
            <td>Enables zero-shot navigation</td>
          </tr>
          <tr>
            <td>Contrastive Language-Image Pre-Training (CLIP) Navigation {"\n"}
              <b>
                (CLIP-Nav)
              </b>, {"\n"}
              <a href="https://arxiv.org/abs/2211.16649">
                   (Dorbala et al., 2022)
              </a>
            </td>
            <td>Uses vision-language models</td>
          </tr>
          <tr>
            <td>CLIP on Wheels {"\n"}
              <b>
                (CoW)
              </b>, {"\n"}
              <a href="https://deepai.org/publication/clip-on-wheels-zero-shot-object-navigation-as-object-localization-and-exploration">
                   (Gadre et al., 2022)
              </a>
            </td>
            <td>Searches for the first instance of any object</td>
          </tr>

          <tr style={{backgroundColor: "#f0f9ff"}}>
            <td rowSpan="3">Vision-Language</td>
            <td>Room-to-Room, {"\n"}
              <a href="https://arxiv.org/abs/1711.07280">
                   (Anderson et al., 2018)
              </a>
            </td>
            <td>First vision-language navigation benchmark</td>
          </tr>
          <tr style={{backgroundColor: "#f0f9ff"}}>
            <td> Remote Embodied Visual Referring Expression in Real Indoor Environments {"\n"}
              <b>
                (REVERIE)
              </b>, {"\n"}
              <a href="https://arxiv.org/abs/1904.10151">
                   (Qi et al., 2020)
              </a>
            </td>
            <td>Adds object grounding</td>
          </tr>
          <tr style={{backgroundColor: "#f0f9ff"}}>
            <td>Vision-and-Language Navigation in Continuous Environments {"\n"}
              <b>
                (VLN-CE)
              </b>,  {"\n"}
              <a href="https://github.com/jacobkrantz/VLN-CE">
                   (Krantz et al., 2020)
              </a>
            </td>
            <td>Extends to continuous environments</td>
          </tr>
        
        <tr>
          <td>
            Audio-Visual
          </td>
          <td> SoundSpaces, {"\n"}
            <a href="https://arxiv.org/abs/1912.11474">
              (Chen et al., 2020)
            </a>
          </td>
          <td>
              First audio-visual navigation model
          </td>
        </tr>

        <tr style={{backgroundColor: "#f0f9ff"}}>
          <td rowSpan = "2">Audio-Embodied Question Answering </td>
          <td> EXPloration-awaRe Embodied queStion anSwering Benchmark, {"\n"}
            <b>
              (EXPRESS-Bench)
            </b>, {"\n"}
            <a href="https://arxiv.org/abs/2503.11117">
              (Jiang et al., 2025)
            </a>
          </td>
          <td>
            Evaluates agents’ exploration efficiency and reasoning capabilities
          </td>
        </tr>

        <tr style={{backgroundColor: "#f0f9ff"}}>
          <td> Noisy Embodied Question Answering, {"\n"}
            <b>
              (Noisy EQA)
            </b>, {"\n"}
            <a href="https://arxiv.org/abs/2412.10726">
              (Wu et al., 2024)
            </a>
          </td>
          <td>
            Measures noise detection capability and answer quality
          </td>
        </tr>

        <tr>
          <td rowSpan = "2">Visual Question Answering </td>
          <td> Scan Question Answering, {"\n"}
            <b>
              (ScanQA)
            </b>, {"\n"}
            <a href="https://arxiv.org/abs/2112.10482">
              (Azuma et al., 2022)
            </a>
          </td>
          <td>
            Addresses the problems of conventional 2D-AQ models
          </td>
        </tr>

        <tr>
          <td> Object-Semantics Aligned Pre-training for Vision-Language Tasks, {"\n"}
            <b>
              (Oscar)
            </b>, {"\n"}
            <a href="https://www.ecva.net/papers/eccv_2020/papers_ECCV/papers/123750120.pdf">
              (Li et al., 2020)
            </a>
          </td>
          <td>
            Creates a new method to ease the learning of alignments
          </td>
        </tr>

        </tbody>
      </table>
    </div>
    );
}