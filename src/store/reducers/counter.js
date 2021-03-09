const initialState = {
  counters: [],
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COUNTER": {
      return {
        counters: [...state.counters, action.counter],
      };
    }
    case "INCREMENT": {
      const initCounters = [...state.counters];
      const result = initCounters.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            value: item.value + item.change,
          };
        } else {
          return item;
        }
      });
      return {
        counters: result,
      };
    }
    case "DECREMENT": {
      const initCounters = [...state.counters];
      const result = initCounters.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            value: item.value - item.change,
          };
        } else {
          return item;
        }
      });
      return {
        counters: result,
      };
    }
    case "CHANGE_INCREMENTED": {
      const initCounters = [...state.counters];
      const result = initCounters.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            change: parseInt(action.change),
          };
        } else {
          return item;
        }
      });
      return {
        counters: result,
      };
    }
    case "DELETE": {
      const initCounters = [...state.counters];
      return {
        counters: initCounters.filter((n) => n.id !== action.id),
      };
    }
    default:
      return state;
  }
};

export default counterReducer;
