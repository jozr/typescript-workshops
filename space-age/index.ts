enum RelativeYear {
  Earth = 1,
  Mercury = 0.2408467,
  Venus = 0.61519726,
  Mars = 1.8808158,
  Jupiter = 11.862615,
  Saturn = 29.447498,
  Uranus = 84.016846,
  Neptune = 164.79132,
}

type Planet = keyof typeof RelativeYear;

export default class SpaceAge {
  readonly earthYear = 31557600;
  readonly seconds: number

  constructor(seconds: number) {
    this.seconds = seconds
  }

  onPlanet(planet: Planet): number {
    return +(
      this.seconds /
      (RelativeYear[planet] * this.earthYear)
    ).toFixed(2);
  }

  onEarth(): number {
    return this.onPlanet("Earth");
  }
  onMercury(): number {
    return this.onPlanet("Mercury");
  }
  onVenus(): number {
    return this.onPlanet("Venus");
  }
  onMars(): number {
    return this.onPlanet("Mars");
  }
  onJupiter(): number {
    return this.onPlanet("Jupiter");
  }
  onSaturn(): number {
    return this.onPlanet("Saturn");
  }
  onUranus(): number {
    return this.onPlanet("Uranus");
  }
  onNeptune(): number {
    return this.onPlanet("Neptune");
  }
}

// Possible solutions:
// https://exercism.io/tracks/typescript/exercises/space-age
