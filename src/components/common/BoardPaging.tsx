import { Box, Button, ButtonGroup } from "@chakra-ui/react";

interface BoardPagingProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const BoardPaging: React.FC<BoardPagingProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <Box display="flex" justifyContent="center" mt={6}>
      <ButtonGroup>
        <Button
          size={'xs'}
          disabled={isFirstPage}
          onClick={() => handlePageChange(currentPage - 1)}
        >
        &lt;&lt;
        </Button>

        <Button
          size={'xs'}
          disabled={isFirstPage}
          onClick={() => handlePageChange(currentPage - 1)}
        >
        &lt;
        </Button>
        {[...Array(totalPages)].map((_, index) => (
          <Button
            size={'xs'}
            key={index}
            variant={currentPage === index + 1 ? "solid" : "ghost"}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Button>
        ))}
        <Button
          size={'xs'}
          disabled={isLastPage}
          onClick={() => handlePageChange(currentPage + 1)}
        >
        &gt;
        </Button>
        <Button
          size={'xs'}
          disabled={isLastPage}
          onClick={() => handlePageChange(currentPage + 1)}
        >
        &gt;&gt;
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default BoardPaging;