import React from 'react'
import Hero from './Hero/page'
import Discover from './Discover/page'
import Banner from './Banner/page'
import Sneakers from './Best-sneakers/page'
import ShopBannerCategory from './ShopBannerCategory/page'
import NotDealBanner from './HotDealsBanner/page'
import NewArrivals from './NewArrivals/page'
import Blogs from './Blogs/page'
import FollowUs from './FollowUs/page'
import Brands from './Brands/page'

export default function Index() {
  return (
    <>
      <Hero />
      <Discover />
      <Banner />
      <Sneakers />
      <ShopBannerCategory />
      <NotDealBanner />
      <NewArrivals />
      <Blogs />
      <FollowUs />
      <Brands />
    </>
  )
}