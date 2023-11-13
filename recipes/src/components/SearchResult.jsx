import "./SearchResult.css";

export const SearchResult = ({ result }) => {
    return (
        <div className="search-result"
        onclick={(e) => alert(`You selected ${result}!`)}>
        {result}
        </div>
    );
};
