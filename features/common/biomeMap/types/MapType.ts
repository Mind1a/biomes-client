export type BiomesMapType = {
  onBiomeSelect: (id: string, e: React.MouseEvent) => void;
  selectedBiomes: string[];
  variant?: 'main' | 'mini';
};
