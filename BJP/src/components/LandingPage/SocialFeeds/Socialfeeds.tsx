import Script from "next/script";
import React from "react";

export default function Socialfeeds() {
  return (
    <section
      className="px-8 xl:px-40 py-20 bg-[var(--primary-clr)] mb-20 grid grid-cols-1 md:grid-cols-3 gap-8"
      id="feed"
    >
      {/* Facebook Feed */}
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
          data-href="https://www.facebook.com/profile.php?id=61582629359575"
          data-tabs="timeline"
          data-width="600"
          data-height="500"
          data-small-header="false"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
        >
          <blockquote
            cite="https://www.facebook.com/profile.php?id=61582629359575"
            className="fb-xfbml-parse-ignore"
          >
            <a href="https://www.facebook.com/profile.php?id=61582629359575">
              Facebook posts by Madhuratai Madankar
            </a>
          </blockquote>
        </div>
      </div>

      {/* Instagram Feed */}
      <div className="rounded-xl overflow-x-hidden overflow-y-scroll max-h-[500px] feeds">
        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/madhura_madankar/"
          data-instgrm-version="14"
          style={{ width: "100%", minHeight: "500px" }}
        >
          <a href="https://www.instagram.com/madhura_madankar/">
            View Madhuratai Madankar's Instagram
          </a>
        </blockquote>
        <Script async src="https://www.instagram.com/embed.js" />
      </div>

      {/* TagEmbed Widget (Keep your existing one or update if needed) */}
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