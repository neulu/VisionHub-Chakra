import { Box, Button, ButtonGroup, Select, Spacer } from "@chakra-ui/react";

interface BoardPagingProps {
  currentPage: number;
  cntPerPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const BoardPaging: React.FC<BoardPagingProps> = ({ currentPage, cntPerPage, totalPages, onPageChange }) => {
// const BoardPaging = ({ children, BoardPagingProps={currentPage, totalPages, onPageChange } } : PropsWithChildren<BoardPagingProps>) => {

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems={"center"} mt={6}>
      <ButtonGroup spacing={1} m={1}>

        <Button
          size={'xs'}
          
          disabled={isFirstPage}
          onClick={() => handlePageChange(1)}
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
            // variant={currentPage === index + 1 ? "outline" : "ghost"}
            colorScheme={currentPage === index + 1 ? "blackAlpha" : undefined}
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
          onClick={() => handlePageChange(totalPages)}          
        >
        &gt;&gt;
        </Button>
      </ButtonGroup>
      
      
      <Select name="cntPerPage" size={'xs'} width={'auto'} borderColor={'gray'} borderStyle={'hidden'} bgColor={'gray.300'}  ml={3} borderRadius={"md"}>
        <option value='10'>10</option>
        <option value='20'>20</option>
        <option value='30'>30</option>
        <option value='50'>50</option>
        <option value='100'>100</option>
      </Select>
      
    </Box>
  );
};

export default BoardPaging;