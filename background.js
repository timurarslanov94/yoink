/**
 * Yoink Background Service Worker
 * - Inject content.js on demand (when user clicks the action icon) — uses activeTab
 * - Toggle widget visibility via window.__copycss.toggleWidget()
 * - Forward captureVisibleTab requests from content script
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
    // Inject content.js (or no-op if already loaded — content.js guards itself).
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['content.js']
    });
    // Then toggle the floating widget.
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => { window.__copycss?.toggleWidget?.(); }
    });
  } catch (e) {
    console.warn('Yoink: action click failed', e);
  }
});

/**
 * Capture visible tab and return the dataURL to the content script.
 * Caller must hide overlay/panel/widget BEFORE requesting capture for a clean shot.
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
