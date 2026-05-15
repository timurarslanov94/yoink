/**
 * Yoink Background Service Worker
 * - Action icon click → toggle (or unhide widget if user "hid for this site")
 * - chrome.runtime message handler for screenshot capture
 */

chrome.action.onClicked.addListener(async (tab) => {
  if (!tab.url ||
      tab.url.startsWith('chrome://') ||
      tab.url.startsWith('chrome-extension://') ||
      tab.url.startsWith('about:') ||
      tab.url.startsWith('edge://')) {
    return;
  }
  try {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        if (window.__copycss?.toggleWidget) {
          window.__copycss.toggleWidget();
        }
      }
    });
  } catch (e) {
    console.warn('Yoink: action click failed', e);
  }
});

/**
 * Capture visible tab and send dataURL back.
 * Caller must hide overlay/panel BEFORE requesting capture for clean shot.
 */
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg?.type === 'copycss:capture') {
    const tabId = sender.tab?.id;
    if (tabId == null) { sendResponse({ ok: false, err: 'no tab' }); return false; }
    chrome.tabs.captureVisibleTab(sender.tab.windowId, { format: 'png' }, (dataUrl) => {
      if (chrome.runtime.lastError) {
        sendResponse({ ok: false, err: chrome.runtime.lastError.message });
      } else {
        sendResponse({ ok: true, dataUrl });
      }
    });
    return true; // async
  }
});
