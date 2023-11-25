import { useEffect } from "react";

function useOutsideClick(enabled: boolean, ref: any, callback: any) {
  useEffect(() => {
    if (!enabled) return; // Check the condition here

    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [enabled, ref, callback]);
}
export default useOutsideClick;
