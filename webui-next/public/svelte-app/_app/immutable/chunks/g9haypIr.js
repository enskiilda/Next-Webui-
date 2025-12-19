const API_URL = "/api/chat";
const AVAILABLE_MODELS = {
  KIMI_K2_THINKING: "moonshotai/kimi-k2-thinking"
};
async function* chatStream(messages, model = AVAILABLE_MODELS.KIMI_K2_THINKING) {
  var _a;
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model,
      messages,
      stream: true
    })
  });
  if (!response.ok) {
    const error = await response.text();
    throw new Error(`API error: ${response.status} - ${error}`);
  }
  const reader = (_a = response.body) == null ? void 0 : _a.getReader();
  if (!reader) {
    throw new Error("No response body");
  }
  const decoder = new TextDecoder();
  let buffer = "";
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split("\n");
    buffer = lines.pop() || "";
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith("data: ")) {
        const data = trimmed.slice(6);
        if (data === "[DONE]") {
          return;
        }
        try {
          const parsed = JSON.parse(data);
          yield parsed;
        } catch (e) {
        }
      }
    }
  }
}
export {
  AVAILABLE_MODELS,
  chatStream
};
