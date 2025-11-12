import type { queryData } from 'types';
import type { sortOrder } from 'lib/enums';

export type emailOtherQuery = {
  view?: string;
  labels?: string;
  search?: string;
  isRead?: boolean;
  isStarred?: boolean;
  isImportant?: boolean;
  hasAttachments?: boolean;
  dateFrom?: Date;
  dateTo?: Date;
  sortBy?: string;
  sortOrder?: sortOrder;
};

export type EmailQuery = queryData & emailOtherQuery;
