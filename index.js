// JavaScript Fundamentals

const courseInfo = {
  id: number,
  name: string,
};

const assignmentGroup= {
  id: number,
  name: string,
  // the ID of the course the assignment group belongs to
  course_id: number,
  // the percentage weight of the entire assignment group
  group_weight: number,
  assignments: [assignmentInfo],
};

const assignmentInfo = {
    "id": number,
    "name": string,
    // the due date for the assignment
    "due_at": Date string,
    // the maximum points possible for the assignment
    "points_possible": number,
  }

const learnerSubmission = {
    "learner_id": number,
    "assignment_id": number,
    "submission": {
      "submitted_at": Date string,
      "score": number
    }
}

function getLearnerData(CourseInfo, AssignmentGroup, [LearnerSubmission]) {
  const result= [];

  if (courseInfo.id !== assignmentGroup.course_id) {
    throw new error ("Invalid data: Assignment group doesn't match to this course.")
  }

 learnerSubmission.forEach((submissions) => {
  const learnerId = submissions.learner_id;
  const assignmentId = submissions.assignment_id;

  const assignment = assignmentGroup.assignments.find(
    (assignment) => assignment.id === assignmentId
  );

  // if the assignment is not due yet or the doesn't match skip
  //isAssignmentDue is function create later
  if (!assignment || !isAssignmentDue(assignment)) {
    continue;
  };


 });
 function isAssignmentDue(assignment) {
  const dueDate = new Date(assignment.due_at);
  const today = new Date();
  return dueDate <= today;
}

function isLate(dueDate, submittedAt) {
  const dueDateObj = new Date(dueDate);
  const submittedAtObj = new Date(submittedAt);
  return submittedAtObj > dueDateObj;
}

 

}