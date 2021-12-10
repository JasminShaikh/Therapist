export const isAuthenticated = () => {
  const TokenValue = localStorage.getItem("tokenValue");
  return TokenValue;
};
