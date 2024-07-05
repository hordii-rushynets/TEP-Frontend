"use client"

import FeedbacksFilters from "components/Filters/FeedbacksFilters";
import { useCategories, CategoriesProvider } from "contexts/CategoriesContext";

const FeedbacksFiltersWithCategories: React.FC = () => {
    return (
      <CategoriesProvider>
        <CategoriesForFeedbackFilter />
      </CategoriesProvider>
    );
}

const CategoriesForFeedbackFilter: React.FC = () => {
    const { categories } = useCategories();

    return (
        <FeedbacksFilters categories={categories} />
    );
}

export default FeedbacksFiltersWithCategories