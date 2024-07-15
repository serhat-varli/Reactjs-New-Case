import React, { useContext } from 'react';
import SelectionContext from '../context/SelectionContext';

const SelectedItems = () => {
  const { selectedItems } = useContext(SelectionContext);

  const totalOdds = selectedItems.reduce((total, item) => total * item.matchOdd, 20);

  console.log(selectedItems)
  return (
    <div className='popup'>
      <ul>
        {selectedItems.map((item, index) => (
          <li key={index}>
            <span>{item.matchMbs}</span> <span>Kodu: {item.matchId}</span> <span>Maç: {item.matchName}</span> <strong>Oran: {item.matchOdd}</strong>
          </li>
        ))}
      </ul>
      <div className='total'>Toplam Tutar: {(totalOdds == 20 ? 0 : totalOdds).toFixed(2)} TL</div>
    </div>
  );
};

export default SelectedItems;
