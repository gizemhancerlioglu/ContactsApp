import { useState } from 'react'

function List({ contacts }) {
    const [filterText, setFilterText] = useState("");

    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) =>
            item[key]
                .toString()
                .toLowerCase()
                .includes(filterText.toLowerCase())
        );
    });

    return (
        <div>
            <input
                placeholder="Search..."
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
            />

            <ul className="list">
                {filtered.map((contact, i) => (
                    <li key={i}>
                        <span>{contact.fullName}</span>
                        <span>{contact.phoneNumber}</span>
                        <span>x</span>
                    </li>
                ))}
            </ul>

            <p id="totalcount">Total contacts (<b>{filtered.length}</b>)</p>
        </div>
    )
}

export default List
