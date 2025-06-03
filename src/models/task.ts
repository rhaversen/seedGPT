// Description: Scoped, executable, evaluable unit of work
// Created by: Strategic Planning
// Converted by: All other departments approve individually, split into subtasks or multiple tasks by Strategic Planning

// A task becomes eligible for execution when:
// It is open
// It has OKs from all departments
// All its sub-tasks are done
// It’s scoped small enough to execute in one iteration

// Stage    Trigger Agent	Action
// task:eligible	All departments OK	Ready for execution
// task:done	After execution	Archived, DAG updated

// Can have subtasks

// Short, implementable in a single turn, well documented changes, comprehensive context.
// Completely ready to be given to the builder