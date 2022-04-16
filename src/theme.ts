type TTheme = {
  background: string;
  onBackground: string;
  button: string;
  onButton: string;
  surface: string;
  onSurface: string;
  onSurfaceSecondary: string;
  surfaceThumbBar: string;
  surfaceHover: string;
};

export const closedTheme: TTheme = {
  background: "#ffffff",
  onBackground: "#000",
  button: "#D83520",
  onButton: "#fff",
  surface: "#fff",
  onSurface: "#191919",
  onSurfaceSecondary: "#666",
  surfaceThumbBar: "#ddd",
  surfaceHover: "#eee",
};

export const openTheme: TTheme = {
  background: "#666",
  onBackground: "#FFFFFF",
  button: "#eb1700",
  onButton: "#fff",
  surface: "#fff",
  onSurface: "#191919",
  onSurfaceSecondary: "#666",
  surfaceThumbBar: "#ddd",
  surfaceHover: "#eee",
};
