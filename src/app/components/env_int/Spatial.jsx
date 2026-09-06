export default function Spatial() {
    return(
        <div>
      <p>
        Felicia et al.(2026) propose a three-level scale of spatial tasks: micro-, meso-, and macro-spatial. Micro-spatial is centimeter-scale, meso-spatial is meter-scale, and macro-spatial is kilometer-scale. They posit, “Scale mismatch is a primary source of transfer failure in spatial AI,” because agents trained at one spatial scale fail when deployed at another (Felicia et al., 2026). For example, an agent that was trained for micro-spatial tasks like surgical suturing will fail at macro-spatial tasks like urban planning. This failure is due to the discrepancy in spatial reasoning skills of agents trained across different spatial scales.
      </p><br></br>
      <p>
        Spatial reasoning and persistent spatial knowledge is achieved by memory systems. Felicia et al. (2026) posit that memory systems may be short-term, long-term, episodic, or spatial. Episodic and spatial memory are most relevant to an agent’s completion of spatial tasks. 
      </p><br></br>
      <p>
        Episodic memory records what happened where, and spatial memory encodes the structure of where itself (Felicia et al., 2026). Spatial memory stores geometric and topological relationships: landmarks (e.g., “the bank”) or spatial references (e.g., “between the lamppost and the car”) can be directly localized using natural language (Felicia et al., 2026; Huang et al., 2023; Ramakrishnan et al., 2022). Episodic memory stores specific experiences and events; it enables agents to remember visited locations, objects, and successful action sequences (Felicia et al., 2026). In the brain, episodic memory is implemented by episodic control, which is a form of fast learning that records highly rewarding experiences and replays sequences of actions that led to them (Blundell et al., 2016; Pritzel et al., 2017). Similarly, episodic control is implemented in agents to enable recent experiences to modify their future behavior and, ultimately, quicken their learning (Pritzel et al., 2017; Savinov et al., 2018).
      </p>
    </div>
    );
}