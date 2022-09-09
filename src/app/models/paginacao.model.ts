export interface Paginacao<T> {
  content: Array<T>;
  pageable: Paginado;
	totalPages: number;
	totalElements: number;
	last: boolean;
	size: number;
	number: number;
	sort: Ordenado;
	numberOfElements: number;
	first: boolean;
	empty: boolean;
}

interface Paginado {
  offset: number;
  pageNumber: number;
  pageSize: number;
  unpaged: boolean;
  paged: boolean;
  sort: Ordenado;
}

interface Ordenado {
  empty: boolean;
  unsorted: boolean;
  sorted: boolean;
}
