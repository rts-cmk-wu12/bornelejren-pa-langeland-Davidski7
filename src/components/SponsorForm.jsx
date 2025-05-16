import React, { useState } from "react";
import "../style/sponsorform.scss";

function SponsorForm() {
    const [formData, setFormData] = useState({
        supportType: "",
        companyName: "",
        email: "",
        address: "",
        phone: "",
        amount: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        const res = await fetch("http://localhost:5000/api/sponsors", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });



        alert("Tak for din tilmelding som sponsor!");
        setFormData({
            supportType: "",
            companyName: "",
            email: "",
            address: "",
            phone: "",
            amount: ""
        });


    };

    return (
        <form className="sponsor-form" onSubmit={handleSubmit}>
            <label>Støtte-type:</label>
            <select name="supportType" value={formData.supportType} onChange={handleChange} required>
                <option value="">Vælg</option>
                <option value="Børnesponsorat">Børnesponsorat</option>
                <option value="Lejrsponsorat">Lejrsponsorat</option>
                <option value="Diplomsponsor">Diplomsponsor</option>
            </select>

            <label>Firmanavn:</label>
            <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required />

            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />

            <label>Adresse:</label>
            <input type="text" name="address" value={formData.address} onChange={handleChange} required />

            <label>Telefon:</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />

            <label>Beløb:</label>
            <input type="number" name="amount" value={formData.amount} onChange={handleChange} required />

            <button type="submit">Tilmeld</button>
        </form>
    );
}

export default SponsorForm;
