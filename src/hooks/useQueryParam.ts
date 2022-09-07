import { useSearchParams } from "react-router-dom";

export const useQueryParam = <T = never>() => {
  const [searchParams, setSearchParams] = useSearchParams();
  const getAllQueryParams = (): T => {
    let params = {};
    searchParams.forEach((value, key) => {
      params = { ...params, [key]: value };
    });
    return params as T;
  };
  const queryMethods = {
    get(key: keyof T) {
      return searchParams.get(key as string);
    },
    set(key: keyof T, value: string) {
      if (value === "" || value == null) {
        searchParams.delete(key as string);
      } else {
        searchParams.set(key as string, value);
      }
      setSearchParams(searchParams);
    },
    delete(key: keyof T) {
      searchParams.delete(key as string);
      setSearchParams(searchParams);
    },
  };

  const getQueryMethodWithKey = (key: keyof T) => ({
    set(value: string) {
      queryMethods.set(key, value);
    },
    delete() {
      queryMethods.delete(key);
    },
    get() {
      return queryMethods.get(key);
    },
  });

  return {
    currentQueryParams: getAllQueryParams(),
    queryMethods,
    searchParams: searchParams.toString(),
    getQueryMethodWithKey,
  };
};
