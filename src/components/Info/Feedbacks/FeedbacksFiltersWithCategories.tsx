"use client"

import FeedbacksFilters from "components/Filters/FeedbacksFilters";
import { useCategories } from "contexts/CategoriesContext";

const FeedbacksFiltersWithCategories: React.FC = () => {
    return (
      <CategoriesForFeedbackFilter />
    );
}

const CategoriesForFeedbackFilter: React.FC = () => {
    const { categories } = useCategories();

    return (
        <FeedbacksFilters categories={categories} />
    );
}

export default FeedbacksFiltersWithCategories