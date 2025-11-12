import type React from 'react';
import { useState } from 'react';
import { CacheKeys } from 'lib/constants';
import { useDebounce } from 'use-debounce';
import { removeEmptyKeys } from 'lib/helpers';
import { useQuery } from '@tanstack/react-query';
import { fetchEmails } from 'lib/actions/emails';
import type { EmailQuery } from 'lib/actions/emails/models';

export const useEmail = () => {
  const initialOtherQueryData = {
    view: undefined,
    labels: undefined,
    search: undefined,
    isRead: undefined,
    isStarred: undefined,
    isImportant: undefined,
    hasAttachments: undefined,
    dateFrom: undefined,
    dateTo: undefined,
    sortBy: undefined,
    sortOrder: undefined,
  };

  const initialQueryData = {
    page: 1,
    limit: 15,
    ...initialOtherQueryData,
  };

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [debouncedSearch] = useDebounce(searchTerm, 500);
  const [queryData, setQueryData] = useState<EmailQuery>({
    ...initialQueryData,
  });

  const params = removeEmptyKeys({
    ...queryData,
    search: debouncedSearch,
  });

  const {
    data: emails,
    isLoading,
    refetch,
    error,
  } = useQuery({
    queryKey: [CacheKeys.USER_EMAILS, params],
    queryFn: () => fetchEmails(params),
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQueryData({ ...queryData, page: 1 });
    setSearchTerm(e.target.value);
  };

  const handlePageChange = (newPage: number) => {
    setQueryData({ ...queryData, page: newPage });
  };

  return {
    error,
    emails,
    isLoading,
    queryData,
    searchTerm,
    refetch,
    setQueryData,
    handlePageChange,
    handleSearchChange,
  };
};
