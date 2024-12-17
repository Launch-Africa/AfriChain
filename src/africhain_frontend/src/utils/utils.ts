export const animationCreate = () => {
  if (typeof window !== "undefined") {
    import("wowjs").then((module) => {
      // @ts-ignore
      const { WOW } = module;
      new WOW({live: false}).init()
    });
  }
};
