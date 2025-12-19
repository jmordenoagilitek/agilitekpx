import { useEffect, useMemo, useState } from "react";

type Options = {
  ids: string[];
  rootMargin?: string;
  threshold?: number | number[];
};

export function useActiveSection({ ids, rootMargin = "-40% 0px -55% 0px", threshold = 0.1 }: Options) {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? "");

  const observers = useMemo(() => {
    return new Map<string, IntersectionObserver>();
  }, []);

  useEffect(() => {
    if (!ids.length) return;

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { root: null, rootMargin, threshold }
    );

    elements.forEach((el) => io.observe(el));

    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join("|"), rootMargin, JSON.stringify(threshold)]);

  useEffect(() => {
    // Keep state sane if user jumps to anchors manually
    const onHashChange = () => {
      const id = window.location.hash.replace("#", "");
      if (id) setActiveId(id);
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return activeId;
}
