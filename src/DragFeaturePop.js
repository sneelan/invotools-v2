import React, { useEffect, useState } from 'react';
import { useDrag, useDrop, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

const ItemTypes = 'ITEM';

const App = () => {
  const [data, setData] = useState(null);
  const [draggingInfo, setDraggingInfo] = useState({
    dragItemId: null,
    targetItemId: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/sneelan/invo-customer-json/main/customer-portal-popup.json');
        //const response = await fetch('/customer-portal-popup.json');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching JSON data:', error);
      }
    };

    fetchData();
  }, []);

  const moveItem = (fromIndex, toIndex) => {
    const updatedItems = [...data.popups];
    const movedItem = updatedItems[fromIndex];

    updatedItems.splice(fromIndex, 1);
    updatedItems.splice(toIndex, 0, movedItem);

    setData({ ...data, popups: updatedItems });
  };

  const renderItems = () => {
    if (!data || !data.popups) {
      return null;
    }

    return data.popups.map((item, index) => (
      <DraggableItem key={index} index={index} moveItem={moveItem}>
        <div className="widget1" style={{flexGrow:'1'}}>
          <span className='drawer-box'>
            <span className='button'>
                {item.iconSVGCode && (<span dangerouslySetInnerHTML={{ __html: item.iconSVGCode }}></span>)}                    
                <span>{item.menuLabel}</span>
            </span>
          </span>

        </div>
      </DraggableItem>
    ));
  };

  return (
    <div>
      {renderItems()}
      <div>
        <p>Drag Item ID: {draggingInfo.dragItemId}</p>
        <p>Target Item ID: {draggingInfo.targetItemId}</p>
      </div>
    </div>
  );
};

const DraggableItem = ({ index, moveItem, children }) => {
  const [{ isDragging }, dragItem] = useDrag({
    type: ItemTypes,
    item: { type: ItemTypes, itemId: index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const [, dropItem] = useDrop({
    accept: ItemTypes,
    hover: (item) => {
      if (item.type === ItemTypes && item.itemId !== index) {
        moveItem(item.itemId, index);
        item.itemId = index;
      }
    },
  });

  return (
    <div
      ref={(node) => dropItem(dragItem(node))}
      className={`bg-theme-secondary flex-center ${isDragging ? 'dragging' : ''}`}
      style={{ padding: '8px', width:'200px', margin:'0 auto', justifyContent:'start'}}
    >
      <span style={{ opacity: '.2', color:'white' }} className='movecursor'>
        <DragIndicatorIcon />
      </span>
      {children}
    </div>
  );
};

const AppWithDragDropContext = () => {
  return (
    <div class="invoice-wrap bg-theme-secondary" style={{ marginTop: '16px', padding:'16px'}}>
      <DndProvider backend={HTML5Backend}>
        <App />
      </DndProvider>
    </div>
  );
};

export default AppWithDragDropContext;