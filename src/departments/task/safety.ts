// Skepticism & Safety
// Finds security, ethical, and stability risks
// Finds security risks, ethical issues, hidden complexity
// Could this go wrong?

// Approves only if task avoids fragility, risks, or regressions
// Important for tasks with systemic effects (e.g., memory, agent creation)

// Threat & Risk Modeling
// Add Subtasks like “Perform threat model for new API endpoint” or “Define data privacy requirements.”
// Split big tasks into “security design” + “feature implementation.”

// Dependency & Supply-Chain Checks
// Propose Updates to list any third-party libraries or services the task depends on, so they can be vetted.
// Insert “verify vendor credentials” or “pin dependency versions.”

// Input Validation & Error-Handling
// Propose Updates to the description to require input sanitization, authentication checks, rate-limits, or fallback behavior.
// Add subtasks like “write fuzz tests” or “define rejection responses.”

// Compliance & Policy Verification
// Add tasks around GDPR, HIPAA, or internal policy reviews if user data is involved.
// Request Changes if a task touches regulated data without privacy safeguards.

// Operational Resilience
// Propose Updates for monitoring, alerting, and roll-back plans (e.g. “set up Prometheus alert on error rate”).
// Add “load‐test this feature under peak traffic” as a subtask.