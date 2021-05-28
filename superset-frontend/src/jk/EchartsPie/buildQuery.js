import { buildQueryContext } from '@superset-ui/core';

export default function buildQuery(formData) {
  return buildQueryContext(formData, {
    queryFields: {
      echarts_indicators: 'columns',
      echarts_select: 'columns',
      echarts_picker: 'columns',
      echarts_groupby: 'columns',
      echarts_sort: 'columns',
    },
  });
}
