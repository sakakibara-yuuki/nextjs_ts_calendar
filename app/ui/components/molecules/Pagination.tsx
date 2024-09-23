import { PaginationButton } from '../atoms/PaginationButton';
//
// interface PaginationProps {
//   current
// }
//

export function Pagination() {
  const date = "2021-10-10";
  return (
    <div>
    <PaginationButton />
    <PaginationButton />
    <p>{date}</p>
    </div>
  );
}
