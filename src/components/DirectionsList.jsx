import React, { useState } from 'react';
import SwitchLeftIcon from '@mui/icons-material/SwitchLeft';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { DirectionRow } from './DirectionRow';

export const DirectionsList = (props) => {
    const { directions = [], pagesCount, currentPage, setCurrentPage, setSearchParams } = props;
    const [name, setName] = useState('');
    const [abbreviation, setAbbreviation] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [searchTermAbbreviation, setSearchTermAbbreviation] = useState('');

    const paginationHandler = (type) => {
        if (type === 'increment' && currentPage < pagesCount) {
            setCurrentPage(prev => prev + 1);
            setSearchParams({ 'page': currentPage + 1, 'name': name, 'abbreviation': abbreviation });
        } else if (currentPage > 1 && type !== 'increment') {
            setCurrentPage(prev => prev - 1);
            setSearchParams({ 'page': currentPage - 1, 'name': name, 'abbreviation': abbreviation });
        }
    };

    const pageHandler = (value) => {
        setCurrentPage(value);
        setSearchParams({ 'page': value, 'name': name, 'abbreviation': abbreviation });
    };

    const searchHandler = () => {
        setSearchTerm(name.toLowerCase());
        setSearchTerm(abbreviation.toLowerCase());
        setSearchParams({ 'page': currentPage, 'name': name, 'abbreviation': abbreviation });
    };

    const resetSearchHandler = () => {
        setName('');
        setAbbreviation('');
        setSearchTerm('');
        setSearchTermAbbreviation('')
        setSearchParams({ 'page': 1, 'name': '', 'abbreviation': '' });
    };

    const filteredDirections = directions.filter((direction) => {
        const directionName = direction.name || '';
        const directionAbbreviation = direction.shortName || '';

        return (
            directionName.toLowerCase().includes(searchTerm) &&
            directionAbbreviation.toLowerCase().includes(searchTermAbbreviation)
        );
    });

    return (
        <div className='drivers_table home_content'>
            <div className="drivers_filter directions_filter">
                <input type="text" placeholder='Поиск по наименованию' onChange={(e) => setName(e.target.value)} value={name} />
                <input type="text" placeholder='Поиск по сокращению' onChange={(e) => setAbbreviation(e.target.value)} value={abbreviation} />
            </div>
            <div className="drivers_search">
                <button className='search_reset' onClick={resetSearchHandler}>Сбросить</button>
                <button className='search_find' onClick={searchHandler}>Поиск</button>
            </div>
            <div className='directions_row drivers_header'>
                <div>
                    Наименование
                    <SwitchLeftIcon sx={{ rotate: '90deg' }} />
                </div>

                <div>
                    Сокращение
                    <SwitchLeftIcon sx={{ rotate: '90deg' }} />
                </div>
                <div>
                    Действия
                </div>
            </div>
            {filteredDirections.map((direction, index) => <DirectionRow key={index} direction={direction} />)}

            <div className="drivers_pagination">
                <div onClick={() => paginationHandler('decrement')}><ArrowBackIcon /></div>
                {currentPage > 1 ? <div onClick={() => pageHandler(currentPage - 1)}>{currentPage - 1}</div> : null}
                <div className='active_page'>{currentPage}</div>
                {currentPage < pagesCount ? <div onClick={() => pageHandler(currentPage + 1)}>{currentPage + 1}</div> : null}
                <div onClick={() => paginationHandler('increment')}><ArrowForwardIcon /></div>
            </div>
        </div>
    );
};
