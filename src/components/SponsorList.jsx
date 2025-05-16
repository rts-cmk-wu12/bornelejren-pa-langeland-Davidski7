import React, { useEffect, useState } from "react";

function SponsorList() {
    const [sponsors, setSponsors] = useState([]);

    useEffect(() => {
        const fetchSponsors = async () => {

            const res = await fetch("http://localhost:5000/api/sponsors");
            const data = await res.json();
            setSponsors(data);


        };

        fetchSponsors();
    }, []);

    return (
        <ul>
            {sponsors.map((sponsor) => (
                <li className="sponsor_list" key={sponsor._id}>{sponsor.companyName}</li>
            ))}
        </ul>
    );
}

export default SponsorList;
