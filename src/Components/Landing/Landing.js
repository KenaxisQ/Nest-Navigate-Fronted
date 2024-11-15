import { PropertyForm } from '../AddPropertyForm/PropertyForm';
import FeaturedProperties from '../FeaturedProperties/FeaturedProperties'
import FilterProperties from '../FilterProperties/FilterProperties';
import FindPropertyByCity from '../FindPropetiesByCity/FindPropertyByCity';
import Footer from '../Footer/Footer';
import HomePage from '../Home/Home'
import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
export default function Landing() { 

  const properties = [
    { id: 1, type: 'Rent', title: 'Skyper Pool Apartment', location: '1800-1818 79th St', price: '  3,95,000', beds: 2, washrooms: 6, area: 4 },
    { id: 2, type: 'Sale', title: 'Beachside Villa', location: '100 Ocean Blvd', price: '₹2,50,000', beds: 3, washrooms: 4, area: 5 },
    { id: 3, type: 'Rent', title: 'Sunset Loft', location: '50 Sunset Ave', price: '₹1,80,000', beds: 1, washrooms: 2, area: 3 },
    { id: 4, type: 'Sale', title: 'Downtown Apartment', location: '2500 Downtown St', price: '₹5,00,000', beds: 4, washrooms: 4, area: 6 },
    { id: 5, type: 'Rent', title: 'Cozy Studio', location: '102 Maple St', price: '₹1,00,000', beds: 1, washrooms: 1, area: 1 },
    { id: 6, type: 'Sale', title: 'Mountain View House', location: '20 Hilltop Rd', price: '₹8,00,000', beds: 5, washrooms: 5, area: 7 },
    { id: 7, type: 'Rent', title: 'Urban Retreat', location: '500 City Rd', price: '₹2,00,000', beds: 3, washrooms: 3, area: 4 },
    { id: 8, type: 'Sale', title: 'Suburban Dream Home', location: '300 Green Rd', price: '₹6,50,000', beds: 4, washrooms: 4, area: 6 },
    { id: 9, type: 'Rent', title: 'Luxury Suite', location: '1200 Park Ave', price: '₹3,20,000', beds: 2, washrooms: 2, area: 3 },
    { id: 10, type: 'Sale', title: 'Modern Penthouse', location: '1500 Skyline Blvd', price: '₹7,50,000', beds: 3, washrooms: 3, area: 5 },
    { id: 11, type: 'Rent', title: 'Garden Apartment', location: '400 Greenfield St', price: '₹1,50,000', beds: 2, washrooms: 2, area: 4 },
    { id: 12, type: 'Sale', title: 'Luxury Villa', location: '1700 Ocean Dr', price: '₹9,00,000', beds: 5, washrooms: 6, area: 8 },
    { id: 13, type: 'Rent', title: 'Cityview Flat', location: '300 Central St', price: '₹1,80,000', beds: 2, washrooms: 2, area: 2 },
    { id: 14, type: 'Sale', title: 'Eco-Friendly House', location: '80 Green Rd', price: '₹4,20,000', beds: 3, washrooms: 3, area: 5 },
    { id: 15, type: 'Rent', title: 'Luxury Penthouse', location: '1000 Heights Rd', price: '₹6,00,000', beds: 3, washrooms: 4, area: 6 },
  ];

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Outlet />
        </>
      ),
      children: [{
        index: true,
        element: (
          <><HomePage /><FeaturedProperties   properties={properties} /><FindPropertyByCity/><Footer/></>
        )
      },
      {
        path: "home",
        element: (<><HomePage /><FeaturedProperties properties={properties}/><FindPropertyByCity/><Footer/></>
        )
      },
      {
        path: "listings",
        element: (<>{"Not yet Implemented"}</>)
      },
      {
        path: "add-property",
        element: (<><PropertyForm /></>)
      },
      {
        path: "search",
        element: (<><FilterProperties   properties={properties}/></>)
      }
      ]

    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
      {/* <HomePage/>
    <FeaturedProperties/>
    <h1>Hi</h1>
    <PropertyForm /> */}
    </>
  )
}
