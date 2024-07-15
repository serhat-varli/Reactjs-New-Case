import React, { useContext } from 'react';
import SelectionContext from '../context/SelectionContext';

const Table = ({ matches }) => {
  const { selectedItems, selectItem, deselectItem } = useContext(SelectionContext);

  const handleAddToCart = (matchMbs, matchId, matchName, matchOdd, rowIndex, colTabOdd) => {
    const currentItem = { rowIndex: rowIndex, matchId, matchOdd: matchOdd, matchMbs: matchMbs, matchName: matchName };
    if (selectedItems.some(item => item.matchOdd === colTabOdd)) {
      deselectItem(currentItem);
    } else {
      selectItem(currentItem);
    }
  };

  const isSelected = (rowIndex, matchOdd) => {
    return selectedItems.some(item => item.rowIndex === rowIndex && item.matchOdd === matchOdd);
  };

  return (
    <table>
      <thead>
        <tr>
          <td>Event Count: {matches.length}</td>
          <td>Yorumlar</td>
          <td></td>
          <td className='text-center'>1</td>
          <td className='text-center'>x</td>
          <td className='text-center'>2</td>
          <td className='text-center'>Alt</td>
          <td className='text-center'>Üst</td>
          <td className='text-center'>H1</td>
          <td className='text-center'>1</td>
          <td className='text-center'>x</td>
          <td className='text-center'>2</td>
          <td className='text-center'>H2</td>
          <td className='text-center'>1-X</td>
          <td className='text-center'>1-2</td>
          <td className='text-center'>X-2</td>
          <td className='text-center'>Var</td>
          <td className='text-center'>Yok</td>
          <td className='text-center'>+99</td>
        </tr>
      </thead>
      <tbody>
        {matches.map((match, rowIndex) => (
          <React.Fragment key={match.C}>
            <tr className='tab-head'>
              <td>{match.D + " " + match.DAY + " " + match.LN}</td>
              <td>Yorumlar</td>
              <td></td>
              <td className='text-center'>1</td>
              <td className='text-center'>x</td>
              <td className='text-center'>2</td>
              <td className='text-center'>Alt</td>
              <td className='text-center'>Üst</td>
              <td className='text-center'>H1</td>
              <td className='text-center'>1</td>
              <td className='text-center'>x</td>
              <td className='text-center'>2</td>
              <td className='text-center'>H2</td>
              <td className='text-center'>1-X</td>
              <td className='text-center'>1-2</td>
              <td className='text-center'>X-2</td>
              <td className='text-center'>Var</td>
              <td className='text-center'>Yok</td>
              <td className='text-center'>+99</td>
            </tr>
            <tr>
              <td><strong>{match.C}</strong>{" " + match.T + " " + match.N}</td>
              <td>Yorumlar</td>
              <td>{match.OCG[1].MBS}</td>
              <td className={`item ${isSelected(rowIndex, match.OCG[1].OC[0].O) ? 'selected' : ''}`} id={match.OCG[1].OC[0].O} onClick={() => handleAddToCart(match.OCG[1].MBS, match.C, match.N, match.OCG[1].OC[0].O, rowIndex, match.OCG[1].OC[0].O)}>{match.OCG[1].OC[0].O}</td>
              <td className={`item ${isSelected(rowIndex, match.OCG[1].OC[1].O) ? 'selected' : ''}`} id={match.OCG[1].OC[1].O} onClick={() => handleAddToCart(match.OCG[1].MBS, match.C, match.N, match.OCG[1].OC[1].O, rowIndex, match.OCG[1].OC[1].O)}>{match.OCG[1].OC[1].O}</td>
              <td></td>
              <td className={`item ${isSelected(rowIndex, match.OCG[5].OC[25].O) ? 'selected' : ''}`} id={match.OCG[5].OC[25].O} onClick={() => handleAddToCart(match.OCG[1].MBS, match.C, match.N, match.OCG[5].OC[25].O, rowIndex, match.OCG[5].OC[25].O)}>{match.OCG[5].OC[25].O}</td>
              <td className={`item ${isSelected(rowIndex, match.OCG[5].OC[26].O) ? 'selected' : ''}`} id={match.OCG[5].OC[26].O} onClick={() => handleAddToCart(match.OCG[1].MBS, match.C, match.N, match.OCG[5].OC[26].O, rowIndex, match.OCG[5].OC[26].O)}>{match.OCG[5].OC[26].O}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className={`item ${isSelected(rowIndex, match.OCG[2].OC[3].O) ? 'selected' : ''}`} id={match.OCG[2].OC[3].O} onClick={() => handleAddToCart(match.OCG[1].MBS, match.C, match.N, match.OCG[2].OC[3].O, rowIndex, match.OCG[2].OC[3].O)}>{match.OCG[2].OC[3].O}</td>
              <td className={`item ${isSelected(rowIndex, match.OCG[2].OC[4].O) ? 'selected' : ''}`} id={match.OCG[2].OC[4].O} onClick={() => handleAddToCart(match.OCG[1].MBS, match.C, match.N, match.OCG[2].OC[4].O, rowIndex, match.OCG[2].OC[4].O)}>{match.OCG[2].OC[4].O}</td>
              <td className={`item ${isSelected(rowIndex, match.OCG[2].OC[5].O) ? 'selected' : ''}`} id={match.OCG[2].OC[5].O} onClick={() => handleAddToCart(match.OCG[1].MBS, match.C, match.N, match.OCG[2].OC[5].O, rowIndex, match.OCG[2].OC[5].O)}>{match.OCG[2].OC[5].O}</td>
              <td></td>
              <td></td>
              <td>3</td>
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
