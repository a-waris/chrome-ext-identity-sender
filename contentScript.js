function identifyUserEntity() {
  // Logic to identify the user entity goes here.   
  // This is a placeholder and will vary based on the website structure.
  let userEntity = document.querySelector(".userClass").innerText;
  return userEntity;
}
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "getIdentifiedData") {
    sendResponse(identifyUserEntity());
  }
});
