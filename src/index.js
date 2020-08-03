/**
 * Import custom files
 */
const store = require("./redux/store");
const { budAdded, bugRemoved, bugResolved } = require("./redux/actions.js");

const unsubscribe = store.subscribe(() => {
  console.log("Store changed:", store.getState());
});

store.dispatch(budAdded("bug1"));
store.dispatch(budAdded("bug2"));
store.dispatch(budAdded("bug3"));

unsubscribe();

store.dispatch(bugRemoved(3));

store.dispatch(bugResolved(2));

console.table(store.getState());
