"use client";

import Script from "next/script";
import React from "react";

export default function Socialfeeds() {
  return (
    <section
      className="px-6 xl:px-40 py-20 bg-[var(--primary-clr)] mb-20"
      id="feed"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">

        {/* ================= FACEBOOK FEED ================= */}
        <div className="feeds bg-white rounded-2xl shadow-lg overflow-hidden p-4 flex flex-col h-[650px]">
          <h3 className="text-lg font-semibold mb-4 text-center">
            Facebook
          </h3>

          <div id="fb-root"></div>

          <Script
            async
            defer
            crossOrigin="anonymous"
            src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v20.0"
          />

          <div className="flex-1 flex justify-center items-start overflow-y-auto">
            <div
              className="fb-page"
              data-href="https://www.facebook.com/profile.php?id=61582629359575"
              data-tabs="timeline"
              data-width="500"
              data-height="600"
              data-small-header="false"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="true"
            />
          </div>
        </div>

        {/* ================= INSTAGRAM FEED ================= */}
        <div className="feeds bg-white rounded-2xl shadow-lg overflow-hidden p-4 flex flex-col h-[650px]">
          <h3 className="text-lg font-semibold mb-4 text-center">
            Instagram
          </h3>

          <div className="flex-1 overflow-y-auto">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink="https://www.instagram.com/madhura_madankar/"
              data-instgrm-version="14"
              style={{ width: "100%", minHeight: "600px" }}
            >
              <a href="https://www.instagram.com/madhura_madankar/">
                View Instagram
              </a>
            </blockquote>

            <Script async src="https://www.instagram.com/embed.js" />
          </div>
        </div>

      </div>

      {/* ✅ LOCAL CSS INSIDE CLIENT COMPONENT */}
      <style jsx>{`
        .fb-page,
        .fb-page span,
        .fb-page iframe {
          width: 100% !important;
          max-width: 100% !important;
        }

        .instagram-media {
          width: 100% !important;
        }
      `}</style>
    </section>
  );
}
