import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

function ListingForm(props) {
	const [formData, setFormData] = useState({
		sale_type: "For Sale",
		price: "$0+",
		bedrooms: "0+",
		home_type: "House",
		bathrooms: "0+",
		sqft: "1000+",
		days_listed: "1 or less",
		has_photos: "1+",
		open_house: "false",
		keywords: "",
	});

	const {
		sale_type,
		price,
		bedrooms,
		home_type,
		bathrooms,
		sqft,
		days_listed,
		has_photos,
		open_house,
		keywords,
	} = formData;

	const [loading, setLoading] = useState(false);

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();

		axios.defaults.headers = {
			"Content-Type": "application/json",
		};
		setLoading(true);

		axios
			.post("http://localhost:8000/api/listings/search", {
				sale_type,
				price,
				bedrooms,
				home_type,
				bathrooms,
				sqft,
				days_listed,
				has_photos,
				open_house,
				keywords,
			})
			.then((res) => {
				setLoading(false);
				props.setListings(res.data);
				window.scrollTo(0, 0);
			})
			.catch((error) => {
				setLoading(false);
				window.scrollTo(0, 0);
				console.log(error.msg);
			});
	};

	return <div>ListingForm</div>;
}

export default ListingForm;
