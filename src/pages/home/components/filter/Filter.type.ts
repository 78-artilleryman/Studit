export interface FilterProps {
  $colorMode?: 'black' | 'white';
  $position?: 'bottom' | 'top';
  selectedItem: string;
  onSelectedItem: (value: string) => void;
}
