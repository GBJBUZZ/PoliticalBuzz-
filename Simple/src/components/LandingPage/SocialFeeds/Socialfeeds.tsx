import Script from "next/script";
import React from "react";

export default function Socialfeeds() {
  return (
    <section
      className="px-8 xl:px-40 py-20 bg-[var(--primary-clr)] mb-20 grid grid-cols-1 md:grid-cols-3 gap-8"
      id="feed"
    >
      <div className="rounded-xl overflow-hidden feeds">
        <div id="fb-root"></div>
        <Script
          async
          defer
          crossOrigin="anonymous"
          src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v20.0"
          nonce="41r3YJLn"
        />
        <div
          className="fb-page w-full"
          data-href="https://www.facebook.com/examplevallabhjagtap"
          data-tabs="timeline"
          data-width="600"
          data-height="500"
          data-small-header="false"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
        >
          <blockquote
            cite="https://www.facebook.com/examplevallabhjagtap"
            className="fb-xfbml-parse-ignore"
          >
            <a href="https://www.facebook.com/examplevallabhjagtap">
              Facebook posts by Vallabh Jagtap
            </a>
          </blockquote>
        </div>
      </div>
      <div className="rounded-xl overflow-x-hidden overflow-y-scroll max-h-[500px] feeds">
        <a
          className="twitter-timeline"
          href="https://twitter.com/examplevallabhjagtap"
        >
          Tweets by Vallabh Jagtap
        </a>
        <Script async src="https://platform.twitter.com/widgets.js" />
      </div>
      <div className="rounded-xl overflow-y-scroll max-h-[500px] feeds">
        <div
          className="tagembed-widget"
          style={{ width: "100%", height: "100%" }}
          data-widget-id="147169"
          view-url="https://widget.tagembed.com/147169"
        ></div>
        <Script
          src="//widget.tagembed.com/embed.min.js"
          type="text/javascript"
        />
      </div>
    </section>
  );
}