// usePageTitle.js

import { useEffect } from "react";

function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | Radiant Bites` : "Radiant Bites";
  }, [title]);
}

export default usePageTitle;