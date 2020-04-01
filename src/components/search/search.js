import React from 'react';

const Search = (props) => {
    return (
        <div>
            <br />
            <input
                type="search"
                placeholder={props.placeholder}
                onChange={(event) => props.etsi(event.target.value)} />
            <br />
            <br />
        </div>
    );

}

export default Search