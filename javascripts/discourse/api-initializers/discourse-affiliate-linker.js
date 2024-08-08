import { apiInitializer } from "discourse/lib/api";

export function decorateInlineLink(element) {
  const containers = element.querySelectorAll(".cooked a");
  containers.forEach((container) => {
    const href = container.href;

    // Check if the URL is for dronesafestore.com with or without www
    const regex = /^https?:\/\/(www\.)?dronesafestore\.com(\/?)?$/i;

    if (regex.test(href)) {
      // Rewrite the link
      container.href = `https://dronesafestore.com/${settings.affiliate_link}`;
    }
  });
}

export default apiInitializer("1.8.0", (api) => {
  api.decorateCookedElement((element) => {
    decorateInlineLink(element);
  });
});
