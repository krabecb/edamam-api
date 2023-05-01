export default function SearchForm({ input, setInput, search }) {
    return (
        <div className="SearchForm">
            <form onSubmit={evt => search(evt)}>
                <input
                    name="search"
                    value={input}
                    onChange={evt => setInput(evt.target.value)}
                />
                <button>Search</button>
            </form>
        </div>
    )
}