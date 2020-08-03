const { BUG_ADDED, BUG_REMOVED, BUG_RESOLVED } = require("./actionTypes.js");

const budAdded = (description) => ({
  type: BUG_ADDED,
  payload: {
    description
  }
});

const bugRemoved = (id) => ({
  type: BUG_REMOVED,
  payload: {
    id
  }
});

const bugResolved = (id) => ({
  type: BUG_RESOLVED,
  payload: {
    id
  }
});

module.exports = { budAdded, bugRemoved, bugResolved };
