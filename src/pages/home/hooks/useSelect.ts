import { useState } from 'react';

export default function useSelect() {
  const [selectedItem, setSelectedItem] = useState('');
  const handleSelectChange = (value: string) => setSelectedItem(value);

  return {
    selectedItem,
    handleSelectChange,
  };
}
