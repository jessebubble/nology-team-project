
const SearchBar = (props) => {

    const { handleInput } = props;

    return (
        <div className="search-bar">
            <input 
                type="text"
                onChange={handleInput} 
                placeholder="Search..." 
            />
        </div>
    );
}

export default SearchBar;