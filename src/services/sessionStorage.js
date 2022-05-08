const saveTokenToSS = (value) => {
  try {
    const serializedState = JSON.stringify(value);
    sessionStorage.setItem("TOKEN", serializedState);
  } catch (error) {
    console.error("Set state error: ", error.message);
  }
};

const loadTokenFromSS = () => {
  try {
    const serializedState = sessionStorage.getItem("TOKEN");
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};
const removeTokenFromSS = () => {
  sessionStorage.removeItem("TOKEN");
};
const saveUserToSS = (value) => {
  try {
    const serializedState = JSON.stringify(value);
    sessionStorage.setItem("USER", serializedState);
  } catch (error) {
    console.error("Set state error: ", error.message);
  }
};

const loadUserFromSS = () => {
  try {
    const serializedState = sessionStorage.getItem("USER");
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};
const removeUserFromSS = () => {
  sessionStorage.removeItem("USER");
};

export {
  saveTokenToSS,
  loadTokenFromSS,
  removeTokenFromSS,
  saveUserToSS,
  loadUserFromSS,
  removeUserFromSS,
};
