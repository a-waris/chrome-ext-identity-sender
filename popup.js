document.getElementById('sendData').addEventListener('click', function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.scripting.executeScript({
      target: {tabId: tabs[0].id},
      files: ['contentScript.js']
    }, (injectionResults) => {
      for (const frameResult of injectionResults) {
        const userEntity = frameResult.result;
        // Send this data to your API
        fetch('YOUR_API_ENDPOINT', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ userEntity: userEntity })
        });
      }
    });
  });
});





