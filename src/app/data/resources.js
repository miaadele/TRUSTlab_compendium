// app/data/resources.js

export const dimensions = [
  {
    id: "env_int",
    name: "Environmental Interaction",
    description: "Environmental interaction refers to an agent's perception, understanding, and manipulation of its environment.",

    resources: [
      {
        id: "arch",
        title: "Agent Architecture",
        type: "table",
        source: "ipsum lorem",
        description:
          "Agent architecture describes the hardware, software, and data infrastructure of a system.",
        content: "agent_arch"
      },

      {
        id: "nav",
        title: "Navigation",
        type: "equation", 
        source: "ipsum lorem",
        description:
          "Navigation describes goal-directed movement through environments",
        content: "navigation"
      },

      {
        id: "tool_use",
        title: "Tool-Use",
        type: "equation",
        source: "ipsum lorem",
        description:
          "Tool-use characterizes a tool-using agent's understanding of object affordances and function calling.",
        content: "tools"
      },

      {
        id: "spa_ana",
        title: "Spatial Analysis",
        type: "table",
        source: "ipsum lorem",
        description:
          "Spatial analysis describes an agent's capacity for spatial reasoning and representation.",
        content: "spatial"
      },

      {
        id: "consistency",
        title: "Consistency",
        type: "table",
        source: "ipsum lorem",
        description:
          "Consistency is a measure of an agent's reproducibility of results under identical conditions.",
        content: "consistency"
      },

      {
        id: "robust",
        title: "Robustness",
        type: "equation",
        source: "ipsum lorem",
        description:
          "Robustness is an agent's ability to weather the deviations in conditions between its training and deployment environments.",
        content: "robust"
      },
    ],
  },

  {
    id: "learning",
    name: "Learning and Adaptation",
    description: "The learning and adaptation dimension refers to an agent's ability to utilize resources to perform tasks, and to adjust its behaviors to fit new conditions.",

    resources: [
      {
        id: "efficiency",
        title: "Efficiency and Cost",
        type: "equation",
        source: "ipsum lorem",
        description:
          "Efficiency and cost metrics measure the time and resources that an agent uses to complete a task.",
        content: "efficiency"
      },

      {
        id: "traj",
        title: "Trajectory and Planning",
        type: "equation",
        source: "ipsum lorem",
        description:
          "Planning includes two stages: plan formulation and plan reflection.",
        content: "trajectory"
      },

      {
        id: "reliability",
        title: "Reliablity",
        type: "equation",
        source: "ipsum lorem",
        description:
          "Reliability refers to an agent's consistent performance over time and across repetitions.",
        content: "reliability"
      },

      {
        id: "capabilities",
        title: "Agentic Capabilities",
        type: "table",
        source: "ipsum lorem",
        description:
          "A hierarchy of agentic capabilities can be used to evaluate the amount of economically useful work that AI agents can perform.",
        content: "capabilities"
      },

      {
        id: "predictability",
        title: "Predictability",
        type: "equation",
        source: "ipsum lorem",
        description:
          "Predictability measures an agent's confidence in whether its output is reliable.",
        content: "predictability"
      },

      {
        id: "generality",
        title: "Generality",
        type: "table",
        source: "ipsum lorem",
        description:
          "Generality characterizes an AI agent's ability to operate across different contexts and tasks.",
        content: "generality"
      },
    ],
  },

  {
    id: "autonomy",
    name: "Autonomy",
    description: "Autonomy characterizes an agent's ability to operate independent of human intervention or guidance.",

    resources: [
      {
        id: "safety",
        title: "Safety Metrics",
        type: "equation",
        source: "ipsum lorem",
        description:
          "As AI agents gain autonomy, harmful behaviors become more likely and AI safety more critical. AI safety quantifies the severity and frequency of harmful behaviors.",
        content: "safety"
      },
    ],
  },

  {
    id: "goal",
    name: "Goal-Directed Behavior",
    description: "This dimension characterizes an agent's capacity to form, understand, and pursue objectives.",
    resources: [
      {
        id: "intent",
        title: "Intentionality",
        type: "table",
        source: "ipsum lorem",
        description:
          "Intentionality is a behavioral profile characterized by purpose, foresight, volition, temporal commitment, and coherence.",
        content: "intentionality"
      },

      {
        id: "goal_complex",
        title: "Goal Complexity",
        type: "table",
        source: "ipsum lorem",
        description:
          "Goal complexity is evaluated based on hierarchical planning, plan length of the required tasks, and multi-objectivity.",
        content: "complexity"
      },

      {
        id: "goal_exec",
        title: "Goal Execution",
        type: "equation",
        source: "ipsum lorem",
        description:
          "Goal execution metrics describe an AI system's end-to-end task performance. We categorize these metrics as task-based or resource-based.",
        content: "execution"
      },

      {
        id: "resilience",
        title: "Resilience and Adaptation",
        type: "equation",
        source: "ipsum lorem",
        description:
          "Resilience is the ability of systems to the ability of systems to withstand and recover from disruptive events. The adaptation aspect of resilience refers to a reinforcement effect.",
        content: "resilience"
      },
    ],
  },

  {
    id: "temp_coh",
    name: "Temporal Coherence",
    description: "Temporal coherence refers to an agent's ability to maintain logical consistency through memory, context, and intent.",

    resources: [
      {
        id: "coherence",
        title: "Coherence",
        type: "equation",
        source: "ipsum lorem",
        description:
          "Coherence is a structural requirement for an artificial system, made possible by an active processing window (APW) that defines the \“relevant now\”.",
      },

      {
        id: "hysteresis",
        title: "Hysteresis",
        type: "equation",
        source: "ipsum lorem",
        description:
          "Hysteresis is a physics concept that describes the lag between and effect and its cause.",
      },
    ],
  },
];

