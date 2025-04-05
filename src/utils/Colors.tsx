export const categoryColors: Record<
  string,
  {
    background: string;
    backgroundActive: string;
    text: string;
    lineColor: string;
  }
> = {
  yellow: {
    background: "#FFE14C",
    backgroundActive: "#FFF176", // lighter yellow
    text: "#000000",
    lineColor: "#000000",
  },
  orange: {
    background: "#FF6B00",
    backgroundActive: "#FF8A33", // lighter orange
    text: "#000000",
    lineColor: "#000000",
  },
  blue: {
    background: "#235AFD",
    backgroundActive: "#4F7FFD", // lighter blue
    text: "#FFFFFF",
    lineColor: "#FFFFFF",
  },
  default: {
    background: "#FFCC0B",
    backgroundActive: "#FFE34D", // lighter default yellow
    text: "#000000",
    lineColor: "#000000",
  },
};
