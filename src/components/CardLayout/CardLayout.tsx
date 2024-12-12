"use client";
import { SiteCard } from "@/components/SiteCard/SiteCard";
import {
  Pagination,
  ItemsPerPageSelect,
} from "@/components/PaginationControls/PaginationControls";
import { CategorySelect } from "@/components/CategorySelect/CategorySelect";
import { UnescoSite } from "@/lib/data";
import { useMemo, useState } from "react";

interface CardLayoutProps {
  siteData: UnescoSite[];
}

export const CardLayout = ({ siteData }: CardLayoutProps) => {
  const itemsPerPageDefaultValue = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [sitesPerPage, setSitesPerPage] = useState(itemsPerPageDefaultValue);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredData = useMemo(
    () =>
      selectedCategory === "All"
        ? siteData
        : siteData.filter((item) => item.category[0] === selectedCategory),
    [siteData, selectedCategory],
  );

  const { currentSites, totalPages } = useMemo(() => {
    const indexOfLastSite = currentPage * sitesPerPage;
    const indexOfFirstSite = indexOfLastSite - sitesPerPage;
    return {
      currentSites: filteredData.slice(indexOfFirstSite, indexOfLastSite),
      totalPages: Math.ceil(filteredData.length / sitesPerPage),
    };
  }, [filteredData, currentPage, sitesPerPage]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleItemsPerPageChange = (value: number) => {
    setSitesPerPage(value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    setCurrentPage(1);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-4 items-center">
          <CategorySelect
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
        <ItemsPerPageSelect
          onItemsPerPageChange={handleItemsPerPageChange}
          defaultValue={itemsPerPageDefaultValue}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {currentSites.map((item: any) => (
          <SiteCard
            image_url={item.image_url[0]}
            key={item.id_number[0]}
            site={item.site[0]}
            description={item.short_description[0]}
            category={item.category[0]}
            url={item.http_url[0]}
            latitude={item.latitude[0]}
            longitude={item.longitude[0]}
          />
        ))}
      </div>
    </div>
  );
};
