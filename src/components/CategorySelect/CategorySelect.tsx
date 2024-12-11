import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CategorySelectProps {
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
}

export const CategorySelect = ({
  selectedCategory,
  onCategoryChange,
}: CategorySelectProps) => {
  return (
    <Select
      onValueChange={(event) => onCategoryChange(event)}
      defaultValue={selectedCategory}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Number of sites per page" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="All">All Categories</SelectItem>
        <SelectItem value="Natural">Natural</SelectItem>
        <SelectItem value="Cultural">Cultural</SelectItem>
        <SelectItem value="Mixed">Mixed</SelectItem>
      </SelectContent>
    </Select>
  );
};
