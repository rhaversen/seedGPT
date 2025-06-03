// Ensures tasks don’t degrade maintainability, clarity, or performance
// Ensures task is maintainable, efficient, testable
// Will it degrade code?

// Surface technical dependencies
// Are there unstated library or framework versions required?
// It may add dependencies or split the task (e.g. “upgrade DB driver” before “add X feature”).

// Plan for testing & validation
// Does the task include performance benchmarks, error-handling scenarios, or CI/CD gates?
// If absent, it will insert subtasks like “create integration tests” or “set up CI workflow.”

// Guard against tech-debt
// Will the proposed change introduce complexity or duplicate existing functionality?
// It can request changes or split the task into “refactor legacy module” + “implement new feature.”