import React from "react";
export const ContextApp = React.createContext();

export const initialState = {
    app: {
        rows: [
          {
            id: '1',
            title: 'Автоматический выключатель',
            vendor: 'ABB',
            pack:100,
            price:1500,
          },
          {
            id: '2',
            title: 'Автоматический выключатель 20A',
            vendor: 'ABB',
            pack: 100,
            price: 1500
          },
          {
            id: '3',
            title: 'Корпус металлический',
            vendor: 'ABB',
            pack: 1,
            price: 6800
          },
          {
            id: '4',
            title: 'Корпус пластиковый',
            vendor: 'IEK',
            pack: 1,
            price: 1200
          },
          {
            id: '5',
            title: 'Шина медная МТ 60х8',
            vendor: 'DKC',
            pack: 1,
            price: 1200
          },
          {
            id: '6',
            title: 'DLP Кабель-канал 105x50',
            vendor: 'DKC',
            pack: 1,
            price: 350
          },
          {
            id: '7',
            title: 'DLP Кабель-канал 80x50',
            vendor: 'DKC',
            pack: 1,
            price: 300
          },
          {
            id: '8',
            title: 'ЭТЮД Выключатель одноклавишный',
            vendor: 'Schneider Electric',
            pack: 1,
            price: 85
          },
          {
            id: '9',
            title: 'Контактор E 12А катушка управления 220В',
            vendor: 'Schneider Electric',
            pack: 1,
            price: 3800
          },
          {
            id: '10',
            title: 'Лоток для систем освещения',
            vendor: 'Schneider Electric',
            pack: 1,
            price: 1859
          }
        ]
    }
};

export const rowsReducer = (state, action) => {
    switch(action.type) {
        case 'rows_update':
            return {
                ...state,
                ...action.payload
            };
        default:
            return state
    }
};
