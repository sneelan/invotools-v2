import React, { useEffect, useState } from 'react';
import { useDrag, useDrop, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import DragFeaturePop from './DragFeaturePop';


const RowItemTypes = 'ROW';
const ColumnItemTypes = 'COLUMN';

const App = () => {
  const [data, setData] = useState(null);
  const [draggingInfo, setDraggingInfo] = useState({
    dragRowId: null,
    dragColumnId: null,
    targetRowId: null,
    targetColumnId: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/customer-portal-widget.json');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching JSON data:', error);
      }
    };

    fetchData();
  }, []);

  const moveRow = (fromIndex, toIndex) => {
    const updatedRows = [...data.rows];
    const movedRow = updatedRows[fromIndex];

    updatedRows.splice(fromIndex, 1);
    updatedRows.splice(toIndex, 0, movedRow);

    setData({ ...data, rows: updatedRows });
  };

  const moveColumn = (fromRow, fromIndex, toRow, toIndex) => {
    const updatedRows = [...data.rows];
    const movedColumn = { ...updatedRows[fromRow].columns[fromIndex] };

    // Remove the column from the source row
    updatedRows[fromRow].columns.splice(fromIndex, 1);

    // Insert the column into the target row at the specified index
    updatedRows[toRow].columns.splice(toIndex, 0, movedColumn);

    // Update the state with the modified rows
    setData({ ...data, rows: updatedRows });

    // Update dragging info
    setDraggingInfo({
      ...draggingInfo,
      targetRowId: toRow,
      targetColumnId: toIndex,
    });
  };

  const renderColumns = (columns, rowNumber) => {
    return columns.map((column, index) => (
      <DraggableColumn
        key={index}
        rowNumber={rowNumber}
        columnIndex={index}
        moveColumn={moveColumn}
        setDraggingInfo={setDraggingInfo}
      >
        <h6 class="widget-title flex-center" style={{paddingLeft:'15px', justifyContent:'start' }}>
          <a className='d-block movecursor' href="#" style={{opacity:'.2', height:'20px',marginTop: '-5px'}}><DragIndicatorIcon /></a>
          <span>{column.title}</span>
          </h6>
      </DraggableColumn>
    ));
  };

  const renderRows = () => {
    if (!data || !data.rows) {
      return null;
    }

    return data.rows.map((row, index) => (
      <DraggableRow key={index} index={index} moveRow={moveRow}>
        {renderColumns(row.columns, index)}
      </DraggableRow>
    ));
  };

  return (
    <div>
      {renderRows()}
      <div>
        <p>Drag Row ID: {draggingInfo.dragRowId}</p>
        <p>Drag Column ID: {draggingInfo.dragColumnId}</p>
        <p>Target Row ID: {draggingInfo.targetRowId}</p>
        <p>Target Column ID: {draggingInfo.targetColumnId}</p>
      </div>
    </div>
  );
};

const DraggableRow = ({ index, moveRow, children }) => {
  const [{ isDragging }, dragRow] = useDrag({
    type: RowItemTypes,
    item: { type: RowItemTypes, rowIndex: index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const [, dropRow] = useDrop({
    accept: RowItemTypes,
    hover: (item) => {
      if (item.type === RowItemTypes && item.rowIndex !== index) {
        moveRow(item.rowIndex, index);
        item.rowIndex = index;
      }
    },
  });

  return (
    <div
      ref={(node) => dropRow(dragRow(node))}
      className={`bg-theme-secondary flex-center rounded widget-row ${isDragging ? 'dragging' : ''}`}
      style={{ marginBottom: '16px', padding: '16px 8px', backgroundColor:'#00000011'}}
    >
      <a href="#" style={{opacity:'.2'}} className='movecursor'><DragIndicatorIcon /></a>
      {children}
    </div>
  );
};

const DraggableColumn = ({ rowNumber, columnIndex, moveColumn, children, setDraggingInfo }) => {
  const [{ isDragging }, dragColumn] = useDrag({
    type: ColumnItemTypes,
    item: { type: ColumnItemTypes, rowIndex: rowNumber, columnIndex: columnIndex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropColumn] = useDrop({
    accept: ColumnItemTypes,
    hover: (item) => {
      if (item.type === ColumnItemTypes && item.rowIndex === rowNumber && item.columnIndex !== columnIndex) {
        moveColumn(item.rowIndex, item.columnIndex, rowNumber, columnIndex);
        item.columnIndex = columnIndex;
        item.rowIndex = rowNumber;
      }
    },
  });

  useEffect(() => {
    setDraggingInfo({
      dragRowId: rowNumber,
      dragColumnId: columnIndex,
      targetRowId: null,
      targetColumnId: null,
    });
  }, [rowNumber, columnIndex, setDraggingInfo]);

  return (
    <div
      ref={(node) => dropColumn(dragColumn(node))}
      className='widget '
      style={{ margin: '0 8px', padding: '8px', flexGrow: '1' }}
    >
      {children}
    </div>
  );
};

const AppWithDragDropContext = () => {
  return (
    <div class="invoice-wrap" style={{marginTop:'16px'}}>
      <DndProvider backend={HTML5Backend}>
        <App />
      </DndProvider>
      <DragFeaturePop/>
      <style>
        {`
        svg{width:25px;}
        .movecursor:hover{cursor:move;} 
        `}
        </style>
    </div>
  );
};

export default AppWithDragDropContext;