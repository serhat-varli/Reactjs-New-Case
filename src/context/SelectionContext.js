import React, { createContext, useState } from 'react';

const SelectionContext = createContext();

export const SelectionProvider = ({ children }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const selectItem = (item) => {
    setSelectedItems((prevItems) => {
      const filteredItems = prevItems.filter((prevItem) => prevItem.rowIndex !== item.rowIndex);
      return [...filteredItems, item];
    });
  };

  const deselectItem = (item) => {
    setSelectedItems((prevItems) => prevItems.filter((prevItem) => prevItem.matchId !== item.matchId));
  };

  return (
    <SelectionContext.Provider value={{ selectedItems, selectItem, deselectItem }}>
      {children}
    </SelectionContext.Provider>
  );
};

export default SelectionContext;
