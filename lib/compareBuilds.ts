export function compareBuilds(buildA: any, buildB: any) {
  return {
    fpsA: buildA.fps,
    fpsB: buildB.fps,

    priceA: buildA.price,
    priceB: buildB.price,

    scoreA: buildA.score,
    scoreB: buildB.score,

    valueA: buildA.fps / buildA.price,
    valueB: buildB.fps / buildB.price,
  };
}