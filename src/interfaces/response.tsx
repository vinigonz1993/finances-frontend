export interface List<T> {
    results: [T],
    'page': number,
    'total-records': number,
    'total-pages': number,
}

export type ResponseList<T> = Promise<List<T>>;
export type ResponseRetrieve<T> = Promise<T>;
export type ResponsePage<T> = List<T>;