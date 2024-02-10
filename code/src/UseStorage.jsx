import { useEffect, useState } from "react";

function storeText(key, initialValue) {
  const local = localStorage.getItem(key);
  const session = sessionStorage.getItem(key);

  if (local) {
    return JSON.parse(local);
  }
  if (session) {
    return JSON.parse(session);
  }
  return initialValue;
}

const UseStorage = (key, initialValue) => {
  const [text, setText] = useState(() => storeText(key, initialValue));

  useEffect(() => {
    const textJSON = JSON.stringify(text);
    localStorage.setItem(key, textJSON);
    sessionStorage.setItem(key, textJSON);
  }, [key, text]);

  return [text, setText];
};

export default UseStorage;