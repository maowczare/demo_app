import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}
export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  return (
    <div className="flex items-center gap-4 my-4">
      <Button
        variant="outline"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </Button>

      <div>
        <span>
          Page {currentPage} of {totalPages}
        </span>
      </div>

      <Button
        variant="outline"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </Button>
    </div>
  );
};

interface ItemsPerPageSelectProps {
  defaultValue?: number;
  onItemsPerPageChange: (value: number) => void;
}
export const ItemsPerPageSelect = ({
  defaultValue = 10,
  onItemsPerPageChange,
}: ItemsPerPageSelectProps) => {
  return (
    <Select
      onValueChange={(value) => {
        onItemsPerPageChange(Number(value));
      }}
      defaultValue={defaultValue.toString()}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Number of sites per page" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="10">10 per page</SelectItem>
        <SelectItem value="20">20 per page</SelectItem>
        <SelectItem value="50">50 per page</SelectItem>
        <SelectItem value="100">100 per page</SelectItem>
        <SelectItem value="500">500 per page</SelectItem>
      </SelectContent>
    </Select>
  );
};
