import React from "react";

const GoalsList = ({
  goal: { goaltarget, user_id, name, balance, expires_at }
}) => {
  return (
    <button
      type="button"
      class="list-group-item list-group-item-action active btn-warning"
    >
      {name}
    </button>
  );
};

export default GoalsList;
