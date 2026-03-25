import React, { useEffect } from 'react';

interface GiscusProps {
  enabled: boolean;
  title: string;
}

export default function Giscus({ enabled, title }: GiscusProps) {
  useEffect(() => {
    if (!enabled) return;

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', 'elicupra/elicupra.github.io');
    script.setAttribute('data-repo-id', 'R_kgDOAAAAAAAA'); // Reemplazar con tu repo ID
    script.setAttribute('data-category', 'Blog Comments');
    script.setAttribute('data-category-id', 'DIC_kwDOAAAAAAAA'); // Reemplazar con tu category ID
    script.setAttribute('data-mapping', 'og:title');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-theme', 'dark_dimmed');
    script.setAttribute('data-lang', 'es');
    script.setAttribute('data-loading', 'lazy');
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    const giscusContainer = document.getElementById('giscus-container');
    if (giscusContainer) {
      giscusContainer.appendChild(script);
    }
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <div className="mt-12 pt-8 border-t border-gray-300 dark:border-gray-700">
      <h3 className="mb-6 text-xl font-semibold">Comentarios</h3>
      <div id="giscus-container"></div>
    </div>
  );
}
