import React, { useState } from "react";
import { Helmet } from "react-helmet";
import ListingForm from "../components/ListingForm";
import Listings from "../components/Listings";
import Pagination from "../components/Pagination";

function Home() {
	const [listings, setListings] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [listingsPerPage, setListingsPerPage] = useState(1);
	const [currentPage, setCurrentPage] = useState(1);

	return <div>Home</div>;
}

export default Home;
