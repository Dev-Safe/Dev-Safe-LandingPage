export function intersect(
  node: HTMLElement,
  params: { threshold?: number; onIntersect?: () => void } = {}
) {
  const { threshold = 0.15, onIntersect } = params;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          if (onIntersect) onIntersect();
          observer.unobserve(node);
        }
      });
    },
    { threshold }
  );

  observer.observe(node);
  return { destroy: () => observer.disconnect() };
}
