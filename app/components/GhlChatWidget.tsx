import Script from "next/script";
import { site } from "@/app/data/site";

export function GhlChatWidget() {
  return (
    <Script
      id="ghl-chat-widget"
      src="https://widgets.leadconnectorhq.com/loader.js"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id={site.ghlChatWidgetId}
      strategy="afterInteractive"
    />
  );
}
