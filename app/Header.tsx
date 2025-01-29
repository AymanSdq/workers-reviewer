
const Header : React.FC<any> = ({onOpen, onSearch}) => {

    

    const handleChange = (event : React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        
        const {name, value} = event.target;
        onSearch(value);
    }

    return (
        <div className="navbar bg-base-100 md:px-16 py-4 shadow-[0px_6px_6px_0px_rgba(17,_12,_46,_0.15)]">
        <div className="navbar-start">
            <form className="form-control">
                <input type="text" onChange={handleChange} name="searchword" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
            </form>
        </div>
        <div className="navbar-center">
            <a className="btn btn-ghost text-xl">Workers Review</a>
        </div>
        <div className="navbar-end">
            <button className="btn btn-ghost btn-circle">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
            </svg>
            </button>
            <button onClick={onOpen}  className="btn px-4 py-2 bg-primary text-white rounded-md">
                Add Worker
            </button>
        </div>
        </div>
    );
};

export default Header;
