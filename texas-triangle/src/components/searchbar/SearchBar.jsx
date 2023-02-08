
const SearchBar = (props) => {

    const { handleInput } = props;

    return (
        <div className="search-bar">
            <input 
                type="text"
                onChange={handleInput} 
                placeholder="Search for a city" 
            />
        </div>
    );
}

export default SearchBar;