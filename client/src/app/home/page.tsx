'use client'
import NavBar from '../../components/NavBar'
import Header from '../../components/Header'
import Hospitals from '../../components/Hospitals'
import Footer from '../../components/Footer'
import useHospitals from "@/app/api/hooks/useHospitals"
const HomePage = () => {
  const queryParams = {
    page: 1,
    limit: 8,
    sortBy: "name",
    order: "asc" as "asc" | "desc" 
  };
  
  const hospitals = useHospitals(queryParams);
    console.log(hospitals)
  return (
    <div>
      <NavBar />
      <Header />
      <Hospitals hospitals={hospitals} />
      <Footer />
    </div>
  )
}

export default HomePage

