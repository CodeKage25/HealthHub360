'use client'
import { useState } from 'react';
import NavBar from '../../components/NavBar'
import Header from '../../components/Header'
import Hospitals from '../../components/Hospitals'
import Footer from '../../components/Footer'
import useHospitals from "@/app/api/hooks/useHospitals"
const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const queryParams = {
    page: 1,
    limit: 8,
    sortBy: "name",
    order: "asc" as "asc" | "desc" ,
    search: searchQuery,
  };
  
  const hospitals = useHospitals(queryParams);
  console.log(hospitals);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };
  return (
    <div>
      <NavBar />
      <Header onSearch={handleSearch} />
      <Hospitals hospitals={hospitals} searchQuery={searchQuery} />
      <Footer />
    </div>
  )
}

export default HomePage

