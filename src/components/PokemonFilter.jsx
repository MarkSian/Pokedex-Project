const PokemonFilter = ({onSearchChange} ) => {
    return (
        <div className="flex justify-center mb-6" >
            <input type="text" 
            placeholder="Search Pokemon" 
            class="input" 
            className="w-full max-w-xs"
            onChange={(e) => onSearchChange(e.target.value)}
            />
        </div>
    );
};

export default PokemonFilter;